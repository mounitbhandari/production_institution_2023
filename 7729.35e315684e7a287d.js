"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[7729],{7729:(U,D,c)=>{c.d(D,{S:()=>j,V:()=>W});var e=c(4650),p=c(7340),m=c(6895),a=c(9592),u=c(805),b=c(2552),x=c(1795),_=c(982);const C=["titlebar"],E=["content"],k=["footer"];function z(i,l){if(1&i&&(e.TgZ(0,"span",17),e._uU(1),e.qZA()),2&i){const t=e.oxw(4);e.uIk("id",t.id+"-label"),e.xp6(1),e.Oqu(t.header)}}function T(i,l){if(1&i&&(e.TgZ(0,"span",17),e.Hsn(1,1),e.qZA()),2&i){const t=e.oxw(4);e.uIk("id",t.id+"-label")}}function L(i,l){1&i&&e.GkF(0)}const I=function(){return{"p-dialog-header-icon p-dialog-header-maximize p-link":!0}};function O(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(4);return e.KtG(s.maximize())})("keydown.enter",function(){e.CHM(t);const s=e.oxw(4);return e.KtG(s.maximize())}),e._UZ(1,"span",19),e.qZA()}if(2&i){const t=e.oxw(4);e.Q6J("ngClass",e.DdM(2,I)),e.xp6(1),e.Q6J("ngClass",t.maximized?t.minimizeIcon:t.maximizeIcon)}}const M=function(){return{"p-dialog-header-icon p-dialog-header-close p-link":!0}};function S(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(s){e.CHM(t);const o=e.oxw(4);return e.KtG(o.close(s))})("keydown.enter",function(s){e.CHM(t);const o=e.oxw(4);return e.KtG(o.close(s))}),e._UZ(1,"span",21),e.qZA()}if(2&i){const t=e.oxw(4);e.Q6J("ngClass",e.DdM(4,M)),e.uIk("aria-label",t.closeAriaLabel)("tabindex",t.closeTabindex),e.xp6(1),e.Q6J("ngClass",t.closeIcon)}}function R(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",11,12),e.NdJ("mousedown",function(s){e.CHM(t);const o=e.oxw(3);return e.KtG(o.initDrag(s))}),e.YNc(2,z,2,2,"span",13),e.YNc(3,T,2,1,"span",13),e.YNc(4,L,1,0,"ng-container",8),e.TgZ(5,"div",14),e.YNc(6,O,2,3,"button",15),e.YNc(7,S,2,5,"button",16),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(2),e.Q6J("ngIf",!t.headerFacet&&!t.headerTemplate),e.xp6(1),e.Q6J("ngIf",t.headerFacet),e.xp6(1),e.Q6J("ngTemplateOutlet",t.headerTemplate),e.xp6(2),e.Q6J("ngIf",t.maximizable),e.xp6(1),e.Q6J("ngIf",t.closable)}}function P(i,l){1&i&&e.GkF(0)}function Y(i,l){1&i&&e.GkF(0)}function A(i,l){if(1&i&&(e.TgZ(0,"div",22,23),e.Hsn(2,2),e.YNc(3,Y,1,0,"ng-container",8),e.qZA()),2&i){const t=e.oxw(3);e.xp6(3),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}function H(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",24),e.NdJ("mousedown",function(s){e.CHM(t);const o=e.oxw(3);return e.KtG(o.initResize(s))}),e.qZA()}}const Z=function(i,l,t,n){return{"p-dialog p-component":!0,"p-dialog-rtl":i,"p-dialog-draggable":l,"p-dialog-resizable":t,"p-dialog-maximized":n}},Q=function(i,l){return{transform:i,transition:l}},J=function(i){return{value:"visible",params:i}};function G(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",3,4),e.NdJ("@animation.start",function(s){e.CHM(t);const o=e.oxw(2);return e.KtG(o.onAnimationStart(s))})("@animation.done",function(s){e.CHM(t);const o=e.oxw(2);return e.KtG(o.onAnimationEnd(s))}),e.YNc(2,R,8,5,"div",5),e.TgZ(3,"div",6,7),e.Hsn(5),e.YNc(6,P,1,0,"ng-container",8),e.qZA(),e.YNc(7,A,4,1,"div",9),e.YNc(8,H,1,0,"div",10),e.qZA()}if(2&i){const t=e.oxw(2);e.Tol(t.styleClass),e.Q6J("ngClass",e.l5B(15,Z,t.rtl,t.draggable,t.resizable,t.maximized))("ngStyle",t.style)("pFocusTrapDisabled",!1===t.focusTrap)("@animation",e.VKq(23,J,e.WLB(20,Q,t.transformOptions,t.transitionOptions))),e.uIk("aria-labelledby",t.id+"-label"),e.xp6(2),e.Q6J("ngIf",t.showHeader),e.xp6(1),e.Tol(t.contentStyleClass),e.Q6J("ngClass","p-dialog-content")("ngStyle",t.contentStyle),e.xp6(3),e.Q6J("ngTemplateOutlet",t.contentTemplate),e.xp6(1),e.Q6J("ngIf",t.footerFacet||t.footerTemplate),e.xp6(1),e.Q6J("ngIf",t.resizable)}}const F=function(i,l,t,n,s,o,h,g,d,r){return{"p-dialog-mask":!0,"p-component-overlay p-component-overlay-enter":i,"p-dialog-mask-scrollblocker":l,"p-dialog-left":t,"p-dialog-right":n,"p-dialog-top":s,"p-dialog-top-left":o,"p-dialog-top-right":h,"p-dialog-bottom":g,"p-dialog-bottom-left":d,"p-dialog-bottom-right":r}};function X(i,l){if(1&i&&(e.TgZ(0,"div",1),e.YNc(1,G,9,25,"div",2),e.qZA()),2&i){const t=e.oxw();e.Tol(t.maskStyleClass),e.Q6J("ngClass",e.rFY(4,F,[t.modal,t.modal||t.blockScroll,"left"===t.position,"right"===t.position,"top"===t.position,"topleft"===t.position||"top-left"===t.position,"topright"===t.position||"top-right"===t.position,"bottom"===t.position,"bottomleft"===t.position||"bottom-left"===t.position,"bottomright"===t.position||"bottom-right"===t.position])),e.xp6(1),e.Q6J("ngIf",t.visible)}}const B=["*",[["p-header"]],[["p-footer"]]],K=["*","p-header","p-footer"],N=(0,p.oQ)([(0,p.oB)({transform:"{{transform}}",opacity:0}),(0,p.jt)("{{transition}}")]),V=(0,p.oQ)([(0,p.jt)("{{transition}}",(0,p.oB)({transform:"{{transform}}",opacity:0}))]);let W=(()=>{class i{constructor(t,n,s,o,h){this.el=t,this.renderer=n,this.zone=s,this.cd=o,this.config=h,this.draggable=!0,this.resizable=!0,this.closeOnEscape=!0,this.closable=!0,this.showHeader=!0,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.minX=0,this.minY=0,this.focusOnShow=!0,this.keepInViewport=!0,this.focusTrap=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.closeIcon="pi pi-times",this.closeTabindex="-1",this.minimizeIcon="pi pi-window-minimize",this.maximizeIcon="pi pi-window-maximize",this.onShow=new e.vpe,this.onHide=new e.vpe,this.visibleChange=new e.vpe,this.onResizeInit=new e.vpe,this.onResizeEnd=new e.vpe,this.onDragEnd=new e.vpe,this.onMaximize=new e.vpe,this.id=(0,_.Th)(),this._style={},this._position="center",this.transformOptions="scale(0.7)"}get positionLeft(){return 0}set positionLeft(t){console.log("positionLeft property is deprecated.")}get positionTop(){return 0}set positionTop(t){console.log("positionTop property is deprecated.")}get responsive(){return!1}set responsive(t){console.log("Responsive property is deprecated.")}get breakpoint(){return 649}set breakpoint(t){console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.")}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"content":default:this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}ngOnInit(){this.breakpoints&&this.createStyle()}get visible(){return this._visible}set visible(t){this._visible=t,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}get style(){return this._style}set style(t){t&&(this._style={...t},this.originalStyle=t)}get position(){return this._position}set position(t){switch(this._position=t,t){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)"}}focus(){let t=a.p.findSingle(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}close(t){this.visibleChange.emit(!1),t.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",t=>{this.wrapper&&this.wrapper.isSameNode(t.target)&&this.close(t)})),this.modal&&a.p.addClass(document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.dismissableMask&&this.unbindMaskClickListener(),this.modal&&a.p.removeClass(document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?a.p.addClass(document.body,"p-overflow-hidden"):a.p.removeClass(document.body,"p-overflow-hidden")),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex&&(_.P9.set("modal",this.container,this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let n in this.breakpoints)t+=`\n                    @media screen and (max-width: ${n}) {\n                        .p-dialog[${this.id}] {\n                            width: ${this.breakpoints[n]} !important;\n                        }\n                    }\n                `;this.styleElement.innerHTML=t}}initDrag(t){a.p.hasClass(t.target,"p-dialog-header-icon")||a.p.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",a.p.addClass(document.body,"p-unselectable-text"))}onKeydown(t){if(this.focusTrap&&9===t.which){t.preventDefault();let n=a.p.getFocusableElements(this.container);if(n&&n.length>0)if(n[0].ownerDocument.activeElement){let s=n.indexOf(n[0].ownerDocument.activeElement);t.shiftKey?-1==s||0===s?n[n.length-1].focus():n[s-1].focus():-1==s||s===n.length-1?n[0].focus():n[s+1].focus()}else n[0].focus()}}onDrag(t){if(this.dragging){let n=a.p.getOuterWidth(this.container),s=a.p.getOuterHeight(this.container),o=t.pageX-this.lastPageX,h=t.pageY-this.lastPageY,g=this.container.getBoundingClientRect(),d=g.left+o,r=g.top+h,f=a.p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+n<f.width&&(this._style.left=d+"px",this.lastPageX=t.pageX,this.container.style.left=d+"px"),r>=this.minY&&r+s<f.height&&(this._style.top=r+"px",this.lastPageY=t.pageY,this.container.style.top=r+"px")):(this.lastPageX=t.pageX,this.container.style.left=d+"px",this.lastPageY=t.pageY,this.container.style.top=r+"px")}}endDrag(t){this.dragging&&(this.dragging=!1,a.p.removeClass(document.body,"p-unselectable-text"),this.cd.detectChanges(),this.onDragEnd.emit(t))}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}center(){this.resetPosition()}initResize(t){this.resizable&&(this.resizing=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,a.p.addClass(document.body,"p-unselectable-text"),this.onResizeInit.emit(t))}onResize(t){if(this.resizing){let n=t.pageX-this.lastPageX,s=t.pageY-this.lastPageY,o=a.p.getOuterWidth(this.container),h=a.p.getOuterHeight(this.container),g=a.p.getOuterHeight(this.contentViewChild.nativeElement),d=o+n,r=h+s,f=this.container.style.minWidth,v=this.container.style.minHeight,y=this.container.getBoundingClientRect(),w=a.p.getViewport();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(d+=n,r+=s),(!f||d>parseInt(f))&&y.left+d<w.width&&(this._style.width=d+"px",this.container.style.width=this._style.width),(!v||r>parseInt(v))&&y.top+r<w.height&&(this.contentViewChild.nativeElement.style.height=g+r-h+"px",this._style.height&&(this._style.height=r+"px",this.container.style.height=this._style.height)),this.lastPageX=t.pageX,this.lastPageY=t.pageY}}resizeEnd(t){this.resizing&&(this.resizing=!1,a.p.removeClass(document.body,"p-unselectable-text"),this.onResizeEnd.emit(t))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.zone.runOutsideAngular(()=>{this.documentDragListener=this.onDrag.bind(this),window.document.addEventListener("mousemove",this.documentDragListener)})}unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)}bindDocumentDragEndListener(){this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.endDrag.bind(this),window.document.addEventListener("mouseup",this.documentDragEndListener)})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}bindDocumentResizeListeners(){this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.onResize.bind(this),this.documentResizeEndListener=this.resizeEnd.bind(this),window.document.addEventListener("mousemove",this.documentResizeListener),window.document.addEventListener("mouseup",this.documentResizeEndListener)})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(window.document.removeEventListener("mousemove",this.documentResizeListener),window.document.removeEventListener("mouseup",this.documentResizeEndListener),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","keydown",n=>{27==n.which&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.wrapper):a.p.appendChild(this.wrapper,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.el.nativeElement.appendChild(this.wrapper)}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.wrapper=this.container.parentElement,this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container.setAttribute(this.id,""),this.modal&&this.enableModality(),!this.modal&&this.blockScroll&&a.p.addClass(document.body,"p-overflow-hidden"),this.focusOnShow&&this.focus();break;case"void":this.wrapper&&this.modal&&a.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(t){switch(t.toState){case"void":this.onContainerDestroy(),this.onHide.emit({});break;case"visible":this.onShow.emit({})}}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maskVisible=!1,this.maximized&&(a.p.removeClass(document.body,"p-overflow-hidden"),this.maximized=!1),this.modal&&this.disableModality(),this.blockScroll&&a.p.removeClass(document.body,"p-overflow-hidden"),this.container&&this.autoZIndex&&_.P9.clear(this.container),this.container=null,this.wrapper=null,this._style=this.originalStyle?{...this.originalStyle}:{}}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(u.b4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-dialog"]],contentQueries:function(t,n,s){if(1&t&&(e.Suo(s,u.h4,5),e.Suo(s,u.$_,5),e.Suo(s,u.jx,4)),2&t){let o;e.iGM(o=e.CRH())&&(n.headerFacet=o.first),e.iGM(o=e.CRH())&&(n.footerFacet=o.first),e.iGM(o=e.CRH())&&(n.templates=o)}},viewQuery:function(t,n){if(1&t&&(e.Gf(C,5),e.Gf(E,5),e.Gf(k,5)),2&t){let s;e.iGM(s=e.CRH())&&(n.headerViewChild=s.first),e.iGM(s=e.CRH())&&(n.contentViewChild=s.first),e.iGM(s=e.CRH())&&(n.footerViewChild=s.first)}},hostAttrs:[1,"p-element"],inputs:{header:"header",draggable:"draggable",resizable:"resizable",positionLeft:"positionLeft",positionTop:"positionTop",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:"modal",closeOnEscape:"closeOnEscape",dismissableMask:"dismissableMask",rtl:"rtl",closable:"closable",responsive:"responsive",appendTo:"appendTo",breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",showHeader:"showHeader",breakpoint:"breakpoint",blockScroll:"blockScroll",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",minX:"minX",minY:"minY",focusOnShow:"focusOnShow",maximizable:"maximizable",keepInViewport:"keepInViewport",focusTrap:"focusTrap",transitionOptions:"transitionOptions",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",visible:"visible",style:"style",position:"position"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},ngContentSelectors:K,decls:1,vars:1,consts:[[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],["pFocusTrap","","role","dialog",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","","role","dialog",3,"ngClass","ngStyle","pFocusTrapDisabled"],["container",""],["class","p-dialog-header",3,"mousedown",4,"ngIf"],[3,"ngClass","ngStyle"],["content",""],[4,"ngTemplateOutlet"],["class","p-dialog-footer",4,"ngIf"],["class","p-resizable-handle","style","z-index: 90;",3,"mousedown",4,"ngIf"],[1,"p-dialog-header",3,"mousedown"],["titlebar",""],["class","p-dialog-title",4,"ngIf"],[1,"p-dialog-header-icons"],["type","button","tabindex","-1","pRipple","",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button","pRipple","",3,"ngClass","click","keydown.enter",4,"ngIf"],[1,"p-dialog-title"],["type","button","tabindex","-1","pRipple","",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-maximize-icon",3,"ngClass"],["type","button","pRipple","",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-close-icon",3,"ngClass"],[1,"p-dialog-footer"],["footer",""],[1,"p-resizable-handle",2,"z-index","90",3,"mousedown"]],template:function(t,n){1&t&&(e.F$t(B),e.YNc(0,X,2,15,"div",0)),2&t&&e.Q6J("ngIf",n.maskVisible)},dependencies:[m.O5,m.mk,b.i,m.PC,m.tP,x.H],styles:[".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translate(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0px!important;left:0px!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}\n"],encapsulation:2,data:{animation:[(0,p.X$)("animation",[(0,p.eR)("void => visible",[(0,p._7)(N)]),(0,p.eR)("visible => void",[(0,p._7)(V)])])]},changeDetection:0}),i})(),j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.ez,b.o,x.T],u.m8]}),i})()}}]);