"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[7078],{80573:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(27366),r=i(7138),s=i(63780),l=i(11582),o=i(79056),a=i(46784),u=i(49861),p=(i(25243),i(93169),i(69912));let d=0,y=class extends((0,a.eC)((0,l.J)((0,o.IG)(r.Z)))){constructor(e){super(e),this.id="".concat(Date.now().toString(16),"-analysis-").concat(d++),this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(s.pC)}};(0,n._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],y.prototype,"id",void 0),(0,n._)([(0,u.Cb)({type:String})],y.prototype,"title",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],y.prototype,"type",void 0),(0,n._)([(0,u.Cb)({clonable:!1,value:null})],y.prototype,"parent",null),(0,n._)([(0,u.Cb)({readOnly:!0})],y.prototype,"isEditable",null),(0,n._)([(0,u.Cb)({readOnly:!0})],y.prototype,"requiredPropertiesForEditing",void 0),y=(0,n._)([(0,p.j)("esri.analysis.Analysis")],y);const c=y},97613:(e,t,i)=>{i.d(t,{Z:()=>v});var n=i(27366),r=i(84314),s=i(7138),l=i(11582),o=i(46784),a=i(92026),u=i(49861),p=(i(25243),i(63780),i(93169),i(69912)),d=i(96866),y=i(585),c=i(64575);let h=class extends((0,o.eC)((0,l.J)(s.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,a._W)(this.position,e.position)&&(0,a._W)(this.elevationInfo,e.elevationInfo)&&(0,r.kk)(this.feature,e.feature)}};(0,n._)([(0,u.Cb)({type:y.Z,json:{write:{isRequired:!0}}})],h.prototype,"position",void 0),(0,n._)([(0,u.Cb)({type:c.Z}),(0,d.B)()],h.prototype,"elevationInfo",void 0),(0,n._)([(0,u.Cb)(r.rX)],h.prototype,"feature",void 0),h=(0,n._)([(0,p.j)("esri.analysis.LineOfSightAnalysisObserver")],h);const v=h},33985:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(27366),r=i(84314),s=i(11582),l=i(46784),o=i(92026),a=i(49861),u=(i(25243),i(63780),i(93169),i(69912)),p=i(96866),d=i(585),y=i(64575);let c=class extends((0,l.eC)(s.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,o._W)(this.position,e.position)&&(0,o._W)(this.elevationInfo,e.elevationInfo)&&(0,r.kk)(this.feature,e.feature)}};(0,n._)([(0,a.Cb)({type:d.Z}),(0,p.B)()],c.prototype,"position",void 0),(0,n._)([(0,a.Cb)({type:y.Z}),(0,p.B)()],c.prototype,"elevationInfo",void 0),(0,n._)([(0,a.Cb)(r.rX)],c.prototype,"feature",void 0),c=(0,n._)([(0,u.j)("esri.analysis.LineOfSightAnalysisTarget")],c);const h=c},84314:(e,t,i)=>{function n(e,t){return r(e)===r(t)}function r(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let i=null;return i=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==i?null:"o-".concat(t,"-").concat(i)}i.d(t,{kk:()=>n,pD:()=>r,rX:()=>s});const s={json:{write:{writer:function(e,t){var i;null!=(null===e||void 0===e||null===(i=e.layer)||void 0===i?void 0:i.objectIdField)&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}}},39192:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(27366),r=i(80573),s=i(97613),l=i(33985),o=i(80987),a=i(60354),u=i(94172),p=i(49861),d=(i(25243),i(63780),i(93169),i(69912)),y=i(79803),c=i(41414),h=i(74509);const v=o.Z.ofType(l.Z);let b=class extends r.Z{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,u.YP)((()=>this._computeExtent()),(e=>{null==(null===e||void 0===e?void 0:e.pending)&&this._set("extent",null!=e?e.extent:null)}),u.tX))}get targets(){return this._get("targets")||new v}set targets(e){this._set("targets",(0,a.Z)(e,this.targets,v))}get spatialReference(){var e;return null!=(null===(e=this.observer)||void 0===e?void 0:e.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[null===(e=this.observer)||void 0===e?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){var e;const t=this.spatialReference;if(null==(null===(e=this.observer)||void 0===e?void 0:e.position)||null==t)return null;const i=e=>"absolute-height"===(0,h.VW)(e.position,e.elevationInfo),n=this.observer.position,r=(0,c.al)(n.x,n.y,n.z,n.x,n.y,n.z);for(const l of this.targets)if(null!=l.position){const e=(0,y.projectOrLoad)(l.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:i,z:n}=e.geometry;(0,c.pp)(r,[t,i,n])}}const s=(0,c.HH)(r,t);return i(this.observer)&&this.targets.every(i)||(s.zmin=void 0,s.zmax=void 0),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll()}};(0,n._)([(0,p.Cb)({type:["line-of-sight"]})],b.prototype,"type",void 0),(0,n._)([(0,p.Cb)({type:s.Z,json:{read:!0,write:!0}})],b.prototype,"observer",void 0),(0,n._)([(0,p.Cb)({cast:a.R,type:v,nonNullable:!0,json:{read:!0,write:!0}})],b.prototype,"targets",null),(0,n._)([(0,p.Cb)({value:null,readOnly:!0})],b.prototype,"extent",void 0),(0,n._)([(0,p.Cb)({readOnly:!0})],b.prototype,"spatialReference",null),(0,n._)([(0,p.Cb)({readOnly:!0})],b.prototype,"requiredPropertiesForEditing",null),b=(0,n._)([(0,d.j)("esri.analysis.LineOfSightAnalysis")],b);const g=b;var f=i(97642),_=i(30651),C=i(6061);const j=o.Z.ofType(l.Z);let I=class extends((0,C.q)((0,f.R)(_.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new g,this.opacity=1}initialize(){this.addHandles((0,u.YP)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),u.tX))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return null===(e=this.analysis)||void 0===e?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new o.Z}set targets(e){var t;(0,a.Z)(e,null===(t=this.analysis)||void 0===t?void 0:t.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new g)}};(0,n._)([(0,p.Cb)({json:{read:!1},readOnly:!0})],I.prototype,"type",void 0),(0,n._)([(0,p.Cb)({type:["LineOfSightLayer"]})],I.prototype,"operationalLayerType",void 0),(0,n._)([(0,p.Cb)({type:s.Z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],I.prototype,"observer",null),(0,n._)([(0,p.Cb)({type:j,json:{read:!0,write:{ignoreOrigin:!0}}})],I.prototype,"targets",null),(0,n._)([(0,p.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],I.prototype,"analysis",void 0),(0,n._)([(0,p.Cb)({readOnly:!0})],I.prototype,"fullExtent",null),(0,n._)([(0,p.Cb)({readOnly:!0})],I.prototype,"spatialReference",null),(0,n._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],I.prototype,"opacity",void 0),(0,n._)([(0,p.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),I=(0,n._)([(0,d.j)("esri.layers.LineOfSightLayer")],I);const w=I}}]);
//# sourceMappingURL=7078.698c308d.chunk.js.map