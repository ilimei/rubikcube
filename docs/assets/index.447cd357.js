import{C as S,B as D,a as g,b as x,c as B,I,V as v,d as C,M as R,e as d,f as V,Q as P,S as N,g as F,h as L,W as X,i as Y,O as U,R as Z,j as H,k as A,H as _,L as G,l as E,m as k}from"./vendor.daf31a00.js";const K=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};K();function b(o){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return new S(parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255,1)}const Q=[b("#C41E3A"),b("#009E60"),b("#0051BA"),b("#FF5800"),b("#FFD500"),b("#FFFFFF")];function W(o,e,r){const n=new D(o,"CustomCubeGeometry"),t=e-r,s=new Float32Array([-t,e,-t,0,1,0,t,e,-t,0,1,0,t,e,t,0,1,0,-t,e,t,0,1,0,-t,-e,-t,0,-1,0,t,-e,-t,0,-1,0,t,-e,t,0,-1,0,-t,-e,t,0,-1,0,-e,t,-t,-1,0,0,-e,t,t,-1,0,0,-e,-t,t,-1,0,0,-e,-t,-t,-1,0,0,e,t,-t,1,0,0,e,t,t,1,0,0,e,-t,t,1,0,0,e,-t,-t,1,0,0,-t,t,e,0,0,1,t,t,e,0,0,1,t,-t,e,0,0,1,-t,-t,e,0,0,1,-t,t,-e,0,0,-1,t,t,-e,0,0,-1,t,-t,-e,0,0,-1,-t,-t,-e,0,0,-1,-t,e,-t,-1,1,-1,-e,t,-t,-1,1,-1,-t,t,-e,-1,1,-1,-t,-e,-t,-1,-1,-1,-e,-t,-t,-1,-1,-1,-t,-t,-e,-1,-1,-1,t,e,-t,1,1,-1,e,t,-t,1,1,-1,t,t,-e,1,1,-1,t,-e,-t,1,-1,-1,e,-t,-t,1,-1,-1,t,-t,-e,1,-1,-1,-t,e,t,-1,1,1,-e,t,t,-1,1,1,-t,t,e,-1,1,1,-t,-e,t,-1,-1,1,-e,-t,t,-1,-1,1,-t,-t,e,-1,-1,1,t,e,t,1,1,1,e,t,t,1,1,1,t,t,e,1,1,1,t,-e,t,1,-1,1,e,-t,t,1,-1,1,t,-t,e,1,-1,1,-t,e,-t,-1,1,0,-t,e,t,-1,1,0,-e,t,-t,-1,1,0,-e,t,t,-1,1,0,t,e,-t,1,1,0,t,e,t,1,1,0,e,t,-t,1,1,0,e,t,t,1,1,0,-t,e,t,0,1,1,t,e,t,0,1,1,-t,t,e,0,1,1,t,t,e,0,1,1,-t,e,-t,0,1,-1,t,e,-t,0,1,-1,-t,t,-e,0,1,-1,t,t,-e,0,1,-1,-t,-e,-t,-1,-1,0,-t,-e,t,-1,-1,0,-e,-t,-t,-1,-1,0,-e,-t,t,-1,-1,0,t,-e,-t,1,-1,0,t,-e,t,1,-1,0,e,-t,-t,1,-1,0,e,-t,t,1,-1,0,-t,-e,t,0,-1,1,t,-e,t,0,-1,1,-t,-t,e,0,-1,1,t,-t,e,0,-1,1,-t,-e,-t,0,-1,-1,t,-e,-t,0,-1,-1,-t,-t,-e,0,-1,-1,t,-t,-e,0,-1,-1,-e,t,t,-1,0,1,-e,-t,t,-1,0,1,-t,t,e,-1,0,1,-t,-t,e,-1,0,1,t,t,e,1,0,1,t,-t,e,1,0,1,e,t,t,1,0,1,e,-t,t,1,0,1,e,t,-t,1,0,-1,e,-t,-t,1,0,-1,t,t,-e,1,0,-1,t,-t,-e,1,0,-1,-t,t,-e,-1,0,-1,-t,-t,-e,-1,0,-1,-e,t,-t,-1,0,-1,-e,-t,-t,-1,0,-1]),i=new Uint16Array([0,2,1,2,0,3,4,6,7,6,4,5,8,10,9,10,8,11,12,14,15,14,12,13,16,18,17,18,16,19,20,22,23,22,20,21,24,26,25,27,28,29,30,31,32,33,35,34,36,37,38,39,41,40,42,44,43,45,46,47,48,50,49,50,51,49,52,53,54,55,54,53,56,58,57,58,59,57,60,61,62,62,61,63,64,65,66,66,65,67,68,70,69,71,69,70,72,73,74,75,74,73,76,78,77,79,77,78,80,81,82,83,82,81,84,85,86,87,86,85,88,89,90,91,90,89,92,93,94,95,94,93]),u=new Float32Array(3*24+3*24+3*32+3*16);u.fill(0);for(let c=0;c<6;c++){const h=Q[c],p=c*12;for(let y=0;y<4;y++)u[p+y*3+0]=h.r,u[p+y*3+1]=h.g,u[p+y*3+2]=h.b}const f=new g(o,x.VertexBuffer,s,B.Static),m=new g(o,x.IndexBuffer,i,B.Static),w=new g(o,x.VertexBuffer,u,B.Dynamic);return n.setVertexBufferBinding(f,24),n.setIndexBufferBinding(m,I.UInt16),n.setVertexBufferBinding(w,12,1),n.setVertexElements([new v("POSITION",0,C.Vector3,0),new v("NORMAL",12,C.Vector3,0),new v("COLOR_0",0,C.Vector3,1)]),n.addSubMesh(0,i.length,R.Triangles),n}const M=1,j=1/20,O=10,q=2;function T(o,e){return Math.abs(o-e)<1e-4}var l;(function(o){o.UP="UP",o.DOWN="DOWN",o.LEFT="LEFT",o.RIGHT="RIGHT",o.FRONT="FRONT",o.BACK="BACK"})(l||(l={}));class a{}a.X=new d(1,0,0);a.DX=new d(-1,0,0);a.Y=new d(0,1,0);a.DY=new d(0,-1,0);a.Z=new d(0,0,1);a.DZ=new d(0,0,-1);class ${constructor(){this.start=!1,this.angle=0}get radians(){return this.angle*Math.PI/180}updateDir(){const{point:e}=this,r=O*M/2,n=.001,t=Math.abs(Math.abs(e.x)-r),s=Math.abs(Math.abs(e.y)-r),i=Math.abs(Math.abs(e.z)-r);return t<n?e.x>0?l.RIGHT:l.LEFT:s<n?e.y>0?l.UP:l.DOWN:i<n&&e.z>0?l.BACK:l.FRONT}updateRotation(){const{x:e,y:r,z:n}=this.endPos.clone().subtract(this.startPos);switch(this.dir){case l.UP:return Math.abs(e)>Math.abs(n)?e>0?a.DZ:a.Z:n>0?a.X:a.DX;case l.DOWN:return Math.abs(e)>Math.abs(n)?e>0?a.Z:a.DZ:n>0?a.DX:a.X;case l.LEFT:return Math.abs(r)>Math.abs(n)?r>0?a.DZ:a.Z:n>0?a.Y:a.DY;case l.RIGHT:return Math.abs(r)>Math.abs(n)?r>0?a.Z:a.DZ:n>0?a.DY:a.Y;case l.FRONT:return Math.abs(e)>Math.abs(r)?e>0?a.DY:a.Y:r>0?a.X:a.DX;case l.BACK:return Math.abs(e)>Math.abs(r)?e>0?a.Y:a.DY:r>0?a.DX:a.X}}startMove(e){this.dir=this.updateDir(),this.rotation=this.updateRotation();const r=this.entity;this.entity.transform.setPosition,this.cubes=e.filter(n=>this.rotation===a.X||this.rotation===a.DX?T(n.transform.position.x,r.transform.position.x):this.rotation===a.Y||this.rotation===a.DY?T(n.transform.position.y,r.transform.position.y):T(n.transform.position.z,r.transform.position.z)),this.rotationQuaternions=this.cubes.map(n=>n.transform.rotationQuaternion.clone()),this.positions=this.cubes.map(n=>n.transform.position.clone()),this.start=!0}update(){this.angle+=q,this.angle>90&&(this.angle=90,this.start=!1),this.cubes.forEach((e,r)=>{const n=new V,t=this.positions[r].clone(),s=this.rotationQuaternions[r].clone(),{x:i,y:u,z:f}=t;n.translate(new d(-i,-u,-f)),n.rotateAxisAngle(this.rotation,this.radians),n.translate(new d(i,u,f)),e.transform.position=t.transformNormal(n);const m=new P;m.rotateAxisAngle(this.rotation,this.radians),e.transform.rotationQuaternion=m.multiply(s)})}}class J extends N{constructor(){super(...arguments);this.cubes=[]}set control(e){this._control=e}get control(){return this._control}onStart(){this.cubes=this.entity.children.filter(e=>e.name==="cube")}onUpdate(){this.currentMove&&this.currentMove.start&&this.currentMove.update()}click(e,r,n){var t;((t=this.currentMove)==null?void 0:t.start)||(this.currentMove=new $,this.currentMove.entity=e,this.currentMove.point=r,this.currentMove.startPos=n,this.control.enableRotate=!1)}mouseup(e){var r;!this.control.enableRotate&&!((r=this.currentMove)==null?void 0:r.start)&&(this.currentMove.endPos=e,this.currentMove.startMove(this.cubes)),this.control.enableRotate=!0}}function z(o,e){const r=new D(o,"CustomCubeGeometry"),n=new Float32Array([0,0,0,0,e,0,e,0,0,0,0,e,0,-e,0,-e,0,0,0,0,-e]),t=new Uint16Array([0,1,0,2,0,3,0,4,0,5,0,6]),s=new g(o,x.VertexBuffer,n,B.Static),i=new g(o,x.IndexBuffer,t,B.Static);return r.setVertexBufferBinding(s,12),r.setIndexBufferBinding(i,I.UInt16),r.setVertexElements([new v("POSITION",0,C.Vector3,0)]),r.addSubMesh(0,t.length,R.Lines),r}function tt(o,e){const n=e.createChild("xyzHelper").addComponent(F),t=new L(o);n.mesh=z(o,20),n.setMaterial(t)}window.Vector3=d;function et(o,e){let r=-Math.floor(O/2),n=Math.ceil(O/2),t=0;r+=1,n+=1,t=-.5;for(let s=r;s<n;s++)for(let i=r;i<n;i++)for(let u=r;u<n;u++){const f=o.createChild("cube"),m=f.transform.position;m.setValue((s+t)*M,(i+t)*M,(u+t)*M),f.transform.position=m,f.addComponent(H).setBoxCenterSize(new d,new d(M,M,M));const c=f.addComponent(F),h=new L(e);c.mesh=W(e,M/2,j),c.setMaterial(h)}}function nt(){const o=new X("canvas");o.canvas.resizeByClientSize();const e=o.sceneManager.activeScene,r=e.createRootEntity(),n=r.addComponent(J),t=r.createChild("camera"),s=t.addComponent(Y);n.control=t.addComponent(U),n.control.enablePan=!1;const i=t.transform.position;i.setValue(10,10,10),t.transform.position=i,t.transform.lookAt(new d(0,0,0)),e.ambientLight.diffuseSolidColor.setValue(1,1,1,1),e.ambientLight.diffuseIntensity=1.2,tt(o,r),et(r,o);const u=new Z,f=window.devicePixelRatio;function m(c){let h=c.offsetX,p=c.offsetY;c.touches&&c.touches.length>0&&(h=c.touches[0].pageX,p=c.touches[0].pageY),s.screenPointToRay(new A(h,p).scale(f),u);const y=new _;o.physicsManager.raycast(u,Number.MAX_VALUE,G.Everything,y)&&n.click(y.collider.entity,y.point,u.direction.clone())}function w(c){let h=c.offsetX,p=c.offsetY;c.changedTouches&&c.changedTouches.length>0&&(h=c.changedTouches[0].pageX,p=c.changedTouches[0].pageY),s.screenPointToRay(new A(h,p).scale(f),u),n.mouseup(u.direction.clone())}document.getElementById("canvas").addEventListener("mousedown",m),document.getElementById("canvas").addEventListener("mouseup",w),document.getElementById("canvas").addEventListener("touchstart",m),document.getElementById("canvas").addEventListener("touchend",w),o.run()}function rt(){return E.useEffect(()=>{nt()},[]),E.createElement("canvas",{id:"canvas",style:{width:"100vw",height:"100vh"}})}k.render(E.createElement(E.StrictMode,null,E.createElement(rt,null)),document.getElementById("root"));