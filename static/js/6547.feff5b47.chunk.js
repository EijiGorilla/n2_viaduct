"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[6547],{56547:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var a=r(63780),n=r(18722),f=r(48976),o=r(98131),u=r(11186),i=r(8229),s=r(78952),l=r(50628),b=r(74432);class c{transform(t){const e=this._transform(t),r=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&r.push(e.pointIdFilterMap.buffer);for(const a of e.attributes)"buffer"in a.values&&(0,n.eP)(a.values.buffer)&&a.values.buffer!==e.rgb.buffer&&r.push(a.values.buffer);return Promise.resolve({result:e,transferList:r})}_transform(t){const e=(0,b.Ym)(t.schema,t.geometryBuffer);let r=e.length/3,n=null;const f=new Array,o=(0,b.dH)(t.primaryAttributeData,e,r);null!=t.primaryAttributeData&&o&&f.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const u=(0,b.dH)(t.modulationAttributeData,e,r);null!=t.modulationAttributeData&&u&&f.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:u});let i=(0,b.aE)(t.rendererInfo,o,u,r);if(t.filterInfo&&t.filterInfo.length>0&&null!=t.filterAttributesData){const o=t.filterAttributesData.filter(a.pC).map((t=>{const a=(0,b.dH)(t,e,r),n={attributeInfo:t.attributeInfo,values:a};return f.push(n),n}));n=new Uint32Array(r),r=(0,b.hv)(e,i,n,t.filterInfo,o)}for(const a of t.userAttributesData){const t=(0,b.dH)(a,e,r);f.push({attributeInfo:a.attributeInfo,values:t})}3*r<i.length&&(i=new Uint8Array(i.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(e,r,t.elevationOffset);const l=this._transformCoordinates(e,r,t.obb,s.Z.fromJSON(t.inSR),s.Z.fromJSON(t.outSR));return{obb:t.obb,points:l,rgb:i,attributes:f,pointIdFilterMap:n}}_transformCoordinates(t,e,r,a,n){if(!(0,l.projectBuffer)(t,a,0,t,n,0,e))throw new Error("Can't reproject");const o=(0,i.f)(r.center[0],r.center[1],r.center[2]),s=(0,i.c)(),b=(0,i.c)();(0,f.a)(h,r.quaternion);const c=new Float32Array(3*e);for(let f=0;f<e;f++)s[0]=t[3*f]-o[0],s[1]=t[3*f+1]-o[1],s[2]=t[3*f+2]-o[2],(0,u.v)(b,s,h),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(b[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(b[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(b[2])),c[3*f]=s[0],c[3*f+1]=s[1],c[3*f+2]=s[2];return c}_applyElevationOffsetInPlace(t,e,r){if(0!==r)for(let a=0;a<e;a++)t[3*a+2]+=r}}const h=(0,o.a)();function p(){return new c}}}]);
//# sourceMappingURL=6547.feff5b47.chunk.js.map