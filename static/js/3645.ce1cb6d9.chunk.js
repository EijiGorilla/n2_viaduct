"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[3645],{61156:(e,n,t)=>{t.d(n,{A:()=>z,B:()=>V,C:()=>E,D:()=>H,E:()=>I,F:()=>j,G:()=>C,H:()=>k,I:()=>_,J:()=>q,K:()=>B,L:()=>P,M:()=>M,N:()=>F,a:()=>u,b:()=>l,c:()=>o,d:()=>f,e:()=>c,f:()=>a,g:()=>J,h:()=>s,i:()=>d,j:()=>g,k:()=>m,l:()=>y,m:()=>x,n:()=>D,o:()=>N,p:()=>S,q:()=>R,r:()=>h,s:()=>v,t:()=>p,u:()=>w,v:()=>A,w:()=>G,x:()=>L,y:()=>b,z:()=>T});var r=t(99058),i=t(40237);function c(e){return r.G.extendedSpatialReferenceInfo(e)}function o(e,n,t){return r.G.clip(i.N,e,n,t)}function u(e,n,t){return r.G.cut(i.N,e,n,t)}function l(e,n,t){return r.G.contains(i.N,e,n,t)}function f(e,n,t){return r.G.crosses(i.N,e,n,t)}function a(e,n,t,c){return r.G.distance(i.N,e,n,t,c)}function s(e,n,t){return r.G.equals(i.N,e,n,t)}function d(e,n,t){return r.G.intersects(i.N,e,n,t)}function p(e,n,t){return r.G.touches(i.N,e,n,t)}function G(e,n,t){return r.G.within(i.N,e,n,t)}function g(e,n,t){return r.G.disjoint(i.N,e,n,t)}function N(e,n,t){return r.G.overlaps(i.N,e,n,t)}function h(e,n,t,c){return r.G.relate(i.N,e,n,t,c)}function m(e,n){return r.G.isSimple(i.N,e,n)}function v(e,n){return r.G.simplify(i.N,e,n)}function y(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.G.convexHull(i.N,e,n,t)}function x(e,n,t){return r.G.difference(i.N,e,n,t)}function D(e,n,t){return r.G.symmetricDifference(i.N,e,n,t)}function S(e,n,t){return r.G.intersect(i.N,e,n,t)}function w(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r.G.union(i.N,e,n,t)}function R(e,n,t,c,o,u,l){return r.G.offset(i.N,e,n,t,c,o,u,l)}function A(e,n,t,c){let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return r.G.buffer(i.N,e,n,t,c,o)}function L(e,n,t,c,o,u,l){return r.G.geodesicBuffer(i.N,e,n,t,c,o,u,l)}function b(e,n,t){let c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return r.G.nearestCoordinate(i.N,e,n,t,c)}function T(e,n,t){return r.G.nearestVertex(i.N,e,n,t)}function z(e,n,t,c,o){return r.G.nearestVertices(i.N,e,n,t,c,o)}function V(e,n,t,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");const c=r.G.rotate(n,t,i);return c.spatialReference=e,c}function E(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(n,t);return i.spatialReference=e,i}function H(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(n,t);return i.spatialReference=e,i}function I(e,n,t,c,o){return r.G.generalize(i.N,e,n,t,c,o)}function j(e,n,t,c){return r.G.densify(i.N,e,n,t,c)}function C(e,n,t,c){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r.G.geodesicDensify(i.N,e,n,t,c,o)}function k(e,n,t){return r.G.planarArea(i.N,e,n,t)}function _(e,n,t){return r.G.planarLength(i.N,e,n,t)}function q(e,n,t,c){return r.G.geodesicArea(i.N,e,n,t,c)}function B(e,n,t,c){return r.G.geodesicLength(i.N,e,n,t,c)}function P(e,n,t){return null==n||null==t?[]:r.G.intersectLinesToPoints(i.N,e,n,t)}function M(e,n){r.G.changeDefaultSpatialReferenceTolerance(e,n)}function F(e){r.G.clearDefaultSpatialReferenceTolerance(e)}const J=Object.freeze(Object.defineProperty({__proto__:null,buffer:A,changeDefaultSpatialReferenceTolerance:M,clearDefaultSpatialReferenceTolerance:F,clip:o,contains:l,convexHull:y,crosses:f,cut:u,densify:j,difference:x,disjoint:g,distance:a,equals:s,extendedSpatialReferenceInfo:c,flipHorizontal:E,flipVertical:H,generalize:I,geodesicArea:q,geodesicBuffer:L,geodesicDensify:C,geodesicLength:B,intersect:S,intersectLinesToPoints:P,intersects:d,isSimple:m,nearestCoordinate:b,nearestVertex:T,nearestVertices:z,offset:R,overlaps:N,planarArea:k,planarLength:_,relate:h,rotate:V,simplify:v,symmetricDifference:D,touches:p,union:w,within:G},Symbol.toStringTag,{value:"Module"}))},50309:(e,n,t)=>{t.r(n),t.d(n,{buffer:()=>r.v,changeDefaultSpatialReferenceTolerance:()=>r.M,clearDefaultSpatialReferenceTolerance:()=>r.N,clip:()=>r.c,contains:()=>r.b,convexHull:()=>r.l,crosses:()=>r.d,cut:()=>r.a,densify:()=>r.F,difference:()=>r.m,disjoint:()=>r.j,distance:()=>r.f,equals:()=>r.h,extendedSpatialReferenceInfo:()=>r.e,flipHorizontal:()=>r.C,flipVertical:()=>r.D,generalize:()=>r.E,geodesicArea:()=>r.J,geodesicBuffer:()=>r.x,geodesicDensify:()=>r.G,geodesicLength:()=>r.K,intersect:()=>r.p,intersectLinesToPoints:()=>r.L,intersects:()=>r.i,isSimple:()=>r.k,nearestCoordinate:()=>r.y,nearestVertex:()=>r.z,nearestVertices:()=>r.A,offset:()=>r.q,overlaps:()=>r.o,planarArea:()=>r.H,planarLength:()=>r.I,relate:()=>r.r,rotate:()=>r.B,simplify:()=>r.s,symmetricDifference:()=>r.n,touches:()=>r.t,union:()=>r.u,within:()=>r.w});t(99058),t(40237);var r=t(61156)}}]);
//# sourceMappingURL=3645.ce1cb6d9.chunk.js.map