"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[6009],{14813:(e,t,i)=>{i.d(t,{Y6:()=>g});var s,r,n=i(88396),o=i(6394),h=i(11186),a=i(71353),c=i(90045),l=i(67077),d=i(585);(r=s||(s={}))[r.Z=0]="Z",r[r.M=1]="M";class u{constructor(e){this.spatialReference=e}createVector(){return this._tag((0,o.a)())}pointToVector(e){return this._tag((0,o.f)(e.x,e.y))}arrayToVector(e){return this._tag((0,o.f)(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return(0,n.l)(s,e,t,i)}addDelta(e,t,i){e[0]+=t,e[1]+=i}distance(e,t){return(0,n.d)(e,t)}getZ(e){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0}hasZ(){return!1}getM(e){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0}hasM(){return!1}clone(e){return this._tag((0,o.b)(e))}copy(e,t){return(0,n.j)(t,e)}fromXYZ(e){return this._tag((0,o.f)(e[0],e[1]))}toXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(t,e[0],e[1],0)}pointToXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(t,e.x,e.y,0)}equals(e,t){return(0,n.o)(e,t)}_tag(e){return e}}class p{constructor(e,t){this._valueType=e,this.spatialReference=t}createVector(){return this._tag((0,a.c)())}pointToVector(e){return this._tag((0,a.f)(e.x,e.y,this._valueType===s.Z?e.z:e.m))}arrayToVector(e){return this._tag((0,a.f)(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this._valueType===s.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=this._valueType===s.Z?e[2]:void 0,t.m=this._valueType===s.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=this._valueType===s.Z?e[2]:void 0,t.m=this._valueType===s.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};const i=this._valueType===s.Z,r=this._valueType===s.M;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=r?e[2]:void 0,t.hasZ=i,t.hasM=r,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return(0,h.p)(s,e,t,i)}addDelta(e,t,i,r){e[0]+=t,e[1]+=i,this._valueType===s.Z&&(e[2]+=r)}distance(e,t){return this._valueType===s.Z?(0,h.o)(e,t):(0,n.d)(e,t)}getZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return this._valueType===s.Z?e[2]:t}hasZ(){return this._valueType===s.Z}getM(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return this._valueType===s.M?e[2]:t}hasM(){return this._valueType===s.M}clone(e){return this._tag((0,a.e)(e))}copy(e,t){return(0,h.c)(t,e)}fromXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this._tag((0,a.f)(e[0],e[1],this._valueType===s.Z?e.length>2?e[2]:t:i))}toXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(t,e[0],e[1],this._valueType===s.Z?e[2]:0)}pointToXYZ(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(i,e.x,e.y,this._valueType===s.Z&&null!==(t=e.z)&&void 0!==t?t:0)}equals(e,t){return(0,h.G)(e,t)}_tag(e){return e}}class _{constructor(e){this.spatialReference=e}createVector(){return this._tag((0,l.c)())}pointToVector(e){return this._tag((0,l.f)(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag((0,l.f)(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return(0,c.l)(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,e[2]+=s}distance(e,t){return(0,h.o)(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag((0,l.b)(e))}copy(e,t){return(0,c.c)(t,e)}fromXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this._tag((0,l.f)(e[0],e[1],e.length>2?e[2]:t,i))}toXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(t,e[0],e[1],e[2])}pointToXYZ(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(i,e.x,e.y,null!==(t=e.z)&&void 0!==t?t:0)}equals(e,t){return(0,c.e)(e,t)}_tag(e){return e}}function g(e,t,i){return e&&t?new _(i):t?new p(s.M,i):e?new p(s.Z,i):new u(i)}},84954:(e,t,i)=>{i.d(t,{wA:()=>u,kS:()=>d,XE:()=>p,Xz:()=>l});var s=i(63780),r=i(91505),n=i(80885),o=i(29909),h=i(14813),a=i(92975),c=i(50951);class l{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}class d{constructor(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this}}class u{constructor(e,t){this._spatialReference=e,this._viewingMode=t,this.vertices=[],this.edges=[],this.index=null}unnormalizeVertexPositions(){this.vertices.length<=1||function(e,t){if(!t.supported)return;let i=1/0,s=-1/0;const r=t.upperBoundX-t.lowerBoundX;e.forEach((e=>{let n=e.pos[0];for(;n<t.lowerBoundX;)n+=r;for(;n>t.upperBoundX;)n-=r;i=Math.min(i,n),s=Math.max(s,n),e.pos[0]=n}));const n=s-i;r-n<n&&e.forEach((e=>{e.pos[0]<0&&(e.pos[0]+=r)}))}(this.vertices,function(e,t){const i=(0,a.C5)(e);return t===c.JY.Global&&i?{supported:!0,lowerBoundX:i.valid[0],upperBoundX:i.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}(this._spatialReference,this._viewingMode))}updateVertexIndex(e,t){if(0===this.vertices.length)return;const i=this.vertices[0];let s=null,r=e,n=t;do{s=r,s.index=n++,r=s.rightEdge?s.rightEdge.rightVertex:null}while(null!=r&&r!==i);s.leftEdge&&s!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(s),this.vertices.length-1)}getFirstVertex(){return 0===this.vertices.length?null:this.vertices[0]}getLastVertex(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}swapVertices(e,t){const i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}iterateVertices(e){if(0===this.vertices.length)return;const t=this.vertices[0];let i=t;do{e(i,i.index),i=null!=i.rightEdge?i.rightEdge.rightVertex:null}while(i!==t&&null!=i)}}class p extends r.Z{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this._dirty=!0,this.components=[]}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this._dirty=!0,this.emit("change",e)}_toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[];let r=i.vertices.find((e=>null==e.leftEdge));const n=r;do{s.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null}while(r&&r!==n);e.push(s)}return new o.Z({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[],r=i.vertices[0];let n=r;const o=n;do{s.push(t(n.pos)),n=null!=n.rightEdge?n.rightEdge.rightVertex:null}while(n&&n!==o);i.isClosed()&&s.push(t(r.pos)),e.push(s)}return new n.Z({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const i=e.spatialReference,r=(0,h.Y6)(e.hasZ,e.hasM,i),n=new p(e.type,r);switch(e.type){case"polygon":{const o=e.rings;for(let e=0;e<o.length;++e){const h=o[e],a=new u(i,t);a.index=e;const c=h.length>2&&(0,s.fS)(h[0],h[h.length-1]),p=c?h.length-1:h.length;for(let e=0;e<p;++e){const t=r.arrayToVector(h[e]),i=new l(a);a.vertices.push(i),i.pos=t,i.index=e}const _=a.vertices.length-1;for(let e=0;e<_;++e){const t=a.vertices[e],i=a.vertices[e+1],s=new d(a,t,i);a.edges.push(s)}if(c){const e=new d(a,a.vertices[a.vertices.length-1],a.vertices[0]);a.edges.push(e)}n.components.push(a)}break}case"polyline":{const s=e.paths;for(let e=0;e<s.length;++e){const o=s[e],h=new u(i,t);h.index=e;const a=o.length;for(let e=0;e<a;++e){const t=r.arrayToVector(o[e]),i=new l(h);h.vertices.push(i),i.pos=t,i.index=e}const c=h.vertices.length-1;for(let e=0;e<c;++e){const t=h.vertices[e],i=h.vertices[e+1],s=new d(h,t,i);h.edges.push(s)}n.components.push(h)}break}case"point":{const s=new u(i,t);s.index=0;const o=new l(s);o.index=0,o.pos=r.pointToVector(e),s.vertices.push(o),n.components.push(s);break}}return n}}},95172:(e,t,i)=>{i.d(t,{c:()=>R});var s,r,n=i(91505),o=i(42537),h=i(84954);!function(e){e[e.NEW_STEP=0]="NEW_STEP",e[e.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"}(s||(s={}));class a{constructor(e,t,i){this._editGeometry=e,this._component=t,this._pos=i,this._addedVertex=null,this._originalEdge=null,this._left=null,this._right=null}apply(){let e="redo";null==this._addedVertex&&(e="apply",this._addedVertex=new h.Xz(this._component));const t=this._component.getLastVertex();if(null==t)this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._addedVertex.index=0;else{let e=null;t.rightEdge&&(this._originalEdge=t.rightEdge,e=this._originalEdge.rightVertex,this._component.edges.splice(this._component.edges.indexOf(this._originalEdge),1)),this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,null==this._left&&(this._left=new h.kS(this._component,t,this._addedVertex)),this._component.edges.push(this._left),t.rightEdge=this._left,null!=this._originalEdge&&null!=e&&(null==this._right&&(this._right=new h.kS(this._component,this._addedVertex,e)),this._component.edges.push(this._right),e.leftEdge=this._right),this._component.updateVertexIndex(this._addedVertex,t.index+1)}this._editGeometry.notifyChanges({operation:e,addedVertices:[this._addedVertex]})}undo(){null!=this._addedVertex&&(this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex),1),null!=this._left&&(this._component.edges.splice(this._component.edges.indexOf(this._left),1),this._left.leftVertex.rightEdge=null),null!=this._right&&(this._component.edges.splice(this._component.edges.indexOf(this._right),1),this._right.rightVertex.leftEdge=null),null!=this._originalEdge&&(this._component.edges.push(this._originalEdge),this._originalEdge.leftVertex.rightEdge=this._originalEdge,this._originalEdge.rightVertex.leftEdge=this._originalEdge),null!=this._left?this._component.updateVertexIndex(this._left.leftVertex,this._left.leftVertex.index):this._component.updateVertexIndex(this._addedVertex,0),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this._addedVertex]}))}accumulate(){return!1}}class c{constructor(e,t,i){this._editGeometry=e,this._vertices=t,this.operation=i,this._undone=!1}apply(){this._vertices.forEach((e=>this.operation.apply(e))),this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})}undo(){this._vertices.forEach((e=>this.operation.undo(e))),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:this._vertices}),this._undone=!0}canAccumulate(e){if(this._undone||e._vertices.length!==this._vertices.length)return!1;for(let t=0;t<e._vertices.length;++t)if(e._vertices[t]!==this._vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(e){return!!(e instanceof c&&this.canAccumulate(e))&&(this._vertices.forEach((t=>this.operation.accumulate(t,e.operation))),this.operation.accumulateParams(e.operation),this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0)}}!function(e){e[e.CUMULATIVE=0]="CUMULATIVE",e[e.REPLACE=1]="REPLACE"}(r||(r={}));class l{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this._editGeometry=e,this._vertices=t,this._minNumberOfVertices=i,this.removedVertices=null}apply(){let e="redo";if(null==this.removedVertices){const t=this.removedVertices=[];this._vertices.forEach((e=>{const i=this._removeVertex(e);null!=i&&t.push(i)})),e="apply"}else this.removedVertices.forEach((e=>{this._removeVertex(e.removedVertex)}));this._editGeometry.notifyChanges({operation:e,removedVertices:this._vertices})}undo(){var e;null!==(e=this.removedVertices)&&void 0!==e&&e.forEach((e=>{this._undoRemoveVertex(e)})),this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(e){const t=e.component;if(t.vertices.length<=this._minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,r=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),s&&(t.edges.splice(t.edges.indexOf(s),1),s.leftVertex.rightEdge=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.rightVertex.leftEdge=null),0===e.index&&r&&this._vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.rightVertex),0),s&&r&&(i.createdEdge=new h.kS(t,s.leftVertex,r.rightVertex),t.edges.push(i.createdEdge)),r&&t.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,i=e.removedVertex.component,s=t.leftEdge,r=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),s&&(i.edges.push(s),s.leftVertex.rightEdge=s),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(t,t.index)}}class d{constructor(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}apply(){let e="redo";const t=this._edge,i=t.component,s=t.leftVertex,r=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),null==this.createdVertex&&(e="apply",this.createdVertex=new h.Xz(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),null==this._left&&(this._left=new h.kS(i,s,this.createdVertex)),this._left.leftVertex.leftEdge?i.edges.push(this._left):i.edges.unshift(this._left),s.rightEdge=this._left,null==this._right&&(this._right=new h.kS(i,this.createdVertex,r)),i.edges.push(this._right),r.leftEdge=this._right,i.updateVertexIndex(this.createdVertex,s.index+1),this._editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}undo(){if(null==this.createdVertex||null==this._left||null==this._right)return null;const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,r=null===i||void 0===i?void 0:i.leftVertex,n=null===s||void 0===s?void 0:s.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),r&&(r.rightEdge=e),n&&(n.leftEdge=e),r&&t.updateVertexIndex(r,r.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}class u{constructor(e,t,i){this._editGeometry=e,this._vertex=t,this._pos=i}apply(){const e=null==this._originalPosition;e&&(this._originalPosition=this._vertex.pos),this._apply(e?"apply":"redo")}undo(){this._vertex.pos=this._originalPosition,this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})}accumulate(e){return e instanceof u&&e._vertex===this._vertex&&(this._pos=e._pos,this._apply("apply"),!0)}_apply(e){this._vertex.pos=this._pos,this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:e,updatedVertices:[this._vertex]})}}var p=i(63780);class _{constructor(e,t){this._editGeometry=e,this._component=t,this._createdEdge=null}apply(){let e="redo";if(null==this._createdEdge){e="apply";const t=this._component.getFirstVertex(),i=this._component.getLastVertex();if(this._component.isClosed()||this._component.vertices.length<3||null==t||null==i)return;this._createdEdge=new h.kS(this._component,i,t)}this._createdEdge.leftVertex.rightEdge=this._createdEdge,this._createdEdge.rightVertex.leftEdge=this._createdEdge,this._component.edges.push(this._createdEdge),this._editGeometry.notifyChanges({operation:e})}undo(){null!=this._createdEdge&&((0,p.Od)(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}class g{constructor(e,t,i,s){this._helper=e,this.dx=t,this.dy=i,this.dz=s}_move(e,t,i,s){this._helper.addDelta(e.pos,t,i,s)}apply(e){this._move(e,this.dx,this.dy,this.dz)}undo(e){this._move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof g}accumulate(e,t){this._move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}}var f=i(16889),v=i(88396),m=i(6394),x=i(11186),y=i(71353),V=i(55652),E=i(40927),T=i(94163);class w{get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}constructor(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:M.IMMEDIATE;this._helper=e,this._planeType=t,this._edge=i,this.distance=s,this._plane=(0,V.Ue)(),this._offsetPlane=(0,V.Ue)(),this._minDistance=-1/0,this._maxDistance=1/0,this._selectedArrow=1,r===M.IMMEDIATE&&this._initialize()}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var e,t;const i=this._toXYZ(this._edge.leftVertex.pos),s=this._toXYZ(null===(e=this._edge.leftVertex.leftEdge)||void 0===e||null===(e=e.leftVertex)||void 0===e?void 0:e.pos),r=this._toXYZ(this._edge.rightVertex.pos),n=this._toXYZ(null===(t=this._edge.rightVertex.rightEdge)||void 0===t||null===(t=t.rightVertex)||void 0===t?void 0:t.pos);this._edgeDirection=(0,x.C)((0,y.c)(),i,r),this._left=this._computeNeighbor(i,s,this._edgeDirection),this._right=this._computeNeighbor(r,n,this._edgeDirection)}_toXYZ(e){return null!=e?this._helper.toXYZ(e):null}_pointToXYZ(e){return this._toXYZ(this._helper.pointToVector(e))}_computeNeighbor(e,t,i){if(null==t)return{start:e,end:t,direction:(0,y.f)(-i[1],i[0],0),isOriginalDirection:!0};const s=(0,x.C)((0,y.c)(),e,t),r=!this._passesBisectingAngleThreshold(s,i);return{start:e,end:t,direction:r?this._bisectVectorsPerpendicular(i,s):s,isOriginalDirection:!r}}_passesBisectingAngleThreshold(e,t){const i=Math.abs((0,E.EU)(t,e));return i>=D&&i<=Math.PI-D}_bisectVectorsPerpendicular(e,t){const i=(0,x.j)(e,t)<0?e:(0,x.E)((0,y.c)(),e),s=Math.abs((0,x.j)(i,t));if(!(s<P||s>1-P))return this._bisectDirection(i,t);const r=(0,x.b)((0,y.c)(),i,[0,0,1]);return(0,x.n)(r,r)}_bisectDirection(e,t){const i=(0,x.g)((0,y.c)(),e,t);return(0,x.n)(i,i)}_initializePlane(){const e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);(0,x.j)(e,t)<0&&(0,x.E)(t,t),(0,V.Yq)(this._left.start,this._bisectDirection(e,t),this._plane)}_computeNormalDirection(e){const t=(0,x.b)((0,y.c)(),e.direction,this._edgeDirection);(0,x.n)(t,t);const i=(0,x.b)((0,y.c)(),this._edgeDirection,t);return this._planeType===Z.XY&&(i[2]=0),(0,x.n)(i,i)}_initializeDistanceConstraints(){null==this._left.end||this.requiresSplitEdgeLeft||this._updateDistanceConstraint((0,V.jH)(this._plane,this._left.end)),null==this._right.end||this.requiresSplitEdgeRight||this._updateDistanceConstraint((0,V.jH)(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}_updateIntersectDistanceConstraint(e){const t=(0,V.mJ)(e),i=this._edgeDirection,s=(0,x.g)((0,y.c)(),this._left.start,this._left.direction),r=(0,x.g)((0,y.c)(),this._right.start,this._right.direction),n=this._pointInBasis2D((0,m.a)(),t,i,this._left.start),o=this._pointInBasis2D((0,m.a)(),t,i,s),h=this._pointInBasis2D((0,m.a)(),t,i,this._right.start),a=this._pointInBasis2D((0,m.a)(),t,i,r),[c]=(0,T.dU)({start:o,end:n,type:T.SP.LINE},{start:a,end:h,type:T.SP.LINE});if(!c)return;const l=(0,v.c)((0,m.a)(),n,o);(0,v.e)(l,l);const d=(0,v.c)((0,m.a)(),c,o),u=(0,v.g)(l,d),p=(0,x.g)((0,y.c)(),s,(0,x.i)((0,y.c)(),this._left.direction,-u)),_=(0,V.jH)(e,p);this._updateDistanceConstraint(_)}_pointInBasis2D(e,t,i,s){return e[0]=(0,E.SR)(t,s),e[1]=(0,E.SR)(i,s),e}_offset(e,t){Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),(0,V.JG)(this._offsetPlane,this._plane),this._offsetPlane[3]-=t;const i=(e,t,i)=>null!=t&&(0,V.fn)(this._offsetPlane,e,(0,x.g)((0,y.c)(),e,t),i),s=(0,y.c)();(e===this._edge.leftVertex?i(this._left.start,this._left.direction,s):i(this._right.start,this._right.direction,s))&&this._helper.copy(this._helper.fromXYZ(s,void 0,this._helper.getM(e.pos)),e.pos)}selectArrowFromStartPoint(e){this._selectedArrow=(0,V.Ac)(this.plane,this._pointToXYZ(e))?1:-1}get selectedArrow(){return this._selectedArrow}signedDistanceToPoint(e){return(0,V.jH)(this.plane,this._pointToXYZ(e))}apply(e){this._offset(e,this.distance)}undo(e){this._offset(e,0)}canAccumulate(e){return e instanceof w&&this._edge.leftVertex.index===e._edge.leftVertex.index&&this._edge.rightVertex.index===e._edge.rightVertex.index&&this._edge.component===e._edge.component&&this._maybeEqualsVec3(this._left.direction,e._left.direction)&&this._maybeEqualsVec3(this._right.direction,e._right.direction)&&(0,x.G)((0,V.mJ)(this._plane),(0,V.mJ)(e._plane))}accumulate(e,t){const i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}accumulateParams(e){const t=e.distance-e._plane[3];this.distance=t+this._plane[3]}clone(){const e=new w(this._helper,this._planeType,this._edge,this.distance,M.DEFERRED);return(0,V.JG)(e._plane,this._plane),(0,V.JG)(e._offsetPlane,this._offsetPlane),e._maxDistance=this._maxDistance,e._minDistance=this._minDistance,e._left=this._cloneNeighbor(this._left),e._right=this._cloneNeighbor(this._right),e._edgeDirection=(0,x.c)((0,y.c)(),this._edgeDirection),e}_maybeEqualsVec3(e,t){return null==e&&null==t||null!=e&&null!=t&&(0,x.G)(e,t)}_cloneNeighbor(e){let{start:t,end:i,direction:s,isOriginalDirection:r}=e;return{start:(0,x.c)((0,y.c)(),t),end:null!=i?(0,x.c)((0,y.c)(),i):null,direction:(0,x.c)((0,y.c)(),s),isOriginalDirection:r}}}const D=(0,f.Vl)(15),P=.001;var Z,M;!function(e){e[e.XYZ=0]="XYZ",e[e.XY=1]="XY"}(Z||(Z={})),function(e){e[e.IMMEDIATE=0]="IMMEDIATE",e[e.DEFERRED=1]="DEFERRED"}(M||(M={}));class C{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.CUMULATIVE;this.origin=e,this.angle=t,this._accumulationType=i}_rotate(e,t){(0,v.r)(e.pos,e.pos,this.origin,t)}apply(e){this._rotate(e,this.angle)}undo(e){this._rotate(e,-this.angle)}canAccumulate(e){return e instanceof C&&(0,p.fS)(this.origin,e.origin)}accumulate(e,t){const i=t._accumulationType===r.REPLACE;this._rotate(e,i?t.angle-this.angle:t.angle)}accumulateParams(e){const t=e._accumulationType===r.REPLACE;this.angle=t?e.angle:this.angle+e.angle}}class A{constructor(e,t,i,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.CUMULATIVE;this.origin=e,this.axis1=t,this.factor1=i,this.factor2=s,this._accumulationType=n,this.axis2=(0,m.f)(t[1],-t[0])}_scale(e,t,i){(0,v.u)(e.pos,e.pos,this.origin,this.axis1,t),(0,v.u)(e.pos,e.pos,this.origin,this.axis2,i)}apply(e){this._scale(e,this.factor1,this.factor2)}undo(e){this._scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof A&&(0,p.fS)(this.origin,e.origin)&&(0,p.fS)(this.axis1,e.axis1)}accumulate(e,t){t._accumulationType===r.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=e._accumulationType===r.REPLACE;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}class S{constructor(){this._operations=[],this._closed=!1}close(){this._closed=!0}apply(){for(const e of this._operations)e.apply()}undo(){for(let e=this._operations.length-1;e>=0;e--)this._operations[e].undo()}accumulate(e){if(this._closed)return!1;const t=this._operations.length?this._operations[this._operations.length-1]:null;return t&&t.accumulate(e)||(this._operations.push(e),e.apply()),!0}}class R extends n.Z{constructor(e){super(),this.data=e,this._undoStack=[],this._redoStack=[],this._listener=this.data.on("change",(e=>{e.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation})}))}destroy(){this._listener.remove()}splitEdge(e,t){return this._apply(new d(this.data,e,t))}updateVertices(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.ACCUMULATE_STEPS;return this._apply(new c(this.data,e,t),i)}moveVertices(e,t,i,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:s.ACCUMULATE_STEPS;return this.updateVertices(e,new g(this.data.coordinateHelper,t,i,r),n)}scaleVertices(e,t,i,n,o){let h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:s.ACCUMULATE_STEPS,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r.CUMULATIVE;return this.updateVertices(e,new A(t,i,n,o,a),h)}rotateVertices(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.ACCUMULATE_STEPS,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.CUMULATIVE;return this.updateVertices(e,new C(t,i,o),n)}removeVertices(e){return this._apply(new l(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return 0===this.data.components.length?null:this._apply(new a(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new u(this.data,e,t))}offsetEdge(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.ACCUMULATE_STEPS;return this.updateVertices([t.leftVertex,t.rightVertex],new w(this.data.coordinateHelper,e,t,i),r)}closeComponent(e){return this.data.components.includes(e)?this._apply(new _(this.data,e)):null}canRemoveVertex(e){return e.vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new S;return this._apply(e),(0,o.kB)((()=>e.close()))}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop();return e.undo(),this._redoStack.push(e),e}return null}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop();return e.apply(),this._undoStack.push(e),e}return null}get canUndo(){return this._undoStack.length>0}get canRedo(){return this._redoStack.length>0}get lastOperation(){return this._undoStack.length>0?this._undoStack[this._undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.ACCUMULATE_STEPS)!==s.NEW_STEP&&null!=this.lastOperation&&this.lastOperation.accumulate(e)||(e.apply(),this._undoStack.push(e),this._redoStack=[]),e}static fromGeometry(e,t){return new R(h.XE.fromGeometry(e,t))}}},94163:(e,t,i)=>{i.d(t,{SP:()=>s,UG:()=>l,dU:()=>c,k0:()=>h,xO:()=>a});i(16889);var s,r=i(88396),n=i(6394);function o(e,t){return e[0]*t[1]-e[1]*t[0]}function h(e,t,i,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;return(0,r.c)(u,s,i),(0,r.c)(_,t,n),function(e,t,i){const s=(0,r.g)(i,t)/(0,r.v)(i);(0,r.a)(e,i,s)}(g,_,u),(0,r.i)(e,n,g)}function a(e,t,i,s){(0,r.c)(u,t,i);const n=s/(0,r.h)(u);return(0,r.w)(e,i,u,n)}function c(e,t){const i=e.start,n=e.end,h=t.start,a=t.end,c=(0,r.c)(u,n,i),l=(0,r.c)(p,a,h),f=o(c,l);if(Math.abs(f)<=d)return[];const v=(0,r.c)(_,i,h),m=o(l,v)/f,x=o(c,v)/f;if(m>=0){if(x>=0||t.type===s.LINE)return[(0,r.w)(g,i,c,m)]}else if(e.type===s.LINE&&(x>=0||t.type===s.LINE))return[(0,r.w)(g,i,c,m)];return[]}function l(e,t,i){const n=[],o=(0,r.c)(u,e.end,e.start),h=(0,r.c)(p,e.start,t),a=(0,r.v)(o),c=2*(0,r.g)(o,h),l=c*c-4*a*((0,r.v)(h)-i*i);if(0===l){const t=-c/(2*a);(e.type===s.LINE||t>=0)&&n.push((0,r.w)(g,e.start,o,t))}else if(l>0){const t=Math.sqrt(l),i=(-c+t)/(2*a);(e.type===s.LINE||i>=0)&&n.push((0,r.w)(g,e.start,o,i));const h=(-c-t)/(2*a);(e.type===s.LINE||h>=0)&&n.push((0,r.w)(_,e.start,o,h))}return n}!function(e){e[e.RAY=0]="RAY",e[e.LINE=1]="LINE"}(s||(s={}));const d=1e-6,u=(0,n.a)(),p=(0,n.a)(),_=(0,n.a)(),g=(0,n.a)()},25003:(e,t,i)=>{i.d(t,{m:()=>n});var s=i(79803),r=i(29691);function n(e){const t=(0,r.rS)(e),i=t===r.GG?r.wY:t;return(0,s.canProjectWithoutEngine)(e,i)?i:e}}}]);
//# sourceMappingURL=6009.f45b74f5.chunk.js.map