/*! For license information please see 3954.13462fac.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[3954],{43954:(e,t,n)=>{n.r(t),n.d(t,{CalciteSegmentedControlItem:()=>d,defineCustomElement:()=>h});var i=n(51554),l=n(92358),o=n(57601);const a="input",c="segmented-control-item-icon",r=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalSegmentedControlItemChange=(0,i.yM)(this,"calciteInternalSegmentedControlItemChange",6),this.checked=!1,this.iconFlipRtl=!1,this.iconStart=void 0,this.iconEnd=void 0,this.value=void 0,this.appearance="solid",this.layout="horizontal",this.scale="m"}handleCheckedChange(){this.calciteInternalSegmentedControlItemChange.emit()}render(){const{appearance:e,checked:t,layout:n,scale:o,value:r}=this,s=this.iconStart?(0,i.h)("calcite-icon",{class:c,flipRtl:this.iconFlipRtl,icon:this.iconStart,key:"icon-start",scale:"s"}):null,d=this.iconEnd?(0,i.h)("calcite-icon",{class:c,flipRtl:this.iconFlipRtl,icon:this.iconEnd,key:"icon-end",scale:"s"}):null;return(0,i.h)(i.AA,{"aria-checked":(0,l.t)(t),"aria-label":r,role:"radio"},(0,i.h)("label",{class:{"label--scale-s":"s"===o,"label--scale-m":"m"===o,"label--scale-l":"l"===o,"label--horizontal":"horizontal"===n,"label--outline":"outline"===e,"label--outline-fill":"outline-fill"===e}},this.iconStart?s:null,(0,i.h)("slot",null,r),(0,i.h)("slot",{name:a}),this.iconEnd?d:null))}get el(){return this}static get watchers(){return{checked:["handleCheckedChange"]}}static get style(){return":host{display:flex;cursor:pointer;align-self:stretch;font-weight:var(--calcite-font-weight-normal);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:0.125rem;box-sizing:border-box;display:flex;flex:1 1 0%;align-items:center;color:var(--calcite-ui-text-3);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{justify-content:center}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:-1px}.label--scale-s{padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-block:0.125rem}.label--scale-m{padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-block:0.375rem}.label--scale-l{padding-inline:1rem;padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([checked]) .label--outline{background-color:transparent}::slotted(input){display:none}@media (forced-colors: active){:host([checked]) label{background-color:highlight}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{outline:2px solid transparent;outline-offset:2px}:host([checked]) label:not([class~=label--outline]) .segmented-control-item-icon{color:highlightText}}.segmented-control-item-icon{position:relative;margin:0px;display:inline-flex;line-height:inherit}:host([icon-start]) .label--scale-s .segmented-control-item-icon{margin-inline-end:0.5rem}:host([icon-end]) .label--scale-s .segmented-control-item-icon{margin-inline-start:0.5rem}:host([icon-start]) .label--scale-m .segmented-control-item-icon{margin-inline-end:0.75rem}:host([icon-end]) .label--scale-m .segmented-control-item-icon{margin-inline-start:0.75rem}:host([icon-start]) .label--scale-l .segmented-control-item-icon{margin-inline-end:1rem}:host([icon-end]) .label--scale-l .segmented-control-item-icon{margin-inline-start:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-segmented-control-item",{checked:[1540],iconFlipRtl:[516,"icon-flip-rtl"],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],value:[1032],appearance:[1],layout:[1],scale:[1]}]);function s(){if("undefined"===typeof customElements)return;["calcite-segmented-control-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-segmented-control-item":customElements.get(e)||customElements.define(e,r);break;case"calcite-icon":customElements.get(e)||(0,o.d)()}}))}s();const d=r,h=s}}]);
//# sourceMappingURL=3954.13462fac.chunk.js.map