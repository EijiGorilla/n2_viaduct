"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[8566],{38566:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var i=r(27366),s=(r(59486),r(44055)),o=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),n=r(97642),a=r(18202),p=r(35995),l=r(49861),u=r(25243),d=(r(63780),r(93169)),c=r(69912),y=r(31201),h=r(27823),m=r(30651),f=r(10064),g=r(54472),v=r(66978),b=r(70431),w=r(63543),C=r(45927),F=r(49818),_=r(6701),S=r(53866);let O=class extends g.Z{constructor(){super(...arguments),this._connection=null,this.capabilities=(0,w.MS)(!1,!1),this.type="wfs",this.refresh=(0,v.Ds)((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return F.Z.fromJSON(r)}async queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:S.Z.fromJSON(r.extent)}}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){var t,r,i;const{url:s,customParameters:o,name:n,namespaceUri:a,fields:p,geometryType:l,swapXY:u}=this.layer,d="defaults"===this.layer.originOf("spatialReference")?void 0:this.layer.spatialReference;if(!s)throw new f.Z("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await(0,C.FU)(s,{customParameters:o,...e}));const c=["fields","geometryType","name","namespaceUri","swapXY"].some((e=>null==this.layer[e])),y=c?await(0,C.be)(this.wfsCapabilities,n,a,{spatialReference:d,customParameters:o,signal:null===e||void 0===e?void 0:e.signal}):{...(0,C.eB)(null!==p&&void 0!==p?p:[]),geometryType:l,name:n,namespaceUri:a,spatialReference:d,swapXY:u},m=(0,C.ft)(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri),g=h.M.toJSON(y.geometryType);return{customParameters:o,featureType:m,fields:null!==(t=null===(r=y.fields)||void 0===r?void 0:r.map((e=>e.toJSON())))&&void 0!==t?t:[],geometryField:y.geometryField,geometryType:g,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:null===(i=y.spatialReference)||void 0===i?void 0:i.toJSON(),swapXY:!!y.swapXY}}async _startWorker(e){const[t,r]=await(0,v.as)([this._createLoadOptions(e),(0,b.bA)("WFSSourceWorker",{...e,strategy:(0,d.Z)("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),i=t.error||r.error||null,s=r.value||null;if(i)throw s&&s.close(),i;const o=t.value;this._connection=r.value;const n=(await this._connection.invoke("load",o,e)).extent;this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:_.pt},extent:n,fields:o.fields,geometryType:o.geometryType,objectIdField:o.objectIdField,geometryField:o.geometryField,drawingInfo:(0,w.bU)(o.geometryType),name:o.featureType.title,wfsInfo:{name:o.featureType.name,featureUrl:o.getFeatureUrl,maxFeatures:3e3,swapXY:o.swapXY,supportedSpatialReferences:o.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:o.featureType.namespaceUri}}}};(0,i._)([(0,l.Cb)()],O.prototype,"capabilities",void 0),(0,i._)([(0,l.Cb)({constructOnly:!0})],O.prototype,"layer",void 0),(0,i._)([(0,l.Cb)()],O.prototype,"sourceJSON",void 0),(0,i._)([(0,l.Cb)()],O.prototype,"type",void 0),(0,i._)([(0,l.Cb)()],O.prototype,"wfsCapabilities",void 0),O=(0,i._)([(0,c.j)("esri.layers.graphics.sources.WFSSource")],O);var I,R=r(6693),x=r(46671),T=r(7632),q=r(37563),P=r(6061),j=r(94207),U=r(29598),E=r(71684),N=r(56811),Z=r(99063),D=r(45948),A=r(83040),Q=r(25610),k=r(37270),J=r(77748),M=r(85116),W=r(21149),Y=r(81085),B=r(78952);const G=(0,Q.v)();let X=I=class extends((0,j.c)((0,x.N)((0,q.M)((0,T.b)((0,R.h)((0,Z.n)((0,E.Q)((0,N.M)((0,P.q)((0,U.I)((0,n.R)(m.Z)))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:i,geometryType:s,name:o,namespaceUri:n,objectIdField:a,spatialReference:p,swapXY:l,url:u,wfsCapabilities:d}=e;return new I({customParameters:t,fields:r,geometryField:i,geometryType:s,name:o,namespaceUri:n,objectIdField:a,spatialReference:p,swapXY:l,url:u,wfsCapabilities:d})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new O({layer:this}),this.spatialReference=B.Z.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,k.YN)(this.renderer,this.fieldsIndex),(0,k.UF)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){var e;return null===(e=this.source)||void 0===e?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,r){const i=e.filter((e=>e.name!==C.u2));this.geometryField&&i.unshift(new A.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,a.RB)(r,i.map((e=>e.toJSON())),t)}get parsedUrl(){return(0,p.mN)(this.url)}set renderer(e){(0,k.YN)(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return null===(e=this.source)||void 0===e?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return(0,Y.eZ)(this,e)}createQuery(){const e=new W.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){var r;return null===(r=this.getField(e))||void 0===r?void 0:r.domain}getField(e){var t;return null===(t=this.fieldsIndex)||void 0===t?void 0:t.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(W.Z.from(e)||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(W.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(W.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(W.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,i._)([(0,l.Cb)({readOnly:!0})],X.prototype,"capabilities",null),(0,i._)([(0,l.Cb)({type:String})],X.prototype,"copyright",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],X.prototype,"createQueryVersion",null),(0,i._)([(0,l.Cb)({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],X.prototype,"customParameters",void 0),(0,i._)([(0,l.Cb)((0,_.mi)("dateFieldsTimeReference"))],X.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],X.prototype,"defaultPopupTemplate",null),(0,i._)([(0,l.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],X.prototype,"definitionExpression",void 0),(0,i._)([(0,l.Cb)({type:String})],X.prototype,"displayField",void 0),(0,i._)([(0,l.Cb)(D.PV)],X.prototype,"elevationInfo",void 0),(0,i._)([(0,l.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"featureUrl",void 0),(0,i._)([(0,l.Cb)({type:[A.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],X.prototype,"fields",void 0),(0,i._)([(0,y.c)("fields")],X.prototype,"writeFields",null),(0,i._)([(0,l.Cb)(G.fieldsIndex)],X.prototype,"fieldsIndex",void 0),(0,i._)([(0,l.Cb)({type:S.Z,json:{name:"extent"}})],X.prototype,"fullExtent",void 0),(0,i._)([(0,l.Cb)()],X.prototype,"geometryField",void 0),(0,i._)([(0,l.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.M.read},write:{target:"layerDefinition.geometryType",writer:h.M.write,ignoreOrigin:!0},origins:{service:{read:h.M.read}}}})],X.prototype,"geometryType",void 0),(0,i._)([(0,l.Cb)({type:String})],X.prototype,"id",void 0),(0,i._)([(0,l.Cb)(D.iR)],X.prototype,"labelsVisible",void 0),(0,i._)([(0,l.Cb)({type:[J.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:M.r},write:!0}})],X.prototype,"labelingInfo",void 0),(0,i._)([(0,l.Cb)(D.rn)],X.prototype,"legendEnabled",void 0),(0,i._)([(0,l.Cb)({type:["show","hide"]})],X.prototype,"listMode",void 0),(0,i._)([(0,l.Cb)({type:String})],X.prototype,"objectIdField",void 0),(0,i._)([(0,l.Cb)({type:["WFS"]})],X.prototype,"operationalLayerType",void 0),(0,i._)([(0,l.Cb)({type:u.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"maxFeatures",void 0),(0,i._)([(0,l.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],X.prototype,"mode",void 0),(0,i._)([(0,l.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"name",void 0),(0,i._)([(0,l.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"namespaceUri",void 0),(0,i._)([(0,l.Cb)(D.bT)],X.prototype,"opacity",void 0),(0,i._)([(0,l.Cb)(G.outFields)],X.prototype,"outFields",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],X.prototype,"parsedUrl",null),(0,i._)([(0,l.Cb)(D.C_)],X.prototype,"popupEnabled",void 0),(0,i._)([(0,l.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],X.prototype,"popupTemplate",void 0),(0,i._)([(0,l.Cb)({types:o.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:o.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],X.prototype,"renderer",null),(0,i._)([(0,l.Cb)(D.YI)],X.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],X.prototype,"source",void 0),(0,i._)([(0,l.Cb)({type:B.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],X.prototype,"spatialReference",void 0),(0,i._)([(0,l.Cb)({readOnly:!0,type:[u.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"spatialReferences",void 0),(0,i._)([(0,l.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"swapXY",void 0),(0,i._)([(0,l.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],X.prototype,"title",void 0),(0,i._)([(0,l.Cb)({json:{read:!1},readOnly:!0})],X.prototype,"type",void 0),(0,i._)([(0,l.Cb)(D.HQ)],X.prototype,"url",void 0),(0,i._)([(0,l.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"version",void 0),(0,i._)([(0,l.Cb)()],X.prototype,"wfsCapabilities",null),X=I=(0,i._)([(0,c.j)("esri.layers.WFSLayer")],X);const z=X},60480:(e,t,r)=>{r.d(t,{g:()=>i});const i={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:(e,t,r)=>{r.d(t,{Dm:()=>u,Hq:()=>d,MS:()=>c,bU:()=>a});var i=r(93169),s=r(84652),o=r(60480),n=r(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function u(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r="this.".concat(t," = null;");for(const t in e)r+="this".concat(p.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(l++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return()=>new i}catch(r){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=8566.0f00b00d.chunk.js.map