"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[2782],{62782:(e,t,s)=>{s.r(t),s.d(t,{TerrainTileTree3DDebugger:()=>h});var l=s(27366),i=(s(59486),s(94172)),n=(s(32718),s(25243),s(63780),s(93169),s(10064),s(69912)),r=s(65156),a=s(87287),o=s(80885);let h=class extends a.q{constructor(e){super(e),this.enablePolygons=!1}initialize(){(0,i.YP)((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),i.nn)}getTiles(){const e=null!=this.view.basemapTerrain.spatialReference?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((t=>({...t,geometry:o.Z.fromExtent((0,r.HH)(t.extent,e))})))}};h=(0,l._)([(0,n.j)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],h)},87287:(e,t,s)=>{s.d(t,{q:()=>m});var l=s(27366),i=s(51995),n=s(52639),r=(s(51508),s(7138)),a=s(80987),o=s(16889),h=s(49861),c=(s(25243),s(63780),s(93169),s(69912)),b=s(62554),y=s(61459),p=s(58009),d=s(87037),u=s(61054),g=s(98351),w=s(21897);const _=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let m=class extends r.Z{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=_.map((e=>new y.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,s=new Set((this._labels.size,this._labels.keys()));e.forEach(((l,r)=>{const h=l.lij.toString();s.delete(h);const c=l.lij[0],y=l.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const e=new n.Z({geometry:y,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(h,e),t.push(e)}if(this.enableLabels){const s=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=" (".concat(e.loadPriority,")")),t})(l),c=r/(e.length-1),_=(0,o.t7)(0,200,c),m=(0,o.t7)(20,6,c)/.75,v=null!=l.loadPriority&&l.loadPriority>=e.length,f=new i.Z([_,v?0:_,v?0:_]),T="3d"===this.view.type?()=>new b.Z({verticalOffset:new u.Z({screenLength:40/.75}),callout:new g.Z({color:new i.Z("white"),border:new w.Z({color:new i.Z("black")})}),symbolLayers:new a.Z([new d.Z({text:s,halo:{color:"white",size:1/.75},material:{color:f},size:m})])}):()=>new p.Z({text:s,haloColor:"white",haloSize:1/.75,color:f,size:m}),Z=this._labels.get(h);if(Z){const e=T();null!=Z.symbol&&JSON.stringify(e)===JSON.stringify(Z.symbol)||(Z.symbol=e)}else{const e=new n.Z({geometry:y.extent.center,symbol:T()});this._labels.set(h,e),t.push(e)}}}));const l=new Array;s.forEach((e=>{const t=this._polygons.get(e);null!=t&&(l.push(t),this._polygons.delete(e));const s=this._labels.get(e);null!=s&&(l.push(s),this._labels.delete(e))})),this.view.graphics.removeMany(l),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,l._)([(0,h.Cb)({constructOnly:!0})],m.prototype,"view",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],m.prototype,"updating",void 0),(0,l._)([(0,h.Cb)()],m.prototype,"enabled",null),m=(0,l._)([(0,c.j)("esri.views.support.TileTreeDebugger")],m)}}]);
//# sourceMappingURL=2782.55d204ca.chunk.js.map