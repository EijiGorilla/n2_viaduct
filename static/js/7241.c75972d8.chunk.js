/*! For license information please see 7241.c75972d8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_viaduct=self.webpackChunkn2_viaduct||[]).push([[7241],{7241:(e,t,i)=>{i.r(t),i.d(t,{CalciteModal:()=>N,defineCustomElement:()=>Q});var o=i(51554),n=i(19432),a=i(92358),s=i(16435),l=i(47242),r=i(72021),c=i(27871),d=i(46895),h=i(52655),m=i(64044),p=i(57601),u=i(91438),b=i(69874);const v="modal",g="title",f="header",x="footer",k="scrim",w="back",y="close",z="secondary",C="primary",O="container",E="container--open",M="content",S="content--no-footer",B="content-bottom",T="content-top",F="slotted-in-shell",D="modal--opening-idle",L="modal--opening-active",H="modal--closing-idle",V="modal--closing-active",W="x",I="content",P="content-bottom",_="content-top",A="header",j="back",q="secondary",G="primary",J=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteModalBeforeClose=(0,o.yM)(this,"calciteModalBeforeClose",6),this.calciteModalClose=(0,o.yM)(this,"calciteModalClose",6),this.calciteModalBeforeOpen=(0,o.yM)(this,"calciteModalBeforeOpen",6),this.calciteModalOpen=(0,o.yM)(this,"calciteModalOpen",6),this.ignoreOpenChange=!1,this.mutationObserver=(0,r.c)("mutation",(()=>this.handleMutationObserver())),this.cssVarObserver=(0,r.c)("mutation",(()=>{this.updateSizeCssVars()})),this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteModalOpen",this.openEnd)},this.handleCloseClick=()=>{this.open=!1},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeModal=async()=>{if(this.beforeClose)try{await this.beforeClose(this.el)}catch(e){return void requestAnimationFrame((()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1}))}this.opened=!1,this.removeOverflowHiddenClass()},this.handleMutationObserver=()=>{this.updateFooterVisibility(),this.updateFocusTrapElements()},this.updateFooterVisibility=()=>{this.hasFooter=!!(0,a.g)(this.el,[j,G,q])},this.updateSizeCssVars=()=>{this.cssWidth=getComputedStyle(this.el).getPropertyValue("--calcite-modal-width"),this.cssHeight=getComputedStyle(this.el).getPropertyValue("--calcite-modal-height")},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=(0,a.e)(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=(0,a.e)(e)},this.open=!1,this.opened=!1,this.beforeClose=void 0,this.closeButtonDisabled=!1,this.focusTrapDisabled=!1,this.outsideCloseDisabled=!1,this.docked=void 0,this.escapeDisabled=!1,this.scale="m",this.width="m",this.fullscreen=void 0,this.kind=void 0,this.messages=void 0,this.messageOverrides=void 0,this.slottedInShell=void 0,this.cssWidth=void 0,this.cssHeight=void 0,this.hasFooter=!0,this.hasContentTop=!1,this.hasContentBottom=!1,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?(0,s.d)(this):(0,s.a)(this))}onMessagesChange(){}async componentWillLoad(){await(0,h.s)(this),(0,l.a)(this),this.open&&requestAnimationFrame((()=>this.openModal()))}componentDidLoad(){(0,l.s)(this)}connectedCallback(){var e,t;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0}),null===(t=this.cssVarObserver)||void 0===t||t.observe(this.el,{attributeFilter:["style"]}),this.updateSizeCssVars(),this.updateFooterVisibility(),(0,n.c)(this),(0,d.c)(this),(0,h.c)(this),(0,s.c)(this)}disconnectedCallback(){var e,t;this.removeOverflowHiddenClass(),null===(e=this.mutationObserver)||void 0===e||e.disconnect(),null===(t=this.cssVarObserver)||void 0===t||t.disconnect(),(0,n.d)(this),(0,s.d)(this),(0,d.d)(this),(0,h.d)(this),this.slottedInShell=!1}render(){return(0,o.h)(o.AA,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},(0,o.h)("div",{class:{[O]:!0,[E]:this.opened,[F]:this.slottedInShell}},(0,o.h)("calcite-scrim",{class:k,onClick:this.handleOutsideClose}),this.renderStyle(),(0,o.h)("div",{class:{[v]:!0},ref:this.setTransitionEl},(0,o.h)("div",{class:f},this.renderCloseButton(),(0,o.h)("header",{class:g},(0,o.h)("slot",{name:f}))),this.renderContentTop(),(0,o.h)("div",{class:{[M]:!0,[S]:!this.hasFooter},ref:e=>this.modalContent=e},(0,o.h)("slot",{name:I})),this.renderContentBottom(),this.renderFooter())))}renderFooter(){return this.hasFooter?(0,o.h)("div",{class:x,key:"footer"},(0,o.h)("span",{class:w},(0,o.h)("slot",{name:j})),(0,o.h)("span",{class:z},(0,o.h)("slot",{name:q})),(0,o.h)("span",{class:C},(0,o.h)("slot",{name:G}))):null}renderContentTop(){return(0,o.h)("div",{class:T,hidden:!this.hasContentTop},(0,o.h)("slot",{name:_,onSlotchange:this.contentTopSlotChangeHandler}))}renderContentBottom(){return(0,o.h)("div",{class:B,hidden:!this.hasContentBottom},(0,o.h)("slot",{name:P,onSlotchange:this.contentBottomSlotChangeHandler}))}renderCloseButton(){return this.closeButtonDisabled?null:(0,o.h)("button",{"aria-label":this.messages.close,class:y,key:"button",onClick:this.handleCloseClick,title:this.messages.close,ref:e=>this.closeButtonEl=e},(0,o.h)("calcite-icon",{icon:W,scale:(0,m.g)(this.scale)}))}renderStyle(){if(!this.fullscreen&&(this.cssWidth||this.cssHeight))return(0,o.h)("style",null,".".concat(O," {\n              ").concat(this.docked&&this.cssWidth?"align-items: center !important;":"","\n            }\n            .").concat(v," {\n              block-size: ").concat(this.cssHeight?this.cssHeight:"auto"," !important;\n              ").concat(this.cssWidth?"inline-size: ".concat(this.cssWidth," !important;"):"","\n              ").concat(this.cssWidth?"max-inline-size: ".concat(this.cssWidth," !important;"):"","\n              ").concat(this.docked?"border-radius: var(--calcite-border-radius) !important;":"","\n            }\n            @media screen and (max-width: ").concat(this.cssWidth,") {\n              .").concat(O," {\n                ").concat(this.docked?"align-items: flex-end !important;":"","\n              }\n              .").concat(v," {\n                max-block-size: 100% !important;\n                inline-size: 100% !important;\n                max-inline-size: 100% !important;\n                min-inline-size: 100% !important;\n                margin: 0 !important;\n                ").concat(this.docked?"":"block-size: 100% !important;","\n                ").concat(this.docked?"":"border-radius: 0 !important;","\n                ").concat(this.docked?"border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;":"","\n              }\n            }\n          "))}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}handleEscape(e){!this.open||this.escapeDisabled||"Escape"!==e.key||e.defaultPrevented||(this.open=!1,e.preventDefault())}async setFocus(){await(0,l.c)(this),(0,a.f)(this.el)}async updateFocusTrapElements(){(0,s.u)(this)}async scrollContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:e,left:t,behavior:"smooth"}):(this.modalContent.scrollTop=e,this.modalContent.scrollLeft=t))}onBeforeOpen(){this.transitionEl.classList.add(L),this.calciteModalBeforeOpen.emit()}onOpen(){this.transitionEl.classList.remove(D,L),this.calciteModalOpen.emit(),(0,s.a)(this)}onBeforeClose(){this.transitionEl.classList.add(V),this.calciteModalBeforeClose.emit()}onClose(){this.transitionEl.classList.remove(H,V),this.calciteModalClose.emit(),(0,s.d)(this)}toggleModal(e){this.ignoreOpenChange||(e?this.openModal():this.closeModal())}handleOpenedChange(e){var t,i;((0,c.o)(this),e)?null===(t=this.transitionEl)||void 0===t||t.classList.add(D):null===(i=this.transitionEl)||void 0===i||i.classList.add(H)}openModal(){this.el.addEventListener("calciteModalOpen",this.openEnd),this.opened=!0;const e=(0,a.g)(this.el,A),t=(0,a.g)(this.el,I);this.titleId=(0,a.m)(e),this.contentId=(0,a.m)(t),this.slottedInShell||(this.initialOverflowCSS=document.documentElement.style.overflow,document.documentElement.style.setProperty("overflow","hidden"))}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",this.initialOverflowCSS)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}}static get style(){return":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-modal-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-app-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-app-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-ui-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-app-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-app-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width=s][docked]) .container{align-items:flex-end}}:host([width=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width=m][docked]) .container{align-items:flex-end}}:host([width=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-ui-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-ui-danger)}:host([kind=info]) .modal{border-color:var(--calcite-ui-info)}:host([kind=success]) .modal{border-color:var(--calcite-ui-success)}:host([kind=warning]) .modal{border-color:var(--calcite-ui-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-modal",{open:[1540],opened:[1540],beforeClose:[16],closeButtonDisabled:[516,"close-button-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],outsideCloseDisabled:[516,"outside-close-disabled"],docked:[516],escapeDisabled:[516,"escape-disabled"],scale:[513],width:[513],fullscreen:[516],kind:[513],messages:[1040],messageOverrides:[1040],slottedInShell:[1028,"slotted-in-shell"],cssWidth:[32],cssHeight:[32],hasFooter:[32],hasContentTop:[32],hasContentBottom:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64],updateFocusTrapElements:[64],scrollContent:[64]},[[8,"keydown","handleEscape"]]]);function K(){if("undefined"===typeof customElements)return;["calcite-modal","calcite-icon","calcite-loader","calcite-scrim"].forEach((e=>{switch(e){case"calcite-modal":customElements.get(e)||customElements.define(e,J);break;case"calcite-icon":customElements.get(e)||(0,p.d)();break;case"calcite-loader":customElements.get(e)||(0,u.d)();break;case"calcite-scrim":customElements.get(e)||(0,b.d)()}}))}K();const N=J,Q=K}}]);
//# sourceMappingURL=7241.c75972d8.chunk.js.map