"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[2224],{2224:(e,t,a)=>{a.d(t,{save:()=>T,saveAs:()=>S});var r=a(63780),n=(a(10064),a(65286)),o=a(25899),l=a(74368),i=a(37933),s=a(19610),u=(a(32698),a(73117));const c="Feature Service",d="feature-layer-utils",p="".concat(d,"-save"),y="".concat(d,"-save-as");"".concat(d,"-saveall"),"".concat(d,"-saveall-as");function f(e){return{isValid:(0,i.fP)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],a=[];for(const{layer:r,layerJSON:n}of e)r.isTable?a.push(n):t.push(n);return{layers:t,tables:a}}function v(e){return m([e])}async function w(e,t){return/\/\d+\/?$/.test(e.url)?v(t[0]):b(t,e)}async function b(e,t){var a,r;if(!t)return e.reverse(),m(e);const{layer:{url:n,customParameters:o,apiKey:i}}=e[0];let u=await t.fetchData("json");null!=(null===(a=u)||void 0===a?void 0:a.layers)&&null!=(null===(r=u)||void 0===r?void 0:r.tables)||(u=await async function(e,t,a){var r,n;e||(e={}),(r=e).layers||(r.layers=[]),(n=e).tables||(n.tables=[]);const{url:o,customParameters:i,apiKey:u}=t,{serviceJSON:c,layersJSON:d}=await(0,l.V)(o,{customParameters:i,apiKey:u}),p=h(e.layers,c.layers,a),y=h(e.tables,c.tables,a);e.layers=p.itemResources,e.tables=y.itemResources;const f=[...p.added,...y.added],m=d?[...d.layers,...d.tables]:[];return await async function(e,t,a,r){const n=await async function(e){const t=[];e.forEach((e=>{let{type:a}=e;const r=function(e){let t;switch(e){case"Feature Layer":case"Table":t="FeatureLayer";break;case"Oriented Imagery Layer":t="OrientedImageryLayer"}return t}(a),n=s.T[r];t.push(n())}));const a=await Promise.all(t),r=new Map;return e.forEach(((e,t)=>{let{type:n}=e;r.set(n,a[t])})),r}(t),o=t.map((e=>{let{id:t,type:o}=e;return new(n.get(o))({url:a,layerId:t,sourceJSON:r.find((e=>{let{id:a}=e;return a===t}))})}));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((t=>{const{layerId:a,loaded:r,defaultPopupTemplate:n}=t;if(!r||null==n)return;const o={id:a,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),I(t,o,e)}))}(e,f,o,m),e}(u,{url:null!==n&&void 0!==n?n:"",customParameters:o,apiKey:i},e.map((e=>e.layer.layerId))));for(const l of e)I(l.layer,l.layerJSON,u);return u}function h(e,t,a){const n=(0,r.e5)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((t=>{let{id:a}=t;e.push({id:a})})),{itemResources:e,added:o.filter((e=>{let{id:t}=e;return!a.includes(t)}))}}function I(e,t,a){e.isTable?g(a.tables,t):g(a.layers,t)}function g(e,t){const a=e.findIndex((e=>{let{id:a}=e;return a===t.id}));-1===a?e.push(t):e[a]=t}async function P(e,t){const{url:a,layerId:r,title:n,fullExtent:l,isTable:i}=e,s=(0,o.Qc)(a);t.url="FeatureServer"===(null===s||void 0===s?void 0:s.serverType)?a:"".concat(a,"/").concat(r),t.title||(t.title=n),t.extent=null,i||null==l||(t.extent=await(0,u.$o)(l)),(0,u.ck)(t,u.Kz.METADATA),(0,u.ck)(t,u.Kz.MULTI_LAYER),(0,u.qj)(t,u.Kz.SINGLE_LAYER),i&&(0,u.qj)(t,u.Kz.TABLE)}async function T(e,t){return(0,n.a1)({layer:e,itemType:c,validateLayer:f,createItemData:(e,t)=>w(t,[e]),errorNamePrefix:p},t)}async function S(e,t,a){return(0,n.po)({layer:e,itemType:c,validateLayer:f,createItemData:(e,t)=>Promise.resolve(v(e)),errorNamePrefix:y,newItem:t,setItemProperties:P},a)}},65286:(e,t,a)=>{a.d(t,{a1:()=>w,po:()=>b});var r=a(10064),n=a(15909),o=a(7575),l=a(98995),i=a(32698),s=a(73117),u=a(81359);async function c(e){const{layer:t,errorNamePrefix:a,validateLayer:n}=e;await t.load(),function(e,t,a){const n=a(e);if(!n.isValid)throw new r.Z("".concat(t,":invalid-parameters"),n.errorMessage,{layer:e})}(t,a,n)}function d(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function p(e){const{item:t,itemType:a,errorNamePrefix:n,layer:o,validateItem:l}=e;if((0,u.w)(t),t.type!==a)throw new r.Z("".concat(n,":portal-item-wrong-type"),'Portal item type should be "'.concat(a,'"'),{item:t,layer:o});if(l){const e=l(t);if(!e.isValid)throw new r.Z("".concat(n,":invalid-parameters"),e.errorMessage,{layer:o})}}function y(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:n}=t;if(!n)throw new r.Z("".concat(a,":portal-item-not-set"),d(t,"requires the portalItem property to be set"));if(!n.loaded)throw new r.Z("".concat(a,":portal-item-not-loaded"),d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));p({...e,item:n})}function f(e){var t,a,r,n;const{newItem:i,itemType:s}=e;let u=l.default.from(i);return u.id&&(u=u.clone(),u.id=null),null!==(a=(t=u).type)&&void 0!==a||(t.type=s),null!==(n=(r=u).portal)&&void 0!==n||(r.portal=o.Z.getDefault()),p({...e,item:u}),u}async function m(e,t,a){var n,o;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const l=e.write({},t);return await Promise.all(null!==(n=null===(o=t.resources)||void 0===o?void 0:o.pendingOperations)&&void 0!==n?n:[]),function(e,t){var a;let n=(null!==(a=e.messages)&&void 0!==a?a:[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:a,details:n}=e;return new r.Z(t,a,n)}));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new r.Z("url:unsupported","Relative url '".concat(e,"' is not supported")))))),null!==t&&void 0!==t&&t.ignoreUnsupported&&(n=n.filter((e=>{let{name:t}=e;return"layer:unsupported"!==t&&"symbol:unsupported"!==t&&"symbol-layer:unsupported"!==t&&"property:unsupported"!==t&&"url:unsupported"!==t}))),n.length>0)throw new r.Z("layer-write:unsupported","Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}(t,a),l}function v(e){(0,s.qj)(e,s.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function w(e,t){const{layer:a,createItemData:r,createJSONContext:o,saveResources:l}=e;await c(e),y(e);const s=a.portalItem,u=o?o(s):(0,i.Yv)(s),d=await m(a,u,t),p=await r({layer:a,layerJSON:d},s);return v(s),await s.update({data:p}),(0,n.D)(u),await(null===l||void 0===l?void 0:l(s,u)),s}async function b(e,t){const{layer:a,createItemData:r,createJSONContext:o,setItemProperties:l,saveResources:s}=e;await c(e);const u=f(e),d=o?o(u):(0,i.Yv)(u),p=await m(a,d,t),y=await r({layer:a,layerJSON:p},u);return await l(a,u),v(u),await async function(e,t,a){var r;const n=e.portal;await n.signIn(),await(null===(r=n.user)||void 0===r?void 0:r.addItem({item:e,data:t,folder:null===a||void 0===a?void 0:a.folder}))}(u,y,t),a.portalItem=u,(0,n.D)(d),await(null===s||void 0===s?void 0:s(u,d)),u}},74368:(e,t,a)=>{a.d(t,{V:()=>n});var r=a(41226);async function n(e,t){var a;const n=await(0,r.T)(e,t);c(n),i(n);const o={serviceJSON:n};if((null!==(a=n.currentVersion)&&void 0!==a?a:0)<10.5)return o;const l=await(0,r.T)(e+"/layers",t);return c(l),i(l),o.layersJSON={layers:l.layers,tables:l.tables},o}function o(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function l(e){return"Table"===e.type}function i(e){var t,a;e.layers=null===(t=e.layers)||void 0===t?void 0:t.filter(o),e.tables=null===(a=e.tables)||void 0===a?void 0:a.filter(l)}function s(e){e.type||(e.type="Feature Layer")}function u(e){e.type||(e.type="Table")}function c(e){var t,a;null!==(t=e.layers)&&void 0!==t&&t.forEach(s),null===(a=e.tables)||void 0===a||a.forEach(u)}},32698:(e,t,a)=>{a.d(t,{M4:()=>s,Yv:()=>l,ht:()=>o,wk:()=>i});var r=a(35995),n=a(7575);function o(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function l(e){const t=(0,r.mN)(e.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:t,portal:e.portal||n.Z.getDefault(),portalItem:e,verifyItemRelativeUrls:t?{rootPath:t.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}}function i(e){return{origin:"web-map",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function s(e,t){const a=(0,r.mN)(e.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:a,portal:e.portal||n.Z.getDefault(),portalItem:e,initiator:t,verifyItemRelativeUrls:a?{rootPath:a.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}}},41226:(e,t,a)=>{a.d(t,{T:()=>n});var r=a(76200);async function n(e,t){const{data:a}=await(0,r.Z)(e,{responseType:"json",query:{f:"json",...null===t||void 0===t?void 0:t.customParameters,token:null===t||void 0===t?void 0:t.apiKey}});return a}}}]);
//# sourceMappingURL=2224.a487ca2d.chunk.js.map