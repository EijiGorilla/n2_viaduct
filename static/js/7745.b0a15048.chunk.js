"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[7745],{47745:(e,t,i)=>{i.r(t),i.d(t,{default:()=>G});var r=i(27366),s=i(52639),l=i(32718),n=i(92026),d=i(2622),a=i(94172),o=i(49861),u=(i(25243),i(63780),i(93169),i(69912)),h=i(54054),c=i(18661),y=i(87072),g=i(21149),p=i(28554),_=i(31625),v=i(42757),b=i(42069),f=i(831),F=i(31730),w=i(71039),I=i(95964),C=i(75162),E=i(43812),O=i(51246),S=i(73552),x=i(44011),j=i(1247),H=i(48252),Q=i(23224),m=i(6777),q=i(58890),R=i(17006),V=i(24405),A=i(93463);const D=(0,H.v)();let U=class extends((0,_.NI)((0,j.l)((0,Q.i)((0,b.A)(R.Z))))){constructor(){super(...arguments),this.type="scene-layer-3d",this._setVisibilityHiddenObjectIds=new d.Z,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._pendingEditsQueue=Promise.resolve(),this._interactiveEditingSessions=new Map,this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(e,t){return e.url===this.layer.url&&this.i3sOverrides.isEmpty?e.load(t).then((()=>{var t;(0,x.tq)(this.layer,e,this.i3sOverrides),this.layer=e,this.i3sOverrides.destroy();const i=null===(t=this.view.resourceController)||void 0===t?void 0:t.memoryController;this.i3sOverrides=new C.v({view:this.view,layer:e,memoryController:i}),this.resetHighlights()})):null}get layerPopupEnabledAndHasTemplate(){var e;return this.layer.popupEnabled&&(0,V.zc)(this.layer,null===(e=this.view.popup)||void 0===e?void 0:e.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(e){this._set("filter",w.z.checkSupport(e)?e:null)}get viewFilter(){const e=this.filter,t=this.layerFilter;if(null==e&&null==t)return null;const i=this._get("viewFilter");return null==i?new w.z({layerFilter:t,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError)}):(i.viewFilter=e,i.layerFilter=t,i)}get requiredFields(){var e,t;return null!==(e=null===(t=this._fieldsHelper)||void 0===t?void 0:t.requiredFields)&&void 0!==e?e:[]}get _floorFilterClause(){const e=(0,y.c)(this);return null!=e?h.WhereClause.create(e,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds.toArray();return e.length?e.sort(((e,t)=>e-t)):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?Array.from(this._setVisibilityHiddenObjectIds).sort(((e,t)=>e-t)):null}get _objectQualitySettings(){var e;return null===(e=this.view)||void 0===e||null===(e=e.qualitySettings)||void 0===e||null===(e=e.sceneService)||void 0===e?void 0:e.object}get lodFactor(){var e,t;return null!==(e=null===(t=this._objectQualitySettings)||void 0===t?void 0:t.lodFactor)&&void 0!==e?e:1}get lodCrossfadeinDuration(){var e;return null!==(e=this._objectQualitySettings.lodCrossfadeinDuration)&&void 0!==e?e:0}get lodCrossfadeoutDuration(){var e;return null!==(e=this._objectQualitySettings.lodCrossfadeoutDuration)&&void 0!==e?e:0}get lodCrossfadeUncoveredDuration(){var e;return null!==(e=this._objectQualitySettings.lodCrossfadeUncoveredDuration)&&void 0!==e?e:0}get updatingProgressValue(){var e,t;return null!==(e=null===(t=this._controller)||void 0===t?void 0:t.updatingProgress)&&void 0!==e?e:0}initialize(){this._fieldsHelper=new m.K({layerView:this}),this._updatingHandles.add((()=>this.layer.rangeInfos),(e=>this._rangeInfosChanged(e)),a.nn),this._updatingHandles.add((()=>this.layer.renderer),(e=>this._updatingHandles.addPromise(this._rendererChange(e))),a.nn);const e=()=>this._filterChange();this._updatingHandles.add((()=>this.parsedDefinitionExpression),e),this._updatingHandles.add((()=>this.filter),e),this._updatingHandles.add((()=>this._floorFilterClause),e),this._updatingHandles.add((()=>this._excludeObjectIdsSorted),e),this._updatingHandles.add((()=>this._setVisibilityHiddenObjectIdsSorted),e),this._updatingHandles.add((()=>null!=this.viewFilter?this.viewFilter.sortedObjectIds:null),e),this._updatingHandles.add((()=>null!=this.viewFilter?this.viewFilter.parsedWhereClause:null),e),this._updatingHandles.add((()=>[null!=this.viewFilter?this.viewFilter.parsedGeometry:null,null!=this.filter?this.filter.spatialRelationship:null,null!=this.layer.filter?this.layer.filter.spatialRelationship:null]),(()=>this._geometryFilterChange())),(0,p.Rx)()&&this.i3sOverrides.is3DOFL&&this._updatingHandles.add((()=>this.i3sOverrides.sortedGeometryChangedObjectIds),e),this.addHandles(this.layer.on("apply-edits",(e=>this._updatingHandles.addPromise(e.result)))),this.addHandles(this.layer.on("edits",(e=>{const t=this._pendingEditsQueue.then((()=>this._handleEdits(e))).then();this._pendingEditsQueue=t,this._updatingHandles.addPromise(t)})))}destroy(){this._fieldsHelper=(0,n.SC)(this._fieldsHelper)}_rangeInfosChanged(e){null!=e&&e.length>0&&l.Z.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(e):new g.Z(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal).then((e=>{if(null===e||void 0===e||!e.features)return e;const t=this.layer;for(const i of e.features)i.layer=t,i.sourceLayer=t;return e}))}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){var e;const t=(0,F.gz)(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new E.u({layerView:this,priority:A.T8.FEATURE_QUERY_ENGINE,spatialIndex:new S.I({featureAdapter:new O.u({objectIdField:this.layer.objectIdField,attributeStorageInfo:null!==(e=this.layer.attributeStorageInfo)&&void 0!==e?e:[],getFeatureExtent:t}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,i,r)=>e({id:t,index:i,meta:r})),t,v.p.QUERYABLE),getFeatureExtent:t,sourceSpatialReference:(0,x.tp)(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof g.Z){const{set:i,handle:r}=t.acquireSet();return this.queryObjectIds(e).then((e=>t.setFeatureIds(i,e))),r}return super.highlight(e)}createInteractiveEditSession(e){return(0,f.sw)(this._attributeEditingContext,e)}_createLayerGraphic(e){const t=new s.Z(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}getFilters(){const e=super.getFilters();(0,p.Rx)()&&this.i3sOverrides.is3DOFL&&this.i3sOverrides.sortedGeometryChangedObjectIds.length>0&&e.push(((e,t)=>{t.node.index>=0&&(0,x.Yb)(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,e)}));const t=this._setVisibilityHiddenObjectIdsSorted;null!=t&&e.push((e=>(0,x.Yb)(t,!1,e)));const i=this._excludeObjectIdsSorted;return null!=i&&e.push((e=>(0,x.Yb)(i,!1,e))),this._floorFilterClause&&this.addSqlFilter(e,this._floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),null!=this.viewFilter&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}setVisibility(e,t){t?this._setVisibilityHiddenObjectIds.delete(e):this._setVisibilityHiddenObjectIds.add(e)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||null!=this.viewFilter&&this.viewFilter.updating||null!=this.i3sOverrides&&this.i3sOverrides.updating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(null==e?this.createQuery():g.Z.from(e))}get _attributeEditingContext(){var e;return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:e=>this._forAllNodes((t=>null!=t?e(t.node,t.featureIds):null)),attributeStorageInfo:null!==(e=this.i3slayer.attributeStorageInfo)&&void 0!==e?e:[],i3sOverrides:this.i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}async _handleEdits(e){const t=(0,p.Rx)(),i=this._attributeEditingContext,r=await(0,f.Qw)(i,e);t&&(0,f.ZS)(i,r),(0,f.Z6)(i,r)}get hasGeometryFilter(){const e=this.viewFilter;return null!=(null===e||void 0===e?void 0:e.parsedGeometry)}computeNodeFiltering(e){const t=this.viewFilter;return null==t||!this.view.spatialReference||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?I.U_.Unmodified:I.U_.Culled}};(0,r._)([(0,o.Cb)()],U.prototype,"i3slayer",null),(0,r._)([(0,o.Cb)(q.q)],U.prototype,"updatingProgress",void 0),(0,r._)([(0,o.Cb)({type:c.Z})],U.prototype,"filter",null),(0,r._)([(0,o.Cb)({readOnly:!0})],U.prototype,"viewFilter",null),(0,r._)([(0,o.Cb)(D.requiredFields)],U.prototype,"requiredFields",null),(0,r._)([(0,o.Cb)(D.availableFields)],U.prototype,"availableFields",void 0),(0,r._)([(0,o.Cb)()],U.prototype,"_fieldsHelper",void 0),(0,r._)([(0,o.Cb)()],U.prototype,"_floorFilterClause",null),(0,r._)([(0,o.Cb)()],U.prototype,"_excludeObjectIdsSorted",null),(0,r._)([(0,o.Cb)()],U.prototype,"_setVisibilityHiddenObjectIds",void 0),(0,r._)([(0,o.Cb)()],U.prototype,"_setVisibilityHiddenObjectIdsSorted",null),(0,r._)([(0,o.Cb)()],U.prototype,"_objectQualitySettings",null),(0,r._)([(0,o.Cb)()],U.prototype,"lodFactor",null),(0,r._)([(0,o.Cb)()],U.prototype,"updatingProgressValue",null),U=(0,r._)([(0,u.j)("esri.views.3d.layers.SceneLayerView3D")],U);const G=U}}]);
//# sourceMappingURL=7745.b0a15048.chunk.js.map