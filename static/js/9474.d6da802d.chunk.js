"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[9474],{99474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var s=r(27366),l=(r(59486),r(80987)),i=r(77178),o=r(97642),n=r(66978),a=r(94172),u=r(35995),y=r(49861),d=r(25243),p=(r(63780),r(93169),r(38511)),h=r(69912),f=r(31201),c=r(78952),b=r(30651),v=r(6693),m=r(6061),g=r(29598),_=r(71684),S=r(56811),C=r(45948),w=r(91505),k=r(46784),x=r(54472),E=r(643),P=r(42265),G=r(19545),I=(r(44055),r(76200)),L=r(84652),Z=r(41414),F=r(376);r(9014),r(49818);const O={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function M(e){var t;const r=e.folders||[],s=r.slice(),l=new Map,i=new Map,o=new Map,n=new Map,a=new Map,u={esriGeometryPoint:i,esriGeometryPolyline:o,esriGeometryPolygon:n};((null===(t=e.featureCollection)||void 0===t?void 0:t.layers)||[]).forEach((e=>{const t=(0,L.d9)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;l.set(r,t);const s=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?N(i,s,e.featureSet.features):"esriGeometryPolyline"===r?N(o,s,e.featureSet.features):"esriGeometryPolygon"===r&&N(n,s,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),r.forEach((t=>{t.networkLinkIds.forEach((r=>{const l=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(r,t.id,e.networkLinks);l&&s.push(l)}))})),s.forEach((e=>{if(e.featureInfos){e.points=(0,L.d9)(l.get("esriGeometryPoint")),e.polylines=(0,L.d9)(l.get("esriGeometryPolyline")),e.polygons=(0,L.d9)(l.get("esriGeometryPolygon")),e.mapImages=[];for(const r of e.featureInfos)switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{var t;const s=u[r.type].get(r.id);s&&(null===(t=e[O[r.type]])||void 0===t||t.featureSet.features.push(s));break}case"GroundOverlay":{const t=a.get(r.id);t&&e.mapImages.push(t);break}}e.fullExtent=R([e])}}));const y=R(s);return{folders:r,sublayers:s,extent:y}}function j(e,t,r,s){const l=null===G.id||void 0===G.id?void 0:G.id.findCredential(e);e=(0,u.fl)(e,{token:null===l||void 0===l?void 0:l.token});const i=P.default.kmlServiceUrl;return(0,I.Z)(i,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:s})}function T(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const l=[],i={},o=t.sublayers,n=new Set(t.folders.map((e=>e.id)));return o.forEach((t=>{const o=new e;if(r?o.read(t,r):o.read(t),s.length&&n.has(o.id)&&(o.visible=s.includes(o.id)),i[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){var a;const e=i[t.parentFolderId];e.sublayers||(e.sublayers=[]),null===(a=e.sublayers)||void 0===a||a.unshift(o)}else l.unshift(o)})),l}function N(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}function R(e){const t=(0,Z.Ue)(Z.G_),r=(0,Z.Ue)(Z.G_);for(const o of e){var s,l,i;if(null!==(s=o.polygons)&&void 0!==s&&null!==(s=s.featureSet)&&void 0!==s&&s.features)for(const e of o.polygons.featureSet.features)(0,F.Yg)(t,e.geometry),(0,Z.TC)(r,t);if(null!==(l=o.polylines)&&void 0!==l&&null!==(l=l.featureSet)&&void 0!==l&&l.features)for(const e of o.polylines.featureSet.features)(0,F.Yg)(t,e.geometry),(0,Z.TC)(r,t);if(null!==(i=o.points)&&void 0!==i&&null!==(i=i.featureSet)&&void 0!==i&&i.features)for(const e of o.points.featureSet.features)(0,F.Yg)(t,e.geometry),(0,Z.TC)(r,t);if(o.mapImages)for(const e of o.mapImages)(0,F.Yg)(t,e.extent),(0,Z.TC)(r,t)}return(0,Z.fS)(r,Z.G_)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:c.Z.WGS84}}var Y,K=r(53866);let z=Y=class extends(w.Z.EventedMixin((0,k.eC)(x.Z))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,a.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),a.Z_),(0,a.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),a.Z_),(0,a.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),a.Z_),(0,a.YP)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),a.Z_)])}initialize(){(0,a.N1)((()=>this.networkLink)).then((()=>(0,a.N1)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){var t,r;if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const s=null!=e?e.signal:null,i=this._fetchService(null!==(t=null===(r=this._get("networkLink"))||void 0===r?void 0:r.href)&&void 0!==t?t:"",s).then((e=>{var t;const r=R(e.sublayers);this.fullExtent=K.Z.fromJSON(r),this.sourceJSON=e;const s=(0,d.se)(l.Z.ofType(Y),T(Y,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,null!==(t=this.layer)&&void 0!==t&&t.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(i),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return j(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>M(e.data)))}};(0,s._)([(0,y.Cb)()],z.prototype,"description",void 0),(0,s._)([(0,y.Cb)({type:K.Z})],z.prototype,"fullExtent",void 0),(0,s._)([(0,y.Cb)()],z.prototype,"id",void 0),(0,s._)([(0,y.Cb)({readOnly:!0,value:null})],z.prototype,"networkLink",void 0),(0,s._)([(0,y.Cb)({json:{write:{allowNull:!0}}})],z.prototype,"parent",void 0),(0,s._)([(0,y.Cb)({type:l.Z.ofType(z),json:{write:{allowNull:!0}}})],z.prototype,"sublayers",void 0),(0,s._)([(0,y.Cb)({value:null,json:{read:{source:"name",reader:e=>(0,E.Cb)(e)}}})],z.prototype,"title",void 0),(0,s._)([(0,y.Cb)({value:!0})],z.prototype,"visible",null),(0,s._)([(0,p.r)("visible",["visibility"])],z.prototype,"readVisible",null),(0,s._)([(0,y.Cb)()],z.prototype,"sourceJSON",void 0),(0,s._)([(0,y.Cb)()],z.prototype,"layer",void 0),z=Y=(0,s._)([(0,h.j)("esri.layers.support.KMLSublayer")],z);const J=z,W=["kml","xml"];let A=class extends((0,v.h)((0,_.Q)((0,S.M)((0,m.q)((0,g.I)((0,o.R)(b.Z))))))){constructor(){super(...arguments),this._visibleFolders=[],this.allSublayers=new i.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=c.Z.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,a.YP)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),a.Z_),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return T(J,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,u.vt)(this.url,W)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(n.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=M((await Promise.resolve().then((()=>{var t;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:j(null!==(t=this.url)&&void 0!==t?t:"",this.outSpatialReference,this.refreshInterval,e)}))).data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&(null!=e?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,s._)([(0,y.Cb)({readOnly:!0})],A.prototype,"allSublayers",void 0),(0,s._)([(0,y.Cb)({type:c.Z})],A.prototype,"outSpatialReference",void 0),(0,s._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),(0,s._)([(0,y.Cb)({readOnly:!0,json:{read:!1,write:!1}})],A.prototype,"legendEnabled",void 0),(0,s._)([(0,y.Cb)({type:["show","hide","hide-children"]})],A.prototype,"listMode",void 0),(0,s._)([(0,y.Cb)({type:["KML"]})],A.prototype,"operationalLayerType",void 0),(0,s._)([(0,y.Cb)({})],A.prototype,"resourceInfo",void 0),(0,s._)([(0,y.Cb)({type:l.Z.ofType(J),json:{write:{ignoreOrigin:!0}}})],A.prototype,"sublayers",void 0),(0,s._)([(0,p.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],A.prototype,"readSublayersFromItemOrWebMap",null),(0,s._)([(0,p.r)("service","sublayers",["sublayers"])],A.prototype,"readSublayers",null),(0,s._)([(0,f.c)("sublayers")],A.prototype,"writeSublayers",null),(0,s._)([(0,y.Cb)({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),(0,s._)([(0,y.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],A.prototype,"title",null),(0,s._)([(0,y.Cb)(C.HQ)],A.prototype,"url",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],A.prototype,"visibleSublayers",null),(0,s._)([(0,y.Cb)({type:K.Z})],A.prototype,"extent",void 0),(0,s._)([(0,y.Cb)()],A.prototype,"fullExtent",null),A=(0,s._)([(0,h.j)("esri.layers.KMLLayer")],A);const H=A}}]);
//# sourceMappingURL=9474.d6da802d.chunk.js.map