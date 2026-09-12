(()=>{var Pt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var zu=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Vu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ku(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){let i=ws("canvas");return i.style.display="block",i}function As(...i){let e="THREE."+i.shift();Wi?Wi("log",e,...i):console.log(e,...i)}function gh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=gh(i);let e="THREE."+i.shift();if(Wi)Wi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=gh(i);let e="THREE."+i.shift();if(Wi)Wi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function di(...i){let e=i.join(" ");e in oc||(oc[e]=!0,He(...i))}function _h(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Hu(i,e){return(i%e+e)%e}function To(i,e,t){return(1-t)*i+t*e}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gu(){let i={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Es:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bs]:{primaries:e,whitePoint:n,transfer:Es,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}function Po(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function zo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ci.fromArray(i,r);let o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}function vr(i,e,t,n,s,r){Bi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(vs.x=r*Bi.x-s*Bi.y,vs.y=s*Bi.x+r*Bi.y):vs.copy(Bi),i.copy(e),i.x+=vs.x,i.y+=vs.y,i.applyMatrix4(yh)}function rd(i,e,t,n,s,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ti,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ar);return c<t.near||c>t.far?null:{distance:c,point:Ar.clone(),object:i}}function Cr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,br),i.getVertexPosition(l,Er),i.getVertexPosition(c,Tr);let u=rd(i,e,t,n,br,Er,Tr,bc);if(u){let d=new z;Nn.getBarycoord(bc,br,Er,Tr,d),s&&(u.uv=Nn.getInterpolatedAttribute(s,o,l,c,d,new Pe)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,o,l,c,d,new Pe)),a&&(u.normal=Nn.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new z,materialIndex:0};Nn.getNormal(br,Er,Tr,h.normal),u.face=h,u.barycoord=d}return u}function Pr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ta.fromBufferAttribute(o,s),na.fromBufferAttribute(o,r),t.distanceSqToSegment(ta,na,qo,Tc)>n)return;qo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qo);if(!(c<e.near||c>e.far))return{distance:c,point:Tc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Rc(i,e,t,n,s,r,a){let o=Qo.distanceSqToPoint(i);if(o<t){let l=new z;Qo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Mi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ic(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ic(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=Mi(i[t]);for(let s in n)e[s]=n[s]}return e}function Ic(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function od(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}function zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Mh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function hd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ud(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Mh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=hd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function Pc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function dd(){this._document.hidden===!1&&this.reset()}function Uc(i,e){return i.distance-e.distance}function el(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)el(r[a],e,t,!0)}}function Sl(i,e,t,n){let s=Md(n);switch(t){case fl:return i*e;case ml:return i*e/s.components*s.byteLength;case Aa:return i*e/s.components*s.byteLength;case ri:return i*e*2/s.components*s.byteLength;case Ca:return i*e*2/s.components*s.byteLength;case pl:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Ra:return i*e*4/s.components*s.byteLength;case $s:case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Da:return Math.max(i,16)*Math.max(e,8)/4;case Ia:case La:return Math.max(i,8)*Math.max(e,8)/2;case Na:case Ua:case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fa:case tr:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16;case io:case so:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nr:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Md(i){switch(i){case $t:case cl:return{byteLength:1,components:1};case ns:case hl:case Et:return{byteLength:2,components:1};case Ta:case wa:return{byteLength:2,components:4};case dn:case Ea:case fn:return{byteLength:4,components:1};case ul:case dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Fc,nl,Oc,Hs,Bc,es,ti,Wt,Kt,tn,ts,qt,il,sl,zc,xi,Vc,kc,Hc,Gc,Wc,Xc,qc,Yc,rl,al,Zc,Jc,Kc,$c,Qc,jc,eh,th,nh,Br,zr,Vr,Gi,kr,Hr,Gr,Wr,ol,ih,sh,un,Gs,Ws,Xs,vi,qs,Ys,Zs,ll,ni,yi,Ma,Sa,Js,Xr,Mn,qr,It,rh,Ks,Ut,ba,ii,$t,cl,hl,ns,Ea,dn,fn,Et,Ta,wa,is,ul,dl,fl,pl,nn,Sn,si,ml,Aa,ri,Ca,Ra,$s,Qs,js,er,Ia,Pa,La,Da,Na,Ua,Fa,Oa,Ba,tr,za,Va,ka,Ha,Ga,Wa,Xa,qa,Ya,Za,Ja,Ka,$a,Qa,ja,eo,to,no,io,so,nr,ro,Ss,Yr,Fr,Zo,Jo,Ko,$o,ah,gl,oh,Fn,Lt,bs,Es,nt,Or,lh,ch,hh,uh,ao,dh,fh,oo,ph,_l,xl,hn,Ts,oc,Wi,xh,bn,Ot,Eo,Zr,Pe,En,z,wo,lc,Xe,Ao,cc,hc,Ke,Ti,Jr,Wu,Xi,Xu,Ro,Ht,_t,Kr,vt,Cs,$r,mt,wi,an,qu,Yu,kn,hr,Yt,uc,dc,Yn,qi,Zu,fc,Ai,Rn,ur,ps,Ju,Ku,pc,mc,gc,_c,$u,Ci,Io,Gt,Nt,Qu,Yi,vh,Hn,dr,Oe,Bt,Zi,on,In,Lo,Pn,Ri,Ii,xc,Do,No,Uo,Fo,Oo,Bo,Nn,Zn,Ln,ln,fr,Pi,Li,Di,Gn,Wn,li,ms,pr,mr,ci,bt,gr,ju,gt,Rs,Is,dt,ed,gs,Vo,Jn,td,en,ko,Ni,Zt,_s,Rt,Mt,Qr,kt,Ps,Ho,nd,id,cn,sd,Tn,Kn,Ui,xs,Fi,Oi,Bi,vs,yh,_r,ys,xr,vc,Go,yc,fi,Dn,Wo,yr,Mr,pi,mi,Mc,hi,Sr,Sc,br,Er,Tr,Xo,wr,bc,Ar,xt,jr,ui,ad,Rr,Ls,ea,ta,na,Ec,Ms,Ir,qo,Tc,ia,wc,Ac,Ji,sa,Cc,Qo,Lr,Dr,Ds,Ns,Us,$n,ra,Fs,Ki,Os,$i,aa,Qi,gi,On,ld,cd,rt,ji,oa,la,Qn,ca,ha,ua,da,Jt,jn,fa,pa,ma,Bs,ei,ga,_a,Sh,xa,Nr,Ur,vn,zs,Xn,Lc,Dc,Dt,_i,Vi,ki,va,ya,Vs,yl,fd,Ml,pd,md,gd,_d,xd,vd,yd,jo,pt,Z0,Nc,ks,tl,bl=Pt(()=>{Fc=0,nl=1,Oc=2,Hs=1,Bc=2,es=3,ti=0,Wt=1,Kt=2,tn=0,ts=1,qt=2,il=3,sl=4,zc=5,xi=100,Vc=101,kc=102,Hc=103,Gc=104,Wc=200,Xc=201,qc=202,Yc=203,rl=204,al=205,Zc=206,Jc=207,Kc=208,$c=209,Qc=210,jc=211,eh=212,th=213,nh=214,Br=0,zr=1,Vr=2,Gi=3,kr=4,Hr=5,Gr=6,Wr=7,ol=0,ih=1,sh=2,un=0,Gs=1,Ws=2,Xs=3,vi=4,qs=5,Ys=6,Zs=7,ll=300,ni=301,yi=302,Ma=303,Sa=304,Js=306,Xr=1e3,Mn=1001,qr=1002,It=1003,rh=1004,Ks=1005,Ut=1006,ba=1007,ii=1008,$t=1009,cl=1010,hl=1011,ns=1012,Ea=1013,dn=1014,fn=1015,Et=1016,Ta=1017,wa=1018,is=1020,ul=35902,dl=35899,fl=1021,pl=1022,nn=1023,Sn=1026,si=1027,ml=1028,Aa=1029,ri=1030,Ca=1031,Ra=1033,$s=33776,Qs=33777,js=33778,er=33779,Ia=35840,Pa=35841,La=35842,Da=35843,Na=36196,Ua=37492,Fa=37496,Oa=37488,Ba=37489,tr=37490,za=37491,Va=37808,ka=37809,Ha=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,Za=37816,Ja=37817,Ka=37818,$a=37819,Qa=37820,ja=37821,eo=36492,to=36494,no=36495,io=36283,so=36284,nr=36285,ro=36286,Ss=2300,Yr=2301,Fr=2302,Zo=2303,Jo=2400,Ko=2401,$o=2402,ah=3200,gl=0,oh=1,Fn="",Lt="srgb",bs="srgb-linear",Es="linear",nt="srgb",Or=7680,lh=519,ch=512,hh=513,uh=514,ao=515,dh=516,fh=517,oo=518,ph=519,_l=35044,xl="300 es",hn=2e3,Ts=2001;oc={},Wi=null;xh={[Br]:zr,[Vr]:Gr,[kr]:Wr,[Gi]:Hr,[zr]:Br,[Gr]:Vr,[Wr]:kr,[Hr]:Gi},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eo=Math.PI/180,Zr=180/Math.PI;Pe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},En=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],m=r[a+1],v=r[a+2],T=r[a+3];if(d!==T||l!==h||c!==m||u!==v){let f=l*h+c*m+u*v+d*T;f<0&&(h=-h,m=-m,v=-v,T=-T,f=-f);let p=1-o;if(f<.9995){let w=Math.acos(f),A=Math.sin(w);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A,l=l*p+h*o,c=c*p+m*o,u=u*p+v*o,d=d*p+T*o}else{l=l*p+h*o,c=c*p+m*o,u=u*p+v*o,d=d*p+T*o;let w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*m-c*h,e[t+1]=l*v+u*h+c*d-o*m,e[t+2]=c*v+u*m+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d-h*m*v;break;case"YXZ":this._x=h*u*d+c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d+h*m*v;break;case"ZXY":this._x=h*u*d-c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d-h*m*v;break;case"ZYX":this._x=h*u*d-c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d+h*m*v;break;case"YZX":this._x=h*u*d+c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d-h*m*v;break;case"XZY":this._x=h*u*d-c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d+h*m*v;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new z,lc=new En,Xe=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],v=n[8],T=s[0],f=s[3],p=s[6],w=s[1],A=s[4],_=s[7],y=s[2],E=s[5],C=s[8];return r[0]=a*T+o*w+l*y,r[3]=a*f+o*A+l*E,r[6]=a*p+o*_+l*C,r[1]=c*T+u*w+d*y,r[4]=c*f+u*A+d*E,r[7]=c*p+u*_+d*C,r[2]=h*T+m*w+v*y,r[5]=h*f+m*A+v*E,r[8]=h*p+m*_+v*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,m=c*r-a*l,v=t*d+n*h+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/v;return e[0]=d*T,e[1]=(s*c-u*n)*T,e[2]=(o*n-s*a)*T,e[3]=h*T,e[4]=(u*t-s*l)*T,e[5]=(s*r-o*t)*T,e[6]=m*T,e[7]=(n*l-c*t)*T,e[8]=(a*t-n*r)*T,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new Xe,cc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke=Gu();Jr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=ws("canvas")),Ti.width=e.width,Ti.height=e.height;let s=Ti.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wu=0,Xi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Co(s[a].image)):r.push(Co(s[a]))}else r=Co(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Xu=0,Ro=new z,Ht=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=Ut,a=ii,o=nn,l=$t,c=i.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=qn(),this.name="",this.source=new Xi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=ll;Ht.DEFAULT_ANISOTROPY=1;_t=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],v=l[9],T=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-T)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+T)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,_=(m+1)/2,y=(p+1)/2,E=(u+h)/4,C=(d+T)/4,x=(v+f)/4;return A>_&&A>y?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=C/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=C/r,s=x/r),this.set(n,s,r,t),this}let w=Math.sqrt((f-v)*(f-v)+(d-T)*(d-T)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(f-v)/w,this.y=(d-T)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kr=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ht(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vt=class extends Kr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Cs=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$r=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},mt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,d,h,m,v,T,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,m,v,T,f)}set(e,t,n,s,r,a,o,l,c,u,d,h,m,v,T,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=v,p[11]=T,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,m=a*d,v=o*u,T=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=h-T*c,t[9]=-o*l,t[2]=T-h*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,m=l*d,v=c*u,T=c*d;t[0]=h+T*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=T+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,m=l*d,v=c*u,T=c*d;t[0]=h-T*o,t[4]=-a*d,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=T-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,m=a*d,v=o*u,T=o*d;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+T,t[1]=l*d,t[5]=T*c+h,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,m=a*c,v=o*l,T=o*c;t[0]=l*u,t[4]=T-h*d,t[8]=v*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+v,t[10]=h-T*d}else if(e.order==="XZY"){let h=a*l,m=a*c,v=o*l,T=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+T,t[5]=a*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=o*u,t[10]=T*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qu,e,Yu)}lookAt(e,t,n){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),kn.crossVectors(n,Yt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),kn.crossVectors(n,Yt)),kn.normalize(),hr.crossVectors(Yt,kn),s[0]=kn.x,s[4]=hr.x,s[8]=Yt.x,s[1]=kn.y,s[5]=hr.y,s[9]=Yt.y,s[2]=kn.z,s[6]=hr.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],v=n[2],T=n[6],f=n[10],p=n[14],w=n[3],A=n[7],_=n[11],y=n[15],E=s[0],C=s[4],x=s[8],S=s[12],R=s[1],P=s[5],L=s[9],V=s[13],D=s[2],k=s[6],K=s[10],B=s[14],Z=s[3],H=s[7],Y=s[11],Q=s[15];return r[0]=a*E+o*R+l*D+c*Z,r[4]=a*C+o*P+l*k+c*H,r[8]=a*x+o*L+l*K+c*Y,r[12]=a*S+o*V+l*B+c*Q,r[1]=u*E+d*R+h*D+m*Z,r[5]=u*C+d*P+h*k+m*H,r[9]=u*x+d*L+h*K+m*Y,r[13]=u*S+d*V+h*B+m*Q,r[2]=v*E+T*R+f*D+p*Z,r[6]=v*C+T*P+f*k+p*H,r[10]=v*x+T*L+f*K+p*Y,r[14]=v*S+T*V+f*B+p*Q,r[3]=w*E+A*R+_*D+y*Z,r[7]=w*C+A*P+_*k+y*H,r[11]=w*x+A*L+_*K+y*Y,r[15]=w*S+A*V+_*B+y*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],v=e[3],T=e[7],f=e[11],p=e[15],w=l*m-c*h,A=o*m-c*d,_=o*h-l*d,y=a*m-c*u,E=a*h-l*u,C=a*d-o*u;return t*(T*w-f*A+p*_)-n*(v*w-f*y+p*E)+s*(v*A-T*y+p*C)-r*(v*_-T*E+f*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],v=e[12],T=e[13],f=e[14],p=e[15],w=t*o-n*a,A=t*l-s*a,_=t*c-r*a,y=n*l-s*o,E=n*c-r*o,C=s*c-r*l,x=u*T-d*v,S=u*f-h*v,R=u*p-m*v,P=d*f-h*T,L=d*p-m*T,V=h*p-m*f,D=w*V-A*L+_*P+y*R-E*S+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return e[0]=(o*V-l*L+c*P)*k,e[1]=(s*L-n*V-r*P)*k,e[2]=(T*C-f*E+p*y)*k,e[3]=(h*E-d*C-m*y)*k,e[4]=(l*R-a*V-c*S)*k,e[5]=(t*V-s*R+r*S)*k,e[6]=(f*_-v*C-p*A)*k,e[7]=(u*C-h*_+m*A)*k,e[8]=(a*L-o*R+c*x)*k,e[9]=(n*R-t*L-r*x)*k,e[10]=(v*E-T*_+p*w)*k,e[11]=(d*_-u*E-m*w)*k,e[12]=(o*S-a*P-l*x)*k,e[13]=(t*P-n*S+s*x)*k,e[14]=(T*A-v*y-f*w)*k,e[15]=(u*y-d*A+h*w)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,m=r*u,v=r*d,T=a*u,f=a*d,p=o*d,w=l*c,A=l*u,_=l*d,y=n.x,E=n.y,C=n.z;return s[0]=(1-(T+p))*y,s[1]=(m+_)*y,s[2]=(v-A)*y,s[3]=0,s[4]=(m-_)*E,s[5]=(1-(h+p))*E,s[6]=(f+w)*E,s[7]=0,s[8]=(v+A)*C,s[9]=(f-w)*C,s[10]=(1-(h+T))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=wi.set(s[0],s[1],s[2]).length(),o=wi.set(s[4],s[5],s[6]).length(),l=wi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);let c=1/a,u=1/o,d=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=hn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s),v,T;if(l)v=r/(a-r),T=a*r/(a-r);else if(o===hn)v=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===Ts)v=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s),v,T;if(l)v=1/(a-r),T=a/(a-r);else if(o===hn)v=-2/(a-r),T=-(a+r)/(a-r);else if(o===Ts)v=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wi=new z,an=new mt,qu=new z(0,0,0),Yu=new z(1,1,1),kn=new z,hr=new z,Yt=new z,uc=new mt,dc=new En,Yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";qi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zu=0,fc=new z,Ai=new En,Rn=new mt,ur=new z,ps=new z,Ju=new z,Ku=new En,pc=new z(1,0,0),mc=new z(0,1,0),gc=new z(0,0,1),_c={type:"added"},$u={type:"removed"},Ci={type:"childadded",child:null},Io={type:"childremoved",child:null},Gt=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new Yn,n=new En,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(pc,e)}rotateY(e){return this.rotateOnAxis(mc,e)}rotateZ(e){return this.rotateOnAxis(gc,e)}translateOnAxis(e,t){return fc.copy(e).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pc,e)}translateY(e){return this.translateOnAxis(mc,e)}translateZ(e){return this.translateOnAxis(gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ps,ur,this.up):Rn.lookAt(ur,ps,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_c),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($u),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_c),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Nt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qu={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let T of e.hand.values()){let f=t.getJointPose(T,n),p=this._getHandJoint(c,T);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},dr={h:0,s:0,l:0};Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Hu(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Po(a,r,e+1/3),this.g=Po(a,r,e),this.b=Po(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ke.workingToColorSpace(Bt.copy(this),e),Math.round(je(Bt.r*255,0,255))*65536+Math.round(je(Bt.g*255,0,255))*256+Math.round(je(Bt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Lt){Ke.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(dr);let n=To(Hn.h,dr.h,t),s=To(Hn.s,dr.s,t),r=To(Hn.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Oe;Oe.NAMES=vh;Zi=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new z,In=new z,Lo=new z,Pn=new z,Ri=new z,Ii=new z,xc=new z,Do=new z,No=new z,Uo=new z,Fo=new _t,Oo=new _t,Bo=new _t,Nn=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),In.subVectors(n,t),Lo.subVectors(e,t);let a=on.dot(on),o=on.dot(In),l=on.dot(Lo),c=In.dot(In),u=In.dot(Lo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,m=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),In.subVectors(e,t),on.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),In.subVectors(this.a,this.b),on.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Ii.subVectors(r,n),Do.subVectors(e,n);let l=Ri.dot(Do),c=Ii.dot(Do);if(l<=0&&c<=0)return t.copy(n);No.subVectors(e,s);let u=Ri.dot(No),d=Ii.dot(No);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ri,a);Uo.subVectors(e,r);let m=Ri.dot(Uo),v=Ii.dot(Uo);if(v>=0&&m<=v)return t.copy(r);let T=m*c-l*v;if(T<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ii,o);let f=u*v-m*d;if(f<=0&&d-u>=0&&m-v>=0)return xc.subVectors(r,s),o=(d-u)/(d-u+(m-v)),t.copy(s).addScaledVector(xc,o);let p=1/(f+T+h);return a=T*p,o=h*p,t.copy(n).addScaledVector(Ri,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),pr.subVectors(this.max,ms),Pi.subVectors(e.a,ms),Li.subVectors(e.b,ms),Di.subVectors(e.c,ms),Gn.subVectors(Li,Pi),Wn.subVectors(Di,Li),li.subVectors(Pi,Di);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-li.z,li.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,li.z,0,-li.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-li.y,li.x,0];return!zo(t,Pi,Li,Di,pr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,Pi,Li,Di,pr))?!1:(mr.crossVectors(Gn,Wn),t=[mr.x,mr.y,mr.z],zo(t,Pi,Li,Di,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new z,new z,new z,new z,new z,new z,new z,new z],ln=new z,fr=new Zn,Pi=new z,Li=new z,Di=new z,Gn=new z,Wn=new z,li=new z,ms=new z,pr=new z,mr=new z,ci=new z;bt=new z,gr=new Pe,ju=0,gt=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Rs=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Is=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},dt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ed=new Zn,gs=new z,Vo=new z,Jn=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ed.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);let t=gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Vo)),this.expandByPoint(gs.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},td=0,en=new mt,ko=new Gt,Ni=new z,Zt=new Zn,_s=new Zn,Rt=new z,Mt=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?Is:Rs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Zt.min,_s.min),Zt.expandByPoint(Rt),Rt.addVectors(Zt.max,_s.max),Zt.expandByPoint(Rt)):(Zt.expandByPoint(_s.min),Zt.expandByPoint(_s.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),Rt.add(Ni)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new z,l[x]=new z;let c=new z,u=new z,d=new z,h=new Pe,m=new Pe,v=new Pe,T=new z,f=new z;function p(x,S,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,S),v.fromBufferAttribute(r,R),u.sub(c),d.sub(c),m.sub(h),v.sub(h);let P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(T.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(P),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(P),o[x].add(T),o[S].add(T),o[R].add(T),l[x].add(f),l[S].add(f),l[R].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,S=w.length;x<S;++x){let R=w[x],P=R.start,L=R.count;for(let V=P,D=P+L;V<D;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let A=new z,_=new z,y=new z,E=new z;function C(x){y.fromBufferAttribute(s,x),E.copy(y);let S=o[x];A.copy(S),A.sub(y.multiplyScalar(y.dot(S))).normalize(),_.crossVectors(E,S);let P=_.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,P)}for(let x=0,S=w.length;x<S;++x){let R=w[x],P=R.start,L=R.count;for(let V=P,D=P+L;V<D;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){let v=e.getX(h+0),T=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,T),a.fromBufferAttribute(t,f),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),m=0,v=0;for(let T=0,f=l.length;T<f;T++){o.isInterleavedBufferAttribute?m=l[T]*o.data.stride+o.offset:m=l[T]*u;for(let p=0;p<u;p++)h[v++]=c[m++]}return new gt(h,u,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},kt=new z,Ps=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){As("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){As("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ho=new z,nd=new z,id=new Xe,cn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ho.subVectors(n,t).cross(nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||id.getNormalMatrix(e),s=this.coplanarPoint(Ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sd=0,Tn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=ts,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=al,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kn=class extends Tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xs=new z,Fi=new z,Oi=new z,Bi=new Pe,vs=new Pe,yh=new mt,_r=new z,ys=new z,xr=new z,vc=new Pe,Go=new Pe,yc=new Pe,fi=class extends Gt{constructor(e=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qr(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Ps(n,3,0,!1)),Ui.setAttribute("uv",new Ps(n,2,3,!1))}this.geometry=Ui,this.material=e,this.center=new Pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;vr(_r.set(-.5,-.5,0),Oi,a,Fi,s,r),vr(ys.set(.5,-.5,0),Oi,a,Fi,s,r),vr(xr.set(.5,.5,0),Oi,a,Fi,s,r),vc.set(0,0),Go.set(1,0),yc.set(1,1);let o=e.ray.intersectTriangle(_r,ys,xr,!1,xs);if(o===null&&(vr(ys.set(-.5,.5,0),Oi,a,Fi,s,r),Go.set(0,1),o=e.ray.intersectTriangle(_r,xr,ys,!1,xs),o===null))return;let l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:Nn.getInterpolation(xs,_r,ys,xr,vc,Go,yc,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Dn=new z,Wo=new z,yr=new z,Mr=new z,pi=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wo.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(Wo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=Mr.dot(this.direction),l=-Mr.dot(yr),c=Mr.lengthSq(),u=Math.abs(1-a*a),d,h,m,v;if(u>0)if(d=a*l-o,h=a*o-l,v=r*u,d>=0)if(h>=-v)if(h<=v){let T=1/u;d*=T,h*=T,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wo).addScaledVector(yr,h),m}intersectSphere(e,t){if(e.radius<0)return null;Dn.subVectors(e.center,this.origin);let n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,m=e.z-a.z,v=t.x-a.x,T=t.y-a.y,f=t.z-a.z,p=n.x-a.x,w=n.y-a.y,A=n.z-a.z,_=Math.abs(l),y=Math.abs(c),E=Math.abs(u),C,x,S,R,P,L,V,D,k,K,B,Z;if(_>=y&&_>=E?(S=l,L=d,k=v,Z=p,l>=0?(C=c,x=u,R=h,P=m,V=T,D=f,K=w,B=A):(C=u,x=c,R=m,P=h,V=f,D=T,K=A,B=w)):y>=E?(S=c,L=h,k=T,Z=w,c>=0?(C=u,x=l,R=m,P=d,V=f,D=v,K=A,B=p):(C=l,x=u,R=d,P=m,V=v,D=f,K=p,B=A)):(S=u,L=m,k=f,Z=A,u>=0?(C=l,x=c,R=d,P=h,V=v,D=T,K=p,B=w):(C=c,x=l,R=h,P=d,V=T,D=v,K=w,B=p)),S===0)return null;let H=C/S,Y=x/S,Q=1/S,de=R-H*L,le=P-Y*L,We=V-H*k,Le=D-Y*k,Te=K-H*Z,J=B-Y*Z,ee=Te*Le-J*We,W=de*J-le*Te,ne=We*le-Le*de;if(s){if(ee<0||W<0||ne<0)return null}else if((ee<0||W<0||ne<0)&&(ee>0||W>0||ne>0))return null;let te=ee+W+ne;if(te===0)return null;let oe=Q*(ee*L+W*k+ne*Z);return(te>0?oe<0:oe>0)?null:this.at(oe/te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mi=class extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mc=new mt,hi=new pi,Sr=new Jn,Sc=new z,br=new z,Er=new z,Tr=new z,Xo=new z,wr=new z,bc=new z,Ar=new z,xt=class extends Gt{constructor(e=new Mt,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Xo.fromBufferAttribute(d,e),a?wr.addScaledVector(Xo,u):wr.addScaledVector(Xo.sub(t),u))}t.add(wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(Sr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Sr,Sc)===null||hi.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(Mc.copy(r).invert(),hi.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,T=h.length;v<T;v++){let f=h[v],p=a[f.materialIndex],w=Math.max(f.start,m.start),A=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let _=w,y=A;_<y;_+=3){let E=o.getX(_),C=o.getX(_+1),x=o.getX(_+2);s=Cr(this,p,e,n,c,u,d,E,C,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let v=Math.max(0,m.start),T=Math.min(o.count,m.start+m.count);for(let f=v,p=T;f<p;f+=3){let w=o.getX(f),A=o.getX(f+1),_=o.getX(f+2);s=Cr(this,a,e,n,c,u,d,w,A,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,T=h.length;v<T;v++){let f=h[v],p=a[f.materialIndex],w=Math.max(f.start,m.start),A=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let _=w,y=A;_<y;_+=3){let E=_,C=_+1,x=_+2;s=Cr(this,p,e,n,c,u,d,E,C,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let v=Math.max(0,m.start),T=Math.min(l.count,m.start+m.count);for(let f=v,p=T;f<p;f+=3){let w=f,A=f+1,_=f+2;s=Cr(this,a,e,n,c,u,d,w,A,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};jr=class extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,l,c=It,u=It,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ui=new Jn,ad=new Pe(.5,.5),Rr=new z,Ls=class{constructor(e=new cn,t=new cn,n=new cn,s=new cn,r=new cn,a=new cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],v=r[8],T=r[9],f=r[10],p=r[11],w=r[12],A=r[13],_=r[14],y=r[15];if(s[0].setComponents(c-a,m-u,p-v,y-w).normalize(),s[1].setComponents(c+a,m+u,p+v,y+w).normalize(),s[2].setComponents(c+o,m+d,p+T,y+A).normalize(),s[3].setComponents(c-o,m-d,p-T,y-A).normalize(),n)s[4].setComponents(l,h,f,_).normalize(),s[5].setComponents(c-l,m-h,p-f,y-_).normalize();else if(s[4].setComponents(c-l,m-h,p-f,y-_).normalize(),t===hn)s[5].setComponents(c+l,m+h,p+f,y+_).normalize();else if(t===Ts)s[5].setComponents(l,h,f,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);let t=ad.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ea=class extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ta=new z,na=new z,Ec=new mt,Ms=new pi,Ir=new Jn,qo=new z,Tc=new z,ia=class extends Gt{constructor(e=new Mt,t=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ta.fromBufferAttribute(t,s-1),na.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ta.distanceTo(na);e.setAttribute("lineDistance",new dt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;Ec.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Ec);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let T=m,f=v-1;T<f;T+=c){let p=u.getX(T),w=u.getX(T+1),A=Pr(this,e,Ms,l,p,w,T);A&&t.push(A)}if(this.isLineLoop){let T=u.getX(v-1),f=u.getX(m),p=Pr(this,e,Ms,l,T,f,v-1);p&&t.push(p)}}else{let m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let T=m,f=v-1;T<f;T+=c){let p=Pr(this,e,Ms,l,T,T+1,T);p&&t.push(p)}if(this.isLineLoop){let T=Pr(this,e,Ms,l,v-1,m,v-1);T&&t.push(T)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};wc=new z,Ac=new z,Ji=class extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wc.fromBufferAttribute(t,s),Ac.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wc.distanceTo(Ac);e.setAttribute("lineDistance",new dt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sa=class extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cc=new mt,Qo=new pi,Lr=new Jn,Dr=new z,Ds=class extends Gt{constructor(e=new Mt,t=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;Cc.copy(s).invert(),Qo.copy(e.ray).applyMatrix4(Cc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=h,T=m;v<T;v++){let f=c.getX(v);Dr.fromBufferAttribute(d,f),Rc(Dr,f,l,s,e,t,this)}}else{let h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=h,T=m;v<T;v++)Dr.fromBufferAttribute(d,v),Rc(Dr,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ns=class extends Ht{constructor(e=[],t=ni,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Us=class extends Ht{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class extends Ht{constructor(e,t,n=dn,s,r,a,o=It,l=It,c,u=Sn,d=1){if(u!==Sn&&u!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ra=class extends $n{constructor(e,t=dn,n=ni,s,r,a=It,o=It,l,c=Sn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fs=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function v(T,f,p,w,A,_,y,E,C,x,S){let R=_/C,P=y/x,L=_/2,V=y/2,D=E/2,k=C+1,K=x+1,B=0,Z=0,H=new z;for(let Y=0;Y<K;Y++){let Q=Y*P-V;for(let de=0;de<k;de++){let le=de*R-L;H[T]=le*w,H[f]=Q*A,H[p]=D,c.push(H.x,H.y,H.z),H[T]=0,H[f]=0,H[p]=E>0?1:-1,u.push(H.x,H.y,H.z),d.push(de/C),d.push(1-Y/x),B+=1}}for(let Y=0;Y<x;Y++)for(let Q=0;Q<C;Q++){let de=h+Q+k*Y,le=h+Q+k*(Y+1),We=h+(Q+1)+k*(Y+1),Le=h+(Q+1)+k*Y;l.push(de,le,Le),l.push(le,We,Le),Z+=6}o.addGroup(m,Z,S),m+=Z,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Os=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new z,u=new Pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let m=n+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$i=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],m=[],v=0,T=[],f=n/2,p=0;w(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(m,2));function w(){let _=new z,y=new z,E=0,C=(t-e)/n;for(let x=0;x<=r;x++){let S=[],R=x/r,P=R*(t-e)+e;for(let L=0;L<=s;L++){let V=L/s,D=V*l+o,k=Math.sin(D),K=Math.cos(D);y.x=P*k,y.y=-R*n+f,y.z=P*K,d.push(y.x,y.y,y.z),_.set(k,C,K).normalize(),h.push(_.x,_.y,_.z),m.push(V,1-R),S.push(v++)}T.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){let R=T[S][x],P=T[S+1][x],L=T[S+1][x+1],V=T[S][x+1];(e>0||S!==0)&&(u.push(R,P,V),E+=3),(t>0||S!==r-1)&&(u.push(P,L,V),E+=3)}c.addGroup(p,E,0),p+=E}function A(_){let y=v,E=new Pe,C=new z,x=0,S=_===!0?e:t,R=_===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,f*R,0),h.push(0,R,0),m.push(.5,.5),v++;let P=v;for(let L=0;L<=s;L++){let D=L/s*l+o,k=Math.cos(D),K=Math.sin(D);C.x=S*K,C.y=f*R,C.z=S*k,d.push(C.x,C.y,C.z),h.push(0,R,0),E.x=k*.5+.5,E.y=K*.5*R+.5,m.push(E.x,E.y),v++}for(let L=0;L<s;L++){let V=y+L,D=P+L;_===!0?u.push(D,D+1,V):u.push(D+1,D,V),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},aa=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let A=new z,_=new z,y=new z;for(let E=0;E<t.length;E+=3)m(t[E+0],A),m(t[E+1],_),m(t[E+2],y),l(A,_,y,w)}function l(w,A,_,y){let E=y+1,C=[];for(let x=0;x<=E;x++){C[x]=[];let S=w.clone().lerp(_,x/E),R=A.clone().lerp(_,x/E),P=E-x;for(let L=0;L<=P;L++)L===0&&x===E?C[x][L]=S:C[x][L]=S.clone().lerp(R,L/P)}for(let x=0;x<E;x++)for(let S=0;S<2*(E-x)-1;S++){let R=Math.floor(S/2);S%2===0?(h(C[x][R+1]),h(C[x+1][R]),h(C[x][R])):(h(C[x][R+1]),h(C[x+1][R+1]),h(C[x+1][R]))}}function c(w){let A=new z;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(w),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function u(){let w=new z;for(let A=0;A<r.length;A+=3){w.x=r[A+0],w.y=r[A+1],w.z=r[A+2];let _=f(w)/2/Math.PI+.5,y=p(w)/Math.PI+.5;a.push(_,1-y)}v(),d()}function d(){for(let w=0;w<a.length;w+=6){let A=a[w+0],_=a[w+2],y=a[w+4],E=Math.max(A,_,y),C=Math.min(A,_,y);E>.9&&C<.1&&(A<.2&&(a[w+0]+=1),_<.2&&(a[w+2]+=1),y<.2&&(a[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function m(w,A){let _=w*3;A.x=e[_+0],A.y=e[_+1],A.z=e[_+2]}function v(){let w=new z,A=new z,_=new z,y=new z,E=new Pe,C=new Pe,x=new Pe;for(let S=0,R=0;S<r.length;S+=9,R+=6){w.set(r[S+0],r[S+1],r[S+2]),A.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),E.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),y.copy(w).add(A).add(_).divideScalar(3);let P=f(y);T(E,R+0,w,P),T(C,R+2,A,P),T(x,R+4,_,P)}}function T(w,A,_,y){y<0&&w.x===1&&(a[A]=w.x-1),_.x===0&&_.z===0&&(a[A]=y/2/Math.PI+.5)}function f(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Qi=class i extends aa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},gi=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,m=[],v=[],T=[],f=[];for(let p=0;p<u;p++){let w=p*h-a;for(let A=0;A<c;A++){let _=A*d-r;v.push(_,-w,0),T.push(0,0,1),f.push(A/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let A=w+c*p,_=w+c*(p+1),y=w+1+c*(p+1),E=w+1+c*p;m.push(A,_,E),m.push(_,y,E)}this.setIndex(m),this.setAttribute("position",new dt(v,3)),this.setAttribute("normal",new dt(T,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};On={clone:Mi,merge:zt},ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rt=class extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ji=class extends rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oa=class extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},la=class extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends Qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jo,endingEnd:Jo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ko:r=e,o=2*t-n;break;case $o:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ko:a=e,l=2*n-t;break;case $o:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,v=(n-t)/(s-t),T=v*v,f=T*v,p=-h*f+2*h*T-h*v,w=(1+h)*f+(-1.5-2*h)*T+(-.5+h)*v+1,A=(-1-m)*f+(1.5+m)*T+.5*v,_=m*f-m*T;for(let y=0;y!==o;++y)r[y]=p*a[u+y]+w*a[c+y]+A*a[l+y]+_*a[d+y];return r}},ha=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},ua=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},da=class extends Qn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let v=(n-t)/(s-t),T=1-v;for(let f=0;f!==o;++f)r[f]=a[c+f]*T+a[l+f]*v;return r}let h=o*2,m=e-1;for(let v=0;v!==o;++v){let T=a[c+v],f=a[l+v],p=m*h+v*2,w=d[p],A=d[p+1],_=e*h+v*2,y=u[_],E=u[_+1],C=ud(n,t,w,y,s);r[v]=Mh(C,T,A,E,f)}return r}};Jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zi(t,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zi(e.times,Array),values:zi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yo(e.settings)&&(n.settings={inTangents:zi(e.settings.inTangents,Array),outTangents:zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new da(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case Fr:t=this.InterpolantFactoryMethodSmooth;break;case Zo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Fr;case this.InterpolantFactoryMethodBezier:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yo(this.settings)&&(Pc(this.settings.inTangents,e),Pc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ku(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,h=d-n,m=d+n;for(let v=0;v!==n;++v){let T=t[d+v];if(T!==t[h+v]||T!==t[m+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let m=0;m!==n;++m)t[h+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Yr;jn=class extends Jt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ss;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;fa=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};fa.prototype.ValueTypeName="color";pa=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};pa.prototype.ValueTypeName="number";ma=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)En.slerpFlat(r,0,a,c-o,a,c,l);return r}},Bs=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;ei=class extends Jt{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Ss;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;ga=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="vector";_a=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sh=new _a,xa=class{constructor(e){this.manager=e!==void 0?e:Sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";Nr=new z,Ur=new En,vn=new z,zs=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nr,Ur,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Ur,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Nr,Ur,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Ur,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xn=new z,Lc=new Pe,Dc=new Pe,Dt=class extends zs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Dc),t.subVectors(Dc,Lc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_i=class extends zs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vi=-90,ki=1,va=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Vi,ki,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Vi,ki,e,t);r.layers=this.layers,this.add(r);let a=new Dt(Vi,ki,e,t);a.layers=this.layers,this.add(a);let o=new Dt(Vi,ki,e,t);o.layers=this.layers,this.add(o);let l=new Dt(Vi,ki,e,t);l.layers=this.layers,this.add(l);let c=new Dt(Vi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ya=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=dd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};yl="\\[\\]\\.:\\/",fd=new RegExp("["+yl+"]","g"),Ml="[^"+yl+"]",pd="[^"+yl.replace("\\.","")+"]",md=/((?:WC+[\/:])*)/.source.replace("WC",Ml),gd=/(WCOD+)?/.source.replace("WCOD",pd),_d=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),xd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),vd=new RegExp("^"+md+gd+_d+xd+"$"),yd=["material","materials","bones","map"],jo=class{constructor(e,t,n){let s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fd,"")}static parseTrackName(e){let t=vd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=jo;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Z0=new Float32Array(1),Nc=new mt,ks=class{constructor(e,t,n=0,s=1/0){this.ray=new pi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nc),this}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(Uc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)el(e[s],this,n,t);return n.sort(Uc),n}};tl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Wh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bd(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<d.length;m++){let v=d[h],T=d[m];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++h,d[h]=T)}d.length=h+1;for(let m=0,v=d.length;m<v;m++){let T=d[m];i.bufferSubData(c,T.start*u.BYTES_PER_ELEMENT,u,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function am(i,e,t,n,s,r){let a=new Oe(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function m(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){let _=w.backgroundBlurriness>0;A=e.get(A,_)}return A}function v(w){let A=!1,_=m(w);_===null?f(a,o):_&&_.isColor&&(f(_,1),A=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(w,A){let _=m(A);_&&(_.isCubeTexture||_.mapping===Js)?(c===void 0&&(c=new xt(new Ki(1,1,1),new rt({name:"BackgroundCubeMaterial",uniforms:Mi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(A.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xh),c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==nt,(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new xt(new gi(2,2),new rt({name:"BackgroundMaterial",uniforms:Mi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,A){w.getRGB(lo,vl(i)),t.buffers.color.setClear(lo.r,lo.g,lo.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,f(a,o)},render:v,addToRenderList:T,dispose:p}}function om(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(P,L,V,D,k){let K=!1,B=d(P,D,V,L);r!==B&&(r=B,c(r.object)),K=m(P,D,V,k),K&&v(P,D,V,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(P,L,V,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,L,V,D){let k=D.wireframe===!0,K=n[L.id];K===void 0&&(K={},n[L.id]=K);let B=P.isInstancedMesh===!0?P.id:0,Z=K[B];Z===void 0&&(Z={},K[B]=Z);let H=Z[V.id];H===void 0&&(H={},Z[V.id]=H);let Y=H[k];return Y===void 0&&(Y=h(l()),H[k]=Y),Y}function h(P){let L=[],V=[],D=[];for(let k=0;k<t;k++)L[k]=0,V[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:D,object:P,attributes:{},index:null}}function m(P,L,V,D){let k=r.attributes,K=L.attributes,B=0,Z=V.getAttributes();for(let H in Z)if(Z[H].location>=0){let Q=k[H],de=K[H];if(de===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function v(P,L,V,D){let k={},K=L.attributes,B=0,Z=V.getAttributes();for(let H in Z)if(Z[H].location>=0){let Q=K[H];Q===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),k[H]=de,B++}r.attributes=k,r.attributesNum=B,r.index=D}function T(){let P=r.newAttributes;for(let L=0,V=P.length;L<V;L++)P[L]=0}function f(P){p(P,0)}function p(P,L){let V=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;V[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),k[P]!==L&&(i.vertexAttribDivisor(P,L),k[P]=L)}function w(){let P=r.newAttributes,L=r.enabledAttributes;for(let V=0,D=L.length;V<D;V++)L[V]!==P[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function A(P,L,V,D,k,K,B){B===!0?i.vertexAttribIPointer(P,L,V,k,K):i.vertexAttribPointer(P,L,V,D,k,K)}function _(P,L,V,D){T();let k=D.attributes,K=V.getAttributes(),B=L.defaultAttributeValues;for(let Z in K){let H=K[Z];if(H.location>=0){let Y=k[Z];if(Y===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let Q=Y.normalized,de=Y.itemSize,le=e.get(Y);if(le===void 0)continue;let We=le.buffer,Le=le.type,Te=le.bytesPerElement,J=Le===i.INT||Le===i.UNSIGNED_INT||Y.gpuType===Ea;if(Y.isInterleavedBufferAttribute){let ee=Y.data,W=ee.stride,ne=Y.offset;if(ee.isInstancedInterleavedBuffer){for(let te=0;te<H.locationSize;te++)p(H.location+te,ee.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<H.locationSize;te++)f(H.location+te);i.bindBuffer(i.ARRAY_BUFFER,We);for(let te=0;te<H.locationSize;te++)A(H.location+te,de/H.locationSize,Le,Q,W*Te,(ne+de/H.locationSize*te)*Te,J)}else{if(Y.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)p(H.location+ee,Y.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ee=0;ee<H.locationSize;ee++)f(H.location+ee);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ee=0;ee<H.locationSize;ee++)A(H.location+ee,de/H.locationSize,Le,Q,de*Te,de/H.locationSize*ee*Te,J)}}else if(B!==void 0){let Q=B[Z];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(H.location,Q);break;case 3:i.vertexAttrib3fv(H.location,Q);break;case 4:i.vertexAttrib4fv(H.location,Q);break;default:i.vertexAttrib1fv(H.location,Q)}}}}w()}function y(){S();for(let P in n){let L=n[P];for(let V in L){let D=L[V];for(let k in D){let K=D[k];for(let B in K)u(K[B].object),delete K[B];delete D[k]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let V in L){let D=L[V];for(let k in D){let K=D[k];for(let B in K)u(K[B].object),delete K[B];delete D[k]}}delete n[P.id]}function C(P){for(let L in n){let V=n[L];for(let D in V){let k=V[D];if(k[P.id]===void 0)continue;let K=k[P.id];for(let B in K)u(K[B].object),delete K[B];delete k[P.id]}}}function x(P){for(let L in n){let V=n[L],D=P.isInstancedMesh===!0?P.id:0,k=V[D];if(k!==void 0){for(let K in k){let B=k[K];for(let Z in B)u(B[Z].object),delete B[Z];delete k[K]}delete V[D],Object.keys(V).length===0&&delete n[L]}}}function S(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:T,enableAttribute:f,disableUnusedAttributes:w}}function lm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Et&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==$t&&C!==fn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:_,maxSamples:y,samples:E}}function hm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new cn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let v=d.clippingPlanes,T=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!f)r?u(null):c();else{let w=r?0:n,A=w*4,_=p.clippingState||null;l.value=_,_=u(v,h,A,m);for(let y=0;y!==A;++y)_[y]=t[y];p.clippingState=_,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,v){let T=d!==null?d.length:0,f=null;if(T!==0){if(f=l.value,v!==!0||f===null){let p=m+T*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let A=0,_=m;A!==T;++A,_+=4)a.copy(d[A]).applyMatrix4(w,o),a.normal.toArray(f,_),f[_+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,f}}function mm(i){let e=[],t=[],n=i,s=i-rs+1+um;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,m=3,v=new Float32Array(m*h*d),T=new Float32Array(m*h*d);for(let p=0;p<d;p++){let w=p%3*2/3-1,A=p>2?0:-1,_=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(_,m*h*p);for(let y=0;y<h;y++){let E=u[y*2]*2-1,C=u[y*2+1]*2-1;p===0?Si.set(1,C,E):p===1?Si.set(-E,1,-C):p===2?Si.set(-E,C,1):p===3?Si.set(-1,C,-E):p===4?Si.set(-E,-1,C):Si.set(E,C,-1),Si.toArray(T,(p*h+y)*m)}}let f=new Mt;f.setAttribute("position",new gt(v,m)),f.setAttribute("outputDirection",new gt(T,m)),t.push(new xt(f,null)),n>rs&&n--}return{lodMeshes:t,sizeLods:e}}function Eh(i,e,t){let n=new vt(i,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gm(i,e,t){return new rt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function _m(i,e,t){return new rt({name:"SphericalGaussianBlur",defines:{SAMPLES:dm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Th(){return new rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function wh(){return new rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function po(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function xm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Ma||m===Sa)if(e.has(h)){let v=e.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let T=new uo(v.height);return T.fromEquirectangularTexture(i,h),e.set(h,T),h.addEventListener("dispose",c),o(T.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let m=h.mapping,v=m===Ma||m===Sa,T=m===ni||m===yi;if(v||T){let f=t.get(h),p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new ho(i)),f=v?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{let w=h.image;return v&&w&&w.height>0||T&&w&&l(w)?(n===null&&(n=new ho(i)),f=v?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,m){return m===Ma?h.mapping=ni:m===Sa&&(h.mapping=yi),h}function l(h){let m=0,v=6;for(let T=0;T<v;T++)h[T]!==void 0&&m++;return m===v}function c(h){let m=h.target;m.removeEventListener("dispose",c);let v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&di("WebGLRenderer: "+n+" extension not supported."),s}}}function ym(i,e,t,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(d){let h=[],m=d.index,v=d.attributes.position,T=0;if(v===void 0)return;if(m!==null){let w=m.array;T=m.version;for(let A=0,_=w.length;A<_;A+=3){let y=w[A+0],E=w[A+1],C=w[A+2];h.push(y,E,E,C,C,y)}}else{let w=v.array;T=v.version;for(let A=0,_=w.length/3-1;A<_;A+=3){let y=A+0,E=A+1,C=A+2;h.push(y,E,E,C,C,y)}}let f=new(v.count>=65535?Is:Rs)(h,1);f.version=T;let p=r.get(d);p&&e.remove(p),r.set(d,f)}function u(d){let h=r.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Mm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,d*a,m),t.update(h,n,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,m);let T=0;for(let f=0;f<m;f++)T+=h[f];t.update(T,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Sm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bm(i,e,t){let n=new WeakMap,s=new _t;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],A=0;m===!0&&(A=1),v===!0&&(A=2),T===!0&&(A=3);let _=o.attributes.position.count*A,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*y*4*d),C=new Cs(E,_,y,d);C.type=fn,C.needsUpdate=!0;let x=A*4;for(let R=0;R<d;R++){let P=f[R],L=p[R],V=w[R],D=_*y*4*R;for(let k=0;k<P.count;k++){let K=k*x;m===!0&&(s.fromBufferAttribute(P,k),E[D+K+0]=s.x,E[D+K+1]=s.y,E[D+K+2]=s.z,E[D+K+3]=0),v===!0&&(s.fromBufferAttribute(L,k),E[D+K+4]=s.x,E[D+K+5]=s.y,E[D+K+6]=s.z,E[D+K+7]=0),T===!0&&(s.fromBufferAttribute(V,k),E[D+K+8]=s.x,E[D+K+9]=s.y,E[D+K+10]=s.z,E[D+K+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Pe(_,y)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let T=0;T<c.length;T++)m+=c[T];let v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Em(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}function wm(i,e,t,n,s,r){let a=new vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Mt;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let u=new ji({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xt(c,u),h=new _i(-1,1,1,-1,0,1),m=null,v=null,T=!1,f,p=null,w=[],A=!1;this.setSize=function(_,y){a.setSize(_,y),o!==null&&o.setSize(_,y),l!==null&&l.setSize(_,y);for(let E=0;E<w.length;E++){let C=w[E];C.setSize&&C.setSize(_,y)}},this.setEffects=function(_){w=_,A=w.length>0&&w[0].isRenderPass===!0;let y=a.width,E=a.height;w.length>0&&o===null&&(o=new vt(y,E,{type:Et,depthBuffer:!1,stencilBuffer:!1}),l=new vt(y,E,{type:Et,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){let x=w[C];x.setSize&&x.setSize(y,E)}},this.begin=function(_,y){if(T||_.toneMapping===un&&w.length===0)return!1;if(p=y,y!==null){let E=y.width,C=y.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return A===!1&&_.setRenderTarget(a),f=_.toneMapping,_.toneMapping=un,!0},this.hasRenderPass=function(){return A},this.end=function(_,y){_.toneMapping=f,T=!0;let E=a,C=o;for(let x=0;x<w.length;x++){let S=w[x];S.enabled!==!1&&(S.render(_,C,E,y),S.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(m!==_.outputColorSpace||v!==_.toneMapping){m=_.outputColorSpace,v=_.toneMapping,u.defines={},Ke.getTransfer(m)===nt&&(u.defines.SRGB_TRANSFER="");let x=Tm[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(d,h),p=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}function os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mo(i,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Am(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Pm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Ph.set(n),i.uniformMatrix2fv(this.addr,!1,Ph),wt(t,n)}}function Lm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),wt(t,n)}}function Dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Rh.set(n),i.uniformMatrix4fv(this.addr,!1,Rh),wt(t,n)}}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function Hm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Il.compareFunction=t.isReversedDepthBuffer()?oo:ao,r=Il):r=qh,t.setTexture2D(e||r,s)}function Gm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zh,s)}function Wm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jh,s)}function Xm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yh,s)}function qm(i){switch(i){case 5126:return Am;case 35664:return Cm;case 35665:return Rm;case 35666:return Im;case 35674:return Pm;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Nm;case 35667:case 35671:return Um;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return Vm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function Zm(i,e){let t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function Jm(i,e){let t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function Km(i,e){let t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function $m(i,e){let t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qm(i,e){let t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jm(i,e){let t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eg(i,e){i.uniform1iv(this.addr,e)}function tg(i,e){i.uniform2iv(this.addr,e)}function ng(i,e){i.uniform3iv(this.addr,e)}function ig(i,e){i.uniform4iv(this.addr,e)}function sg(i,e){i.uniform1uiv(this.addr,e)}function rg(i,e){i.uniform2uiv(this.addr,e)}function ag(i,e){i.uniform3uiv(this.addr,e)}function og(i,e){i.uniform4uiv(this.addr,e)}function lg(i,e,t){let n=this.cache,s=e.length,r=mo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Il:a=qh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function cg(i,e,t){let n=this.cache,s=e.length,r=mo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zh,r[a])}function hg(i,e,t){let n=this.cache,s=e.length,r=mo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jh,r[a])}function ug(i,e,t){let n=this.cache,s=e.length,r=mo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yh,r[a])}function dg(i){switch(i){case 5126:return Ym;case 35664:return Zm;case 35665:return Jm;case 35666:return Km;case 35674:return $m;case 35675:return Qm;case 35676:return jm;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}function Lh(i,e){i.seq.push(e),i.map[e.id]=e}function fg(i,e,t){let n=i.name,s=n.length;for(Cl.lastIndex=0;;){let r=Cl.exec(n),a=Cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lh(t,c===void 0?new Pl(o,i,e):new Ll(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Dl(o),Lh(t,d)),t=d}}}function Dh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function gg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function _g(i){Ke._getMatrix(Nh,Ke.workingColorSpace,i);let e=`mat3( ${Nh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Es:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gg(i.getShaderSource(e),o)}else return r}function xg(i,e){let t=_g(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yg(i,e){let t=vg[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mg(){Ke.getLuminanceCoefficients(co);let i=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function bg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function Fh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Nl(i){return i.replace(Tg,Ag)}function Ag(i,e){let t=Je[e];if(t===void 0){let n=wg.get(e);if(n!==void 0)t=Je[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nl(t)}function Bh(i){return i.replace(Cg,Rg)}function Rg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pg(i){return Ig[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Dg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function Ug(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ng[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Og(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fg[i.combine]||"ENVMAP_BLENDING_NONE"}function Bg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Pg(t),c=Dg(t),u=Ug(t),d=Og(t),h=Bg(t),m=Sg(t),v=bg(r),T=s.createProgram(),f,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(f=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Je.tonemapping_pars_fragment:"",t.toneMapping!==un?yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,xg("linearToOutputTexel",t.outputColorSpace),Mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=Nl(a),a=Fh(a,t),a=Oh(a,t),o=Nl(o),o=Fh(o,t),o=Oh(o,t),a=Bh(a),o=Bh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=w+f+a,_=w+p+o,y=Dh(s,s.VERTEX_SHADER,A),E=Dh(s,s.FRAGMENT_SHADER,_);s.attachShader(T,y),s.attachShader(T,E),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function C(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(T)||"",V=s.getShaderInfoLog(y)||"",D=s.getShaderInfoLog(E)||"",k=L.trim(),K=V.trim(),B=D.trim(),Z=!0,H=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,y,E);else{let Y=Uh(s,y,"vertex"),Q=Uh(s,E,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Y+`
`+Q)}else k!==""?He("WebGLProgram: Program Info Log:",k):(K===""||B==="")&&(H=!1);H&&(P.diagnostics={runnable:Z,programLog:k,vertexShader:{log:K,prefix:f},fragmentShader:{log:B,prefix:p}})}s.deleteShader(y),s.deleteShader(E),x=new as(s,T),S=Eg(s,T)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,pg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mg++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=y,this.fragmentShader=E,this}function kg(i){return i===ri||i===tr||i===nr}function Hg(i,e,t,n,s,r){let a=new qi,o=new Ul,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function T(x,S,R,P,L,V){let D=P.fog,k=L.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||K,B),H=Z&&Z.mapping===Js?Z.image.height:null,Y=m[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=Q!==void 0?Q.length:0,le=0;k.morphAttributes.position!==void 0&&(le=1),k.morphAttributes.normal!==void 0&&(le=2),k.morphAttributes.color!==void 0&&(le=3);let We,Le,Te,J;if(Y){let ht=An[Y];We=ht.vertexShader,Le=ht.fragmentShader}else{We=x.vertexShader,Le=x.fragmentShader;let ht=o.getVertexShaderStage(x),it=o.getFragmentShaderStage(x);o.update(x,ht,it),Te=ht.id,J=it.id}let ee=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),ne=L.isInstancedMesh===!0,te=L.isBatchedMesh===!0,oe=!!x.map,Ve=!!x.matcap,re=!!Z,ve=!!x.aoMap,Ce=!!x.lightMap,Be=!!x.bumpMap&&x.wireframe===!1,$e=!!x.normalMap,ct=!!x.displacementMap,he=!!x.emissiveMap,me=!!x.metalnessMap,fe=!!x.roughnessMap,I=x.anisotropy>0,Ye=x.clearcoat>0,et=x.dispersion>0,M=x.retroreflectivity>0,g=x.iridescence>0,N=x.sheen>0,U=x.transmission>0,G=I&&!!x.anisotropyMap,ae=Ye&&!!x.clearcoatMap,ue=Ye&&!!x.clearcoatNormalMap,j=Ye&&!!x.clearcoatRoughnessMap,ie=g&&!!x.iridescenceMap,pe=g&&!!x.iridescenceThicknessMap,Ue=N&&!!x.sheenColorMap,ye=N&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Fe=!!x.specularColorMap,ke=!!x.specularIntensityMap,qe=U&&!!x.transmissionMap,O=U&&!!x.thicknessMap,_e=!!x.gradientMap,se=!!x.alphaMap,xe=x.alphaTest>0,Ee=!!x.alphaHash,ce=!!x.extensions,ze=un;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ze=i.toneMapping);let De={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:Le,defines:x.defines,customVertexShaderID:Te,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:te,batchingColor:te&&L._colorsTexture!==null,instancing:ne,instancingColor:ne&&L.instanceColor!==null,instancingMorph:ne&&L.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:Ve,envMap:re,envMapMode:re&&Z.mapping,envMapCubeUVHeight:H,aoMap:ve,lightMap:Ce,bumpMap:Be,normalMap:$e,displacementMap:ct,emissiveMap:he,normalMapObjectSpace:$e&&x.normalMapType===oh,normalMapTangentSpace:$e&&x.normalMapType===gl,packedNormalMap:$e&&x.normalMapType===gl&&kg(x.normalMap.format),metalnessMap:me,roughnessMap:fe,anisotropy:I,anisotropyMap:G,clearcoat:Ye,clearcoatMap:ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:j,dispersion:et,retroreflection:M,iridescence:g,iridescenceMap:ie,iridescenceThicknessMap:pe,sheen:N,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:ge,specularColorMap:Fe,specularIntensityMap:ke,transmission:U,transmissionMap:qe,thicknessMap:O,gradientMap:_e,opaque:x.transparent===!1&&x.blending===ts&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:xe,alphaHash:Ee,combine:x.combine,mapUv:oe&&v(x.map.channel),aoMapUv:ve&&v(x.aoMap.channel),lightMapUv:Ce&&v(x.lightMap.channel),bumpMapUv:Be&&v(x.bumpMap.channel),normalMapUv:$e&&v(x.normalMap.channel),displacementMapUv:ct&&v(x.displacementMap.channel),emissiveMapUv:he&&v(x.emissiveMap.channel),metalnessMapUv:me&&v(x.metalnessMap.channel),roughnessMapUv:fe&&v(x.roughnessMap.channel),anisotropyMapUv:G&&v(x.anisotropyMap.channel),clearcoatMapUv:ae&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(x.sheenRoughnessMap.channel),specularMapUv:ge&&v(x.specularMap.channel),specularColorMapUv:Fe&&v(x.specularColorMap.channel),specularIntensityMapUv:ke&&v(x.specularIntensityMap.channel),transmissionMapUv:qe&&v(x.transmissionMap.channel),thicknessMapUv:O&&v(x.thicknessMap.channel),alphaMapUv:se&&v(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($e||I),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(oe||se),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&$e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:le,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kt,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function f(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(S,x),w(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function w(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let S=m[x.type],R;if(S){let P=An[S];R=On.clone(P.uniforms)}else R=x.uniforms;return R}function _(x,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new zg(i,S,x,s),c.push(R),u.set(S,R)),R}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:T,getProgramCacheKey:f,getUniforms:A,acquireProgram:_,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:C}}function Gg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,v,T,f,p){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:m,material:v,materialVariant:a(h),groupOrder:T,renderOrder:h.renderOrder,z:f,group:p},i[e]=w):(w.id=h.id,w.object=h,w.geometry=m,w.material=v,w.materialVariant=a(h),w.groupOrder=T,w.renderOrder=h.renderOrder,w.z=f,w.group=p),e++,w}function l(h,m,v,T,f,p,w){w.reversedDepth===!0&&(f=-f);let A=o(h,m,v,T,f,p);v.transmission>0?n.push(A):v.transparent===!0?s.push(A):t.push(A)}function c(h,m,v,T,f,p){let w=o(h,m,v,T,f,p);v.transmission>0?n.unshift(w):v.transparent===!0?s.unshift(w):t.unshift(w)}function u(h,m){t.length>1&&t.sort(h||Wg),n.length>1&&n.sort(m||Vh),s.length>1&&s.sort(m||Vh)}function d(){for(let h=e,m=i.length;h<m;h++){let v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Xg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new kh,i.set(n,[a])):s>=r.length?(a=new kh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Oe};break;case"SpotLight":t={position:new z,direction:new z,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Yg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Jg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kg(i){let e=new qg,t=Yg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new mt,a=new mt;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let m=0,v=0,T=0,f=0,p=0,w=0,A=0,_=0,y=0,E=0,C=0,x=0,S=0,R=0;c.sort(Jg);for(let L=0,V=c.length;L<V;L++){let D=c[L],k=D.color,K=D.intensity,B=D.distance,Z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ri?Z=D.shadow.map.texture:Z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*K,d+=k.g*K,h+=k.b*K;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],K);R++}else if(D.isSunLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[v]=Q,n.sunShadowMap[v]=Z;let de=Y.getViewportCount();for(let le=0;le<de;le++)n.sunShadowMatrix[T+le]=Y.getMatrix(le),n.sunShadowCascade[T+le]=Y._cascadeData[le];T+=de,v++}n.sun[m]=H,m++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=H,f++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(k).multiplyScalar(K),H.distance=B,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[w]=H;let Y=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,Y.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[w]=Y.matrix,D.castShadow){let Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.spotShadow[w]=Q,n.spotShadowMap[w]=Z,C++}w++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(k).multiplyScalar(K),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=H,A++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let Y=D.shadow,Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=H,p++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(K),H.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[_]=H,_++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let P=n.hash;(P.sunLength!==m||P.directionalLength!==f||P.pointLength!==p||P.spotLength!==w||P.rectAreaLength!==A||P.hemiLength!==_||P.numSunShadows!==v||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==C||P.numSpotMaps!==x||P.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=f,n.spot.length=w,n.rectArea.length=A,n.point.length=p,n.hemi.length=_,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,P.sunLength=m,P.directionalLength=f,P.pointLength=p,P.spotLength=w,P.rectAreaLength=A,P.hemiLength=_,P.numSunShadows=v,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=C,P.numSpotMaps=x,P.numLightProbes=R,n.version=Zg++)}function l(c,u){let d=0,h=0,m=0,v=0,T=0,f=0,p=u.matrixWorldInverse;for(let w=0,A=c.length;w<A;w++){let _=c[w];if(_.isSunLight){let y=n.sun[d];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(_.isSpotLight){let y=n.spot[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),v++}else if(_.isRectAreaLight){let y=n.rectArea[T];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),T++}else if(_.isPointLight){let y=n.point[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),m++}else if(_.isHemisphereLight){let y=n.hemi[f];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:n}}function Hh(i){let e=new Kg(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $g(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Hh(i),e.set(s,[o])):r>=a.length?(o=new Hh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function n0(i,e,t){let n=new Ls,s=new Pe,r=new Pe,a=new _t,o=new oa,l=new la,c={},u=t.maxTextureSize,d={[ti]:Wt,[Wt]:ti,[Kt]:Kt},h=new rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Qg,fragmentShader:jg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let v=new Mt;v.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new xt(v,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let p=this.type;this.render=function(E,C,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;this.type===Bc&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);let S=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(tn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=p!==this.type;V&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=E.length;D<k;D++){let K=E[D],B=K.shadow;if(B===void 0){He("WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Z=B.getFrameExtents();s.multiply(Z),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=H,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===es){if(K.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new vt(s.x,s.y,{format:ri,type:Et,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),B.map.texture.name=K.name+".shadowMap",B.map.depthTexture=new $n(s.x,s.y,fn),B.map.depthTexture.name=K.name+".shadowMapDepth",B.map.depthTexture.format=Sn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=It,B.map.depthTexture.magFilter=It}else K.isPointLight?(B.map=new uo(s.x),B.map.depthTexture=new ra(s.x,dn)):(B.map=new vt(s.x,s.y),B.map.depthTexture=new $n(s.x,s.y,dn)),B.map.depthTexture.name=K.name+".shadowMap",B.map.depthTexture.format=Sn,this.type===Hs?(B.map.depthTexture.compareFunction=H?oo:ao,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=It,B.map.depthTexture.magFilter=It);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let Y=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();K.isPointLight!==!0&&B.updateMatrices(K,x);for(let Q=0;Q<Y;Q++){let de=B.getCamera(Q);if(K.isPointLight){let le=B.camera,We=B.matrix,Le=K.distance||le.far;Le!==le.far&&(le.far=Le,le.updateProjectionMatrix()),sr.setFromMatrixPosition(K.matrixWorld),le.position.copy(sr),Rl.copy(le.position),Rl.add(e0[Q]),le.up.copy(t0[Q]),le.lookAt(Rl),le.updateMatrixWorld(),We.makeTranslation(-sr.x,-sr.y,-sr.z),Gh.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Gh,le.coordinateSystem,le.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(B.map),i.clear());let le=B.getViewport(Q);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),L.viewport(a)}n=B.getFrustum(Q),_(C,x,de,K,this.type)}B.isPointLightShadow!==!0&&this.type===es&&w(B,x),B.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(S,R,P)};function w(E,C){let x=e.update(T);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new vt(s.x,s.y,{format:ri,type:Et}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,T,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,x,m,T,null)}function A(E,C,x,S){let R=null,P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=R.uuid,V=C.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let k=D[V];k===void 0&&(k=R.clone(),D[V]=k,C.addEventListener("dispose",y)),R=k}if(R.visible=C.visible,R.wireframe=C.wireframe,S===es?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=x}return R}function _(E,C,x,S,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===es)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let V=e.update(E),D=E.material;if(Array.isArray(D)){let k=V.groups;for(let K=0,B=k.length;K<B;K++){let Z=k[K],H=D[Z.materialIndex];if(H&&H.visible){let Y=A(E,H,S,R);E.onBeforeShadow(i,E,C,x,V,Y,Z),i.renderBufferDirect(x,null,V,Y,E,Z),E.onAfterShadow(i,E,C,x,V,Y,Z)}}}else if(D.visible){let k=A(E,D,S,R);E.onBeforeShadow(i,E,C,x,V,k,null),i.renderBufferDirect(x,null,V,k,E,null),E.onAfterShadow(i,E,C,x,V,k,null)}}let L=E.children;for(let V=0,D=L.length;V<D;V++)_(L[V],C,x,S,R)}function y(E){E.target.removeEventListener("dispose",y);for(let x in c){let S=c[x],R=E.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function i0(i,e){function t(){let O=!1,_e=new _t,se=null,xe=new _t(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!O&&(i.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,ce,ze,De,ht){ht===!0&&(Ee*=De,ce*=De,ze*=De),_e.set(Ee,ce,ze,De),xe.equals(_e)===!1&&(i.clearColor(Ee,ce,ze,De),xe.copy(_e))},reset:function(){O=!1,se=null,xe.set(-1,0,0,0)}}}function n(){let O=!1,_e=!1,se=null,xe=null,Ee=null;return{setReversed:function(ce){if(_e!==ce){let ze=e.get("EXT_clip_control");ce?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),_e=ce;let De=Ee;Ee=null,this.setClear(De)}},getReversed:function(){return _e},setTest:function(ce){ce?ee(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(ce){se!==ce&&!O&&(i.depthMask(ce),se=ce)},setFunc:function(ce){if(_e&&(ce=xh[ce]),xe!==ce){switch(ce){case Br:i.depthFunc(i.NEVER);break;case zr:i.depthFunc(i.ALWAYS);break;case Vr:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case kr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case Gr:i.depthFunc(i.GREATER);break;case Wr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=ce}},setLocked:function(ce){O=ce},setClear:function(ce){Ee!==ce&&(Ee=ce,_e&&(ce=1-ce),i.clearDepth(ce))},reset:function(){O=!1,se=null,xe=null,Ee=null,_e=!1}}}function s(){let O=!1,_e=null,se=null,xe=null,Ee=null,ce=null,ze=null,De=null,ht=null;return{setTest:function(it){O||(it?ee(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(it){_e!==it&&!O&&(i.stencilMask(it),_e=it)},setFunc:function(it,rn,_n){(se!==it||xe!==rn||Ee!==_n)&&(i.stencilFunc(it,rn,_n),se=it,xe=rn,Ee=_n)},setOp:function(it,rn,_n){(ce!==it||ze!==rn||De!==_n)&&(i.stencilOp(it,rn,_n),ce=it,ze=rn,De=_n)},setLocked:function(it){O=it},setClear:function(it){ht!==it&&(i.clearStencil(it),ht=it)},reset:function(){O=!1,_e=null,se=null,xe=null,Ee=null,ce=null,ze=null,De=null,ht=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},m=new WeakMap,v=[],T=null,f=!1,p=null,w=null,A=null,_=null,y=null,E=null,C=null,x=new Oe(0,0,0),S=0,R=!1,P=null,L=null,V=null,D=null,k=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Z>=2);let Y=null,Q={},de=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),We=new _t().fromArray(de),Le=new _t().fromArray(le);function Te(O,_e,se,xe){let Ee=new Uint8Array(4),ce=i.createTexture();i.bindTexture(O,ce),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<se;ze++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(_e+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return ce}let J={};J[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Gi),Be(!1),$e(nl),ee(i.CULL_FACE),ve(tn);function ee(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function W(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function ne(O,_e){return h[O]!==_e?(i.bindFramebuffer(O,_e),h[O]=_e,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_e),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function te(O,_e){let se=v,xe=!1;if(O){se=m.get(_e),se===void 0&&(se=[],m.set(_e,se));let Ee=O.textures;if(se.length!==Ee.length||se[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,ze=Ee.length;ce<ze;ce++)se[ce]=i.COLOR_ATTACHMENT0+ce;se.length=Ee.length,xe=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,xe=!0);xe&&i.drawBuffers(se)}function oe(O){return T!==O?(i.useProgram(O),T=O,!0):!1}let Ve={[xi]:i.FUNC_ADD,[Vc]:i.FUNC_SUBTRACT,[kc]:i.FUNC_REVERSE_SUBTRACT};Ve[Hc]=i.MIN,Ve[Gc]=i.MAX;let re={[Wc]:i.ZERO,[Xc]:i.ONE,[qc]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Kc]:i.DST_COLOR,[Zc]:i.DST_ALPHA,[Yc]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[$c]:i.ONE_MINUS_DST_COLOR,[Jc]:i.ONE_MINUS_DST_ALPHA,[jc]:i.CONSTANT_COLOR,[eh]:i.ONE_MINUS_CONSTANT_COLOR,[th]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(O,_e,se,xe,Ee,ce,ze,De,ht,it){if(O===tn){f===!0&&(W(i.BLEND),f=!1);return}if(f===!1&&(ee(i.BLEND),f=!0),O!==zc){if(O!==p||it!==R){if((w!==xi||y!==xi)&&(i.blendEquation(i.FUNC_ADD),w=xi,y=xi),it)switch(O){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qt:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",O);break}else switch(O){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",O);break}A=null,_=null,E=null,C=null,x.set(0,0,0),S=0,p=O,R=it}return}Ee=Ee||_e,ce=ce||se,ze=ze||xe,(_e!==w||Ee!==y)&&(i.blendEquationSeparate(Ve[_e],Ve[Ee]),w=_e,y=Ee),(se!==A||xe!==_||ce!==E||ze!==C)&&(i.blendFuncSeparate(re[se],re[xe],re[ce],re[ze]),A=se,_=xe,E=ce,C=ze),(De.equals(x)===!1||ht!==S)&&(i.blendColor(De.r,De.g,De.b,ht),x.copy(De),S=ht),p=O,R=!1}function Ce(O,_e){O.side===Kt?W(i.CULL_FACE):ee(i.CULL_FACE);let se=O.side===Wt;_e&&(se=!se),Be(se),O.blending===ts&&O.transparent===!1?ve(tn):ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let xe=O.stencilWrite;o.setTest(xe),xe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),he(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function $e(O){O!==Fc?(ee(i.CULL_FACE),O!==L&&(O===nl?i.cullFace(i.BACK):O===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),L=O}function ct(O){O!==V&&(B&&i.lineWidth(O),V=O)}function he(O,_e,se){O?(ee(i.POLYGON_OFFSET_FILL),(D!==_e||k!==se)&&(D=_e,k=se,a.getReversed()&&(_e=-_e),i.polygonOffset(_e,se))):W(i.POLYGON_OFFSET_FILL)}function me(O){O?ee(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function fe(O){O===void 0&&(O=i.TEXTURE0+K-1),Y!==O&&(i.activeTexture(O),Y=O)}function I(O,_e,se){se===void 0&&(Y===null?se=i.TEXTURE0+K-1:se=Y);let xe=Q[se];xe===void 0&&(xe={type:void 0,texture:void 0},Q[se]=xe),(xe.type!==O||xe.texture!==_e)&&(Y!==se&&(i.activeTexture(se),Y=se),i.bindTexture(O,_e||J[O]),xe.type=O,xe.texture=_e)}function Ye(){let O=Q[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function g(){try{i.texSubImage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function N(){try{i.texSubImage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function U(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function G(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function ae(){try{i.texStorage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function ue(){try{i.texStorage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function j(){try{i.texImage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function ie(){try{i.texImage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function pe(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Ue(O,_e){d[O]!==_e&&(i.pixelStorei(O,_e),d[O]=_e)}function ye(O){We.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),We.copy(O))}function ge(O){Le.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Le.copy(O))}function Fe(O,_e){let se=c.get(_e);se===void 0&&(se=new WeakMap,c.set(_e,se));let xe=se.get(O);xe===void 0&&(xe=i.getUniformBlockIndex(_e,O.name),se.set(O,xe))}function ke(O,_e){let xe=c.get(_e).get(O);l.get(_e)!==xe&&(i.uniformBlockBinding(_e,xe,O.__bindingPointIndex),l.set(_e,xe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,Q={},h={},m=new WeakMap,v=[],T=null,f=!1,p=null,w=null,A=null,_=null,y=null,E=null,C=null,x=new Oe(0,0,0),S=0,R=!1,P=null,L=null,V=null,D=null,k=null,We.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:W,bindFramebuffer:ne,drawBuffers:te,useProgram:oe,setBlending:ve,setMaterial:Ce,setFlipSided:Be,setCullFace:$e,setLineWidth:ct,setPolygonOffset:he,setScissorTest:me,activeTexture:fe,bindTexture:I,unbindTexture:Ye,compressedTexImage2D:et,compressedTexImage3D:M,texImage2D:j,texImage3D:ie,pixelStorei:Ue,getParameter:pe,updateUBOMapping:Fe,uniformBlockBinding:ke,texStorage2D:ae,texStorage3D:ue,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:U,compressedTexSubImage3D:G,scissor:ye,viewport:ge,reset:qe}}function s0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap,d=new Set,h,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(M,g){return v?new OffscreenCanvas(M,g):ws("canvas")}function f(M,g,N){let U=1,G=et(M);if((G.width>N||G.height>N)&&(U=N/Math.max(G.width,G.height)),U<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let ae=Math.floor(U*G.width),ue=Math.floor(U*G.height);h===void 0&&(h=T(ae,ue));let j=g?T(ae,ue):h;return j.width=ae,j.height=ue,j.getContext("2d").drawImage(M,0,0,ae,ue),He("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+ae+"x"+ue+")."),j}else return"data"in M&&He("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),M;return M}function p(M){return M.generateMipmaps}function w(M){i.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(M,g,N,U,G,ae=!1){if(M!==null){if(i[M]!==void 0)return i[M];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ue;U&&(ue=e.get("EXT_texture_norm16"),ue||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===i.RED&&(N===i.FLOAT&&(j=i.R32F),N===i.HALF_FLOAT&&(j=i.R16F),N===i.UNSIGNED_BYTE&&(j=i.R8),N===i.UNSIGNED_SHORT&&ue&&(j=ue.R16_EXT),N===i.SHORT&&ue&&(j=ue.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.R8UI),N===i.UNSIGNED_SHORT&&(j=i.R16UI),N===i.UNSIGNED_INT&&(j=i.R32UI),N===i.BYTE&&(j=i.R8I),N===i.SHORT&&(j=i.R16I),N===i.INT&&(j=i.R32I)),g===i.RG&&(N===i.FLOAT&&(j=i.RG32F),N===i.HALF_FLOAT&&(j=i.RG16F),N===i.UNSIGNED_BYTE&&(j=i.RG8),N===i.UNSIGNED_SHORT&&ue&&(j=ue.RG16_EXT),N===i.SHORT&&ue&&(j=ue.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RG8UI),N===i.UNSIGNED_SHORT&&(j=i.RG16UI),N===i.UNSIGNED_INT&&(j=i.RG32UI),N===i.BYTE&&(j=i.RG8I),N===i.SHORT&&(j=i.RG16I),N===i.INT&&(j=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RGB8UI),N===i.UNSIGNED_SHORT&&(j=i.RGB16UI),N===i.UNSIGNED_INT&&(j=i.RGB32UI),N===i.BYTE&&(j=i.RGB8I),N===i.SHORT&&(j=i.RGB16I),N===i.INT&&(j=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),N===i.UNSIGNED_INT&&(j=i.RGBA32UI),N===i.BYTE&&(j=i.RGBA8I),N===i.SHORT&&(j=i.RGBA16I),N===i.INT&&(j=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&ue&&(j=ue.RGB16_EXT),N===i.SHORT&&ue&&(j=ue.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),g===i.RGBA){let ie=ae?Es:Ke.getTransfer(G);N===i.FLOAT&&(j=i.RGBA32F),N===i.HALF_FLOAT&&(j=i.RGBA16F),N===i.UNSIGNED_BYTE&&(j=ie===nt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ue&&(j=ue.RGBA16_EXT),N===i.SHORT&&ue&&(j=ue.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(M,g){let N;return M?g===null||g===dn||g===is?N=i.DEPTH24_STENCIL8:g===fn?N=i.DEPTH32F_STENCIL8:g===ns&&(N=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===dn||g===is?N=i.DEPTH_COMPONENT24:g===fn?N=i.DEPTH_COMPONENT32F:g===ns&&(N=i.DEPTH_COMPONENT16),N}function E(M,g){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==It&&M.minFilter!==Ut?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function C(M){let g=M.target;g.removeEventListener("dispose",C),S(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(M){let g=M.target;g.removeEventListener("dispose",x),P(g)}function S(M){let g=n.get(M);if(g.__webglInit===void 0)return;let N=M.source,U=m.get(N);if(U){let G=U[g.__cacheKey];G.usedTimes--,G.usedTimes===0&&R(M),Object.keys(U).length===0&&m.delete(N)}n.remove(M)}function R(M){let g=n.get(M);i.deleteTexture(g.__webglTexture);let N=M.source,U=m.get(N);delete U[g.__cacheKey],a.memory.textures--}function P(M){let g=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(g.__webglFramebuffer[U]))for(let G=0;G<g.__webglFramebuffer[U].length;G++)i.deleteFramebuffer(g.__webglFramebuffer[U][G]);else i.deleteFramebuffer(g.__webglFramebuffer[U]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[U])}else{if(Array.isArray(g.__webglFramebuffer))for(let U=0;U<g.__webglFramebuffer.length;U++)i.deleteFramebuffer(g.__webglFramebuffer[U]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let U=0;U<g.__webglColorRenderbuffer.length;U++)g.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[U]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=M.textures;for(let U=0,G=N.length;U<G;U++){let ae=n.get(N[U]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(N[U])}n.remove(M)}let L=0;function V(){L=0}function D(){return L}function k(M){L=M}function K(){let M=L;return M>=s.maxTextures&&He("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,M}function B(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function Z(M,g){let N=n.get(M);if(M.isVideoTexture&&I(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){let U=M.image;if(U===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{W(N,M,g);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function H(M,g){let N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){W(N,M,g);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function Y(M,g){let N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){W(N,M,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function Q(M,g){let N=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){ne(N,M,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let de={[Xr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},le={[It]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},We={[ch]:i.NEVER,[ph]:i.ALWAYS,[hh]:i.LESS,[ao]:i.LEQUAL,[uh]:i.EQUAL,[oo]:i.GEQUAL,[dh]:i.GREATER,[fh]:i.NOTEQUAL};function Le(M,g){if(g.type===fn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ut||g.magFilter===ba||g.magFilter===Ks||g.magFilter===ii||g.minFilter===Ut||g.minFilter===ba||g.minFilter===Ks||g.minFilter===ii)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,de[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,de[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,de[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,le[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,le[g.minFilter]),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,We[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===It||g.minFilter!==Ks&&g.minFilter!==ii||g.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Te(M,g){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",C));let U=g.source,G=m.get(U);G===void 0&&(G={},m.set(U,G));let ae=B(g);if(ae!==M.__cacheKey){G[ae]===void 0&&(G[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),G[ae].usedTimes++;let ue=G[M.__cacheKey];ue!==void 0&&(G[M.__cacheKey].usedTimes--,ue.usedTimes===0&&R(g)),M.__cacheKey=ae,M.__webglTexture=G[ae].texture}return N}function J(M,g,N){return Math.floor(Math.floor(M/N)/g)}function ee(M,g,N,U){let ae=M.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,U,g.data);else{ae.sort((Ue,ye)=>Ue.start-ye.start);let ue=0;for(let Ue=1;Ue<ae.length;Ue++){let ye=ae[ue],ge=ae[Ue],Fe=ye.start+ye.count,ke=J(ge.start,g.width,4),qe=J(ye.start,g.width,4);ge.start<=Fe+1&&ke===qe&&J(ge.start+ge.count-1,g.width,4)===ke?ye.count=Math.max(ye.count,ge.start+ge.count-ye.start):(++ue,ae[ue]=ge)}ae.length=ue+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ue=0,ye=ae.length;Ue<ye;Ue++){let ge=ae[Ue],Fe=Math.floor(ge.start/4),ke=Math.ceil(ge.count/4),qe=Fe%g.width,O=Math.floor(Fe/g.width),_e=ke,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,qe,O,_e,se,N,U,g.data)}M.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function W(M,g,N){let U=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(U=i.TEXTURE_3D);let G=Te(M,g),ae=g.source;t.bindTexture(U,M.__webglTexture,i.TEXTURE0+N);let ue=n.get(ae);if(ae.version!==ue.__version||G===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let se=Ke.getPrimaries(Ke.workingColorSpace),xe=g.colorSpace===Fn?null:Ke.getPrimaries(g.colorSpace),Ee=g.colorSpace===Fn||se===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ie=f(g.image,!1,s.maxTextureSize);ie=Ye(g,ie);let pe=r.convert(g.format,g.colorSpace),Ue=r.convert(g.type),ye=_(g.internalFormat,pe,Ue,g.normalized,g.colorSpace,g.isVideoTexture);Le(U,g);let ge,Fe=g.mipmaps,ke=g.isVideoTexture!==!0,qe=ue.__version===void 0||G===!0,O=ae.dataReady,_e=E(g,ie);if(g.isDepthTexture)ye=y(g.format===si,g.type),qe&&(ke?t.texStorage2D(i.TEXTURE_2D,1,ye,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ye,ie.width,ie.height,0,pe,Ue,null));else if(g.isDataTexture)if(Fe.length>0){ke&&qe&&t.texStorage2D(i.TEXTURE_2D,_e,ye,Fe[0].width,Fe[0].height);for(let se=0,xe=Fe.length;se<xe;se++)ge=Fe[se],ke?O&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,pe,Ue,ge.data):t.texImage2D(i.TEXTURE_2D,se,ye,ge.width,ge.height,0,pe,Ue,ge.data);g.generateMipmaps=!1}else ke?(qe&&t.texStorage2D(i.TEXTURE_2D,_e,ye,ie.width,ie.height),O&&ee(g,ie,pe,Ue)):t.texImage2D(i.TEXTURE_2D,0,ye,ie.width,ie.height,0,pe,Ue,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ke&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ye,Fe[0].width,Fe[0].height,ie.depth);for(let se=0,xe=Fe.length;se<xe;se++)if(ge=Fe[se],g.format!==nn)if(pe!==null)if(ke){if(O)if(g.layerUpdates.size>0){let Ee=Sl(ge.width,ge.height,g.format,g.type);for(let ce of g.layerUpdates){let ze=ge.data.subarray(ce*Ee/ge.data.BYTES_PER_ELEMENT,(ce+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ce,ge.width,ge.height,1,pe,ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ie.depth,pe,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ye,ge.width,ge.height,ie.depth,0,ge.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ie.depth,pe,Ue,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ye,ge.width,ge.height,ie.depth,0,pe,Ue,ge.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{ke&&qe&&t.texStorage2D(i.TEXTURE_2D,_e,ye,Fe[0].width,Fe[0].height);for(let se=0,xe=Fe.length;se<xe;se++)ge=Fe[se],g.format!==nn?pe!==null?ke?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,pe,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ye,ge.width,ge.height,0,ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?O&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,pe,Ue,ge.data):t.texImage2D(i.TEXTURE_2D,se,ye,ge.width,ge.height,0,pe,Ue,ge.data)}else if(g.isDataArrayTexture)if(ke){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ye,ie.width,ie.height,ie.depth),O)if(g.layerUpdates.size>0){let se=Sl(ie.width,ie.height,g.format,g.type);for(let xe of g.layerUpdates){let Ee=ie.data.subarray(xe*se/ie.data.BYTES_PER_ELEMENT,(xe+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ie.width,ie.height,1,pe,Ue,Ee)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ue,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ie.width,ie.height,ie.depth,0,pe,Ue,ie.data);else if(g.isData3DTexture)ke?(qe&&t.texStorage3D(i.TEXTURE_3D,_e,ye,ie.width,ie.height,ie.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ue,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ie.width,ie.height,ie.depth,0,pe,Ue,ie.data);else if(g.isFramebufferTexture){if(qe)if(ke)t.texStorage2D(i.TEXTURE_2D,_e,ye,ie.width,ie.height);else{let se=ie.width,xe=ie.height;for(let Ee=0;Ee<_e;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,ye,se,xe,0,pe,Ue,null),se>>=1,xe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ie.parentNode!==se){se.appendChild(ie),d.add(g),se.onpaint=xe=>{let Ee=xe.changedElements;for(let ce of d)Ee.includes(ce.image)&&(ce.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Ee=i.RGBA,ce=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,ce,ze,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(ke&&qe){let se=et(Fe[0]);t.texStorage2D(i.TEXTURE_2D,_e,ye,se.width,se.height)}for(let se=0,xe=Fe.length;se<xe;se++)ge=Fe[se],ke?O&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,pe,Ue,ge):t.texImage2D(i.TEXTURE_2D,se,ye,pe,Ue,ge);g.generateMipmaps=!1}else if(ke){if(qe){let se=et(ie);t.texStorage2D(i.TEXTURE_2D,_e,ye,se.width,se.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ue,ie)}else t.texImage2D(i.TEXTURE_2D,0,ye,pe,Ue,ie);p(g)&&w(U),ue.__version=ae.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ne(M,g,N){if(g.image.length!==6)return;let U=Te(M,g),G=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let ae=n.get(G);if(G.version!==ae.__version||U===!0){t.activeTexture(i.TEXTURE0+N);let ue=Ke.getPrimaries(Ke.workingColorSpace),j=g.colorSpace===Fn?null:Ke.getPrimaries(g.colorSpace),ie=g.colorSpace===Fn||ue===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let pe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ue=g.image[0]&&g.image[0].isDataTexture,ye=[];for(let ce=0;ce<6;ce++)!pe&&!Ue?ye[ce]=f(g.image[ce],!0,s.maxCubemapSize):ye[ce]=Ue?g.image[ce].image:g.image[ce],ye[ce]=Ye(g,ye[ce]);let ge=ye[0],Fe=r.convert(g.format,g.colorSpace),ke=r.convert(g.type),qe=_(g.internalFormat,Fe,ke,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,_e=ae.__version===void 0||U===!0,se=G.dataReady,xe=E(g,ge);Le(i.TEXTURE_CUBE_MAP,g);let Ee;if(pe){O&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,ge.width,ge.height);for(let ce=0;ce<6;ce++){Ee=ye[ce].mipmaps;for(let ze=0;ze<Ee.length;ze++){let De=Ee[ze];g.format!==nn?Fe!==null?O?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze,0,0,De.width,De.height,Fe,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze,qe,De.width,De.height,0,De.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze,0,0,De.width,De.height,Fe,ke,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze,qe,De.width,De.height,0,Fe,ke,De.data)}}}else{if(Ee=g.mipmaps,O&&_e){Ee.length>0&&xe++;let ce=et(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ue){O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ye[ce].width,ye[ce].height,Fe,ke,ye[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,ye[ce].width,ye[ce].height,0,Fe,ke,ye[ce].data);for(let ze=0;ze<Ee.length;ze++){let ht=Ee[ze].image[ce].image;O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze+1,0,0,ht.width,ht.height,Fe,ke,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze+1,qe,ht.width,ht.height,0,Fe,ke,ht.data)}}else{O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Fe,ke,ye[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Fe,ke,ye[ce]);for(let ze=0;ze<Ee.length;ze++){let De=Ee[ze];O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze+1,0,0,Fe,ke,De.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze+1,qe,Fe,ke,De.image[ce])}}}p(g)&&w(i.TEXTURE_CUBE_MAP),ae.__version=G.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function te(M,g,N,U,G,ae){let ue=r.convert(N.format,N.colorSpace),j=r.convert(N.type),ie=_(N.internalFormat,ue,j,N.normalized,N.colorSpace),pe=n.get(g),Ue=n.get(N);if(Ue.__renderTarget=g,!pe.__hasExternalTextures){let ye=Math.max(1,g.width>>ae),ge=Math.max(1,g.height>>ae);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,ae,ie,ye,ge,g.depth,0,ue,j,null):t.texImage2D(G,ae,ie,ye,ge,0,ue,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,G,Ue.__webglTexture,0,me(g)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,G,Ue.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(M,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer){let U=g.depthTexture,G=U&&U.isDepthTexture?U.type:null,ae=y(g.stencilBuffer,G),ue=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(g),ae,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(g),ae,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ae,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,M)}else{let U=g.textures;for(let G=0;G<U.length;G++){let ae=U[G],ue=r.convert(ae.format,ae.colorSpace),j=r.convert(ae.type),ie=_(ae.internalFormat,ue,j,ae.normalized,ae.colorSpace);fe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(g),ie,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(M,g,N){let U=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=n.get(g.depthTexture);if(G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),U){if(G.__webglInit===void 0&&(G.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),G.__webglTexture===void 0){G.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Le(i.TEXTURE_CUBE_MAP,g.depthTexture);let pe=r.convert(g.depthTexture.format),Ue=r.convert(g.depthTexture.type),ye;g.depthTexture.format===Sn?ye=i.DEPTH_COMPONENT24:g.depthTexture.format===si&&(ye=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,g.width,g.height,0,pe,Ue,null)}}else Z(g.depthTexture,0);let ae=G.__webglTexture,ue=me(g),j=U?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,ie=g.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Sn)fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,ae,0);else if(g.depthTexture.format===si)fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(M){let g=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){let U=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),U){let G=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,U.removeEventListener("dispose",G)};U.addEventListener("dispose",G),g.__depthDisposeCallback=G}g.__boundDepthTexture=U}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let U=0;U<6;U++)Ve(g.__webglFramebuffer[U],M,U);else{let U=M.texture.mipmaps;U&&U.length>0?Ve(g.__webglFramebuffer[0],M,0):Ve(g.__webglFramebuffer,M,0)}else if(N){g.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[U]),g.__webglDepthbuffer[U]===void 0)g.__webglDepthbuffer[U]=i.createRenderbuffer(),oe(g.__webglDepthbuffer[U],M,!1);else{let G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ae)}}else{let U=M.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),oe(g.__webglDepthbuffer,M,!1);else{let G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(M,g,N){let U=n.get(M);g!==void 0&&te(U.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&re(M)}function Ce(M){let g=M.texture,N=n.get(M),U=n.get(g);M.addEventListener("dispose",x);let G=M.textures,ae=M.isWebGLCubeRenderTarget===!0,ue=G.length>1;if(ue||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=g.version,a.memory.textures++),ae){N.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[j]=[];for(let ie=0;ie<g.mipmaps.length;ie++)N.__webglFramebuffer[j][ie]=i.createFramebuffer()}else N.__webglFramebuffer[j]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)N.__webglFramebuffer[j]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ue)for(let j=0,ie=G.length;j<ie;j++){let pe=n.get(G[j]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&fe(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let j=0;j<G.length;j++){let ie=G[j];N.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[j]);let pe=r.convert(ie.format,ie.colorSpace),Ue=r.convert(ie.type),ye=_(ie.internalFormat,pe,Ue,ie.normalized,ie.colorSpace,M.isXRRenderTarget===!0),ge=me(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ye,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,N.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),Le(i.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)te(N.__webglFramebuffer[j][ie],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else te(N.__webglFramebuffer[j],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let j=0,ie=G.length;j<ie;j++){let pe=G[j],Ue=n.get(pe),ye=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ye=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ue.__webglTexture),Le(ye,pe),te(N.__webglFramebuffer,M,pe,i.COLOR_ATTACHMENT0+j,ye,0),p(pe)&&w(ye)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(j=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,U.__webglTexture),Le(j,g),g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)te(N.__webglFramebuffer[ie],M,g,i.COLOR_ATTACHMENT0,j,ie);else te(N.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,j,0);p(g)&&w(j),t.unbindTexture()}M.depthBuffer&&re(M)}function Be(M){let g=M.textures;for(let N=0,U=g.length;N<U;N++){let G=g[N];if(p(G)){let ae=A(M),ue=n.get(G).__webglTexture;t.bindTexture(ae,ue),w(ae),t.unbindTexture()}}}let $e=[],ct=[];function he(M){if(M.samples>0){if(fe(M)===!1){let g=M.textures,N=M.width,U=M.height,G=i.COLOR_BUFFER_BIT,ae=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(M),j=g.length>1;if(j)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let ie=M.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let Ue=n.get(g[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,N,U,0,0,N,U,G,i.NEAREST),l===!0&&($e.length=0,ct.length=0,$e.push(i.COLOR_ATTACHMENT0+pe),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&($e.push(ae),ct.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let Ue=n.get(g[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let g=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function me(M){return Math.min(s.maxSamples,M.samples)}function fe(M){let g=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(M){let g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function Ye(M,g){let N=M.colorSpace,U=M.format,G=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==bs&&N!==Fn&&(Ke.getTransfer(N)===nt?(U!==nn||G!==$t)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",N)),g}function et(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=ve,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=te,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function r0(i,e){function t(n,s=Fn){let r,a=Ke.getTransfer(s);if(n===$t)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cl)return i.BYTE;if(n===hl)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Et)return i.HALF_FLOAT;if(n===fl)return i.ALPHA;if(n===pl)return i.RGB;if(n===nn)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===Aa)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===Ca)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===$s||n===Qs||n===js||n===er)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Pa||n===La||n===Da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===tr||n===za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Na||n===Ua)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oa)return r.COMPRESSED_R11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tr)return r.COMPRESSED_RG11_EAC;if(n===za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Va||n===ka||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===Ka||n===$a||n===Qa||n===ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===to||n===no)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===so||n===nr||n===ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function c0(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,vl(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,w,A,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,_)):p.isMeshMatcapMaterial?(r(f,p),v(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),T(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,w,A):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Wt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Wt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let w=e.get(p),A=w.envMap,_=w.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(l0.makeRotationFromEuler(_)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Kh),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,w,A){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=A*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function T(f,p){let w=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let E=y.program;n.uniformBlockBinding(_,E)}function c(_,y){let E=s[_.id];E===void 0&&(f(_),E=u(_),s[_.id]=E,_.addEventListener("dispose",w));let C=y.program;n.updateUBOMapping(_,C);let x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){let y=d();_.__bindingPointIndex=y;let E=i.createBuffer(),C=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let y=s[_.id],E=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,S=E.length;x<S;x++){let R=E[x];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)m(R[P],x,P,C);else m(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(_,y,E,C){if(T(_,y,E,C)===!0){let x=_.__offset,S=_.value;if(Array.isArray(S)){let R=0;for(let P=0;P<S.length;P++){let L=S[P],V=p(L);v(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(S,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function v(_,y,E){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,E)}function T(_,y,E,C){let x=_.value,S=y+"_"+E;if(C[S]===void 0)return typeof x=="number"||typeof x=="boolean"?C[S]=x:ArrayBuffer.isView(x)?C[S]=x.slice():C[S]=x.clone(),!0;{let R=C[S];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function f(_){let y=_.uniforms,E=0,C=16;for(let S=0,R=y.length;S<R;S++){let P=Array.isArray(y[S])?y[S]:[y[S]];for(let L=0,V=P.length;L<V;L++){let D=P[L],k=Array.isArray(D.value)?D.value:[D.value];for(let K=0,B=k.length;K<B;K++){let Z=k[K],H=p(Z),Y=E%C,Q=Y%H.boundary,de=Y+Q;E+=Q,de!==0&&C-de<H.storage&&(E+=C-de),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=H.storage}}}let x=E%C;return x>0&&(E+=C-x),_.__size=E,_.__cache={},this}function p(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):He("WebGLRenderer: Unsupported uniform value type.",_),y}function w(_){let y=_.target;y.removeEventListener("dispose",w);let E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function A(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}function d0(){return wn===null&&(wn=new jr(u0,16,16,ri,Et),wn.name="DFG_LUT",wn.minFilter=Ut,wn.magFilter=Ut,wn.wrapS=Mn,wn.wrapT=Mn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}var Ed,Td,wd,Ad,Cd,Rd,Id,Pd,Ld,Dd,Nd,Ud,Fd,Od,Bd,zd,Vd,kd,Hd,Gd,Wd,Xd,qd,Yd,Zd,Jd,Kd,$d,Qd,jd,ef,tf,nf,sf,rf,af,of,lf,cf,hf,uf,df,ff,pf,mf,gf,_f,xf,vf,yf,Mf,Sf,bf,Ef,Tf,wf,Af,Cf,Rf,If,Pf,Lf,Df,Nf,Uf,Ff,Of,Bf,zf,Vf,kf,Hf,Gf,Wf,Xf,qf,Yf,Zf,Jf,Kf,$f,Qf,jf,ep,tp,np,ip,sp,rp,ap,op,lp,cp,hp,up,dp,fp,pp,mp,gp,_p,xp,vp,yp,Mp,Sp,bp,Ep,Tp,wp,Ap,Cp,Rp,Ip,Pp,Lp,Dp,Np,Up,Fp,Op,Bp,zp,Vp,kp,Hp,Gp,Wp,Xp,qp,Yp,Zp,Jp,Kp,$p,Qp,jp,em,tm,nm,im,sm,Je,Me,An,lo,rm,Xh,rs,um,dm,fm,ir,bh,El,Tl,wl,Al,pm,Si,ho,uo,Tm,qh,Il,Yh,Zh,Jh,Ah,Ch,Rh,Ih,Ph,Pl,Ll,Dl,Cl,as,pg,mg,Nh,vg,co,Tg,wg,Cg,Ig,Lg,Ng,Fg,Vg,Ul,Fl,Zg,Qg,jg,e0,t0,Gh,sr,Rl,a0,o0,Ol,Bl,l0,Kh,u0,wn,fo,Cn=Pt(()=>{bl();bl();Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ef=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Ed,alphahash_pars_fragment:Td,alphamap_fragment:wd,alphamap_pars_fragment:Ad,alphatest_fragment:Cd,alphatest_pars_fragment:Rd,aomap_fragment:Id,aomap_pars_fragment:Pd,batching_pars_vertex:Ld,batching_vertex:Dd,begin_vertex:Nd,beginnormal_vertex:Ud,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:kd,clipping_planes_vertex:Hd,color_fragment:Gd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:Kd,displacementmap_vertex:$d,emissivemap_fragment:Qd,emissivemap_pars_fragment:jd,colorspace_fragment:ef,colorspace_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:af,envmap_physical_pars_fragment:_f,envmap_vertex:of,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:hf,fog_pars_fragment:uf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:xf,lights_toon_pars_fragment:vf,lights_phong_fragment:yf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Sf,lights_physical_pars_fragment:bf,lights_fragment_begin:Ef,lights_fragment_maps:Tf,lights_fragment_end:wf,lightprobes_pars_fragment:Af,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:Nf,map_particle_pars_fragment:Uf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Of,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:Vf,morphtarget_pars_vertex:kf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Qf,opaque_fragment:jf,packing:ep,premultiplied_alpha_fragment:tp,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:hp,skinbase_vertex:up,skinning_pars_vertex:dp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:_p,tonemapping_pars_fragment:xp,transmission_fragment:vp,transmission_pars_fragment:yp,uv_pars_fragment:Mp,uv_pars_vertex:Sp,uv_vertex:bp,worldpos_vertex:Ep,background_vert:Tp,background_frag:wp,backgroundCube_vert:Ap,backgroundCube_frag:Cp,cube_vert:Rp,cube_frag:Ip,depth_vert:Pp,depth_frag:Lp,distance_vert:Dp,distance_frag:Np,equirect_vert:Up,equirect_frag:Fp,linedashed_vert:Op,linedashed_frag:Bp,meshbasic_vert:zp,meshbasic_frag:Vp,meshlambert_vert:kp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Zp,meshphysical_vert:Jp,meshphysical_frag:Kp,meshtoon_vert:$p,meshtoon_frag:Qp,points_vert:jp,points_frag:em,shadow_vert:tm,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},Me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},An={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};An.physical={uniforms:zt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};lo={r:0,b:0,g:0},rm=new mt,Xh=new Xe;Xh.set(-1,0,0,0,1,0,0,0,1);rs=4,um=6,dm=20,fm=256,ir=new _i,bh=new Oe,El=null,Tl=0,wl=0,Al=!1,pm=new z,Si=new z,ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=pm}=r;El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Tl,wl),this._renderer.xr.enabled=Al,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Et,format:nn,colorSpace:bs,depthBuffer:!1},s=Eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mm(r)),this._blurMaterial=_m(r,e,t),this._ggxMaterial=gm(r,e,t)}return s}_compileMaterial(e){let t=new xt(new Mt,e);this._renderer.compile(t,ir)}_sceneToCubeUV(e,t,n,s,r){let l=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(bh),d.toneMapping=un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Ki,new mi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,f=T.material,p=!1,w=e.background;w?w.isColor&&(f.color.copy(w),e.background=null,p=!0):(f.color.copy(bh),p=!0);for(let A=0;A<6;A++){let _=A%3;_===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):_===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let y=this._cubeSize;ss(s,_*y,A>2?y:0,y,y),d.setRenderTarget(s),p&&d.render(T,l),d.render(e,l)}d.toneMapping=m,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ni||e.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ir)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,m=d*h,{_lodMax:v}=this,T=this._sizeLods[n],f=3*T*(n>v-rs?n-v+rs:0),p=4*(this._cubeSize-T);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,ss(r,f,p,3*T,2*T),s.setRenderTarget(r),s.render(o,ir),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,ss(e,f,p,3*T,2*T),s.setRenderTarget(e),s.render(o,ir)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-rs?s-this._lodMax+rs:0),h=4*(this._cubeSize-u);ss(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,ir)}};uo=class extends vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ns(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ki(5,5,5),r=new rt({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:tn});r.uniforms.tEquirect.value=t;let a=new xt(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=Ut),new va(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};Tm={[Gs]:"LINEAR_TONE_MAPPING",[Ws]:"REINHARD_TONE_MAPPING",[Xs]:"CINEON_TONE_MAPPING",[vi]:"ACES_FILMIC_TONE_MAPPING",[Ys]:"AGX_TONE_MAPPING",[Zs]:"NEUTRAL_TONE_MAPPING",[qs]:"CUSTOM_TONE_MAPPING"};qh=new Ht,Il=new $n(1,1),Yh=new Cs,Zh=new $r,Jh=new Ns,Ah=[],Ch=[],Rh=new Float32Array(16),Ih=new Float32Array(9),Ph=new Float32Array(4);Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}},Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dg(t.type)}},Dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Cl=/(\w+)(\])?(\[|\.)?/g;as=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);fg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};pg=37297,mg=0;Nh=new Xe;vg={[Gs]:"Linear",[Ws]:"Reinhard",[Xs]:"Cineon",[vi]:"ACESFilmic",[Ys]:"AgX",[Zs]:"Neutral",[qs]:"Custom"};co=new z;Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;wg=new Map;Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ig={[Hs]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};Lg={[ni]:"ENVMAP_TYPE_CUBE",[yi]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE_UV"};Ng={[yi]:"ENVMAP_MODE_REFRACTION"};Fg={[ol]:"ENVMAP_BLENDING_MULTIPLY",[ih]:"ENVMAP_BLENDING_MIX",[sh]:"ENVMAP_BLENDING_ADD"};Vg=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fl(e),t.set(e,n)),n}},Fl=class{constructor(e){this.id=Vg++,this.code=e,this.usedTimes=0}};Zg=0;Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,e0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],t0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Gh=new mt,sr=new z,Rl=new z;a0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rt({vertexShader:a0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,v=null,T=typeof XRWebGLBinding<"u",f=new Ol,p={},w=t.getContextAttributes(),A=null,_=null,y=[],E=[],C=new Pe,x=null,S=null,R=new Dt;R.viewport=new _t;let P=new Dt;P.viewport=new _t;let L=[R,P],V=new ya,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=y[J];return ee===void 0&&(ee=new Yi,y[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=y[J];return ee===void 0&&(ee=new Yi,y[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=y[J];return ee===void 0&&(ee=new Yi,y[J]=ee),ee.getHandSpace()};function K(J){let ee=E.indexOf(J.inputSource);if(ee===-1)return;let W=y[ee];W!==void 0&&(W.update(J.inputSource,J.frame,c||a),W.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<y.length;J++){let ee=E[J];ee!==null&&(E[J]=null,y[J].disconnect(ee))}D=null,k=null,f.reset();for(let J in p)delete p[J];if(e.setRenderTarget(A),m=null,h=null,d=null,s=null,_=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),S!==null){let J=S.camera;J.fov=S.fov,J.zoom=S.zoom,J.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&T&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,ne=null,te=null;w.depth&&(te=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=w.stencil?si:Sn,ne=w.stencil?is:dn);let oe={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(oe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new vt(h.textureWidth,h.textureHeight,{format:nn,type:$t,depthTexture:new $n(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let W={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new vt(m.framebufferWidth,m.framebufferHeight,{format:nn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function Z(J){for(let ee=0;ee<J.removed.length;ee++){let W=J.removed[ee],ne=E.indexOf(W);ne>=0&&(E[ne]=null,y[ne].disconnect(W))}for(let ee=0;ee<J.added.length;ee++){let W=J.added[ee],ne=E.indexOf(W);if(ne===-1){for(let oe=0;oe<y.length;oe++)if(oe>=E.length){E.push(W),ne=oe;break}else if(E[oe]===null){E[oe]=W,ne=oe;break}if(ne===-1)break}let te=y[ne];te&&te.connect(W)}}let H=new z,Y=new z;function Q(J,ee,W){H.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(W.matrixWorld);let ne=H.distanceTo(Y),te=ee.projectionMatrix.elements,oe=W.projectionMatrix.elements,Ve=te[14]/(te[10]-1),re=te[14]/(te[10]+1),ve=(te[9]+1)/te[5],Ce=(te[9]-1)/te[5],Be=(te[8]-1)/te[0],$e=(oe[8]+1)/oe[0],ct=Ve*Be,he=Ve*$e,me=ne/(-Be+$e),fe=me*-Be;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(fe),J.translateZ(me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),te[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let I=Ve+me,Ye=re+me,et=ct-fe,M=he+(ne-fe),g=ve*re/Ye*I,N=Ce*re/Ye*I;J.projectionMatrix.makePerspective(et,M,g,N,I,Ye),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function de(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ee=J.near,W=J.far;f.texture!==null&&(f.depthNear>0&&(ee=f.depthNear),f.depthFar>0&&(W=f.depthFar)),V.near=P.near=R.near=ee,V.far=P.far=R.far=W,(D!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,k=V.far),V.layers.mask=J.layers.mask|6,R.layers.mask=V.layers.mask&-5,P.layers.mask=V.layers.mask&-3;let ne=J.parent,te=V.cameras;de(V,ne);for(let oe=0;oe<te.length;oe++)de(te[oe],ne);te.length===2?Q(V,R,P):V.projectionMatrix.copy(R.projectionMatrix),S===null&&J.isPerspectiveCamera&&(S={camera:J,fov:J.fov,zoom:J.zoom}),le(J,V,ne)};function le(J,ee,W){W===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(W.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Zr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(V)},this.getCameraTexture=function(J){return p[J]};let We=null;function Le(J,ee){if(u=ee.getViewerPose(c||a),v=ee,u!==null){let W=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ne=!1;W.length!==V.cameras.length&&(V.cameras.length=0,ne=!0);for(let re=0;re<W.length;re++){let ve=W[re],Ce=null;if(m!==null)Ce=m.getViewport(ve);else{let $e=d.getViewSubImage(h,ve);Ce=$e.viewport,re===0&&(e.setRenderTargetTextures(_,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(_))}let Be=L[re];Be===void 0&&(Be=new Dt,Be.layers.enable(re),Be.viewport=new _t,L[re]=Be),Be.matrix.fromArray(ve.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ve.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),re===0&&(V.matrix.copy(Be.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ne===!0&&V.cameras.push(Be)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){d=n.getBinding();let re=d.getDepthInformation(W[0]);re&&re.isValid&&re.texture&&f.init(re,s.renderState)}if(te&&te.includes("camera-access")&&T){e.state.unbindTexture(),d=n.getBinding();for(let re=0;re<W.length;re++){let ve=W[re].camera;if(ve){let Ce=p[ve];Ce||(Ce=new Fs,p[ve]=Ce);let Be=d.getCameraImage(ve);Ce.sourceTexture=Be}}}}for(let W=0;W<y.length;W++){let ne=E[W],te=y[W];ne!==null&&te!==void 0&&te.update(ne,ee,c||a)}We&&We(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}let Te=new Wh;Te.setAnimationLoop(Le),this.setAnimationLoop=function(J){We=J},this.dispose=function(){}}},l0=new mt,Kh=new Xe;Kh.set(-1,0,0,0,1,0,0,0,1);u0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wn=null;fo=class{constructor(e={}){let{canvas:t=mh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=$t}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let T=m,f=new Set([Ra,Ca,Aa]),p=new Set([$t,dn,ns,is,Ta,wa]),w=new Uint32Array(4),A=new Int32Array(4),_=new z,y=null,E=null,C=[],x=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,V=null,D=null,k=null;this._outputColorSpace=Lt;let K=0,B=0,Z=null,H=-1,Y=null,Q=new _t,de=new _t,le=null,We=new Oe(0),Le=0,Te=t.width,J=t.height,ee=1,W=null,ne=null,te=new _t(0,0,Te,J),oe=new _t(0,0,Te,J),Ve=!1,re=new Ls,ve=!1,Ce=!1,Be=new mt,$e=new z,ct=new _t,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function fe(){return Z===null?ee:1}let I=n;function Ye(b,F){return t.getContext(b,F)}let et,M,g,N,U,G,ae,ue,j,ie,pe,Ue,ye,ge,Fe,ke,qe,O,_e,se,xe,Ee,ce;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",rn,!1),I===null){let F="webgl2";if(I=Ye(F,b),I===null)throw Ye(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(b){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Ge("WebGLRenderer: "+b.message),b}function ze(){et=new vm(I),et.init(),xe=new r0(I,et),M=new cm(I,et,e,xe),g=new i0(I,et),M.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),V=I.createFramebuffer(),D=I.createFramebuffer(),k=I.createFramebuffer(),N=new Sm(I),U=new Gg,G=new s0(I,et,g,U,M,xe,N),ae=new xm(R),ue=new bd(I),Ee=new om(I,ue),j=new ym(I,ue,N,Ee),ie=new Em(I,j,ue,Ee,N),O=new bm(I,M,G),Fe=new hm(U),pe=new Hg(R,ae,et,M,Ee,Fe),Ue=new c0(R,U),ye=new Xg,ge=new $g(et),qe=new am(R,ae,g,ie,v,l),ke=new n0(R,ie,M),ce=new h0(I,N,M,g),_e=new lm(I,et,N),se=new Mm(I,et,N),N.programs=pe.programs,R.capabilities=M,R.extensions=et,R.properties=U,R.renderLists=ye,R.shadowMap=ke,R.state=g,R.info=N}T!==$t&&(S=new wm(T,t.width,t.height,o,s,r));let De=new Bl(R,I);this.xr=De,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(Te,J,!1))},this.getSize=function(b){return b.set(Te,J)},this.setSize=function(b,F,$=!0){if(De.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=b,J=F,t.width=Math.floor(b*ee),t.height=Math.floor(F*ee),$===!0&&(t.style.width=b+"px",t.style.height=F+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Te*ee,J*ee).floor()},this.setDrawingBufferSize=function(b,F,$){Te=b,J=F,ee=$,t.width=Math.floor(b*$),t.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(T===$t){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,F,$,X){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,F,$,X),g.viewport(Q.copy(te).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,F,$,X){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,F,$,X),g.scissor(de.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){g.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,$=!0){let X=0;if(b){let q=!1;if(Z!==null){let be=Z.texture.format;q=f.has(be)}if(q){let be=Z.texture.type,Ae=p.has(be),Se=qe.getClearColor(),Re=qe.getClearAlpha(),Ne=Se.r,Ze=Se.g,Qe=Se.b;Ae?(w[0]=Ne,w[1]=Ze,w[2]=Qe,w[3]=Re,I.clearBufferuiv(I.COLOR,0,w)):(A[0]=Ne,A[1]=Ze,A[2]=Qe,A[3]=Re,I.clearBufferiv(I.COLOR,0,A))}else X|=I.COLOR_BUFFER_BIT}F&&(X|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),qe.dispose(),ye.dispose(),ge.dispose(),U.dispose(),ae.dispose(),ie.dispose(),Ee.dispose(),ce.dispose(),pe.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ql),De.removeEventListener("sessionend",jl),oi.stop()};function ht(b){b.preventDefault(),As("WebGLRenderer: Context Lost."),P=!0}function it(){As("WebGLRenderer: Context Restored."),P=!1;let b=N.autoReset,F=ke.enabled,$=ke.autoUpdate,X=ke.needsUpdate,q=ke.type;ze(),N.autoReset=b,ke.enabled=F,ke.autoUpdate=$,ke.needsUpdate=X,ke.type=q}function rn(b){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _n(b){let F=b.target;F.removeEventListener("dispose",_n),Lu(F)}function Lu(b){Du(b),U.remove(b)}function Du(b){let F=U.get(b).programs;F!==void 0&&(F.forEach(function($){pe.releaseProgram($)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,X,q,be){F===null&&(F=he);let Ae=q.isMesh&&q.matrixWorld.determinantAffine()<0,Se=Fu(b,F,$,X,q);g.setMaterial(X,Ae);let Re=$.index,Ne=1;if(X.wireframe===!0){if(Re=j.getWireframeAttribute($),Re===void 0)return;Ne=2}let Ze=$.drawRange,Qe=$.attributes.position,Ie=Ze.start*Ne,st=(Ze.start+Ze.count)*Ne;be!==null&&(Ie=Math.max(Ie,be.start*Ne),st=Math.min(st,(be.start+be.count)*Ne)),Re!==null?(Ie=Math.max(Ie,0),st=Math.min(st,Re.count)):Qe!=null&&(Ie=Math.max(Ie,0),st=Math.min(st,Qe.count));let St=st-Ie;if(St<0||St===1/0)return;Ee.setup(q,X,Se,$,Re);let ft,lt=_e;if(Re!==null&&(ft=ue.get(Re),lt=se,lt.setIndex(ft)),q.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*fe()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(q.isLine){let Ft=X.linewidth;Ft===void 0&&(Ft=1),g.setLineWidth(Ft*fe()),q.isLineSegments?lt.setMode(I.LINES):q.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else q.isPoints?lt.setMode(I.POINTS):q.isSprite&&lt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ft=q._multiDrawStarts,we=q._multiDrawCounts,Vt=q._multiDrawCount,tt=Re?ue.get(Re).bytesPerElement:1,jt=U.get(X).currentProgram.getUniforms();for(let xn=0;xn<Vt;xn++)jt.setValue(I,"_gl_DrawID",xn),lt.render(Ft[xn]/tt,we[xn])}else if(q.isInstancedMesh)lt.renderInstances(Ie,St,q.count);else if($.isInstancedBufferGeometry){let Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,we=Math.min($.instanceCount,Ft);lt.renderInstances(Ie,St,we)}else lt.render(Ie,St)};function $l(b,F,$,X){L!==null&&b.isNodeMaterial&&L.setObject(X,b),ve===!0&&Fe.setState(b,$,!1),b.transparent===!0&&b.side===Kt&&b.forceSinglePass===!1?(b.side=Wt,b.needsUpdate=!0,cr(b,F,X),b.side=ti,b.needsUpdate=!0,cr(b,F,X),b.side=Kt):cr(b,F,X)}this.compile=function(b,F,$=null){$===null&&($=b),L!==null&&L.renderStart(b,F,$),E=ge.get($),E.init(F),x.push(E),$.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),b!==$&&b.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),Ce=this.localClippingEnabled,ve=Fe.init(this.clippingPlanes,Ce),ve===!0&&Fe.setGlobalState(this.clippingPlanes,F),L!==null&&ke.render(E.state.shadowsArray,$,F);let X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let be=q.material;if(be)if(Array.isArray(be))for(let Ae=0;Ae<be.length;Ae++){let Se=be[Ae];$l(Se,$,F,q),X.add(Se)}else $l(be,$,F,q),X.add(be)}),E=x.pop(),L!==null&&L.renderEnd(),X},this.compileAsync=function(b,F,$=null){let X=this.compile(b,F,$);return new Promise(q=>{function be(){if(X.forEach(function(Ae){let Re=U.get(Ae).currentProgram;(Re===void 0||Re.isReady())&&X.delete(Ae)}),X.size===0){q(b);return}setTimeout(be,10)}et.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let So=null;function Nu(b){So&&So(b)}function Ql(){oi.stop()}function jl(){oi.start()}let oi=new Wh;oi.setAnimationLoop(Nu),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(b){So=b,De.setAnimationLoop(b),b===null?oi.stop():oi.start()},De.addEventListener("sessionstart",Ql),De.addEventListener("sessionend",jl),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(b,F);let $=De.enabled===!0&&De.isPresenting===!0,X=S!==null&&(Z===null||$)&&S.begin(R,Z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(F),F=De.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,F,Z),E=ge.get(b,x.length),E.init(F),E.state.textureUnits=G.getTextureUnits(),x.push(E),Be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),re.setFromProjectionMatrix(Be,hn,F.reversedDepth),Ce=this.localClippingEnabled,ve=Fe.init(this.clippingPlanes,Ce),y=ye.get(b,C.length),y.init(),C.push(y),De.enabled===!0&&De.isPresenting===!0){let Ae=R.xr.getDepthSensingMesh();Ae!==null&&bo(Ae,F,-1/0,R.sortObjects)}bo(b,F,0,R.sortObjects),y.finish(),L!==null&&L.updateLights(E.state.lightsArray),R.sortObjects===!0&&y.sort(W,ne),me=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,me&&qe.addToRenderList(y,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&Fe.beginShadows();let q=E.state.shadowsArray;if(ke.render(q,b,F),ve===!0&&Fe.endShadows(),(X&&S.hasRenderPass())===!1){let Ae=y.opaque,Se=y.transmissive;if(E.setupLights(),F.isArrayCamera){let Re=F.cameras;if(Se.length>0)for(let Ne=0,Ze=Re.length;Ne<Ze;Ne++){let Qe=Re[Ne];tc(Ae,Se,b,Qe)}me&&qe.render(b);for(let Ne=0,Ze=Re.length;Ne<Ze;Ne++){let Qe=Re[Ne];ec(y,b,Qe,Qe.viewport)}}else Se.length>0&&tc(Ae,Se,b,F),me&&qe.render(b),ec(y,b,F)}Z!==null&&B===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),X&&S.end(R),b.isScene===!0&&b.onAfterRender(R,b,F),Ee.resetDefaultState(),H=-1,Y=null,x.pop(),x.length>0?(E=x[x.length-1],G.setTextureUnits(E.state.textureUnits),ve===!0&&Fe.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,L!==null&&L.renderEnd()};function bo(b,F,$,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(re)){X&&ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);let Ae=ie.update(b),Se=b.material;Se.visible&&y.push(b,Ae,Se,$,ct.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(re))){let Ae=ie.update(b),Se=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ct.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ct.copy(Ae.boundingSphere.center)),ct.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(Se)){let Re=Ae.groups;for(let Ne=0,Ze=Re.length;Ne<Ze;Ne++){let Qe=Re[Ne],Ie=Se[Qe.materialIndex];Ie&&Ie.visible&&y.push(b,Ae,Ie,$,ct.z,Qe,F)}}else Se.visible&&y.push(b,Ae,Se,$,ct.z,null,F)}}let be=b.children;for(let Ae=0,Se=be.length;Ae<Se;Ae++)bo(be[Ae],F,$,X)}function ec(b,F,$,X){let{opaque:q,transmissive:be,transparent:Ae}=b;E.setupLightsView($),ve===!0&&Fe.setGlobalState(R.clippingPlanes,$),X&&g.viewport(Q.copy(X)),q.length>0&&lr(q,F,$),be.length>0&&lr(be,F,$),Ae.length>0&&lr(Ae,F,$),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function tc(b,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Ie=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new vt(1,1,{generateMipmaps:!0,type:Ie?Et:$t,minFilter:ii,samples:Math.max(4,M.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let be=E.state.transmissionRenderTarget[X.id],Ae=X.viewport||Q;be.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Re=R.getActiveCubeFace(),Ne=R.getActiveMipmapLevel();R.setRenderTarget(be),R.getClearColor(We),Le=R.getClearAlpha(),Le<1&&R.setClearColor(16777215,.5),R.clear(),me&&qe.render($);let Ze=R.toneMapping;R.toneMapping=un;let Qe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),ve===!0&&Fe.setGlobalState(R.clippingPlanes,X),lr(b,$,X),G.updateMultisampleRenderTarget(be),G.updateRenderTargetMipmap(be),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let st=0,St=F.length;st<St;st++){let ft=F[st],{object:lt,geometry:Ft,material:we,group:Vt}=ft;if(we.side===Kt&&lt.layers.test(X.layers)){let tt=we.side;we.side=Wt,we.needsUpdate=!0,nc(lt,$,X,Ft,we,Vt),we.side=tt,we.needsUpdate=!0,Ie=!0}}Ie===!0&&(G.updateMultisampleRenderTarget(be),G.updateRenderTargetMipmap(be))}R.setRenderTarget(Se,Re,Ne),R.setClearColor(We,Le),Qe!==void 0&&(X.viewport=Qe),R.toneMapping=Ze}function lr(b,F,$){let X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,be=b.length;q<be;q++){let Ae=b[q],{object:Se,geometry:Re,group:Ne}=Ae,Ze=Ae.material;Ze.allowOverride===!0&&X!==null&&(Ze=X),Se.layers.test($.layers)&&nc(Se,F,$,Re,Ze,Ne)}}function nc(b,F,$,X,q,be){L!==null&&q.isNodeMaterial&&L.setObject(b,q),b.onBeforeRender(R,F,$,X,q,be),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(R,F,$,X,b,be),q.transparent===!0&&q.side===Kt&&q.forceSinglePass===!1?(q.side=Wt,q.needsUpdate=!0,R.renderBufferDirect($,F,X,q,b,be),q.side=ti,q.needsUpdate=!0,R.renderBufferDirect($,F,X,q,b,be),q.side=Kt):R.renderBufferDirect($,F,X,q,b,be),b.onAfterRender(R,F,$,X,q,be)}function cr(b,F,$){F.isScene!==!0&&(F=he);let X=U.get(b),q=E.state.lights,be=E.state.shadowsArray,Ae=q.state.version,Se=pe.getParameters(b,q.state,be,F,$,E.state.lightProbeGridArray),Re=pe.getProgramCacheKey(Se),Ne=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=ae.get(b.envMap||X.environment,Ze),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",_n),Ne=new Map,X.programs=Ne);let Qe=Ne.get(Re);if(Qe!==void 0){if(X.currentProgram===Qe&&X.lightsStateVersion===Ae)return sc(b,Se),Qe}else Se.uniforms=pe.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,$,Se),b.onBeforeCompile(Se,R),Qe=pe.acquireProgram(Se,Re),Ne.set(Re,Qe),X.uniforms=Se.uniforms;let Ie=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),sc(b,Se),X.needsLights=Bu(b),X.lightsStateVersion=Ae,X.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.sunLights.value=q.state.sun,Ie.sunLightShadows.value=q.state.sunShadow,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.sunShadowMatrix.value=q.state.sunShadowMatrix,Ie.sunShadowCascade.value=q.state.sunShadowCascade,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=Qe,X.uniformsList=null,Qe}function ic(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=as.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function sc(b,F){let $=U.get(b);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Uu(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let $=0,X=b.length;$<X;$++){let q=b[$];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function Fu(b,F,$,X,q){F.isScene!==!0&&(F=he),G.resetTextureUnits();let be=F.fog,Ae=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Se=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ke.workingColorSpace,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ne=ae.get(X.envMap||Ae,Re),Ze=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Qe=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!$.morphAttributes.position,st=!!$.morphAttributes.normal,St=!!$.morphAttributes.color,ft=un;X.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ft=R.toneMapping);let lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ft=lt!==void 0?lt.length:0,we=U.get(X),Vt=E.state.lights;if(ve===!0&&(Ce===!0||b!==Y)){let ut=b===Y&&X.id===H;Fe.setState(X,b,ut)}let tt=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Vt.state.version||we.outputColorSpace!==Se||q.isBatchedMesh&&we.batching===!1||!q.isBatchedMesh&&we.batching===!0||q.isBatchedMesh&&we.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&we.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&we.instancing===!1||!q.isInstancedMesh&&we.instancing===!0||q.isSkinnedMesh&&we.skinning===!1||!q.isSkinnedMesh&&we.skinning===!0||q.isInstancedMesh&&we.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&we.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&we.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&we.instancingMorph===!1&&q.morphTexture!==null||we.envMap!==Ne||X.fog===!0&&we.fog!==be||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Fe.numPlanes||we.numIntersection!==Fe.numIntersection)||we.vertexAlphas!==Ze||we.vertexTangents!==Qe||we.morphTargets!==Ie||we.morphNormals!==st||we.morphColors!==St||we.toneMapping!==ft||we.morphTargetsCount!==Ft||!!we.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,we.__version=X.version);let jt=we.currentProgram;tt===!0&&(jt=cr(X,F,q),L&&X.isNodeMaterial&&L.onUpdateProgram(X,jt,we));let xn=!1,Bn=!1,bi=!1,at=jt.getUniforms(),yt=we.uniforms;if(g.useProgram(jt.program)&&(xn=!0,Bn=!0,bi=!0),X.id!==H&&(H=X.id,Bn=!0),we.needsLights){let ut=Uu(E.state.lightProbeGridArray,q);we.lightProbeGrid!==ut&&(we.lightProbeGrid=ut,Bn=!0)}if(xn||Y!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),at.setValue(I,"projectionMatrix",b.projectionMatrix),at.setValue(I,"viewMatrix",b.matrixWorldInverse);let Vn=at.map.cameraPosition;Vn!==void 0&&Vn.setValue(I,$e.setFromMatrixPosition(b.matrixWorld)),M.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&at.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),Y!==b&&(Y=b,Bn=!0,bi=!0)}if(we.needsLights&&(Vt.state.sunShadowMap.length>0&&at.setValue(I,"sunShadowMap",Vt.state.sunShadowMap,G),Vt.state.directionalShadowMap.length>0&&at.setValue(I,"directionalShadowMap",Vt.state.directionalShadowMap,G),Vt.state.spotShadowMap.length>0&&at.setValue(I,"spotShadowMap",Vt.state.spotShadowMap,G),Vt.state.pointShadowMap.length>0&&at.setValue(I,"pointShadowMap",Vt.state.pointShadowMap,G)),q.isSkinnedMesh){at.setOptional(I,q,"bindMatrix"),at.setOptional(I,q,"bindMatrixInverse");let ut=q.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),at.setValue(I,"boneTexture",ut.boneTexture,G))}q.isBatchedMesh&&(at.setOptional(I,q,"batchingTexture"),at.setValue(I,"batchingTexture",q._matricesTexture,G),at.setOptional(I,q,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",q._indirectTexture,G),at.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",q._colorsTexture,G));let zn=$.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&O.update(q,$,jt),(Bn||we.receiveShadow!==q.receiveShadow)&&(we.receiveShadow=q.receiveShadow,at.setValue(I,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(yt.envMapIntensity.value=F.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=d0()),Bn){if(at.setValue(I,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Ou(yt,bi),be&&X.fog===!0&&Ue.refreshFogUniforms(yt,be),Ue.refreshMaterialUniforms(yt,X,ee,J,E.state.transmissionRenderTarget[b.id]),we.needsLights&&we.lightProbeGrid){let ut=we.lightProbeGrid;yt.probesSH.value=ut.texture,yt.probesMin.value.copy(ut.boundingBox.min),yt.probesMax.value.copy(ut.boundingBox.max),yt.probesResolution.value.copy(ut.resolution)}as.upload(I,ic(we),yt,G)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(as.upload(I,ic(we),yt,G),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&at.setValue(I,"center",q.center),at.setValue(I,"modelViewMatrix",q.modelViewMatrix),at.setValue(I,"normalMatrix",q.normalMatrix),at.setValue(I,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let ut=X.uniformsGroups;for(let Vn=0,Ei=ut.length;Vn<Ei;Vn++){let ac=ut[Vn];ce.update(ac,jt),ce.bind(ac,jt)}}return jt}function Ou(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Bu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,F,$){let X=U.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),U.get(b.texture).__webglTexture=F,U.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let $=U.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,$=0){Z=b,K=F,B=$;let X=null,q=!1,be=!1;if(b){let Se=U.get(b);if(Se.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,Se.__webglFramebuffer),Q.copy(b.viewport),de.copy(b.scissor),le=b.scissorTest,g.viewport(Q),g.scissor(de),g.setScissorTest(le),H=-1;return}else if(Se.__webglFramebuffer===void 0)G.setupRenderTarget(b);else if(Se.__hasExternalTextures)G.rebindTextures(b,U.get(b.texture).__webglTexture,U.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ze=b.depthTexture;if(Se.__boundDepthTexture!==Ze){if(Ze!==null&&U.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(b)}}let Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let Ne=U.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?X=Ne[F][$]:X=Ne[F],q=!0):b.samples>0&&G.useMultisampledRTT(b)===!1?X=U.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?X=Ne[$]:X=Ne,Q.copy(b.viewport),de.copy(b.scissor),le=b.scissorTest}else Q.copy(te).multiplyScalar(ee).floor(),de.copy(oe).multiplyScalar(ee).floor(),le=Ve;if($!==0&&(X=V),g.bindFramebuffer(I.FRAMEBUFFER,X)&&g.drawBuffers(b,X),g.viewport(Q),g.scissor(de),g.setScissorTest(le),q){let Se=U.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,$)}else if(be){let Se=F;for(let Re=0;Re<b.textures.length;Re++){let Ne=U.get(b.textures[Re]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,$,Se)}}else if(b!==null&&$!==0){let Se=U.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Se.__webglTexture,$)}H=-1};function rc(b){let F=U.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=M.textureFormatReadable(b.format),F.__typeReadable=M.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,$,X,q,be,Ae,Se=0){if(!(b&&b.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){g.bindFramebuffer(I.FRAMEBUFFER,Re);try{let Ne=b.textures[Se],Ze=Ne.format,Qe=Ne.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Se);let Ie=rc(Ne);if(Ie.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&$>=0&&$<=b.height-q&&I.readPixels(F,$,X,q,xe.convert(Ze),xe.convert(Qe),be)}finally{let Ne=Z!==null?U.get(Z).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,F,$,X,q,be,Ae,Se=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(F>=0&&F<=b.width-X&&$>=0&&$<=b.height-q){g.bindFramebuffer(I.FRAMEBUFFER,Re);let Ne=b.textures[Se],Ze=Ne.format,Qe=Ne.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Se);let Ie=rc(Ne);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.bufferData(I.PIXEL_PACK_BUFFER,be.byteLength,I.STREAM_READ),I.readPixels(F,$,X,q,xe.convert(Ze),xe.convert(Qe),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let St=Z!==null?U.get(Z).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,St);let ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _h(I,ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,be),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(st),I.deleteSync(ft),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,$=0){let X=Math.pow(2,-$),q=Math.floor(b.image.width*X),be=Math.floor(b.image.height*X),Ae=F!==null?F.x:0,Se=F!==null?F.y:0;G.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Ae,Se,q,be),g.unbindTexture()},this.copyTextureToTexture=function(b,F,$=null,X=null,q=0,be=0){let Ae,Se,Re,Ne,Ze,Qe,Ie,st,St,ft=b.isCompressedTexture?b.mipmaps[be]:b.image;if($!==null)Ae=$.max.x-$.min.x,Se=$.max.y-$.min.y,Re=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,Ze=$.min.y,Qe=$.isBox3?$.min.z:0;else{let yt=Math.pow(2,-q);Ae=Math.floor(ft.width*yt),Se=Math.floor(ft.height*yt),b.isDataArrayTexture?Re=ft.depth:b.isData3DTexture?Re=Math.floor(ft.depth*yt):Re=1,Ne=0,Ze=0,Qe=0}X!==null?(Ie=X.x,st=X.y,St=X.z):(Ie=0,st=0,St=0);let lt=xe.convert(F.format),Ft=xe.convert(F.type),we;F.isData3DTexture?(G.setTexture3D(F,0),we=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(G.setTexture2DArray(F,0),we=I.TEXTURE_2D_ARRAY):(G.setTexture2D(F,0),we=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let Vt=g.getParameter(I.UNPACK_ROW_LENGTH),tt=g.getParameter(I.UNPACK_IMAGE_HEIGHT),jt=g.getParameter(I.UNPACK_SKIP_PIXELS),xn=g.getParameter(I.UNPACK_SKIP_ROWS),Bn=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),g.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe);let bi=b.isDataArrayTexture||b.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let yt=U.get(b),zn=U.get(F),ut=U.get(yt.__renderTarget),Vn=U.get(zn.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,ut.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Ei=0;Ei<Re;Ei++)bi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(b).__webglTexture,q,Qe+Ei),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(F).__webglTexture,be,St+Ei)),I.blitFramebuffer(Ne,Ze,Ae,Se,Ie,st,Ae,Se,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||U.has(b)){let yt=U.get(b),zn=U.get(F);g.bindFramebuffer(I.READ_FRAMEBUFFER,D),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let ut=0;ut<Re;ut++)bi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,q,Qe+ut):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,q),at?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zn.__webglTexture,be,St+ut):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zn.__webglTexture,be),q!==0?I.blitFramebuffer(Ne,Ze,Ae,Se,Ie,st,Ae,Se,I.COLOR_BUFFER_BIT,I.NEAREST):at?I.copyTexSubImage3D(we,be,Ie,st,St+ut,Ne,Ze,Ae,Se):I.copyTexSubImage2D(we,be,Ie,st,Ne,Ze,Ae,Se);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else at?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(we,be,Ie,st,St,Ae,Se,Re,lt,Ft,ft.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(we,be,Ie,st,St,Ae,Se,Re,lt,ft.data):I.texSubImage3D(we,be,Ie,st,St,Ae,Se,Re,lt,Ft,ft):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,be,Ie,st,Ae,Se,lt,Ft,ft.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,be,Ie,st,ft.width,ft.height,lt,ft.data):I.texSubImage2D(I.TEXTURE_2D,be,Ie,st,Ae,Se,lt,Ft,ft);g.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),g.pixelStorei(I.UNPACK_SKIP_PIXELS,jt),g.pixelStorei(I.UNPACK_SKIP_ROWS,xn),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Bn),be===0&&F.generateMipmaps&&I.generateMipmap(we),g.unbindTexture()},this.initRenderTarget=function(b){U.get(b).__webglFramebuffer===void 0&&G.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?G.setTextureCube(b,0):b.isData3DTexture?G.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?G.setTexture2DArray(b,0):G.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){K=0,B=0,Z=null,g.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}});var ls,Vl=Pt(()=>{ls={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Qt,f0,kl,p0,ai,cs=Pt(()=>{Cn();Qt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},f0=new _i(-1,1,1,-1,0,1),kl=class extends Mt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},p0=new kl,ai=class{constructor(e){this._mesh=new xt(p0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var go,$h=Pt(()=>{Cn();cs();go=class extends Qt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=On.clone(e.uniforms),this.material=new rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ai(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var ar,_o,Qh=Pt(()=>{cs();ar=class extends Qt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_o=class extends Qt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var xo,jh=Pt(()=>{Cn();Vl();$h();Qh();xo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Et}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new go(ls),this.copyPass.material.blending=tn,this.timer=new Vs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ar!==void 0&&(a instanceof ar?n=!0:a instanceof _o&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var eu,tu=Pt(()=>{Cn();eu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var hs,nu=Pt(()=>{Cn();cs();Vl();tu();hs=class i extends Qt{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new vt(r,a,{type:Et,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new vt(r,a,{type:Et,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new vt(r,a,{type:Et,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=eu;this.highPassUniforms=On.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Pe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=On.clone(ls.uniforms),this.blendMaterial=new rt({uniforms:this.copyUniforms,vertexShader:ls.vertexShader,fragmentShader:ls.fragmentShader,premultipliedAlpha:!0,blending:qt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new mi,this._fsQuad=new ai(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new rt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};hs.BlurDirectionX=new Pe(1,0);hs.BlurDirectionY=new Pe(0,1)});var or,iu=Pt(()=>{or={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var vo,su=Pt(()=>{Cn();cs();iu();vo=class extends Qt{constructor(){super(),this.isOutputPass=!0,this.uniforms=On.clone(or.uniforms),this.material=new ji({name:or.name,uniforms:this.uniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader}),this._fsQuad=new ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ws?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ys?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});function m0(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gl(i){let e=ou(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function au(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function _0(i){let e=Gl(i),t=Math.abs(e[1])>.9?[1,0,0]:[0,1,0],n=Gl(au(e,t)),s=Gl(au(e,n));return[n,s]}function At(i,e,t,n=0){let s,r,a,o;do s=i()*2-1,r=i()*2-1,a=i()*2-1,o=Math.hypot(s,r,a);while(o>1||o<1e-4);let c=(n>0?1-(1-n)*Math.pow(i(),1/3):Math.cbrt(i()))/o;return[e[0]+s*c*t[0],e[1]+r*c*t[1],e[2]+a*c*t[2]]}function x0(i,e,t,n,s){let r=1-s,a=r*r*r,o=3*r*r*s,l=3*r*s*s,c=s*s*s;return[a*i[0]+o*e[0]+l*t[0]+c*n[0],a*i[1]+o*e[1]+l*t[1]+c*n[1],a*i[2]+o*e[2]+l*t[2]+c*n[2]]}function Xt(i,e,t,n={}){let s=n.points||14,r=n.curve==null?.3:n.curve,a=n.wobble==null?.035:n.wobble,o=g0(t,e),l=ou(o)||.001,[c,u]=_0(o),d=_=>yo(c,(i()-.5)*_*l),h=_=>yo(u,(i()-.5)*_*l),m=us(us(ru(e,t,.32),d(r)),h(r)),v=us(us(ru(e,t,.68),d(r)),h(r)),T=i()*6.2831,f=i()*6.2831,p=1.5+i()*3.5,w=2+i()*4,A=new Array(s);for(let _=0;_<s;_++){let y=_/(s-1),E=x0(e,m,v,t,y),C=Math.sin(Math.PI*y),x=Math.sin(y*p*6.2831+T)*a*l*C,S=Math.sin(y*w*6.2831+f)*a*l*C;E=us(us(E,yo(c,x)),yo(u,S)),A[_]=lu(E)}return A}function pn(i,e,t,n,s,r){let a=[];for(let o=0;o<s;o++){let l=Math.max(1,Math.floor(e.length*(.6+i()*.38))),c=e[Math.min(l,e.length-1)],u=At(i,t,[n,n,n],.25);a.push(Xt(i,c,u,{points:r,curve:.45,wobble:.07}))}return a}function v0(i){let e=i==="male";return{opticL:{c:[-.71,.03,-.01],r:[.23,.39,.3]},opticR:{c:[.71,.03,-.01],r:[.23,.39,.3]},central:{c:[0,.04,-.03],r:[.4,.33,.29]},alL:{c:[-.18,-.27,.35],r:[.12,.11,.12]},alR:{c:[.18,-.27,.35],r:[.12,.11,.12]},antennaL:{c:[-.23,-.4,.56],r:[.11,.06,.07]},antennaR:{c:[.23,-.4,.56],r:[.11,.06,.07]},lhL:{c:[-.37,.23,0],r:[.11,.1,.1]},lhR:{c:[.37,.23,0],r:[.11,.1,.1]},calyxL:{c:[-.25,.27,-.24],r:[.1,.09,.09]},calyxR:{c:[.25,.27,-.24],r:[.1,.09,.09]},coreL:{c:e?[-.16,.08,.04]:[-.12,.01,.02],r:e?[.1,.09,.09]:[.08,.07,.08]},coreR:{c:e?[.16,.08,.04]:[.12,.01,.02],r:e?[.1,.09,.09]:[.08,.07,.08]},neck:{c:[0,-.4,-.28],r:[.1,.09,.1]},neckTip:[0,-.56,-.5]}}function Wl(i){let e=m0(i==="male"?5904353:10224819),t=v0(i),n=i==="male",s=[],r=0,a=(_,y,E,C)=>(s.push({id:r++,type:_,dimorphic:y,soma:lu(E),segments:C}),s[s.length-1]);for(let _=0;_<2;_++){let y=_?t.antennaR:t.antennaL,E=_?t.alR:t.alL;for(let C=0;C<48;C++){let x=At(e,y.c,y.r,.2),S=At(e,E.c,E.r,.35),R=Xt(e,x,S,{points:14,curve:.18,wobble:.03}),P=[R,...pn(e,R,S,.055,2,7)];a("orn",!1,x,P)}}for(let _=0;_<2;_++){let y=_?t.alR:t.alL,E=_?t.lhR:t.lhL,C=_?t.calyxR:t.calyxL;for(let x=0;x<28;x++){let S=At(e,[y.c[0]*1.28,y.c[1]+.09,y.c[2]-.02],[.08,.07,.08],.3),R=Xt(e,S,At(e,y.c,y.r,.3),{points:9,curve:.35,wobble:.06}),P=Xt(e,S,At(e,C.c,C.r,.3),{points:16,curve:.34,wobble:.03}),L=Xt(e,P[Math.floor(P.length*.62)],At(e,E.c,E.r,.3),{points:11,curve:.4,wobble:.05}),V=[R,P,L,...pn(e,L,E.c,.06,2,7),...pn(e,P,C.c,.055,2,6)];a("pn",!1,S,V)}}for(let _=0;_<2;_++){let y=_?t.lhR:t.lhL,E=_?t.coreR:t.coreL;for(let C=0;C<32;C++){let x=At(e,[y.c[0]*1.22,y.c[1]+.08,y.c[2]-.02],[.09,.08,.09],.3),S=Xt(e,x,At(e,y.c,y.r,.3),{points:9,curve:.4,wobble:.06}),R=Xt(e,x,At(e,E.c,E.r,.3),{points:15,curve:.36,wobble:.035}),P=[S,R,...pn(e,R,E.c,.055,2,7),...pn(e,S,y.c,.05,1,6)];a("lhn",!1,x,P)}}let o=[];for(let _=0;_<2;_++){let y=_?t.coreR:t.coreL,E=_?t.coreL:t.coreR;for(let C=0;C<12;C++){let x=At(e,[y.c[0]*1.3,y.c[1]+.1,y.c[2]],[.07,.07,.07],.25),S=Xt(e,x,At(e,y.c,y.r,.3),{points:10,curve:.42,wobble:.06}),R=n?[y.c[0]*.35,-.3,-.2]:[y.c[0]*.2,-.24,-.3],P=Xt(e,x,R,{points:16,curve:n?.4:.26,wobble:.04}),L=[S,P];n?(L.push(Xt(e,P[Math.floor(P.length*.4)],At(e,E.c,E.r,.4),{points:14,curve:.55,wobble:.05})),L.push(...pn(e,P,[y.c[0]*.35,-.28,-.18],.09,3,7))):(L.push(...pn(e,P,[y.c[0]*.2,-.22,-.28],.06,2,7)),L.push(...pn(e,S,y.c,.05,2,6)));let V=a("dimorphic",!0,x,L);o.push(V.id)}}for(let _=0;_<16;_++){let y=_%2?1:-1,E=At(e,[y*.19,-.14,-.12],[.07,.07,.07],.3),C=Xt(e,E,At(e,[y*.14,-.02,-.06],[.09,.09,.09],.3),{points:9,curve:.4,wobble:.06}),x=Xt(e,E,[t.neckTip[0]+(e()-.5)*.06,t.neckTip[1],t.neckTip[2]+(e()-.5)*.06],{points:18,curve:.2,wobble:.025}),S=[C,x,...pn(e,C,[y*.14,-.02,-.06],.07,2,6)];a("descending",!1,E,S)}for(let _=0;_<2;_++){let y=_?t.opticR:t.opticL,E=[y.c[0]*.34,y.c[1]*.4,y.c[2]];for(let C=0;C<55;C++){let x=At(e,y.c,y.r,.86),S=[y.c[0]*.42+(e()-.5)*.1,x[1]*.55+(e()-.5)*.08,x[2]*.6+(e()-.5)*.08],R=Xt(e,x,S,{points:12,curve:.14,wobble:.035}),P=Xt(e,S,At(e,E,[.12,.14,.12],.3),{points:9,curve:.3,wobble:.05});a("other",!1,x,[R,P,...pn(e,R,S,.05,1,6)])}}for(let _=0;_<40;_++){let y=At(e,t.central.c,t.central.r,.75),E=At(e,t.central.c,t.central.r,.2),C=Xt(e,y,E,{points:12,curve:.45,wobble:.06});a("other",!1,y,[C,...pn(e,C,E,.08,3,7)])}let l={};for(let _ of s)(l[_.type]||(l[_.type]=[])).push(_);let c=[],u=new Set,d=(_,y)=>{if(_===y)return;let E=_*1e5+y;u.has(E)||(u.add(E),c.push([_,y]))},h=(_,y,E,C=!0)=>{let x=_.map(S=>{let R=Hl(S.soma,y);return C&&S.soma[0]*y[0]<0&&(R+=.9),{n:S,d:R}});return x.sort((S,R)=>S.d-R.d),x.slice(0,E).map(S=>S.n)};for(let _ of l.pn)for(let y of h(l.orn,_.soma,4))d(y.id,_.id);for(let _ of l.lhn)for(let y of h(l.pn,_.soma,3))d(y.id,_.id);for(let _ of l.dimorphic)for(let y of h(l.lhn,_.soma,4))d(y.id,_.id);for(let _ of l.descending)for(let y of h(l.dimorphic,_.soma,4))d(y.id,_.id);let m=l.other||[];for(let _ of m){for(let y of h(m,_.soma,3))d(_.id,y.id);if(e()<.25){let y=h(l.lhn,_.soma,1)[0];y&&d(_.id,y.id)}}for(let _ of l.lhn)if(e()<.3){let y=h(l.lhn,_.soma,2)[1];y&&d(_.id,y.id)}let v=new Map;for(let[_,y]of c)v.has(_)||v.set(_,[]),v.get(_).push(y);let T=new Map(s.map(_=>[_.id,_])),f=(_,y)=>{let E=(v.get(_)||[]).map(x=>T.get(x)).filter(x=>x&&x.type===y);if(!E.length)return l[y]&&l[y][0]||null;let C=T.get(_).soma;return E.sort((x,S)=>Hl(x.soma,C)-Hl(S.soma,C)),E[0]},p=h(l.orn,t.alL.c,1,!1)[0],w=[p.id],A=p;for(let _ of["pn","lhn","dimorphic","descending"]){let y=f(A.id,_);if(!y)break;w.push(y.id),A=y}for(let _=0;_<w.length-1;_++)d(w[_],w[_+1]);return{meta:{sex:i,bounds:[[-1,-.6,-.62],[1,.6,.62]],source:"procedural-fallback"},neurons:s,edges:c,pathway:w}}var us,g0,yo,ru,ou,Hl,lu,cu=Pt(()=>{us=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],g0=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],yo=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],ru=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],ou=i=>Math.hypot(i[0],i[1],i[2]),Hl=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2]);lu=i=>[Math.round(i[0]*1e4)/1e4,Math.round(i[1]*1e4)/1e4,Math.round(i[2]*1e4)/1e4]});function uu(i){return Array.isArray(i)&&i.length>=3&&typeof i[0]=="number"}function du(i){if(!Array.isArray(i)||i.length===0)return null;if(uu(i[0]))return i.length>=2?i:null;if(typeof i[0]=="number"){let e=Math.floor(i.length/3);if(e<2)return null;let t=new Array(e);for(let n=0;n<e;n++)t[n]=[i[n*3],i[n*3+1],i[n*3+2]];return t}return null}function fu(i){if(!i||typeof i!="object"||!Array.isArray(i.neurons)||i.neurons.length<20||!Array.isArray(i.edges))return!1;let e=i.neurons[0];if(!e||!uu(e.soma)||!Array.isArray(e.segments))return!1;let t=0;for(let n=0;n<Math.min(i.neurons.length,50);n++){let s=i.neurons[n]&&i.neurons[n].segments;Array.isArray(s)&&s.length&&du(s[0])&&t++}return t>10}function y0(i=0){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(128/2,128/2,128*i,128/2,128/2,128/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.18,"rgba(255,255,255,0.55)"),s.addColorStop(.45,"rgba(255,255,255,0.14)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new Us(t);return r.colorSpace=Lt,r.needsUpdate=!0,r}function ql(){return Xl||(Xl=y0(0)),Xl}function hu(i){let e=0;for(let l of i)e+=l.vertexCount;let t=new Float32Array(e*3),n=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(e),a=0;for(let l of i){let{polylines:c,id:u,seed:d}=l;for(let h of c){let m=h.pts,v=h.dist;for(let T=0;T<m.length-1;T++){let f=m[T],p=m[T+1];t[a*3]=f[0],t[a*3+1]=f[1],t[a*3+2]=f[2],n[a]=u,s[a]=v[T],r[a]=d,a++,t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],n[a]=u,s[a]=v[T+1],r[a]=d,a++}}}let o=new Mt;return o.setAttribute("position",new gt(t,3)),o.setAttribute("aNeuron",new gt(n,1)),o.setAttribute("aDist",new gt(s,1)),o.setAttribute("aSeed",new gt(r,1)),o.computeBoundingSphere(),o}function T0(i){let e=i.soma,t=[],n=1e-4,s=0,r=Array.isArray(i.segments)?i.segments:[];for(let a of r){let o=du(a);if(!o)continue;let l=new Array(o.length),c=Math.hypot(o[0][0]-e[0],o[0][1]-e[1],o[0][2]-e[2]);l[0]=c;for(let u=1;u<o.length;u++){let d=o[u-1],h=o[u];c+=Math.hypot(h[0]-d[0],h[1]-d[1],h[2]-d[2]),l[u]=c}c>n&&(n=c),t.push({pts:o,dist:l}),s+=(o.length-1)*2}for(let a of t)for(let o=0;o<a.dist.length;o++)a.dist[o]/=n;return{polylines:t,vertexCount:s,maxD:n}}function mu(i,e){let t=new Oe(e.accent),n=new Oe(e.base||"#5a6a7a"),s=n.clone().lerp(t,.22),r=i.neurons,a=[],o=[],l=new Float32Array(r.length*3),c=new Float32Array(r.length),u=new Float32Array(r.length),d=new Float32Array(r.length),h=new Float32Array(r.length),m=new Float32Array(r.length),v=new Map,T=new Map,f=[],p=0;for(let he=0;he<r.length;he++){let me=r[he],fe=Number(me.id);fe>p&&(p=fe);let I=T0(me),Ye=fe*.6180339887%1,et={polylines:I.polylines,vertexCount:I.vertexCount,id:fe,seed:Ye};me.dimorphic||me.type==="dimorphic"?o.push(et):a.push(et),l[he*3]=me.soma[0],l[he*3+1]=me.soma[1],l[he*3+2]=me.soma[2],c[he]=fe,u[he]=0,m[he]=Ye;let M=me.dimorphic||me.type==="dimorphic";h[he]=M?1:me.type==="descending"?2:0,d[he]=M?.03:me.type==="descending"?.021:me.type==="other"?.01:.015,v.set(fe,me.soma),T.set(fe,he),f.push(new z(me.soma[0],me.soma[1],me.soma[2]))}let w=new Float32Array(ds*4),A=new Float32Array(fs*4);for(let he=0;he<ds;he++)w[he*4]=-1;for(let he=0;he<fs;he++)A[he*4]=-1;let _={value:0},y={value:w},E={value:A},C=(he,me,fe,I)=>({uTime:_,uPulse:y,uGlow:E,uBase:{value:he},uAccent:{value:me},uOpacity:{value:fe},uAccentBias:{value:I},uFog:{value:2}}),x=(he,me,fe,I)=>new rt({uniforms:C(he,me,fe,I),vertexShader:M0,fragmentShader:S0,transparent:!0,depthWrite:!1,depthTest:!0,blending:qt}),S=new Nt,R=(he,me)=>{let fe=he.reduce((I,Ye)=>I+Ye.vertexCount,0);return Math.max(.28,Math.sqrt(me/Math.max(me,fe)))},P=hu(a),L=x(n,t,.46*R(a,32e3),0),V=new Ji(P,L);V.frustumCulled=!1,S.add(V);let D=null;if(o.length){let he=hu(o),me=x(s,t,.62*R(o,1e4),.2);D=new Ji(he,me),D.frustumCulled=!1,S.add(D)}let k=new Mt;k.setAttribute("position",new gt(l,3)),k.setAttribute("aNeuron",new gt(c,1)),k.setAttribute("aDist",new gt(u,1)),k.setAttribute("aSize",new gt(d,1)),k.setAttribute("aKind",new gt(h,1)),k.setAttribute("aSeed",new gt(m,1)),k.computeBoundingSphere();let K=new rt({uniforms:{uTime:_,uPulse:y,uGlow:E,uBase:{value:n.clone().lerp(new Oe("#ffffff"),.14)},uAccent:{value:t},uOpacity:{value:.5},uScale:{value:400},uSizeBoost:{value:1}},vertexShader:b0,fragmentShader:E0,transparent:!0,depthWrite:!1,blending:qt}),B=new Ds(k,K);B.frustumCulled=!1,S.add(B);let Z=new z,H=0;for(let he of r)(he.dimorphic||he.type==="dimorphic")&&(Z.x+=he.soma[0],Z.y+=he.soma[1],Z.z+=he.soma[2],H++);H&&Z.multiplyScalar(1/H);let Y=new fi(new Kn({map:ql(),color:t,transparent:!0,depthWrite:!1,depthTest:!1,blending:qt,opacity:0}));Y.position.copy(Z),Y.scale.setScalar(1.25),S.add(Y);let Q=new fi(new Kn({map:ql(),color:n.clone().lerp(t,.35),transparent:!0,depthWrite:!1,depthTest:!1,blending:qt,opacity:.07}));Q.scale.set(2.6,1.7,1),Q.position.set(0,0,-.05),S.add(Q);let de=8,le=[];for(let he=0;he<de;he++){let me=new fi(new Kn({map:ql(),color:t,transparent:!0,depthWrite:!1,depthTest:!1,blending:qt,opacity:0}));me.visible=!1,me.scale.setScalar(.2),S.add(me),le.push({sprite:me,life:0,dur:1})}let We=[];for(let he=0;he<ds;he++)We.push({id:-1,head:0,speed:1,amp:0,width:.22,age:1e9});let Le=[];for(let he=0;he<fs;he++)Le.push({id:-1,amp:0,decay:3.2,age:1e9});function Te(){let he=null,me=-1;for(let fe of We){if(fe.amp<=0)return fe;fe.age>me&&(me=fe.age,he=fe)}return he}function J(he){for(let I of Le)if(I.id===he&&I.amp>0)return I;let me=null,fe=1/0;for(let I of Le){if(I.amp<=0)return I;I.amp<fe&&(fe=I.amp,me=I)}return me}let ee=0,W=!1;function ne(he,me={}){let fe=me.pulse===!1?null:Te();fe&&(fe.id=he,fe.head=-.08,fe.speed=1/(me.duration||.46),fe.amp=me.amp==null?1:me.amp,fe.width=me.width||.2,fe.age=0);let I=J(he);I&&(I.id=he,I.amp=Math.min(1.2,Math.max(I.amp,me.glow==null?.85:me.glow)),I.decay=me.glowDecay||2.6,I.age=0),me.core&&(ee=Math.min(1,ee+.35))}function te(he,me=.55){let fe=v.get(he);if(!fe)return;let I=le.find(Ye=>Ye.life<=0)||le[0];I.sprite.position.set(fe[0],fe[1],fe[2]),I.sprite.visible=!0,I.life=1,I.dur=.95,I.max=me}function oe(){W=!1}function Ve(he){W||(W=!0,te(he,.68))}function re(){ee=1}function ve(he,me){_.value=me;for(let fe=0;fe<ds;fe++){let I=We[fe];I.amp>0&&(I.age+=he,I.head+=I.speed*he,I.head>1.18&&(I.amp=0,I.id=-1));let Ye=fe*4;w[Ye]=I.id,w[Ye+1]=I.head,w[Ye+2]=I.amp,w[Ye+3]=I.width}for(let fe=0;fe<fs;fe++){let I=Le[fe];I.amp>0&&(I.age+=he,I.amp-=I.amp*I.decay*he,I.amp<.004&&(I.amp=0,I.id=-1));let Ye=fe*4;A[Ye]=I.id,A[Ye+1]=I.amp}for(let fe of le){if(fe.life<=0)continue;fe.life-=he/fe.dur;let I=1-Math.max(fe.life,0),Ye=1-Math.pow(1-I,3);fe.sprite.scale.setScalar(.08+Ye*(fe.max||.55)),fe.sprite.material.opacity=Math.max(0,1-I)*.6,fe.life<=0&&(fe.sprite.visible=!1)}ee=Math.max(0,ee-he*.55),Y.material.opacity=.035+ee*.42,Y.scale.setScalar(1.1+ee*.7)}let Ce=new ks;Ce.params.Points.threshold=.035;function Be(he,me){Ce.setFromCamera(he,me);let fe=Ce.intersectObject(B,!1);if(!fe.length)return-1;let I=fe[0];for(let Ye=1;Ye<Math.min(fe.length,6);Ye++)fe[Ye].distanceToRay<I.distanceToRay*.75&&(I=fe[Ye]);return c[I.index]}function $e(he){K.uniforms.uScale.value=he}function ct(){S.traverse(he=>{he.geometry&&he.geometry.dispose(),he.material&&he.material.dispose()})}return{group:S,somaPoints:B,baseLines:V,dimLines:D,coreCentroid:Z,spike:ne,halo:te,armEpisode:oe,markDimorphic:Ve,flare:re,update:ve,pick:Be,setSomaScale:$e,setFog:he=>{L.uniforms.uFog.value=he,D&&(D.material.uniforms.uFog.value=he)},dispose:ct,somaVec:f,idToIndex:T,maxId:p,stats:{neurons:r.length,baseVerts:P.getAttribute("position").count,dimVerts:D?D.geometry.getAttribute("position").count:0}}}var ds,fs,Xl,pu,M0,S0,b0,E0,gu=Pt(()=>{Cn();cu();ds=24,fs=16;Xl=null;pu=`
  uniform float uTime;
  uniform vec4 uPulse[${ds}];
  uniform vec4 uGlow[${fs}];

  void sampleActivity(float nid, float dist, out float hot, out float acc) {
    hot = 0.0;
    acc = 0.0;
    for (int i = 0; i < ${ds}; i++) {
      vec4 p = uPulse[i];
      float on = step(0.0005, p.z) * (1.0 - step(0.5, abs(p.x - nid)));
      float d = (dist - p.y) / max(p.w, 0.0005);
      hot += on * p.z * exp(-d * d * 3.5);
    }
    for (int i = 0; i < ${fs}; i++) {
      vec4 g = uGlow[i];
      float on = step(0.0005, g.y) * (1.0 - step(0.5, abs(g.x - nid)));
      acc += on * g.y;
    }
  }
`,M0=`
  precision highp float;

  attribute float aNeuron;
  attribute float aDist;
  attribute float aSeed;

  varying float vHot;
  varying float vAcc;
  varying float vShimmer;
  varying float vDepth;

  ${pu}

  void main() {
    float hot, acc;
    sampleActivity(aNeuron, aDist, hot, acc);
    vHot = min(hot, 2.0);
    vAcc = min(acc, 1.0);
    vShimmer = 0.62 + 0.38 * sin(uTime * (0.35 + aSeed * 0.9) + aSeed * 41.0);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,S0=`
  precision highp float;

  uniform vec3 uBase;
  uniform vec3 uAccent;
  uniform float uOpacity;
  uniform float uAccentBias;
  uniform float uFog;

  varying float vHot;
  varying float vAcc;
  varying float vShimmer;
  varying float vDepth;

  void main() {
    float acc = clamp(vAcc + uAccentBias, 0.0, 1.0);
    vec3 col = mix(uBase, uAccent, acc);
    float hot = clamp(vHot, 0.0, 1.6);
    col = mix(col, vec3(1.0, 0.97, 0.93), clamp(hot, 0.0, 1.0) * 0.88);
    float gain = 1.0 + hot * 4.2 + acc * 1.15;
    float depthFade = 1.0 - clamp((vDepth - uFog) * 0.24, 0.0, 0.62);
    float a = uOpacity * vShimmer * depthFade * (1.0 + hot * 2.2 + acc * 0.9);
    gl_FragColor = vec4(col * gain * a, a);
  }
`,b0=`
  precision highp float;

  attribute float aNeuron;
  attribute float aDist;
  attribute float aSize;
  attribute float aKind;   // 0 base, 1 dimorphic, 2 descending
  attribute float aSeed;

  uniform float uScale;
  uniform float uSizeBoost;

  varying float vHot;
  varying float vAcc;
  varying float vKind;
  varying float vShimmer;

  ${pu}

  void main() {
    float hot, acc;
    sampleActivity(aNeuron, aDist, hot, acc);
    vHot = min(hot, 2.0);
    vAcc = min(acc, 1.0);
    vKind = aKind;
    vShimmer = 0.6 + 0.4 * sin(uTime * (0.5 + aSeed * 1.1) + aSeed * 27.0);

    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float grow = 1.0 + vHot * 1.35 + vAcc * 0.7;
    gl_PointSize = clamp(aSize * grow * uSizeBoost * uScale / max(-mv.z, 0.05), 1.0, 96.0);
    gl_Position = projectionMatrix * mv;
  }
`,E0=`
  precision highp float;

  uniform vec3 uBase;
  uniform vec3 uAccent;
  uniform float uOpacity;

  varying float vHot;
  varying float vAcc;
  varying float vKind;
  varying float vShimmer;

  void main() {
    vec2 d = gl_PointCoord - vec2(0.5);
    float r = length(d) * 2.0;
    if (r > 1.0) discard;
    float halo = pow(1.0 - r, 2.4);
    float core = pow(max(1.0 - r * 2.1, 0.0), 2.0);

    float dim = step(0.5, vKind);
    float acc = clamp(vAcc + dim * 0.34, 0.0, 1.0);
    vec3 col = mix(uBase, uAccent, acc);
    float hot = clamp(vHot, 0.0, 1.5);
    col = mix(col, vec3(1.0, 0.98, 0.94), clamp(hot, 0.0, 1.0) * 0.9);

    float gain = 1.0 + hot * 4.0 + acc * 1.4;
    float a = uOpacity * (halo * 0.55 + core * 0.85) * (0.55 + 0.45 * vShimmer) * (1.0 + hot * 2.4);
    gl_FragColor = vec4(col * gain * a, a);
  }
`});function xu(i,e={}){let t=e.onSpike||(()=>{}),n=e.onVerdict||(()=>{}),s=i.neurons,r=s.length,a=new Int32Array(r),o=new Map;for(let M=0;M<r;M++)a[M]=Number(s[M].id),o.set(a[M],M);let l=new Array(r),c=new Int8Array(r),u=new Uint8Array(r),d=new Float32Array(r*3);for(let M=0;M<r;M++){let g=s[M];l[M]=g.type||"other",c[M]=_u[l[M]]==null?-1:_u[l[M]],u[M]=g.dimorphic||l[M]==="dimorphic"?1:0,d[M*3]=g.soma[0],d[M*3+1]=g.soma[1],d[M*3+2]=g.soma[2]}let h=1;{let M=[1/0,1/0,1/0],g=[-1/0,-1/0,-1/0];for(let N=0;N<r;N++)for(let U=0;U<3;U++){let G=d[N*3+U];G<M[U]&&(M[U]=G),G>g[U]&&(g[U]=G)}h=Math.hypot(g[0]-M[0],g[1]-M[1],g[2]-M[2])||1}let m=(i.pathway||[]).map(Number).filter(M=>o.has(M)),v=new Set(m),T=new Set;for(let M=0;M<m.length-1;M++)T.add(m[M]+":"+m[M+1]);let f=new Array(r);for(let M=0;M<r;M++)f[M]=[];let p=0,w=[],A=new Int32Array(r);for(let M of i.edges||[]){if(!M||M.length<2)continue;let g=o.get(Number(M[0])),N=o.get(Number(M[1]));if(g==null||N==null||g===N)continue;let U=Math.hypot(d[g*3]-d[N*3],d[g*3+1]-d[N*3+1],d[g*3+2]-d[N*3+2])/h,G=T.has(a[g]+":"+a[N])||v.has(a[g])&&v.has(a[N])&&c[N]>c[g],ae=c[g]>=0&&c[N]===c[g]+1;G&&A[N]++,w.push({a:g,b:N,d:U,spine:G,progressive:ae}),p++}for(let M=0;M<w.length;M++){let g=w[M],N=.16,U=.32;if(g.spine){let ae=6/Math.max(1,A[g.b]);N=ae>2.5?2.5:ae<.24?.24:ae,U=1}else g.progressive&&(N=.7,U=.94);let G=Math.max(1,Math.min(2046,Math.round((.72+.6*g.d)/.002)));f[g.a].push({j:g.b,w:N,p:U,delaySteps:G})}let _=p/Math.max(1,r),y=Math.min(1,3/Math.max(3,_));if(y<1)for(let M=0;M<r;M++){let g=f[M];for(let N=0;N<g.length;N++)g[N].w===.16&&(g[N].w*=y,g[N].p*=y)}let E=[],C=[];for(let M=0;M<r;M++)l[M]==="orn"?E.push(M):l[M]==="other"&&C.push(M);let x=new Int16Array(r).fill(-1),S=[];for(let M=0;M<mn;M++)S.push([]);{let M=0;for(let ae=0;ae<r;ae++){let ue=Math.abs(d[ae*3]);ue>M&&(M=ue)}let g=[];for(let ae=0;ae<r;ae++)c[ae]>=0||Math.abs(d[ae*3])<M*.42||g.push(ae);g.length<mn*3&&(g=C.slice());let N=1/0,U=-1/0;for(let ae of g){let ue=d[ae*3+1];ue<N&&(N=ue),ue>U&&(U=ue)}let G=U-N||1;for(let ae of g){let ue=(d[ae*3+1]-N)/G,j=Math.min(mn-1,Math.max(0,Math.floor(ue*mn)));x[ae]=j,S[j].push(ae)}}let R=0,P=0,L=0;for(let M=0;M<r;M++)u[M]&&(R+=f[M].length,P++),l[M]==="descending"&&L++;let V=p/Math.max(1,r),D=P?R/P/Math.max(.4,V):1,k=new Float32Array(r),K=new Float32Array(r),B=new Float32Array(r),Z=new Float32Array(r),H=new Float32Array(r);for(let M=0;M<r;M++)H[M]=.82+M*.6180339887%1*.4;let Y=new Array(2048);for(let M=0;M<2048;M++)Y[M]=[];let Q=new Array(2048);for(let M=0;M<2048;M++)Q[M]=[];let de=0,le=0,We=!1,Le=0,Te=0,J=!1,ee=0,W=0,ne=0,te=-1,oe=0,Ve=0,re=0,ve=new Float32Array(mn),Ce=0,Be=0,$e=i.meta&&i.meta.sex==="male"?5370807:2923233;function ct(){$e=$e+1831565813|0;let M=Math.imul($e^$e>>>15,1|$e);return M=M+Math.imul(M^M>>>7,61|M)^M,((M^M>>>14)>>>0)/4294967296}let he=Math.exp(-.002/.028),me=Math.exp(-.002/.55),fe=Math.exp(-.002/A0);function I(M,g){if(!g&&le<Z[M])return;Z[M]=le+.14*(.8+ct()*.5),k[M]=-.18,W++,B[M]+=l[M]==="orn"?5.6:1.35;let N=x[M];N>=0&&(ve[N]+=1),u[M]&&(Ce+=1),l[M]==="descending"&&(Be+=1),t(a[M],l[M],u[M]===1,N>=0),l[M]==="descending"&&Te>0&&!J&&(J=!0,n());let U=f[M];for(let G=0;G<U.length;G++){let ae=U[G];if(ae.p<1&&ct()>ae.p)continue;let ue=1+(ct()-.5)*.16,j=Math.max(1,Math.min(2046,Math.round(ae.delaySteps*ue))),ie=(de+j)%2048;Y[ie].push(ae.j),Q[ie].push(ae.w)}}function Ye(){de++,le+=.002;let M=de%2048,g=Y[M];if(g.length){let U=Q[M];for(let G=0;G<g.length;G++)K[g[G]]+=U[G];g.length=0,U.length=0}Le+=((We?1:0)-Le)*Math.min(1,.002/.08),C.length&&W<180&&ct()<9*.002&&I(C[ct()*C.length|0],!1),re>0&&(re-=.002);let N=(Le+(re>0?Ve:0))*16;for(let U=0;U<r;U++){let G=K[U];G!==0&&(K[U]=G*he),B[U]!==0&&(B[U]*=me),k[U]+=(-k[U]/.085+G*26-B[U])*.002,k[U]>=1&&I(U,!1)}if(N>.01)for(let U=0;U<E.length;U++){let G=E[U];k[G]+=N*H[G]*.002,k[G]>=1&&I(G,!1)}if(oe>.001&&te>=0){let U=te*(mn-1);for(let G=0;G<mn;G++){let ae=G-U;if(ae>2.3||ae<-2.3)continue;let ue=Math.exp(-ae*ae*.72)*oe*w0,j=S[G];for(let ie=0;ie<j.length;ie++){let pe=j[ie];k[pe]+=ue*H[pe]*.002,k[pe]>=1&&I(pe,!1)}}}for(let U=0;U<mn;U++)ve[U]*=fe;Ce*=fe,Be*=fe,de-ne>=500&&(ne=de,W=0)}function et(M){ee+=Math.min(Math.max(M||0,0),.1);let g=0;for(;ee>=.002&&g<140;)ee-=.002,Ye(),g++;ee>.002*6&&(ee=0)}return{puffStart(){We||(We=!0,Te++,J=!1)},puffEnd(){We=!1},fire(M){let g=o.get(Number(M));return g==null?!1:(I(g,!0),!0)},step:et,stimulate(M,g){Ve=M,re=Math.max(re,g||.35)},visualDrive(M,g){te=M,oe=g},motionReadout(){let M=0,g=0;for(let N=0;N<mn;N++)M+=ve[N]*(N/(mn-1)),g+=ve[N];return{u:g>.001?M/g:.5,energy:g}},get dimorphicRate(){return Ce},get descendingRate(){return Be},reset(){We=!1,Le=0,te=-1,oe=0,Ve=0,re=0,J=!1,Ce=0,Be=0,k.fill(0),K.fill(0),B.fill(0),Z.fill(0),ve.fill(0);for(let M=0;M<2048;M++)Y[M].length=0,Q[M].length=0},get time(){return le},get verdictDone(){return J},pathway:m,structure:{dimFanout:D,dimCount:P,descCount:L,meanOut:V,visBins:mn},stats:{neurons:r,edges:p,pathway:m.length}}}var _u,mn,w0,A0,vu=Pt(()=>{_u={orn:0,pn:1,lhn:2,dimorphic:3,descending:4},mn=12,w0=19,A0=.13});function yu(i={}){let e=i.onPuffStart||(()=>{}),t=i.onPuffEnd||(()=>{}),n=re=>document.getElementById(re),s=n("caption"),r={male:n("verdict-male"),female:n("verdict-female")},a={male:n("badge-male"),female:n("badge-female")},o=n("puff"),l=n("puff-fill"),c=n("real-toggle"),u=n("real-panel"),d=n("real-close"),h=n("fps"),m=n("boot"),v=n("modebar"),T=n("modebar-thumb"),f=n("real-mode"),p={versus:n("versus-layer"),swipe:n("swipe-layer")},w={court:n("court"),deck:n("deck"),versusNum:n("versus-num"),versusBtn:n("versus-human"),swipeScore:n("swipe-score")},A="",_=0,y=null;function E(re){let ve=re==null?"":String(re);if(ve!==A){if(A=ve,!ve){s.classList.remove("is-on"),y=null;return}s.classList.contains("is-on")?(s.classList.remove("is-on"),y=ve,_=.24):(s.textContent=ve,s.classList.add("is-on"))}}function C(re,ve){let Ce=r[re];Ce&&(Ce.textContent=ve,Ce.offsetWidth,Ce.classList.add("is-on"))}function x(){r.male.classList.remove("is-on"),r.female.classList.remove("is-on")}function S(re,ve){let Ce=a[re];if(Ce){if(!ve){Ce.hidden=!0;return}Ce.textContent=ve,Ce.hidden=!1}}let R=!1,P=0;function L(re){re&&re.preventDefault(),!R&&(R=!0,o.classList.add("is-held"),e())}function V(){R&&(R=!1,o.classList.remove("is-held"),t())}o.addEventListener("pointerdown",re=>{try{o.setPointerCapture&&o.setPointerCapture(re.pointerId)}catch{}L(re)}),o.addEventListener("pointerup",V),o.addEventListener("pointercancel",V),o.addEventListener("pointerleave",V),o.addEventListener("contextmenu",re=>re.preventDefault()),window.addEventListener("blur",V),o.addEventListener("keydown",re=>{(re.code==="Space"||re.code==="Enter")&&(re.preventDefault(),L())}),o.addEventListener("keyup",re=>{(re.code==="Space"||re.code==="Enter")&&V()}),window.addEventListener("keydown",re=>{re.code==="Space"&&!re.repeat&&document.activeElement!==o&&(re.preventDefault(),L()),re.code==="Escape"&&K()}),window.addEventListener("keyup",re=>{re.code==="Space"&&document.activeElement!==o&&V()});let D=!1;function k(){D=!0,u.classList.add("is-open"),u.setAttribute("aria-hidden","false"),c.setAttribute("aria-expanded","true")}function K(){D&&(D=!1,u.classList.remove("is-open"),u.setAttribute("aria-hidden","true"),c.setAttribute("aria-expanded","false"))}c.addEventListener("click",()=>D?K():k()),d.addEventListener("click",K);let B=i.onMode||(()=>{}),Z=v?[...v.querySelectorAll(".modebar__btn")]:[],H="lab";function Y(){if(!T||!v)return;let re=Z.find(ve=>ve.dataset.mode===H);re&&(T.style.width=re.offsetWidth+"px",T.style.transform="translateX("+(re.offsetLeft-3)+"px)")}function Q(re){H=re;for(let ve of Z){let Ce=ve.dataset.mode===re;ve.classList.toggle("is-on",Ce),ve.setAttribute("aria-selected",Ce?"true":"false")}for(let ve in p)p[ve]&&(p[ve].hidden=ve!==re);document.body.className="mode-"+re,Y()}for(let re of Z)re.addEventListener("click",()=>{re.dataset.mode!==H&&B(re.dataset.mode)});window.addEventListener("resize",Y,{passive:!0});function de(re){f&&(f.textContent=re||"")}function le(re,ve){w.versusNum&&(w.versusNum.textContent=re+" : "+ve)}function We(re){w.versusBtn&&(w.versusBtn.hidden=!re)}function Le(re,ve,Ce,Be){if(w.swipeScore){if(Be){w.swipeScore.innerHTML='<span>He swiped right on <b class="m">'+re+"/"+Ce+'</b>. She swiped right on <b class="f">'+ve+"/"+Ce+"</b>. Same profiles.</span>";return}w.swipeScore.innerHTML='<span>His yes <b class="m">'+re+"/"+Ce+'</b></span><span>Her yes <b class="f">'+ve+"/"+Ce+"</b></span>"}}let Te=new URLSearchParams(location.search).get("debug")==="1",J=0,ee=0,W="";Te&&(h.hidden=!1);function ne(re){W=re||""}function te(re){y&&(_-=re,_<=0&&(s.textContent=y,y=null,s.classList.add("is-on")));let ve=R?1:0;if(R?P=Math.min(1,P+re/R0):P=Math.max(0,P-re/.34),l.style.strokeDashoffset=String(C0*(1-P)),Te&&(J+=re,ee++,J>=.5)){let Ce=ee/J;h.textContent=Ce.toFixed(0)+" fps"+(W?"  "+W:""),J=0,ee=0}}function oe(){m&&(m.classList.add("is-gone"),setTimeout(()=>m.remove(),600))}function Ve(re){m&&(m.textContent=re)}return{setCaption:E,showVerdict:C,hideVerdicts:x,setBadge:S,update:te,bootDone:oe,bootFail:Ve,closePanel:K,setDebugSuffix:ne,debug:Te,el:w,setMode:Q,setModeHonesty:de,setVersusScore:le,setVersusButton:We,setSwipeScore:Le,get mode(){return H},get isHeld(){return R},get panelIsOpen(){return D}}}var C0,R0,Mu=Pt(()=>{C0=2*Math.PI*33,R0=.9});function U0(i,e,t,n){let[s,r,a,o,l]=t,c=new Nt;c.position.set(s*e,r,a);let u=new xt(n.femur,i);u.position.y=-.055,c.add(u);let d=new Nt;d.position.y=-.11,c.add(d);let h=new xt(n.tibia,i);return h.position.y=-.05,d.add(h),c.rotation.z=-o*e*.55,c.rotation.x=l*.35,d.rotation.x=-.55,{root:c,knee:d,rest:{z:c.rotation.z,x:c.rotation.x},kneeRest:-.55}}function F0(i){let e=new Nt,t={value:0},n=new rt({uniforms:{uBody:{value:new Oe("#20262e")},uAccent:{value:new Oe(i)},uHeat:t,uEmit:{value:0}},vertexShader:Su,fragmentShader:bu}),s=new rt({uniforms:{uBody:{value:new Oe("#20262e")},uAccent:{value:new Oe(i).lerp(new Oe("#ffffff"),.25)},uHeat:t,uEmit:{value:1}},vertexShader:Su,fragmentShader:bu}),r=new rt({uniforms:{uColor:{value:new Oe(i).lerp(new Oe("#ffffff"),.45)},uOpacity:{value:1}},vertexShader:I0,fragmentShader:P0,transparent:!0,depthWrite:!1,side:Kt,blending:qt}),a={blob:new Qi(1,1),nub:new Qi(1,0),femur:new $i(.013,.009,.11,3,1,!0),tibia:new $i(.009,.004,.1,3,1,!0),wing:(()=>{let T=new Os(1,8);return T.rotateX(-Math.PI/2),T.translate(0,0,-1),T.scale(.075,1,.29),T})()},o=new Nt;e.add(o);let l=new xt(a.blob,n);l.scale.set(.082,.079,.2),l.position.set(0,.002,-.21),o.add(l);let c=new xt(a.blob,n);c.scale.set(.094,.09,.105),c.position.set(0,.018,.01),o.add(c);let u=new Nt;u.position.set(0,.038,.13),o.add(u);let d=new xt(a.nub,n);d.scale.set(.046,.046,.042),u.add(d);let h=[];for(let T of[-1,1]){let f=new xt(a.nub,s);f.scale.set(.046,.056,.046),f.position.set(.04*T,.008,.008),u.add(f),h.push(f)}let m=[];for(let T of[-1,1]){let f=new Nt;f.position.set(.028*T,.075,-.015);let p=new xt(a.wing,r);f.add(p),f.rotation.y=-.16*T,f.rotation.z=.1*T,o.add(f),m.push({pivot:f,restY:f.rotation.y,restZ:f.rotation.z,side:T})}let v=[];for(let T of[-1,1])for(let f of N0){let p=U0(n,T,f,a);p.side=T,o.add(p.root),v.push(p)}return{group:e,body:o,head:u,wings:m,legs:v,chitin:n,eyeMat:s,wingMat:r,geos:a,eyes:h}}function Eu(i){let e=i.sex,t=i.accent,n=i.facing==null?1:i.facing,s=e==="male",r=new Nt,a=new rt({uniforms:{uColor:{value:new Oe(t).lerp(new Oe("#8fa3b5"),.55)},uOpacity:{value:0}},vertexShader:L0,fragmentShader:D0,transparent:!0,depthWrite:!1,blending:qt,side:Kt}),o=new gi(1.3,.66);o.rotateX(-Math.PI/2);let l=new xt(o,a);r.add(l);let c=F0(t);c.group.rotation.y=n*Math.PI/2,c.group.scale.setScalar(1),r.add(c.group);let u="idle",d=0,h=0,m=0,v=0,T=3+Math.random()*4,f=0,p=0,w=0,A=0,_=[.16,.16,.12,.5],y=[.22,1.05,.5];function E(B){u=B,d=0,h=B==="orient"?.34:B==="lunge"?_[0]+_[1]+_[2]+_[3]:B==="pause"?y[0]+y[1]+y[2]:0}function C(){if(m=Math.min(1,m+.55),u!=="idle"){A++;return}w=s?.34*n:-.16*n,E("orient")}let x=B=>1-Math.pow(1-B,3),S=B=>B*B*B;function R(B,Z){v+=B*2.1;let H=Math.sin(v*2)*.004;c.body.position.y=H,c.body.position.z=0,c.body.rotation.x=Math.sin(v)*.02;for(let Y=0;Y<c.legs.length;Y++){let Q=c.legs[Y],de=(Y+(Q.side>0?1:0))%2,le=v+de*Math.PI;Q.root.rotation.x=Q.rest.x+Math.sin(le)*.2,Q.knee.rotation.x=Q.kneeRest+Math.max(0,Math.sin(le))*.22}for(let Y of c.wings)Y.pivot.rotation.y=Y.restY,Y.pivot.rotation.z=Y.restZ+Math.sin(Z*1.3+Y.side)*.015;u==="idle"&&(T-=B,T<=0&&(T=5+Math.random()*6,E("groom"))),c.head.rotation.x=Math.sin(Z*.7)*.04,c.head.rotation.y=Math.sin(Z*.41)*.06}function P(B){let Z=Math.sin(B*Math.PI);c.head.rotation.x=.25*Z;for(let H=0;H<c.legs.length;H++){let Y=c.legs[H];H%3===0&&(Y.root.rotation.x=Y.rest.x-.85*Z,Y.knee.rotation.x=Y.kneeRest-.9*Z+Math.sin(B*26)*.18*Z)}}function L(B){c.body.rotation.x=-.06*Math.sin(B*Math.PI),c.head.rotation.y=p*.5;for(let Z of c.wings)Z.pivot.rotation.z=Z.restZ+.12*Math.sin(B*Math.PI)}function V(B){let[Z,H,Y,Q]=_,de=0,le=0,We=0,Le=0;if(B<Z){let Te=B/Z;de=-.05*x(Te),le=-.022*x(Te),We=.16*x(Te),Le=.5*x(Te)}else if(B<Z+H){let Te=(B-Z)/H;de=-.05+.28*S(Te)+.05*Te,le=-.022+.03*Te,We=.16-.3*Te,Le=.5+.5*Te}else if(B<Z+H+Y)de=.28,le=.008,We=-.14,Le=1;else{let Te=Math.min(1,(B-Z-H-Y)/Q);de=.28*(1-x(Te)),le=.008*(1-Te),We=-.14*(1-x(Te)),Le=1-x(Te)}c.body.position.z=de,c.body.position.y=le,c.body.rotation.x=We;for(let Te of c.wings)Te.pivot.rotation.y=Te.restY-1.05*Le*Te.side,Te.pivot.rotation.z=Te.restZ+.45*Le;for(let Te=0;Te<c.legs.length;Te++){let J=c.legs[Te];J.root.rotation.x=J.rest.x+(Te%3===0?-.5:.32)*Le,J.knee.rotation.x=J.kneeRest-.35*Le}}function D(B){let[Z,H,Y]=y;if(B<Z){let Q=B/Z;c.body.position.y=-.014*x(Q),c.body.rotation.x=.05*x(Q);for(let de of c.wings)de.pivot.rotation.y=de.restY*(1-.6*Q),de.pivot.rotation.z=de.restZ*(1-.6*Q);for(let de of c.legs)de.root.rotation.x=de.rest.x,de.knee.rotation.x=de.kneeRest}else if(B<Z+H)P((B-Z)/H),c.body.position.y=-.014,c.body.rotation.x=.05;else{let Q=Math.min(1,(B-Z-H)/Y);c.body.position.y=-.014*(1-x(Q)),c.body.rotation.x=.05*(1-x(Q)),c.head.rotation.x*=1-Q;for(let de of c.wings)de.pivot.rotation.y=de.restY*(.4+.6*Q),de.pivot.rotation.z=de.restZ*(.4+.6*Q)}}function k(B,Z){if(f=Math.min(1,f+B*1.6),a.uniforms.uOpacity.value=f*.85,c.wingMat.uniforms.uOpacity.value=f,m=Math.max(0,m-B*.85),c.chitin.uniforms.uHeat.value=m,p+=(w-p)*(1-Math.exp(-B*6)),c.group.rotation.y=n*Math.PI/2+p,u==="idle"){R(B,Z);return}d+=B;let H=h>0?Math.min(1,d/h):1;if(u==="groom"){R(B*.35,Z),P(Math.min(1,d/1.1)),d>=1.1&&(u="idle");return}if(u==="orient"){L(H),H>=1&&E(s?"lunge":"pause");return}if(u==="lunge"){V(d),H>=1&&(w=0,u="idle",A>0&&(A=0,C()));return}if(u==="pause"){D(d),H>=1&&(w=0,u="idle",A=0);return}u="idle"}function K(){r.traverse(B=>{B.isMesh&&(B.geometry&&B.geometry.dispose(),B.material&&B.material.dispose())});for(let B in c.geos)c.geos[B]&&c.geos[B].dispose&&c.geos[B].dispose();c.chitin.dispose(),c.eyeMat.dispose(),c.wingMat.dispose(),o.dispose(),a.dispose(),r.parent&&r.parent.remove(r)}return{group:r,update:k,trigger:C,dispose:K,get state(){return u}}}var Su,bu,I0,P0,L0,D0,N0,Tu=Pt(()=>{Cn();Su=`
  varying vec3 vN;
  varying vec3 vV;
  void main() {
    vN = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,bu=`
  precision highp float;
  uniform vec3 uBody;
  uniform vec3 uAccent;
  uniform float uHeat;     // rises while the body is acting on a spike burst
  uniform float uEmit;     // 0 chitin, 1 compound eye
  varying vec3 vN;
  varying vec3 vV;
  void main() {
    vec3 L = normalize(vec3(0.32, 0.88, 0.36));
    float d = max(dot(vN, L), 0.0);
    // tight rim: a silhouette highlight, not a wash over the whole body
    float rim = pow(1.0 - max(dot(vN, vV), 0.0), 4.0);
    float spec = pow(d, 18.0);
    vec3 c = uBody * (0.22 + 0.95 * d);
    c += uAccent * (rim * (0.5 + uHeat * 1.2) + spec * 0.35 + d * d * (0.07 + uHeat * 0.6));
    // eyes sit just under the bloom threshold: bright enough to read as the
    // head, not so bright they blow out into a white ball
    c = mix(c, uAccent * (0.22 + 0.42 * d) + vec3(rim * 0.22), uEmit);
    gl_FragColor = vec4(c, 1.0);
  }
`,I0=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,P0=`
  precision highp float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    float r = length(vUv - 0.5) * 2.0;
    float membrane = mix(0.10, 0.26, r);
    float edge = smoothstep(0.8, 1.0, r) * 0.7;
    float a = (membrane + edge) * uOpacity;
    gl_FragColor = vec4(uColor * a, a);
  }
`,L0=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,D0=`
  precision highp float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    vec2 p = (vUv - 0.5) * 2.0;
    float e = 1.0 - clamp(length(vec2(p.x * 0.62, p.y)), 0.0, 1.0);
    float glow = pow(e, 2.1) * 0.5;
    float line = smoothstep(0.055, 0.0, abs(p.y)) * pow(1.0 - abs(p.x), 1.6);
    float a = (glow * 0.42 + line * 0.55) * uOpacity;
    gl_FragColor = vec4(uColor * a, a);
  }
`,N0=[[.105,-.055,.135,.62,.5],[.115,-.06,-.005,.78,0],[.105,-.055,-.13,.66,-.55]]});function O0(i){let e={male:"LUNGE \xB7 AGGRESSION",female:"PAUSE \xB7 RECEPTIVITY"},t="identical input, different wiring, opposite behavior",n=0,s=[],r={male:!1,female:!1},a=!1,o=1/0,l=!1,c={},u=(h,m)=>s.push({t:n+h,fn:m}),d=()=>{s.length=0};return{name:"lab",enter(){for(let h of Ct){let m=Eu({sex:h,accent:i.accents[h],facing:h==="male"?1:-1});m.group.position.set(h==="male"?.84:-.84,-.86,.1),m.group.scale.setScalar(1.1),i.scenes[h].add(m.group),c[h]=m}i.setFraming("bodies"),i.ui.setModeHonesty("BODY STAGE: the two flies are animated puppets, not physics. Their state machine has exactly one trigger, the descending-neuron output of the brain above them, so when he lunges it is because his DN population actually fired. A true embodied version needs MuJoCo and the published flybody model."),u(.9,()=>{l||(l=!0,i.ui.setCaption("SAME SMELL"),u(4.2,()=>{!i.ui.isHeld&&!r.male&&!r.female&&i.ui.setCaption("")}))})},exit(){d();for(let h of Ct)c[h]&&(i.scenes[h].remove(c[h].group),c[h].dispose(),delete c[h]);i.setFraming("default"),i.ui.hideVerdicts(),i.ui.setCaption("")},puffStart(){d(),l=!0,r={male:!1,female:!1},a=!1,o=1/0,i.ui.hideVerdicts();for(let h of Ct)i.sims[h].puffStart(),i.views[h].armEpisode();i.ui.setCaption("SAME SMELL"),u(1.75,()=>i.ui.setCaption("SIGNAL DIVERGES AT THE DIMORPHIC CORE"))},puffEnd(){for(let h of Ct)i.sims[h].puffEnd()},verdict(h){r[h]||(r[h]=!0,i.ui.showVerdict(h,e[h]),i.views[h].flare(),r.male&&r.female&&!a&&(a=!0,u(.95,()=>i.ui.setCaption(t)),o=n+8.5))},pick(h,m,v){v&&(i.ui.setCaption("DIMORPHIC NEURON FIRED"),d(),u(3.4,()=>{!i.ui.isHeld&&!r.male&&!r.female&&i.ui.setCaption("")}))},onSpike(h,m,v){v==="descending"&&c[h]&&c[h].trigger()},update(h){n+=h;for(let m=s.length-1;m>=0;m--)if(n>=s[m].t){let v=s[m].fn;s.splice(m,1),v()}n>=o&&(o=1/0,i.ui.isHeld||(i.ui.hideVerdicts(),i.ui.setCaption("")));for(let m of Ct)c[m]&&c[m].update(h,n)}}}function B0(i){let t=i.ui.el.court,n=t?t.getContext("2d"):null,s={};{let S={};for(let P of Ct)S[P]=sn(i.sims[P].structure.dimFanout,.35,3);let R=(S.male+S.female)/2||1;for(let P of Ct){let L=sn(Math.pow(S[P]/R,6),.55,1.8);s[P]={gain:30*L,damp:10.5/L,fanout:S[P],k:L}}}let r={male:.5,female:.5},a={male:0,female:0},o={male:0,female:0},l={x:.5,y:.5,vx:.44,vy:.2,r:.016},c=[],u=null,d=.5,h=0,m=!1,v=1.1,T=1,f=1,p=1,w=0;function A(){if(!t)return;T=Math.min(window.devicePixelRatio||1,2);let S=t.getBoundingClientRect();f=Math.max(1,Math.round(S.width)),p=Math.max(1,Math.round(S.height)),t.width=Math.round(f*T),t.height=Math.round(p*T)}function _(S){if(!u||!t)return;let R=t.getBoundingClientRect();d=sn((S.clientY-R.top)/Math.max(1,R.height),.06,.94)}function y(){u=o.male>o.female?"female":"male",o.male=0,o.female=0,m=!1,E(u==="male"?1:-1),v=1.2,i.ui.setVersusScore(0,0),i.ui.setVersusButton(!1),i.ui.setCaption("YOU HAVE THE "+u.toUpperCase()+" PADDLE"),w=0}function E(S){l.x=.5,l.y=.35+Math.random()*.3,l.vx=.42*S,l.vy=(Math.random()-.5)*.36,c.length=0}function C(S){o[S]++,i.views[S].flare(),i.ui.setVersusScore(o.male,o.female),o[S]>=5?(m=!0,h=1.5,i.ui.setCaption((S==="male"?"MALE":"FEMALE")+" TAKES THE MATCH"),i.ui.setVersusButton(!0)):(v=.9,E(S==="male"?1:-1))}function x(){if(!n)return;n.setTransform(T,0,0,T,0,0),n.clearRect(0,0,f,p),n.globalCompositeOperation="source-over",n.fillStyle="rgba(8,9,11,0.55)",n.fillRect(0,0,f,p),n.strokeStyle="rgba(255,255,255,0.1)",n.lineWidth=1,n.strokeRect(.5,.5,f-1,p-1),n.globalCompositeOperation="lighter",n.strokeStyle="rgba(255,255,255,0.09)",n.setLineDash([4,9]),n.beginPath(),n.moveTo(f/2,6),n.lineTo(f/2,p-6),n.stroke(),n.setLineDash([]);for(let R of Ct){let P=i.sims[R].motionReadout(),L=(1-P.u)*p,V=sn(P.energy/22,0,1)*.5;n.fillStyle=R==="male"?"rgba(224,120,74,"+V+")":"rgba(63,210,199,"+V+")";let D=R==="male"?0:f-26;n.fillRect(D,L-1.2,26,2.4)}for(let R=0;R<c.length;R++){let P=c[R],L=R/c.length*.3;n.fillStyle="rgba(255,255,255,"+L+")",n.beginPath(),n.arc(P.x*f,P.y*p,l.r*f*(.35+.5*(R/c.length)),0,6.284),n.fill()}n.shadowBlur=18,n.shadowColor="rgba(255,255,255,0.85)",n.fillStyle="#ffffff",n.beginPath(),n.arc(l.x*f,l.y*p,l.r*f,0,6.284),n.fill(),n.shadowBlur=0;let S=.115*p;for(let R of Ct){let P=R==="male"?.045*f:.955*f,L=r[R]*p;n.shadowBlur=14,n.shadowColor=R==="male"?"rgba(224,120,74,0.9)":"rgba(63,210,199,0.85)",n.fillStyle=R==="male"?"#e0784a":"#3fd2c7",n.fillRect(P-2,L-S/2,4,S),n.shadowBlur=0,u===R&&(n.strokeStyle="rgba(255,255,255,0.65)",n.strokeRect(P-4.5,L-S/2-3,9,S+6))}n.globalCompositeOperation="source-over"}return{name:"versus",boostVisual:!0,get timeScale(){return h>0?.25:1},enter(){for(let S of Ct)i.sims[S].reset();i.setFraming("sides"),i.ui.setVersusScore(0,0),i.ui.setVersusButton(!1),i.ui.setCaption("SAME BALL. TWO DECODERS."),i.ui.setModeHonesty("VERSUS: the ball position is injected as retinotopic current into each brain\u2019s optic-lobe-adjacent population, and each paddle is a decoded population readout through a fixed motor mapping. The stiffness and damping of that mapping come from each graph\u2019s own dimorphic fan-out, not from a hardcoded personality. The brains do not know they are playing."),A(),window.addEventListener("resize",A,{passive:!0}),window.addEventListener("pointermove",_,{passive:!0}),i.ui.el.versusBtn&&i.ui.el.versusBtn.addEventListener("click",y),E(Math.random()<.5?1:-1),v=1.3,w=0},exit(){window.removeEventListener("resize",A),window.removeEventListener("pointermove",_),i.ui.el.versusBtn&&i.ui.el.versusBtn.removeEventListener("click",y);for(let S of Ct)i.sims[S].visualDrive(-1,0),i.sims[S].reset();i.setFraming("default"),i.ui.setCaption(""),i.ui.setVersusButton(!1),u=null,m=!1,o.male=0,o.female=0},puffStart(){},puffEnd(){},verdict(){},pick(){},onSpike(){},update(S,R){h>0&&(h=Math.max(0,h-R)),w>=0&&(w+=R,w>4.5&&(w=-1,m||i.ui.setCaption("")));let P=sn(1-l.y,0,1);i.sims.male.visualDrive(P,.34+.5*sn(1-l.x,0,1)),i.sims.female.visualDrive(P,.34+.5*sn(l.x,0,1));for(let L of Ct){if(u===L){r[L]+=(d-r[L])*(1-Math.exp(-S*16)),a[L]=0;continue}let V=i.sims[L].motionReadout(),D=sn(V.energy/14,0,1),k=.5+(1-V.u-.5)*(.35+.75*D),K=s[L];a[L]+=((k-r[L])*K.gain-a[L]*K.damp)*S,r[L]=sn(r[L]+a[L]*S,.06,.94)}if(v>0)v-=S;else if(!m){l.x+=l.vx*S,l.y+=l.vy*S,l.y<l.r&&(l.y=l.r,l.vy=Math.abs(l.vy)),l.y>1-l.r&&(l.y=1-l.r,l.vy=-Math.abs(l.vy));let L=.115;l.vx<0&&l.x<.045+l.r&&(Math.abs(l.y-r.male)<L/2+l.r?(l.x=.045+l.r,l.vx=Math.abs(l.vx)*1.035,l.vy+=(l.y-r.male)*1.9,i.views.male.flare()):l.x<-.03&&C("female")),l.vx>0&&l.x>.955-l.r&&(Math.abs(l.y-r.female)<L/2+l.r?(l.x=.955-l.r,l.vx=-Math.abs(l.vx)*1.035,l.vy+=(l.y-r.female)*1.9,i.views.female.flare()):l.x>1.03&&C("male")),l.vx=sn(l.vx,-.95,.95),l.vy=sn(l.vy,-.72,.72),c.push({x:l.x,y:l.y}),c.length>12&&c.shift()}x()}}}function z0(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function k0(i){let e="pg"+ ++V0,t=Math.round(i()<.55?16+i()*26:166+i()*28),n=15+i()*6,s=30+i()*4,r=14+i()*22,a=62+i()*18,o=3+Math.floor(i()*4),l="hsl("+t+" 24% 62%)",c="hsl("+t+" 30% 26%)",u="";for(let d=0;d<o;d++){let m=(-70+d/Math.max(1,o-1)*140)*Math.PI/180;u+='<line x1="60" y1="22" x2="'+(60+Math.sin(m)*15).toFixed(1)+'" y2="'+(22-Math.cos(m)*15).toFixed(1)+'" stroke="'+c+'" stroke-width="1.4" stroke-linecap="round" opacity=".8"/>'}return'<svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><radialGradient id="'+e+'" cx="50%" cy="35%"><stop offset="0" stop-color="'+l+'" stop-opacity=".55"/><stop offset="1" stop-color="'+l+'" stop-opacity="0"/></radialGradient></defs><rect width="120" height="150" fill="url(#'+e+')"/><g transform="translate(0,6)"><ellipse cx="60" cy="'+(52+a/2)+'" rx="19" ry="'+(a/2).toFixed(1)+'" fill="'+c+'"/><ellipse cx="60" cy="52" rx="21" ry="19" fill="'+l+'" opacity=".85"/><path d="M60 48 q-'+r.toFixed(0)+' 34 -8 72" stroke="'+l+'" stroke-width="1.2" fill="'+l+'" fill-opacity=".12"/><path d="M60 48 q'+r.toFixed(0)+' 34 8 72" stroke="'+l+'" stroke-width="1.2" fill="'+l+'" fill-opacity=".12"/><ellipse cx="60" cy="30" rx="15" ry="13" fill="'+c+'"/><ellipse cx="'+(60-n*.62).toFixed(1)+'" cy="'+s.toFixed(1)+'" rx="'+(n*.52).toFixed(1)+'" ry="'+(n*.66).toFixed(1)+'" fill="#e0784a" opacity=".82"/><ellipse cx="'+(60+n*.62).toFixed(1)+'" cy="'+s.toFixed(1)+'" rx="'+(n*.52).toFixed(1)+'" ry="'+(n*.66).toFixed(1)+'" fill="#e0784a" opacity=".82"/>'+u+"</g></svg>"}function H0(i){let t=i.ui.el.deck,n=z0(6221086),s=[];for(let A=0;A<10;A++){let _=.42+(A+.15+n()*.7)/10*.88,y=n()*.5;s.push({name:wu[Math.floor(n()*wu.length)],age:2+Math.floor(n()*28),bio:Au[Math.floor(n()*Au.length)],svg:k0(n),cva:sn((_-y*.35)/.9,.08,1.3),food:y,movement:n()})}for(let A=s.length-1;A>0;A--){let _=n()*(A+1)|0,y=s[A];s[A]=s[_],s[_]=y}let r=.105,a={};for(let A of Ct)a[A]=Math.max(1,i.sims[A].structure.dimCount);let o=0,l="in",c=0,u=null,d={male:0,female:0},h={male:0,female:0},m=0;function v(A){let _=document.createElement("article");return _.className="card",_.innerHTML='<div class="card__art">'+A.svg+'</div><div class="card__meta"><div class="card__name">'+A.name+" <span>"+A.age+'d</span></div><div class="card__bio">'+A.bio+'</div></div><div class="card__chem"><span>cVA '+Math.round(A.cva*100)+"</span><span>ODOUR "+Math.round(A.food*100)+"</span><span>MOTION "+Math.round(A.movement*100)+'</span></div><div class="card__stamp card__stamp--male" data-side="male"></div><div class="card__stamp card__stamp--female" data-side="female"></div>',_}function T(){if(o>=s.length){l="done",i.ui.setCaption("He swiped right on "+h.male+"/10. She swiped right on "+h.female+"/10. Same profiles."),i.ui.setSwipeScore(h.male,h.female,10,!0);return}let A=s[o];u=v(A),t.appendChild(u),requestAnimationFrame(()=>u&&u.classList.add("is-in")),l="in",c=0,d={male:0,female:0},i.ui.setCaption("SAME PROFILE, BOTH BRAINS")}function f(){let A=s[o];for(let _ of Ct)i.sims[_].stimulate(A.cva*.9+A.food*.35,.55),i.sims[_].visualDrive(A.movement,.45+A.movement*.5),i.views[_].armEpisode()}function p(){let A={};for(let _ of Ct){A[_]=d[_]/a[_]>=r,A[_]&&h[_]++;let y=u&&u.querySelector(".card__stamp--"+_);y&&(y.textContent=(_==="male"?"HIS ":"HERS ")+(A[_]?"YES":"NO"),y.classList.add("is-on",A[_]?"is-yes":"is-no"))}return m++,i.ui.setSwipeScore(h.male,h.female,m,!1),i.ui.setCaption(A.male===A.female?A.male?"BOTH CIRCUITS SAID YES":"NEITHER CIRCUIT RESPONDED":"SAME SMELL, OPPOSITE CALL"),A}function w(A){if(!u)return;let _=A.male||A.female;u.classList.add(_?"is-right":"is-left");let y=u;u=null,setTimeout(()=>y.remove(),520)}return{name:"swipe",enter(){for(let A of Ct)i.sims[A].reset();i.setFraming("sides"),i.ui.setSwipeScore(0,0,0,!1),i.ui.setModeHonesty("SWIPE: each card carries a hidden chemical profile (cVA load, food odour, motion). Revealing it injects that profile into BOTH brains as identical sensory current; the swipe is read off the dimorphic population response that follows. The profiles, portraits and bios are invented. The disagreement between the two verdicts is the only part that comes out of the wiring."),o=0,m=0,h.male=0,h.female=0,T()},exit(){for(let A of Ct)i.sims[A].visualDrive(-1,0),i.sims[A].reset();t&&(t.innerHTML=""),u=null,i.setFraming("default"),i.ui.setCaption("")},puffStart(){},puffEnd(){},verdict(){},pick(){},onSpike(){},update(A){if(l!=="done")if(c+=A,l==="in"&&c>.6)f(),l="judging",c=0,u&&u.classList.add("is-live");else if(l==="judging"){for(let _ of Ct){let y=i.sims[_].dimorphicRate;y>d[_]&&(d[_]=y)}if(c>4.2){for(let y of Ct)i.sims[y].visualDrive(-1,0);let _=p();l="verdict",c=0,setTimeout(()=>w(_),700)}}else l==="verdict"&&c>1.35&&(o++,T())}}}function Cu(i,e){return(Mo[i]||Mo.lab)(e)}var Ct,sn,wu,Au,V0,Mo,Ru=Pt(()=>{Tu();Ct=["male","female"],sn=(i,e,t)=>i<e?e:i>t?t:i;wu=["Nyx","Orla","Wren","Bex","Juno","Pip","Sable","Kit","Vesper","Flint","Ondine","Moss","Cleo","Tarn","Ivo","Rune"],Au=["lives on a nectarine. no notes.","here for the fermentation, not the small talk.","i peaked during the third instar.","will share my banana. once.","yeast enthusiast. wing enthusiast. that is it.","looking for someone to circle a lamp with.","i have a great courtship song and zero follow-through.","not here for anything serious, i have 40 days.","raised on cornmeal agar, mentally still there.","my love language is proboscis extension.","geotaxis negative, emotionally too.","i was in a genetics screen once. it changed me."];V0=0;Mo={lab:O0,versus:B0,swipe:H0}});var q0=zu(()=>{Cn();jh();nu();su();cs();gu();vu();Mu();Ru();var Iu={male:"#e0784a",female:"#3fd2c7"},gn=["male","female"],Jl=36,Pu=328966,G0=768,Yl=Math.tan(Jl*Math.PI/360),Kl=class extends Qt{constructor(e,t){super(),this.scenes=e,this.cameras=t,this.needsSwap=!1,this.stacked=!1,this.clearColor=new Oe(Pu),this._size=new Pe,this._halves=[{scene:null,camera:null,x:0,y:0,w:1,h:1},{scene:null,camera:null,x:0,y:0,w:1,h:1}]}layout(e,t){let n=this._halves[0],s=this._halves[1];if(n.scene=this.scenes.male,s.scene=this.scenes.female,n.camera=this.cameras.male,s.camera=this.cameras.female,this.stacked)n.x=0,n.y=Math.round(t/2),n.w=e,n.h=t-Math.round(t/2),s.x=0,s.y=0,s.w=e,s.h=Math.round(t/2);else{let r=Math.round(e/2);n.x=0,n.y=0,n.w=r,n.h=t,s.x=r,s.y=0,s.w=e-r,s.h=t}return this._halves}render(e,t,n){let s=this.renderToScreen?null:n,r,a;s?(r=s.width,a=s.height):(e.getDrawingBufferSize(this._size),r=this._size.x,a=this._size.y);let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,1);let l=(u,d,h,m,v)=>{s?(s.viewport.set(u,d,h,m),s.scissor.set(u,d,h,m),s.scissorTest=v,e.setRenderTarget(s)):(e.setRenderTarget(null),e.setViewport(u,d,h,m),e.setScissor(u,d,h,m),e.setScissorTest(v))};l(0,0,r,a,!1),e.clear(!0,!0,!0);let c=this.layout(r,a);for(let u=0;u<c.length;u++){let d=c[u];l(d.x,d.y,d.w,d.h,!0),e.render(d.scene,d.camera)}l(0,0,r,a,!1),e.autoClear=o}};async function W0(i){let e=[{url:"data/real/"+i+".json",source:"real"},{url:"data/"+i+".json",source:"data"}];for(let t of e)try{let n=await fetch(t.url,{cache:"no-cache"});if(n&&n.ok){let s=await n.json();if(fu(s))return{graph:s,source:t.source}}}catch{}return{graph:Wl(i),source:"procedural"}}async function X0(){let i=document.getElementById("stage"),e;try{e=new fo({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch{return null}e.setClearColor(Pu,1),e.toneMapping=vi,e.toneMappingExposure=1.15,e.outputColorSpace=Lt,e.autoClear=!1;let t={male:new Dt(Jl,1,.05,60),female:new Dt(Jl,1,.05,60)},n={male:new Zi,female:new Zi},s={},r={},a={male:new Set,female:new Set},o={},l=await Promise.all(gn.map(W=>W0(W))),c=yu({onPuffStart:()=>le&&le.puffStart(),onPuffEnd:()=>le&&le.puffEnd(),onMode:W=>We(W)});for(let W=0;W<gn.length;W++){let ne=gn[W],te=l[W].graph;o[ne]=l[W].source;let oe=mu(te,{accent:Iu[ne],base:"#7e93a8"});s[ne]=oe,n[ne].add(oe.group);for(let Ve of te.neurons)(Ve.dimorphic||Ve.type==="dimorphic")&&a[ne].add(Number(Ve.id));l[W].source==="real"&&c.setBadge(ne,"REAL DATA")}if(o.male==="real"&&o.female==="real"){let W=document.getElementById("real-staged"),ne=document.getElementById("real-next");W&&(W.textContent="The neuron skeletons on screen are traced from the published connectomes: the male from the MaleCNS v1.0 release (Janelia and Google Research, CC-BY), the female from the FlyWire public release, downsampled to run in a browser. The edges between them are real reported connections. The dynamics are still a simplified leaky integrate-and-fire, and the timing is stretched so the cascade is legible to a human eye. Spike counts here are illustrative, not measured."),ne&&(ne.textContent="Synapse-count-weighted connections, and the SWIPE, REELS and VERSUS modes, where these two brains judge dating profiles, doomscroll, and play each other at Pong.")}let u=new Pe;e.getDrawingBufferSize(u);let d=new vt(Math.max(2,u.x),Math.max(2,u.y),{type:Et,samples:0,depthBuffer:!0,stencilBuffer:!1}),h=new xo(e,d),m=new Kl(n,t),v=new hs(new Pe(1,1),.62,.5,.6),T=new vo;h.addPass(m),h.addPass(v),h.addPass(T);let f={yaw:-.5,pitch:.17,dolly:1,yawT:-.5,pitchT:.17,dollyT:1,fit:5.2,idle:3,drift:0},p=new z(0,.015,0),w=!1,A=1,_=1,y={default:{fit:1,offX:0,offY:0},bodies:{fit:1.2,offX:.1,offY:.11},sides:{fit:1.16,offX:.19,offY:0}},E={fit:1,offX:0,offY:0},C={fit:1,offX:0,offY:0};function x(W){let ne=y[W]||y.default;C.fit=ne.fit,C.offX=ne.offX,C.offY=ne.offY}function S(){for(let W of gn){let ne=t[W],te=w?0:(W==="male"?1:-1)*E.offX,oe=w?E.offY*.45:E.offY;Math.abs(te)<1e-4&&Math.abs(oe)<1e-4?ne.clearViewOffset():ne.setViewOffset(A,_,te*A,oe*_,A,_)}}function R(){let W=Math.max(1,window.innerWidth),ne=Math.max(1,window.innerHeight),te=Math.min(window.devicePixelRatio||1,window.innerWidth>1600?1.5:2);w=W<G0,m.stacked=w,e.setPixelRatio(te),e.setSize(W,ne,!1),h.setPixelRatio(te),h.setSize(W,ne),v.setSize(Math.round(W*te*.5),Math.round(ne*te*.5)),A=w?W:W/2,_=w?ne/2:ne;let oe=A/_;for(let $e of gn)t[$e].aspect=oe,t[$e].updateProjectionMatrix();let Ve=1.34,ve=.8/Yl,Ce=Ve/(Yl*oe);f.fit=Math.max(ve,Ce)*1.05;let Be=_*te/(2*Yl);for(let $e of gn)s[$e].setSomaScale(Be);S()}window.addEventListener("resize",R,{passive:!0}),window.visualViewport&&window.visualViewport.addEventListener("resize",R,{passive:!0}),R();let P=new Map,L=null,V=0,D=new Pe;function k(W,ne){let te=window.innerWidth,oe=window.innerHeight;return w?ne<oe/2?"male":"female":W<te/2?"male":"female"}function K(W,ne,te){let oe=window.innerWidth,Ve=window.innerHeight;if(w){let re=te==="male"?0:Ve/2;D.set(W/oe*2-1,-((ne-re)/(Ve/2)*2-1))}else{let re=te==="male"?0:oe/2;D.set((W-re)/(oe/2)*2-1,-(ne/Ve*2-1))}return D}function B(W,ne){let te=k(W,ne),oe=s[te].pick(K(W,ne,te),t[te]);return{side:te,id:oe}}i.addEventListener("pointerdown",W=>{if(i.setPointerCapture&&i.setPointerCapture(W.pointerId),P.set(W.pointerId,{x:W.clientX,y:W.clientY}),f.idle=0,P.size===1)L={id:W.pointerId,x:W.clientX,y:W.clientY,moved:0},i.classList.add("is-dragging");else if(P.size===2){let ne=[...P.values()];V=Math.hypot(ne[0].x-ne[1].x,ne[0].y-ne[1].y)||1,L=null}c.closePanel()},{passive:!0});let Z=0;i.addEventListener("pointermove",W=>{let ne=P.get(W.pointerId);if(ne&&(ne.x=W.clientX,ne.y=W.clientY),P.size===2){let te=[...P.values()],oe=Math.hypot(te[0].x-te[1].x,te[0].y-te[1].y)||1;V>0&&(f.dollyT=Zl(f.dollyT*(V/oe),.52,1.95)),V=oe,f.idle=0;return}if(L&&W.pointerId===L.id){let te=W.clientX-L.x,oe=W.clientY-L.y;L.x=W.clientX,L.y=W.clientY,L.moved+=Math.abs(te)+Math.abs(oe),f.yawT-=te*.0052,f.pitchT=Zl(f.pitchT+oe*.0042,-.72,.86),f.idle=0;return}if(W.pointerType==="mouse"&&Z<=0){Z=.07;let te=B(W.clientX,W.clientY);i.classList.toggle("is-over-soma",te.id>=0)}},{passive:!0});function H(W){let ne=L&&W.pointerId===L.id,te=ne?L.moved:999;if(P.delete(W.pointerId),P.size<2&&(V=0),ne&&(L=null,i.classList.remove("is-dragging"),te<7)){let oe=B(W.clientX,W.clientY);if(oe.id>=0){let Ve=a[oe.side].has(oe.id);r[oe.side].fire(oe.id),s[oe.side].halo(oe.id,Ve?.72:.4),s[oe.side].spike(oe.id,{amp:Ve?1.25:1,glow:Ve?1.2:.9,duration:Ve?.62:.5,glowDecay:Ve?1.3:2.2,core:Ve}),le&&le.pick&&le.pick(oe.side,oe.id,Ve)}}}i.addEventListener("pointerup",H,{passive:!0}),i.addEventListener("pointercancel",H,{passive:!0}),i.addEventListener("wheel",W=>{W.preventDefault(),f.dollyT=Zl(f.dollyT*(1+W.deltaY*.0013),.52,1.95),f.idle=0},{passive:!1});function Y(W){let ne=s[W],te=0;return(oe,Ve,re,ve)=>{if(le&&le.onSpike&&le.onSpike(W,oe,Ve,re,ve),Ve==="other"){let Ce=ve&&le&&le.boostVisual;ne.spike(oe,{amp:Ce?.85:.3,glow:Ce?.7:.16,duration:Ce?.5:.8,width:Ce?.2:.28,glowDecay:Ce?2.6:3.4});return}if(Ve==="orn"){te++,ne.spike(oe,{amp:.82,glow:.62,duration:.52,width:.2,glowDecay:3,pulse:te%2===0});return}if(re){ne.spike(oe,{amp:1.15,glow:1.15,duration:.62,width:.22,glowDecay:1.5,core:!0}),ne.markDimorphic(oe);return}if(Ve==="descending"){ne.spike(oe,{amp:1.3,glow:1,duration:.8,width:.2,glowDecay:1.1});return}ne.spike(oe,{amp:1,glow:.82,duration:.56,width:.2})}}for(let W=0;W<gn.length;W++){let ne=gn[W];r[ne]=xu(l[W].graph,{onSpike:Y(ne),onVerdict:()=>le&&le.verdict&&le.verdict(ne)})}let Q=new URLSearchParams(location.search),de={views:s,sims:r,ui:c,scenes:n,cameras:t,sources:o,accents:Iu,setFraming:x},le=null;function We(W){let ne=Mo[W]?W:"lab";if(le&&le.name===ne)return;le&&le.exit&&le.exit();for(let oe of gn)r[oe].reset();c.setMode(ne),le=Cu(ne,de),le.enter();let te=new URL(location.href);ne==="lab"?te.searchParams.delete("mode"):te.searchParams.set("mode",ne),history.replaceState(null,"",te.toString())}if(We(Q.get("mode")||"lab"),Q.get("autopuff")!==null){let W=Math.max(6,parseFloat(Q.get("autopuff"))||9),ne=document.getElementById("puff"),te=Ve=>ne&&ne.dispatchEvent(new PointerEvent(Ve,{bubbles:!0,cancelable:!0,pointerId:7,isPrimary:!0})),oe=()=>{te("pointerdown"),setTimeout(()=>te("pointerup"),1600)};setTimeout(oe,2500),setInterval(oe,W*1e3)}let Le=0,Te=performance.now();function J(W){if(f.idle+=W,f.idle>2.4){let Be=Math.min(1,(f.idle-2.4)/2.2);f.drift+=W*.052*Be,f.yawT+=W*.048*Be,f.pitchT+=(.17+Math.sin(Le*.17)*.075-f.pitchT)*W*.35*Be}let ne=1-Math.exp(-W*5.2);f.yaw+=(f.yawT-f.yaw)*ne,f.pitch+=(f.pitchT-f.pitch)*ne,f.dolly+=(f.dollyT-f.dolly)*(1-Math.exp(-W*4.2));let te=1-Math.exp(-W*3.4);E.fit+=(C.fit-E.fit)*te,E.offX+=(C.offX-E.offX)*te,E.offY+=(C.offY-E.offY)*te,S();let oe=f.fit*f.dolly*E.fit,Ve=Math.cos(f.pitch),re=Math.sin(f.yaw)*Ve*oe,ve=Math.sin(f.pitch)*oe+.04,Ce=Math.cos(f.yaw)*Ve*oe;for(let Be of gn)t[Be].position.set(re,ve,Ce),t[Be].lookAt(p);for(let Be of gn)s[Be].setFog(oe-.95)}function ee(W){requestAnimationFrame(ee);let ne=Math.min(Math.max((W-Te)/1e3,0),.05);Te=W,Le+=ne,Z>0&&(Z-=ne);let te=le&&le.timeScale!=null?le.timeScale:1,oe=ne*te;c.update(ne),le&&le.update(oe,ne),r.male.step(oe),r.female.step(oe),s.male.update(oe,Le),s.female.update(oe,Le),J(ne),h.render(ne)}return c.debug&&c.setDebugSuffix(o.male+"  n"+(s.male.stats.neurons+s.female.stats.neurons)+"  v"+Math.round((s.male.stats.baseVerts+s.male.stats.dimVerts+s.female.stats.baseVerts+s.female.stats.dimVerts)/1e3)+"k"),c.bootDone(),requestAnimationFrame(ee),!0}function Zl(i,e,t){return i<e?e:i>t?t:i}X0().catch(()=>{let i=document.getElementById("boot");i&&(i.textContent="WebGL unavailable")})});q0();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
