"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[9567],{7539:(B,C,s)=>{s.d(C,{N:()=>e});var o=s(4650),h=s(5054);let e=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(g){return new(g||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-asynchronous-sequential-circuits"]],decls:27,vars:1,consts:[["data-bs-toggle","collapse","href","#collapseExample","role","button","aria-expanded","false","aria-controls","collapseExample",1,"btn","btn"],[1,"bi","bi-arrows-expand"],["id","collapseExample",1,"collapse"],[1,"card","card-body",2,"font-size","18px","line-height","1.6"],["data-bs-toggle","collapse","href","#collapseBlockDiagram","role","button","aria-expanded","false","aria-controls","collapseBlockDiagram",1,"btn","btn"],["id","collapseBlockDiagram",1,"collapse"],["src","assets/tutorial/flipflop/Asynchronous-Block-Diagram.svg","alt","Image","width","250",3,"preview"]],template:function(g,v){1&g&&(o.TgZ(0,"p")(1,"a",0),o._UZ(2,"i",1),o._uU(3,"Introduction to Asynchronous sequential circuit "),o.qZA()(),o.TgZ(4,"div",2)(5,"div",3)(6,"ul")(7,"li"),o._uU(8,"Asynchronous sequential circuit works without Clock."),o.qZA(),o.TgZ(9,"li"),o._uU(10,"Asynchronous sequential circuit works based on memory concept"),o.qZA(),o.TgZ(11,"li"),o._uU(12,"Feedback is present as delay line, and Delay of feedback is not predictable so application of asynchronous sequential circuit is limited."),o.qZA(),o.TgZ(13,"li"),o._uU(14,"Changes in inputs cause changes in output (State changes)"),o.qZA(),o.TgZ(15,"li"),o._uU(16,"Asynchronous sequential circuit design is more complicated than synchronous sequential circuit design"),o.qZA(),o.TgZ(17,"li"),o._uU(18,"The memory of the asynchronous sequential circuit may include flip-flops or time-delay devices."),o.qZA()()()(),o.TgZ(19,"p")(20,"a",4),o._UZ(21,"i",1),o._uU(22,"Block Diagram "),o.qZA()(),o.TgZ(23,"div",5)(24,"div",3),o._UZ(25,"p-image",6),o.qZA()(),o._UZ(26,"hr")),2&g&&(o.xp6(25),o.Q6J("preview",!0))},dependencies:[h.E]}),d})()},1689:(B,C,s)=>{s.r(C),s.d(C,{AsynchronousSequentialCircuitsModule:()=>u});var o=s(6895),h=s(4364),e=s(7539),d=s(4650);const b=[{path:"",component:e.N}];let g=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=d.oAB({type:c}),c.\u0275inj=d.cJS({imports:[h.Bz.forChild(b),h.Bz]}),c})();var v=s(5054);let u=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=d.oAB({type:c}),c.\u0275inj=d.cJS({imports:[o.ez,g,v.$]}),c})()},9567:(B,C,s)=>{s.r(C),s.d(C,{FlipFlopModule:()=>V});var o=s(6895),h=s(4364),e=s(4650),d=s(3848),b=s(1167),g=s(4006),v=s(8177),u=s(3238),c=s(2693),y=s(1281);let r=0;const _=(0,u.Id)(class{}),l="mat-badge-content";let p=(()=>{class i extends _{constructor(t,n,m,f,M){super(),this._ngZone=t,this._elementRef=n,this._ariaDescriber=m,this._renderer=f,this._animationMode=M,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=r++,this._isInitialized=!1}get color(){return this._color}set color(t){this._setColor(t),this._color=t}get overlap(){return this._overlap}set overlap(t){this._overlap=(0,y.Ig)(t)}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateHostAriaDescription(t)}get hidden(){return this._hidden}set hidden(t){this._hidden=(0,y.Ig)(t)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const t=this._renderer.createElement("span"),n="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(l),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(n)})}):t.classList.add(n),t}_updateRenderedContent(t){const n=`${t??""}`.trim();this._isInitialized&&n&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=n),this._content=n}_updateHostAriaDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),t&&this._ariaDescriber.describe(this._elementRef.nativeElement,t),this._description=t}_setColor(t){const n=this._elementRef.nativeElement.classList;n.remove(`mat-badge-${this._color}`),t&&n.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${l}`);for(const n of Array.from(t))n!==this._badgeElement&&n.remove()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(c.$s),e.Y36(e.Qsj),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,n){2&t&&e.ekj("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small","small"===n.size)("mat-badge-medium","medium"===n.size)("mat-badge-large","large"===n.size)("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[e.qOj]}),i})(),Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.rt,u.BQ,u.BQ]}),i})();const T=["rb"],S=function(i,a,t){return{"p-radiobutton-label":!0,"p-radiobutton-label-active":i,"p-disabled":a,"p-radiobutton-label-focus":t}};function E(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"label",4),e.NdJ("click",function(m){e.CHM(t);const f=e.oxw();return e.KtG(f.select(m))}),e._uU(1),e.qZA()}if(2&i){const t=e.oxw(),n=e.MAs(3);e.Tol(t.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,S,n.checked,t.disabled,t.focused)),e.uIk("for",t.inputId),e.xp6(1),e.Oqu(t.label)}}const O=function(i,a,t){return{"p-radiobutton p-component":!0,"p-radiobutton-checked":i,"p-radiobutton-disabled":a,"p-radiobutton-focused":t}},q=function(i,a,t){return{"p-radiobutton-box":!0,"p-highlight":i,"p-disabled":a,"p-focus":t}},k={provide:g.JU,useExisting:(0,e.Gpc)(()=>A),multi:!0};let I=(()=>{class i{constructor(){this.accessors=[]}add(t,n){this.accessors.push([t,n])}remove(t){this.accessors=this.accessors.filter(n=>n[1]!==t)}select(t){this.accessors.forEach(n=>{this.isSameGroup(n,t)&&n[1]!==t&&n[1].writeValue(t.value)})}isSameGroup(t,n){return!!t[0].control&&t[0].control.root===n.control.control.root&&t[1].name===n.name}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),A=(()=>{class i{constructor(t,n,m){this.cd=t,this.injector=n,this.registry=m,this.onClick=new e.vpe,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngOnInit(){this.control=this.injector.get(g.a5),this.checkName(),this.registry.add(this.control,this)}handleClick(t,n,m){t.preventDefault(),!this.disabled&&(this.select(t),m&&n.focus())}select(t){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit(t))}writeValue(t){this.checked=t==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onModelTouched(),this.onBlur.emit(t)}onChange(t){this.select(t)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this)}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error('\n          If you define both a name and a formControlName attribute on your radio button, their values\n          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>\n        ')}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO),e.Y36(e.zs3),e.Y36(I))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-radioButton"]],viewQuery:function(t,n){if(1&t&&e.Gf(T,5),2&t){let m;e.iGM(m=e.CRH())&&(n.inputViewChild=m.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:"disabled",label:"label",tabindex:"tabindex",inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[e._Bn([k])],decls:7,vars:23,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","radio",3,"checked","disabled","change","focus","blur"],["rb",""],[3,"ngClass","click"],[1,"p-radiobutton-icon"],[3,"class","ngClass","click",4,"ngIf"]],template:function(t,n){if(1&t){const m=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("change",function(M){return n.onChange(M)})("focus",function(M){return n.onInputFocus(M)})("blur",function(M){return n.onInputBlur(M)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(M){e.CHM(m);const F=e.MAs(3);return e.KtG(n.handleClick(M,F,!0))}),e._UZ(5,"span",5),e.qZA()(),e.YNc(6,E,2,9,"label",6)}2&t&&(e.Tol(n.styleClass),e.Q6J("ngStyle",n.style)("ngClass",e.kEZ(15,O,n.checked,n.disabled,n.focused)),e.xp6(2),e.Q6J("checked",n.checked)("disabled",n.disabled),e.uIk("id",n.inputId)("name",n.name)("value",n.value)("tabindex",n.tabindex)("aria-checked",n.checked)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),e.xp6(2),e.Q6J("ngClass",e.kEZ(19,q,n.checked,n.disabled,n.focused)),e.xp6(2),e.Q6J("ngIf",n.label))},dependencies:[o.PC,o.mk,o.O5],encapsulation:2,changeDetection:0}),i})(),U=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[o.ez]]}),i})();var D=s(7539),R=s(7009),N=s(5866),L=s(4148);function P(i,a){1&i&&e._UZ(0,"app-asynchronous-sequential-circuits")}function J(i,a){1&i&&e._UZ(0,"app-synchronous-sequential-circuits")}function X(i,a){1&i&&(e.TgZ(0,"div",28),e._UZ(1,"img",29),e.TgZ(2,"div",5)(3,"p",7),e._uU(4," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA()()())}function w(i,a){1&i&&(e.TgZ(0,"div",28),e._UZ(1,"img",30),e.TgZ(2,"div",5)(3,"p",7),e._uU(4," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA()()())}const z=[{path:"",component:(()=>{class i{constructor(){this.checked=!1,this.fontSize=14}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-flip-flop"]],decls:85,vars:12,consts:[[1,"align-center"],["label","Description",1,"align-center"],[1,"d-flex","flex-row","bd-highlight","mb-3","justify-content-center"],[1,"p-2","bd-highlight","align-center"],["data-aos","fade-right","data-aos-duration","3000",1,"card",2,"background-color","#d9d8d8"],[1,"card-body"],["matBadgeOverlap","false",3,"ngModel","matBadge","ngModelChange"],[1,"card-text","text-black"],["para",""],[1,"table","table-striped"],["scope","col"],["data-aos","fade-left","data-aos-duration","4000",1,"card",2,"background-color","#d9d8d8"],[1,"card-body","text-black"],[1,"d-flex","flex-row","bd-highlight","mb-3","justify-content-left"],[1,"p-field-radiobutton"],["name","city","value","asc","inputId","city1",3,"ngModel","ngModelChange"],["for","city1"],["name","city","value","sc","inputId","city2",3,"ngModel","ngModelChange"],["for","city2"],[1,"d-flex","flex-row","bd-highlight","m-3","justify-content-center"],[4,"ngIf"],["label","NAND Based",1,"align-center"],["onLabel","Show Blank","offLabel","Show Solved","onIcon","pi pi-check","offIcon","pi pi-times",3,"ngModel","ngModelChange"],["src","assets/tutorial/flipflop/siple_nand_based_sr_flipflop.svg","alt","...",1,"card-img-top",2,"margin-left","10px","width","20vw"],[1,"p-2","bd-highlight"],["class","card","style","background-color: #d9d8d8;","data-aos","fade-left","data-aos-duration","3000",4,"ngIf"],["label","NOR Based Flip Flop",1,"align-center"],["label","J-K Flip Flop",1,"align-center"],["data-aos","fade-left","data-aos-duration","3000",1,"card",2,"background-color","#d9d8d8"],["src","assets/tutorial/flipflop/Characteristic-Table-Simple-Flip-Flop.svg","alt","...",1,"card-img-top",2,"margin-left","10px","width","31vw"],["src","assets/tutorial/flipflop/Characteristic-Table-Simple-Flip-Flop-Solved.svg","alt","...",1,"card-img-top",2,"margin-left","10px","width","31vw"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"p-slider",6),e.NdJ("ngModelChange",function(f){return n.fontSize=f}),e.qZA(),e._UZ(7,"hr"),e.TgZ(8,"p",7,8),e._uU(10," This sequential circuit contains a set of inputs and outputs. The outputs of sequential circuit depends not only on the combination of present inputs but also on the previous outputs. Previous output is nothing but the present state. Therefore, sequential circuits contain combinational circuits along with memory storage elements. "),e.qZA(),e._uU(11," https://www.tutorialspoint.com/digital_circuits/digital_circuits_sequential_circuits.htm "),e.TgZ(12,"table",9)(13,"thead")(14,"tr")(15,"th",10),e._uU(16,"Combinational Circuits"),e.qZA(),e.TgZ(17,"th",10),e._uU(18,"Sequential Circuits"),e.qZA()()(),e.TgZ(19,"tbody")(20,"tr")(21,"td"),e._uU(22,"Outputs depend only on present inputs."),e.qZA(),e.TgZ(23,"td"),e._uU(24,"Outputs depend on both present inputs and present state."),e.qZA()(),e.TgZ(25,"tr")(26,"td"),e._uU(27,"Feedback path is not present."),e.qZA(),e.TgZ(28,"td"),e._uU(29,"Feedback path is present."),e.qZA()(),e.TgZ(30,"tr")(31,"td"),e._uU(32,"Memory elements are not required."),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Memory elements are required."),e.qZA()(),e.TgZ(35,"tr")(36,"td"),e._uU(37,"Clock signal is not required."),e.qZA(),e.TgZ(38,"td"),e._uU(39,"Clock signal is required."),e.qZA()(),e.TgZ(40,"tr")(41,"td"),e._uU(42,"Easy to design."),e.qZA(),e.TgZ(43,"td"),e._uU(44,"Difficult to design."),e.qZA()()()()()(),e.TgZ(45,"div",11)(46,"div",12)(47,"div",13)(48,"div")(49,"div")(50,"h2"),e._uU(51,"Types of Sequential Circuits"),e.qZA(),e.TgZ(52,"div",14)(53,"p-radioButton",15),e.NdJ("ngModelChange",function(f){return n.circuitType=f}),e.qZA(),e.TgZ(54,"label",16),e._uU(55," Asynchronous sequential circuits"),e.qZA()(),e.TgZ(56,"div",14)(57,"p-radioButton",17),e.NdJ("ngModelChange",function(f){return n.circuitType=f}),e.qZA(),e.TgZ(58,"label",18),e._uU(59," Synchronous sequential circuits"),e.qZA()()()(),e.TgZ(60,"div",19),e.YNc(61,P,1,0,"app-asynchronous-sequential-circuits",20),e.YNc(62,J,1,0,"app-synchronous-sequential-circuits",20),e.qZA()()()()(),e.TgZ(63,"div",3)(64,"div",4)(65,"div",5)(66,"p",7),e._uU(67," XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX "),e.qZA()()()()()(),e.TgZ(68,"mat-tab",21)(69,"div",2)(70,"div",3)(71,"p-toggleButton",22),e.NdJ("ngModelChange",function(f){return n.checked=f}),e.qZA(),e.TgZ(72,"div",4),e._UZ(73,"img",23),e.TgZ(74,"div",5)(75,"p",7),e._uU(76," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA()()()(),e.TgZ(77,"div",24)(78,"p-toggleButton",22),e.NdJ("ngModelChange",function(f){return n.checked=f}),e.qZA(),e.YNc(79,X,5,0,"div",25),e.YNc(80,w,5,0,"div",25),e.qZA()()(),e.TgZ(81,"mat-tab",26),e._UZ(82,"app-nor-based-flip-flop"),e.qZA(),e.TgZ(83,"mat-tab",27),e._UZ(84,"app-nor-based-jkflip-flop"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngModel",n.fontSize)("matBadge",n.fontSize),e.xp6(2),e.Udp("font-size",n.fontSize,"px"),e.xp6(45),e.Q6J("ngModel",n.circuitType),e.xp6(4),e.Q6J("ngModel",n.circuitType),e.xp6(4),e.Q6J("ngIf","asc"===n.circuitType),e.xp6(1),e.Q6J("ngIf","sc"===n.circuitType),e.xp6(9),e.Q6J("ngModel",n.checked),e.xp6(7),e.Q6J("ngModel",n.checked),e.xp6(1),e.Q6J("ngIf",!n.checked),e.xp6(1),e.Q6J("ngIf",n.checked))},dependencies:[o.O5,d.SP,d.uX,b.CO,g.JJ,g.On,v.iR,p,A,D.N,R.a,N.F,L.U]}),i})(),children:[{path:"AsynchronousSequentialCircuits",loadChildren:()=>Promise.resolve().then(s.bind(s,1689)).then(i=>i.AsynchronousSequentialCircuitsModule)},{path:"SynchronousSequentialCircuits",loadChildren:()=>Promise.resolve().then(s.bind(s,7515)).then(i=>i.SynchronousSequentialCircuitsModule)}]}];let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(z),h.Bz]}),i})();var j=s(1689),Y=s(7515),K=s(1845),G=s(6509);let V=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[o.ez,Q,d.Nh,b.KZ,g.u5,v.JH,Z,U,j.AsynchronousSequentialCircuitsModule,Y.SynchronousSequentialCircuitsModule,K.NorBasedFlipFlopModule,G.NorBasedJKFlipFlopModule]}),i})()},7009:(B,C,s)=>{s.d(C,{a:()=>h});var o=s(4650);let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(b){return new(b||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-synchronous-sequential-circuits"]],decls:2,vars:0,template:function(b,g){1&b&&(o.TgZ(0,"p"),o._uU(1,"synchronous-sequential-circuits works!"),o.qZA())}}),e})()},7515:(B,C,s)=>{s.r(C),s.d(C,{SynchronousSequentialCircuitsModule:()=>v});var o=s(6895),h=s(4364),e=s(7009),d=s(4650);const b=[{path:"",component:e.a}];let g=(()=>{class u{}return u.\u0275fac=function(y){return new(y||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({imports:[h.Bz.forChild(b),h.Bz]}),u})(),v=(()=>{class u{}return u.\u0275fac=function(y){return new(y||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({imports:[o.ez,g]}),u})()},1167:(B,C,s)=>{s.d(C,{CO:()=>c,KZ:()=>y});var o=s(4650),h=s(6895),e=s(1795),d=s(4006);const b=function(r,_){return{"p-button-icon":!0,"p-button-icon-left":r,"p-button-icon-right":_}};function g(r,_){if(1&r&&o._UZ(0,"span",3),2&r){const l=o.oxw();o.Tol(l.checked?l.onIcon:l.offIcon),o.Q6J("ngClass",o.WLB(3,b,"left"===l.iconPos,"right"===l.iconPos))}}const v=function(r,_,l){return{"p-button p-togglebutton p-component":!0,"p-button-icon-only":r,"p-highlight":_,"p-disabled":l}},u={provide:d.JU,useExisting:(0,o.Gpc)(()=>c),multi:!0};let c=(()=>{class r{constructor(l){this.cd=l,this.iconPos="left",this.onChange=new o.vpe,this.checked=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}toggle(l){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:l,checked:this.checked}),this.cd.markForCheck())}onBlur(){this.onModelTouched()}writeValue(l){this.checked=l,this.cd.markForCheck()}registerOnChange(l){this.onModelChange=l}registerOnTouched(l){this.onModelTouched=l}setDisabledState(l){this.disabled=l,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}}return r.\u0275fac=function(l){return new(l||r)(o.Y36(o.sBO))},r.\u0275cmp=o.Xpm({type:r,selectors:[["p-toggleButton"]],hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[o._Bn([u])],decls:4,vars:12,consts:[["role","checkbox","pRipple","",3,"ngClass","ngStyle","click","keydown.enter"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"ngClass"]],template:function(l,p){1&l&&(o.TgZ(0,"div",0),o.NdJ("click",function(T){return p.toggle(T)})("keydown.enter",function(T){return p.toggle(T)}),o.YNc(1,g,1,6,"span",1),o.TgZ(2,"span",2),o._uU(3),o.qZA()()),2&l&&(o.Tol(p.styleClass),o.Q6J("ngClass",o.kEZ(8,v,p.onIcon&&p.offIcon&&!p.hasOnLabel&&!p.hasOffLabel,p.checked,p.disabled))("ngStyle",p.style),o.uIk("tabindex",p.disabled?null:"0")("aria-checked",p.checked),o.xp6(1),o.Q6J("ngIf",p.onIcon||p.offIcon),o.xp6(2),o.Oqu(p.checked?p.hasOnLabel?p.onLabel:"":p.hasOffLabel?p.offLabel:""))},dependencies:[e.H,h.mk,h.PC,h.O5],styles:[".p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}"],changeDetection:0}),r})(),y=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[h.ez,e.T]]}),r})()}}]);