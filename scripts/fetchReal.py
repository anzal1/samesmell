#!/usr/bin/env python3
"""
fetchReal.py - build data/real/male.json and data/real/female.json from published
connectome releases, in the SPEC.md "Data schema" format.

MALE   : MaleCNS v1.0 (Janelia FlyEM), served by neuPrint (dataset male-cns:v1.0).
         Cell types + synapse-count connectivity via the public neuPrint HTTP API,
         morphology via the public neuPrint skeleton endpoint (SWC rows).
FEMALE : FlyWire FAFB v783.
         Cell types from flyconnectome/flywire_annotations (Supplemental file 1),
         synapse-count connectivity from philshiu/Drosophila_brain_model
         (Connectivity_783.parquet), morphology from the public GCS neuroglancer
         precomputed sharded skeleton source gs://flywire_v141_m783/skeletons_mip_1.

Every coordinate in the output comes from a published skeleton. Nothing is synthesised.

Usage:
    python3 scripts/fetchReal.py [--out DIR] [--cache DIR] [--context N]

Requires: numpy, pandas, pyarrow, mmh3  (see --help for a venv one-liner).
"""

import argparse
import gzip
import json
import os
import struct
import sys
import time
import urllib.request
import urllib.error
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

import numpy as np

# ----------------------------------------------------------------------------
# Constants / sources
# ----------------------------------------------------------------------------

FETCH_DATE = "2026-09-11"

NEUPRINT = "https://neuprint.janelia.org"
MALE_DATASET = "male-cns:v1.0"

FLYWIRE_SKEL = "https://storage.googleapis.com/flywire_v141_m783/skeletons_mip_1"
FLYWIRE_ANNOT_URL = (
    "https://raw.githubusercontent.com/flyconnectome/flywire_annotations/main/"
    "supplemental_files/Supplemental_file1_neuron_annotations.tsv"
)
FLYWIRE_CONN_URL = (
    "https://raw.githubusercontent.com/philshiu/Drosophila_brain_model/main/"
    "Connectivity_783.parquet"
)

# Target box from SPEC.md: ~2.0 wide x 1.1 tall x 1.2 deep, centred on the origin.
BOUNDS = ((-1.0, -0.55, -0.6), (1.0, 0.55, 0.6))

# Stage order defines the cVA pathway ordering.
STAGES = ["orn", "pn", "lhn", "dimorphic", "descending"]

# Per-stage polyline budgets (featured circuit gets more detail than context).
BUDGET = {
    "orn":        dict(max_segs=10, max_pts=24),
    "pn":         dict(max_segs=22, max_pts=40),
    "lhn":        dict(max_segs=18, max_pts=36),
    "dimorphic":  dict(max_segs=18, max_pts=40),
    "descending": dict(max_segs=18, max_pts=36),
    "other":      dict(max_segs=8,  max_pts=18),
}

N_ORN = 44          # ORN_DA1 sampled per brain (there are 204 male / 126 female)
N_CONTEXT = 300     # context neurons for silhouette

# Applied identically to both sexes so the two brains are selected on like terms.
LHN_RULE = (
    "second-order targets of the DA1 projection neurons: neurons receiving >=10 "
    "synapses from DA1_lPN/DA1_vPN, excluding the PNs themselves, the dimorphic "
    "core, Kenyon cells (KC*) and antennal-lobe local neurons (*LN*), ranked by "
    "(synapses from DA1 PNs) x (1 + synapses onto the dimorphic core); top 60. "
    "The documented fru+ aSP-f / aSP-g / aSP10 lateral-horn classes are then "
    "added (up to 25) whether or not they score."
)


def log(*a):
    print(*a, file=sys.stderr, flush=True)


# ----------------------------------------------------------------------------
# HTTP helpers
# ----------------------------------------------------------------------------

def http(url, data=None, headers=None, retries=5, timeout=180):
    req = urllib.request.Request(url, data=data, headers=headers or {})
    last = None
    for i in range(retries):
        try:
            return urllib.request.urlopen(req, timeout=timeout).read()
        except Exception as e:  # noqa: BLE001
            last = e
            if isinstance(e, urllib.error.HTTPError) and e.code in (400, 404):
                raise
            time.sleep(1.2 * (i + 1))
    raise last


def download(url, path):
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return path
    log(f"  downloading {os.path.basename(path)} ...")
    tmp = path + ".part"
    with urllib.request.urlopen(url, timeout=1800) as r, open(tmp, "wb") as f:
        while True:
            chunk = r.read(1 << 20)
            if not chunk:
                break
            f.write(chunk)
    os.replace(tmp, path)
    return path


def cypher(q, dataset=MALE_DATASET):
    body = json.dumps({"cypher": q, "dataset": dataset}).encode()
    raw = http(f"{NEUPRINT}/api/custom/custom", data=body,
               headers={"Content-Type": "application/json"})
    return json.loads(raw)["data"]


# ----------------------------------------------------------------------------
# Neuroglancer uint64-sharded precomputed skeleton reader (FlyWire)
# ----------------------------------------------------------------------------

class ShardedSkeletons:
    """Reads gs://.../skeletons_mip_1 via HTTP range requests.

    Implements the neuroglancer_uint64_sharded_v1 layout: a shard index of
    2^minishard_bits (start,end) uint64 pairs, then gzipped minishard indexes of
    3*n uint64 (delta-coded ids, delta-coded start offsets, sizes), then gzipped
    chunk payloads. All offsets are relative to the end of the shard index.
    """

    def __init__(self, base):
        self.base = base.rstrip("/")
        info = json.loads(http(self.base + "/info"))
        s = info["sharding"]
        self.preshift = s["preshift_bits"]
        self.minishard_bits = s["minishard_bits"]
        self.shard_bits = s["shard_bits"]
        self.hashfn = s["hash"]
        self.mi_enc = s.get("minishard_index_encoding", "raw")
        self.data_enc = s.get("data_encoding", "raw")
        self.shard_index_size = (1 << self.minishard_bits) * 16
        self.nattrs = len(info.get("vertex_attributes", []))
        self.hexw = max(1, (self.shard_bits + 3) // 4)
        self._mi = {}

    def _range(self, name, start, end):
        return http(f"{self.base}/{name}", headers={"Range": f"bytes={start}-{end}"})

    def _hash(self, key):
        k = key >> self.preshift
        if self.hashfn == "identity":
            return k
        import mmh3
        return mmh3.hash64(struct.pack("<Q", k), 0, x64arch=False, signed=False)[0]

    def _index(self, shard, minishard):
        ck = (shard, minishard)
        if ck in self._mi:
            return self._mi[ck]
        name = f"{shard:0{self.hexw}x}.shard"
        off = minishard * 16
        start, end = struct.unpack("<QQ", self._range(name, off, off + 15))
        if end <= start:
            self._mi[ck] = {}
            return {}
        buf = self._range(name, self.shard_index_size + start,
                          self.shard_index_size + end - 1)
        if self.mi_enc == "gzip":
            buf = gzip.decompress(buf)
        arr = np.frombuffer(buf, dtype="<u8")
        n = len(arr) // 3
        ids = np.cumsum(arr[:n].astype(object))
        offs, sizes = arr[n:2 * n], arr[2 * n:3 * n]
        idx, prev = {}, 0
        for i in range(n):
            st = prev + int(offs[i])
            sz = int(sizes[i])
            idx[int(ids[i])] = (st, sz)
            prev = st + sz
        self._mi[ck] = idx
        return idx

    def get(self, key):
        """Return (vertices_nm, edges) or None if the segment has no skeleton."""
        key = int(key)
        h = self._hash(key)
        shard = (h >> self.minishard_bits) & ((1 << self.shard_bits) - 1)
        minishard = h & ((1 << self.minishard_bits) - 1)
        idx = self._index(shard, minishard)
        if key not in idx:
            return None
        st, sz = idx[key]
        name = f"{shard:0{self.hexw}x}.shard"
        buf = self._range(name, self.shard_index_size + st,
                          self.shard_index_size + st + sz - 1)
        if self.data_enc == "gzip":
            buf = gzip.decompress(buf)
        nv, ne = struct.unpack("<II", buf[:8])
        if 8 + nv * 12 + ne * 8 + nv * 4 * self.nattrs != len(buf):
            raise ValueError(f"skeleton {key}: size mismatch")
        verts = np.frombuffer(buf, "<f4", count=nv * 3, offset=8).reshape(nv, 3)
        edges = np.frombuffer(buf, "<u4", count=ne * 2,
                              offset=8 + nv * 12).reshape(ne, 2)
        return verts.astype(np.float64), edges.astype(np.int64)


# ----------------------------------------------------------------------------
# Skeleton -> polyline segments
# ----------------------------------------------------------------------------

def _components_and_paths(verts, edges):
    """Decompose a skeleton graph into unbranched polylines, longest first."""
    n = len(verts)
    adj = defaultdict(list)
    for a, b in edges:
        if a != b:
            adj[a].append(b)
            adj[b].append(a)

    seen = np.zeros(n, dtype=bool)
    paths = []

    def bfs(src):
        order, parent = [src], {src: -1}
        seenl = {src}
        qi = 0
        while qi < len(order):
            u = order[qi]
            qi += 1
            for v in adj[u]:
                if v not in seenl:
                    seenl.add(v)
                    parent[v] = u
                    order.append(v)
        return order, parent

    for start in range(n):
        if seen[start] or start not in adj:
            continue
        order, _ = bfs(start)
        for u in order:
            seen[u] = True
        if len(order) < 3:
            continue
        # Root the component at one end of its diameter so the first extracted
        # path is the dominant neurite.
        far = max(order, key=lambda u: np.linalg.norm(verts[u] - verts[start]))
        order, parent = bfs(far)

        # geodesic depth, used to order leaves
        depth = {far: 0.0}
        for u in order[1:]:
            p = parent[u]
            depth[u] = depth[p] + float(np.linalg.norm(verts[u] - verts[p]))

        leaves = [u for u in order if len(adj[u]) == 1 and u != far]
        if not leaves:
            leaves = [order[-1]]
        leaves.sort(key=lambda u: -depth[u])

        used = set()
        for leaf in leaves:
            chain, u = [], leaf
            while u != -1 and u not in used:
                chain.append(u)
                used.add(u)
                u = parent[u]
            if u != -1:
                chain.append(u)      # attach to the already-emitted trunk
            if len(chain) < 2:
                continue
            chain.reverse()
            pts = verts[chain]
            length = float(np.linalg.norm(np.diff(pts, axis=0), axis=1).sum())
            paths.append((length, pts))

    paths.sort(key=lambda t: -t[0])
    return paths


def _resample(pts, max_pts):
    """Uniform arc-length resample to at most max_pts points, endpoints kept."""
    if len(pts) <= 2:
        return pts
    d = np.linalg.norm(np.diff(pts, axis=0), axis=1)
    s = np.concatenate([[0.0], np.cumsum(d)])
    total = s[-1]
    if total <= 0:
        return pts[[0, -1]]
    n = int(min(max_pts, max(2, len(pts))))
    target = np.linspace(0.0, total, n)
    out = np.empty((n, 3))
    for k in range(3):
        out[:, k] = np.interp(target, s, pts[:, k])
    return out


def skeleton_to_segments(verts, edges, max_segs, max_pts, min_frac=0.012):
    """Return a list of (N,3) float arrays, N <= max_pts, N >= 2."""
    paths = _components_and_paths(verts, edges)
    if not paths:
        return []
    longest = paths[0][0]
    segs = []
    for length, pts in paths[:max_segs]:
        if length < longest * min_frac and len(segs) >= 3:
            continue
        r = _resample(pts, max_pts)
        if len(r) >= 2:
            segs.append(r)
    return segs


# ----------------------------------------------------------------------------
# Normalisation into the SPEC box
# ----------------------------------------------------------------------------

def normalise(neurons, ref_ids, axis_flip=(1.0, -1.0, 1.0)):
    """Recentre + uniformly scale into BOUNDS.

    The reference box is computed from `ref_ids` only (brain-resident neurons), so
    that neurons leaving the volume (descending axons heading for the nerve cord)
    cannot inflate the scale. Points outside the reference box are dropped, which
    truncates those axons at the brain boundary rather than distorting the brain.
    """
    ref = np.vstack([p for nid in ref_ids for p in neurons[nid]["_segs"]])
    # Context neurons are brain-resident by construction, so their full extent is
    # the brain. A hair of percentile trim only guards against reconstruction spurs.
    lo, hi = np.percentile(ref, 0.002, axis=0), np.percentile(ref, 99.998, axis=0)
    centre = (lo + hi) / 2.0
    ext = np.maximum(hi - lo, 1e-9)
    span = np.array([BOUNDS[1][i] - BOUNDS[0][i] for i in range(3)])
    scale = float(np.min(span / ext))
    flip = np.array(axis_flip, dtype=float)
    half = span / 2.0

    def xf(p):
        return (p - centre) * scale * flip

    kept_pts = dropped_pts = 0
    per_stage = defaultdict(lambda: [0, 0])
    for nrn in neurons.values():
        out = []
        for seg in nrn["_segs"]:
            q = xf(seg)
            inside = np.all(np.abs(q) <= half + 1e-9, axis=1)
            kept_pts += int(inside.sum())
            dropped_pts += int((~inside).sum())
            per_stage[nrn["stage"]][0] += int(inside.sum())
            per_stage[nrn["stage"]][1] += int((~inside).sum())
            # split on gaps so truncated axons don't get bridged by a fake chord
            run = []
            for pt, ok in zip(q, inside):
                if ok:
                    run.append(pt)
                elif len(run) >= 2:
                    out.append(np.array(run))
                    run = []
                else:
                    run = []
            if len(run) >= 2:
                out.append(np.array(run))
        nrn["_segs"] = out
        if nrn.get("_soma") is not None:
            s = xf(np.asarray(nrn["_soma"], dtype=float))
            nrn["_soma"] = np.clip(s, -half, half)
    for st, (k, d) in sorted(per_stage.items()):
        if d:
            log(f"    truncated at brain boundary: {st}: {d}/{k + d} pts "
                f"({100.0 * d / (k + d):.1f}%)")
    return scale, kept_pts, dropped_pts


def r4(v):
    # 3 dp over a ~2-unit brain is sub-micron in real space, and keeps the files small
    return [round(float(x), 3) for x in v]


def emit(neurons, edges, sex, provenance, out_path):
    order = sorted(neurons.keys(), key=lambda k: (
        STAGES.index(neurons[k]["stage"]) if neurons[k]["stage"] in STAGES else 99,
        str(neurons[k]["cellType"]), k))
    remap = {src: i for i, src in enumerate(order)}

    out_neurons, pathway = [], []
    allpts = []
    for src in order:
        n = neurons[src]
        segs = [s for s in n["_segs"] if len(s) >= 2]
        if not segs:
            continue
        nid = remap[src]
        soma = n["_soma"] if n.get("_soma") is not None else segs[0][0]
        allpts.append(np.vstack(segs))
        out_neurons.append({
            "id": nid,
            "type": n["stage"],
            "dimorphic": bool(n["dimorphic"]),
            "soma": r4(soma),
            "segments": [[r4(p) for p in s] for s in segs],
            "cellType": n["cellType"],
            "srcId": str(src),
        })
        if n.get("altType"):
            out_neurons[-1]["altType"] = n["altType"]
        if n["stage"] in STAGES:
            pathway.append(nid)

    live = {n["id"] for n in out_neurons}
    # renumber densely (a few neurons may have lost all segments to truncation)
    dense = {n["id"]: i for i, n in enumerate(out_neurons)}
    for n in out_neurons:
        n["id"] = dense[n["id"]]
    pathway = [dense[p] for p in pathway if p in dense]

    out_edges = []
    for a, b, w in edges:
        ia, ib = remap.get(a), remap.get(b)
        if ia in live and ib in live and ia != ib:
            out_edges.append([dense[ia], dense[ib], int(w)])
    out_edges.sort()

    pts = np.vstack(allpts)
    doc = {
        "meta": {
            "sex": sex,
            "bounds": [list(BOUNDS[0]), list(BOUNDS[1])],
            "actualBounds": [r4(pts.min(axis=0)), r4(pts.max(axis=0))],
            "neuronCount": len(out_neurons),
            "edgeCount": len(out_edges),
            "edgeFormat": "[preId, postId, synapseCount]",
            "provenance": provenance,
        },
        "neurons": out_neurons,
        "edges": out_edges,
        "pathway": pathway,
    }
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w") as f:
        json.dump(doc, f, separators=(",", ":"))
    return doc


# ----------------------------------------------------------------------------
# MALE - MaleCNS v1.0 via neuPrint
# ----------------------------------------------------------------------------

def build_male(cache, n_context):
    log("[male] querying neuPrint male-cns:v1.0 ...")

    def bodies(where, extra=""):
        rows = cypher(f"MATCH (n:Neuron) WHERE {where} RETURN n.bodyId, n.type, "
                      f"n.somaLocation, n.fruDsx, n.superclass {extra}")
        out = []
        for bid, typ, soma, frudsx, sc in rows:
            coord = soma["coordinates"] if isinstance(soma, dict) else None
            out.append(dict(src=int(bid), cellType=typ or "unknown",
                            soma=coord, frudsx=frudsx, superclass=sc))
        return sorted(out, key=lambda d: d["src"])

    sel = {}

    def add(rows, stage, limit=None):
        rows = rows if limit is None else rows[:limit]
        for r in rows:
            if r["src"] in sel:
                continue
            sel[r["src"]] = dict(stage=stage, cellType=r["cellType"],
                                 soma=r["soma"],
                                 dimorphic=(stage == "dimorphic")
                                 or bool(r.get("frudsx")))
        return len(rows)

    # --- ORN: Or67d / DA1 olfactory receptor neurons
    orn = bodies('n.type = "ORN_DA1"')
    step = max(1, len(orn) // N_ORN)
    add(orn[::step], "orn", N_ORN)

    # --- PN: DA1 projection neurons
    add(bodies('n.type IN ["DA1_lPN","DA1_vPN"]'), "pn")

    # --- dimorphic core: the male pC1/P1 cluster plus the fru+ mAL interneurons
    pc1 = bodies('n.type STARTS WITH "pC1"')
    step = max(1, len(pc1) // 100)
    add(pc1[::step], "dimorphic", 100)
    mal = bodies('n.type STARTS WITH "mAL"')
    step = max(1, len(mal) // 45)
    add(mal[::step], "dimorphic", 45)
    core_types = '(x.type STARTS WITH "pC1" OR x.type STARTS WITH "mAL")'

    # --- LHN: second-order targets of the DA1 PNs (see LHN_RULE)
    relay = cypher(
        'MATCH (p:Neuron)-[w1:ConnectsTo]->(x:Neuron) '
        'WHERE p.type IN ["DA1_lPN","DA1_vPN"] AND w1.weight >= 10 '
        'AND NOT x.type IN ["DA1_lPN","DA1_vPN"] '
        'AND NOT x.type STARTS WITH "pC1" AND NOT x.type STARTS WITH "mAL" '
        'AND NOT x.type STARTS WITH "KC" AND NOT x.type CONTAINS "LN" '
        'WITH x, sum(w1.weight) AS a '
        'OPTIONAL MATCH (x)-[w2:ConnectsTo]->(c:Neuron) '
        'WHERE (c.type STARTS WITH "pC1" OR c.type STARTS WITH "mAL") AND w2.weight >= 3 '
        'WITH x, a, coalesce(sum(w2.weight), 0) AS b '
        'RETURN x.bodyId, x.type, x.somaLocation, x.fruDsx, a, b '
        'ORDER BY a * (1 + b) DESC LIMIT 60')
    add([dict(src=int(r[0]), cellType=r[1] or "unknown",
              soma=r[2]["coordinates"] if isinstance(r[2], dict) else None,
              frudsx=r[3]) for r in relay], "lhn")
    # documented fru+ lateral-horn classes
    asp = bodies('n.type STARTS WITH "aSP"')
    add(asp, "lhn", 25)

    # --- descending: strongest DN targets of the dimorphic core
    dn = cypher(
        'MATCH (a:Neuron)-[w:ConnectsTo]->(b:Neuron) '
        'WHERE (a.type STARTS WITH "pC1" OR a.type STARTS WITH "mAL") '
        'AND b.superclass = "descending_neuron" AND w.weight >= 5 '
        'WITH b, sum(w.weight) AS tot '
        'RETURN b.bodyId, b.type, b.somaLocation, b.fruDsx, tot '
        'ORDER BY tot DESC LIMIT 30')
    add([dict(src=int(r[0]), cellType=r[1] or "unknown",
              soma=r[2]["coordinates"] if isinstance(r[2], dict) else None,
              frudsx=r[3]) for r in dn], "descending")

    featured = set(sel)
    log(f"[male] featured circuit: {len(featured)} neurons")

    # --- context neurons, spatially stratified across the brain
    ctx = cypher(
        'MATCH (n:Neuron) WHERE n.superclass IN '
        '["cb_intrinsic","ol_intrinsic","visual_projection"] '
        'AND exists(n.somaLocation) AND n.synweight >= 300 AND n.bodyId % 53 = 0 '
        'RETURN n.bodyId, n.type, n.somaLocation, n.superclass ORDER BY n.bodyId')
    pool = [dict(src=int(r[0]), cellType=r[1] or "unknown",
                 soma=r[2]["coordinates"], superclass=r[3]) for r in ctx]
    add(stratify(pool, n_context), "other")
    log(f"[male] total selected: {len(sel)}")

    # --- morphology
    def fetch(src):
        raw = http(f"{NEUPRINT}/api/skeletons/skeleton/{MALE_DATASET}/{src}")
        rows = json.loads(raw)["data"]
        if len(rows) < 3:
            return None
        idx = {int(r[0]): i for i, r in enumerate(rows)}
        verts = np.array([[r[1], r[2], r[3]] for r in rows], dtype=np.float64)
        edges = [[idx[int(r[0])], idx[int(r[5])]]
                 for r in rows if int(r[5]) in idx]
        return verts, np.array(edges, dtype=np.int64) if edges else None

    neurons = load_morphology(sel, fetch, "male", workers=10)

    # --- connectivity between selected neurons only
    ids = sorted(neurons)
    log("[male] fetching connectivity ...")
    edges = []
    CH = 400
    for i in range(0, len(ids), CH):
        chunk = ids[i:i + CH]
        rows = cypher(
            'MATCH (a:Neuron)-[w:ConnectsTo]->(b:Neuron) '
            f'WHERE a.bodyId IN {chunk} AND b.bodyId IN {ids} AND w.weight >= 3 '
            'RETURN a.bodyId, b.bodyId, w.weight')
        edges += [(int(a), int(b), int(w)) for a, b, w in rows]
    log(f"[male] edges: {len(edges)}")

    ref = [k for k, v in neurons.items() if v["stage"] == "other"]
    scale, kept, dropped = normalise(neurons, ref)
    log(f"[male] scale={scale:.3e}  kept={kept} dropped={dropped} pts")

    prov = {
        "dataset": "MaleCNS v1.0 (Janelia FlyEM)",
        "sex": "male",
        "fetchDate": FETCH_DATE,
        "license": "CC-BY 4.0",
        "licenseNote": "MaleCNS v1.0 is released under CC-BY 4.0; attribute Janelia FlyEM.",
        "sources": [
            {"what": "cell types, synapse-count connectivity, neuron skeletons",
             "url": f"{NEUPRINT}/api/custom/custom (dataset {MALE_DATASET})",
             "note": "public anonymous read of the neuPrint HTTP API"},
            {"what": "skeletons (SWC rows)",
             "url": f"{NEUPRINT}/api/skeletons/skeleton/{MALE_DATASET}/<bodyId>"},
            {"what": "release docs / bulk mirror",
             "url": "https://male-cns.janelia.org/download/ and gs://flyem-male-cns/v1.0/"},
        ],
        "circuit": "cVA: ORN_DA1 -> DA1_lPN/vPN -> lateral-horn relay -> pC1 (P1) / "
                   "mAL -> descending",
        "selection": {
            "orn": 'type = "ORN_DA1", evenly sampled by bodyId',
            "pn": 'type in DA1_lPN, DA1_vPN (all)',
            "lhn": LHN_RULE,
            "dimorphic": 'type prefix "pC1" (male P1/pC1 cluster, <=100) plus the fru+ mAL interneurons (<=45)',
            "descending": "superclass descending_neuron, top 30 by synapses from the dimorphic core",
            "other": "cb_intrinsic / ol_intrinsic / visual_projection, synweight>=300, "
                     "spatially stratified for silhouette",
        },
        "transform": "native MaleCNS voxel coords -> recentred, uniform scale into "
                     "the SPEC box, y negated so dorsal is +y; points outside the "
                     "brain reference box are dropped (descending axons are "
                     "truncated at the brain/nerve-cord boundary)",
        "morphologyNote": "polylines are arc-length resamplings of published "
                          "skeletons; no coordinate is synthesised",
        "dimorphicFlag": "stage == dimorphic, or the release's own fruDsx annotation",
    }
    return neurons, edges, prov


# ----------------------------------------------------------------------------
# FEMALE - FlyWire FAFB v783
# ----------------------------------------------------------------------------

def build_female(cache, n_context):
    import pandas as pd
    import pyarrow.parquet as pq

    ann_path = download(FLYWIRE_ANNOT_URL, os.path.join(cache, "annotations.tsv"))
    conn_path = download(FLYWIRE_CONN_URL, os.path.join(cache, "Connectivity_783.parquet"))

    log("[female] reading FlyWire annotations ...")
    a = pd.read_csv(ann_path, sep="\t", low_memory=False)
    a["ct"] = a["cell_type"].fillna(a["hemibrain_type"]).fillna("")
    a["ht"] = a["hemibrain_type"].fillna("")

    def pick(mask):
        d = a[mask].sort_values("root_id")
        # Sensory and ascending neurons have their somata outside the imaged volume
        # (antenna / nerve cord). The release still gives a real point on the neuron
        # in pos_*, so use that rather than an arbitrary skeleton endpoint.
        return [dict(src=int(r.root_id), cellType=str(r.ct) or "unknown",
                     altType=(str(r.ht) if str(r.ht) and str(r.ht) != str(r.ct)
                              else None),
                     soma=([r.soma_x * 4.0, r.soma_y * 4.0, r.soma_z * 40.0]
                           if not np.isnan(r.soma_x)
                           else ([r.pos_x * 4.0, r.pos_y * 4.0, r.pos_z * 40.0]
                                 if not np.isnan(r.pos_x) else None)),
                     frudsx=(isinstance(r.fru_dsx, str) and r.fru_dsx != ""),
                     dimorph=(isinstance(r.dimorphism, str)
                              and "dimorph" in r.dimorphism))
                for r in d.itertuples()]

    sel = {}

    def add(rows, stage, limit=None):
        rows = rows if limit is None else rows[:limit]
        for r in rows:
            if r["src"] in sel:
                continue
            sel[r["src"]] = dict(stage=stage, cellType=r["cellType"],
                                 altType=r.get("altType"), soma=r["soma"],
                                 dimorphic=(stage == "dimorphic")
                                 or bool(r.get("frudsx")) or bool(r.get("dimorph")))

    orn = pick((a.ct == "ORN_DA1") | (a.ht == "ORN_DA1"))
    step = max(1, len(orn) // N_ORN)
    add(orn[::step], "orn", N_ORN)

    add(pick(a.ct.isin(["DA1_lPN", "DA1_vPN"]) | a.ht.isin(["DA1_lPN", "DA1_vPN"])), "pn")

    # female dimorphic core: pC1a-e (dsx+) plus vpoEN, the oviIN/oviDN cluster and
    # the fru+ mAL interneurons -- the same class of core used on the male side.
    core_mask = (a.ct.str.match(r"^pC1[a-e]$", na=False)
                 | a.ht.str.match(r"^pC1[a-e]$", na=False)
                 | a.ct.str.match(r"^vpoEN", na=False)
                 | a.ct.str.match(r"^ovi(IN|DN)", na=False)
                 | a.ct.str.match(r"^mAL", na=False))
    core_rows = pick(core_mask)
    step = max(1, len(core_rows) // 130)
    add(core_rows[::step], "dimorphic", 130)
    core_ids = np.fromiter(sorted(r["src"] for r in core_rows), dtype=np.int64)

    log("[female] reading Connectivity_783.parquet ...")
    tbl = pq.read_table(conn_path,
                        columns=["Presynaptic_ID", "Postsynaptic_ID", "Connectivity"])
    pre = tbl.column(0).to_numpy()
    post = tbl.column(1).to_numpy()
    wt = tbl.column(2).to_numpy()

    pn_ids = np.array(sorted(k for k, v in sel.items() if v["stage"] == "pn"),
                      dtype=np.int64)

    # --- LHN: same rule as the male side (see LHN_RULE): second-order targets of
    # the DA1 PNs, excluding Kenyon cells, AL local neurons and the core itself,
    # ranked by (synapses from PN) x (1 + synapses onto the dimorphic core).
    from_pn = defaultdict(int)
    m = np.isin(pre, pn_ids) & (wt >= 10)
    for p, w in zip(post[m], wt[m]):
        from_pn[int(p)] += int(w)
    to_core = defaultdict(int)
    m = np.isin(post, core_ids) & (wt >= 3)
    for p, w in zip(pre[m], wt[m]):
        to_core[int(p)] += int(w)

    lut = dict(zip(a.root_id.astype("int64"), a.ct))
    core_set = set(int(x) for x in core_ids)

    def is_lh_candidate(rid):
        if rid in core_set or rid in set(int(x) for x in pn_ids):
            return False
        t = str(lut.get(rid, ""))
        return not (t.startswith("KC") or "LN" in t)

    cand = [(from_pn[k] * (1 + to_core.get(k, 0)), k)
            for k in from_pn if is_lh_candidate(k)]
    cand.sort(key=lambda t: (-t[0], t[1]))
    add(pick(a.root_id.isin([k for _, k in cand[:60]])), "lhn")
    # documented fru+ lateral-horn classes
    add(pick(a.ct.str.match(r"^aSP", na=False) | a.ht.str.match(r"^aSP", na=False)),
        "lhn", 25)

    # descending: vpoDN (the documented female receptivity DN) + top DN targets
    add(pick(a.ct.eq("vpoDN") | a.ht.eq("vpoDN")), "descending")
    dn_ids = set(a[a.super_class == "descending"].root_id.astype("int64"))
    dn_score = defaultdict(int)
    m = np.isin(pre, core_ids) & (wt >= 3)
    for p, w in zip(post[m], wt[m]):
        if int(p) in dn_ids:
            dn_score[int(p)] += int(w)
    top_dn = sorted(dn_score.items(), key=lambda t: (-t[1], t[0]))[:30]
    add(pick(a.root_id.isin([i for i, _ in top_dn])), "descending")

    featured = set(sel)
    log(f"[female] featured circuit: {len(featured)} neurons")

    # context: substantial, well-connected neurons so the silhouette is real brain
    uniq_post = np.unique(post)
    insyn = np.bincount(np.searchsorted(uniq_post, post), weights=wt,
                        minlength=len(uniq_post))
    big = set(int(x) for x in uniq_post[insyn >= 500])
    pool = pick(a.super_class.isin(["central", "optic", "visual_projection"])
                & a.soma_x.notna() & a.root_id.isin(big) & (a.root_id % 7 == 0))
    add(stratify(pool, n_context), "other")
    log(f"[female] total selected: {len(sel)}")

    src = ShardedSkeletons(FLYWIRE_SKEL)
    neurons = load_morphology(sel, lambda rid: src.get(rid), "female", workers=12)

    ids = np.array(sorted(neurons), dtype=np.int64)
    m = np.isin(pre, ids) & np.isin(post, ids) & (wt >= 3)
    edges = [(int(x), int(y), int(z)) for x, y, z in zip(pre[m], post[m], wt[m])]
    log(f"[female] edges: {len(edges)}")

    ref = [k for k, v in neurons.items() if v["stage"] == "other"]
    scale, kept, dropped = normalise(neurons, ref)
    log(f"[female] scale={scale:.3e}  kept={kept} dropped={dropped} pts")

    prov = {
        "dataset": "FlyWire FAFB v783",
        "sex": "female",
        "fetchDate": FETCH_DATE,
        "license": "CC-BY 4.0",
        "licenseNote": "FlyWire v783 annotations, connectivity and skeletons are "
                       "CC-BY 4.0; cite Dorkenwald et al. 2024 and Schlegel et al. 2024.",
        "sources": [
            {"what": "neuron skeletons (neuroglancer precomputed, sharded)",
             "url": FLYWIRE_SKEL,
             "note": "public GCS bucket gs://flywire_v141_m783/skeletons_mip_1, "
                     "read by HTTP range requests"},
            {"what": "cell types, soma positions, fru/dsx + dimorphism annotations",
             "url": FLYWIRE_ANNOT_URL,
             "note": "flyconnectome/flywire_annotations Supplemental file 1"},
            {"what": "synapse-count connectivity",
             "url": FLYWIRE_CONN_URL,
             "note": "philshiu/Drosophila_brain_model Connectivity_783.parquet"},
        ],
        "circuit": "cVA: ORN_DA1 -> DA1_lPN/vPN -> lateral-horn relay -> pC1a-e / "
                   "vpoEN / oviIN / mAL -> vpoDN and other descending neurons",
        "selection": {
            "orn": 'cell_type ORN_DA1, evenly sampled by root_id',
            "pn": "cell_type DA1_lPN / DA1_vPN (all)",
            "lhn": LHN_RULE,
            "dimorphic": "pC1a-e, vpoEN, oviIN/oviDN and the fru+ mAL "
                         "interneurons (<=130)",
            "descending": "vpoDN plus the top 30 descending targets of the "
                          "dimorphic core",
            "other": "super_class central / optic / visual_projection with >=500 "
                     "incoming synapses, spatially stratified for silhouette",
        },
        "transform": "FAFB nanometre coords -> recentred, uniform scale into the "
                     "SPEC box, y negated so dorsal is +y",
        "morphologyNote": "polylines are arc-length resamplings of published "
                          "skeletons; no coordinate is synthesised",
        "altTypeNote": "altType carries the hemibrain synonym where FlyWire's "
                       "cell_type differs, e.g. DNp37 = vpoDN, the descending "
                       "neuron documented downstream of pC1a in female receptivity",
        "somaNote": "sensory and ascending neurons have no soma inside FAFB "
                    "(the ORN somata sit in the antenna), so for those the "
                    "release's pos_x/pos_y/pos_z point on the neuron is used",
        "dimorphicFlag": "stage == dimorphic, or the release's own fru_dsx / "
                         "dimorphism annotation",
    }
    return neurons, edges, prov


# ----------------------------------------------------------------------------
# shared helpers
# ----------------------------------------------------------------------------

def stratify(pool, n):
    """Deterministically spread a pool of soma-bearing neurons across a 3D grid."""
    if len(pool) <= n:
        return pool
    P = np.array([p["soma"] for p in pool], dtype=float)
    lo, hi = P.min(0), np.maximum(P.max(0), P.min(0) + 1e-9)
    g = int(np.ceil(n ** (1 / 3))) + 2
    keyed = defaultdict(list)
    for p, xyz in zip(pool, P):
        c = tuple(np.minimum(((xyz - lo) / (hi - lo) * g).astype(int), g - 1))
        keyed[c].append(p)
    for k in keyed:
        keyed[k].sort(key=lambda d: d["src"])
    out, rnd = [], 0
    cells = sorted(keyed)
    while len(out) < n:
        added = False
        for c in cells:
            if rnd < len(keyed[c]):
                out.append(keyed[c][rnd])
                added = True
                if len(out) >= n:
                    break
        if not added:
            break
        rnd += 1
    return out[:n]


def load_morphology(sel, fetch, tag, workers=8):
    """Fetch + polyline every selected neuron. Failures are dropped, not faked."""
    log(f"[{tag}] fetching {len(sel)} skeletons ...")
    out, fails = {}, []
    done = [0]

    def one(src):
        meta = sel[src]
        b = BUDGET.get(meta["stage"], BUDGET["other"])
        try:
            res = fetch(src)
            if not res or res[1] is None or len(res[1]) == 0:
                return src, None
            verts, edges = res
            segs = skeleton_to_segments(verts, edges, b["max_segs"], b["max_pts"])
            if not segs:
                return src, None
            return src, segs
        except Exception as e:  # noqa: BLE001
            return src, ("ERR", f"{type(e).__name__}: {e}")

    with ThreadPoolExecutor(max_workers=workers) as ex:
        for src, segs in ex.map(one, sorted(sel)):
            done[0] += 1
            if done[0] % 100 == 0:
                log(f"[{tag}]   {done[0]}/{len(sel)}")
            if segs is None or (isinstance(segs, tuple) and segs[0] == "ERR"):
                fails.append((src, segs[1] if isinstance(segs, tuple) else "no skeleton"))
                continue
            m = sel[src]
            out[src] = dict(stage=m["stage"], cellType=m["cellType"],
                            altType=m.get("altType"),
                            dimorphic=m["dimorphic"], _segs=segs,
                            _soma=(np.array(m["soma"], dtype=float)
                                   if m.get("soma") else None))
    if fails:
        log(f"[{tag}] {len(fails)} neurons had no usable skeleton (dropped): "
            f"{fails[:5]}{' ...' if len(fails) > 5 else ''}")
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    ap.add_argument("--out", default=os.path.join(here, "data", "real"))
    ap.add_argument("--cache", default=os.environ.get(
        "SAMESMELL_CACHE", os.path.join(os.path.expanduser("~"), ".cache",
                                        "samesmell-real")))
    ap.add_argument("--context", type=int, default=N_CONTEXT)
    ap.add_argument("--only", choices=["male", "female"], default=None)
    args = ap.parse_args()
    os.makedirs(args.cache, exist_ok=True)
    os.makedirs(args.out, exist_ok=True)

    jobs = [("male", build_male), ("female", build_female)]
    if args.only:
        jobs = [j for j in jobs if j[0] == args.only]

    for sex, build in jobs:
        neurons, edges, prov = build(args.cache, args.context)
        path = os.path.join(args.out, f"{sex}.json")
        doc = emit(neurons, edges, sex, prov, path)
        size = os.path.getsize(path)
        by = defaultdict(int)
        for n in doc["neurons"]:
            by[n["type"]] += 1
        log(f"[{sex}] WROTE {path}  {size/1e6:.2f} MB  "
            f"neurons={len(doc['neurons'])} edges={len(doc['edges'])} "
            f"pathway={len(doc['pathway'])}")
        log(f"[{sex}] by stage: {dict(by)}")
        log(f"[{sex}] actual bounds: {doc['meta']['actualBounds']}")


if __name__ == "__main__":
    main()
