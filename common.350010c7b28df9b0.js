"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[8592],{3842:(Z,h,s)=>{s.d(h,{P:()=>o});var a=s(9646),r=s(4650),l=s(529);let o=(()=>{class t{constructor(n){this.http=n,this.arc="false",this.setting={element:{dynamicDownload:null}},this.http.get("assets/projectDetails.json").subscribe(e=>{this.projectDetails=e,this.projectHeading=this.projectDetails.projectHeading,this.contact=this.projectDetails.contact})}ngOnInit(){}toggleBounce(){this.arc="false"===this.arc?"true":"false"}fakeValidateUserData(){return(0,a.of)({userDate1:1,userData2:2})}dyanmicDownloadByHtmlTag(n){this.setting.element.dynamicDownload||(this.setting.element.dynamicDownload=document.createElement("a"));const e=this.setting.element.dynamicDownload,m=n.fileName.indexOf(".json")>-1?"text/json":"text/plain";e.setAttribute("href",`data:${m};charset=utf-8,${encodeURIComponent(n.text)}`),e.setAttribute("download",n.fileName);const v=new MouseEvent("click");e.dispatchEvent(v)}dynamicDownloadTxt(){this.fakeValidateUserData().subscribe(n=>{this.dyanmicDownloadByHtmlTag({fileName:"My Report",text:JSON.stringify(n)})})}dynamicDownloadJson(){this.fakeValidateUserData().subscribe(n=>{this.dyanmicDownloadByHtmlTag({fileName:"My Report.json",text:JSON.stringify(n)})})}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(l.eN))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-top"]],decls:12,vars:2,consts:[[1,"masthead","d-flex","align-items-center"],[1,"container","px-4","px-lg-5","text-center"],["data-aos","fade-up","data-aos-duration","3000",1,"mb-1"],[1,"projectHead"],[1,"projectContact"],[1,"domain"],[1,"domain-sub"]],template:function(n,e){1&n&&(r.TgZ(0,"header",0)(1,"div",1)(2,"h1",2)(3,"div",3),r._uU(4),r.qZA(),r.TgZ(5,"div",4),r._uU(6),r.qZA(),r._UZ(7,"hr"),r.TgZ(8,"div",5),r._uU(9," simplifyist.in "),r.qZA(),r.TgZ(10,"div",6),r._uU(11," Let's Simplify "),r.qZA()()()()),2&n&&(r.xp6(4),r.hij(" ",e.projectHeading," "),r.xp6(2),r.hij(" ",e.contact," "))},styles:[".ball[_ngcontent-%COMP%]{position:relative;background-color:#000;border-radius:50%;height:25px;width:25px}.masthead[_ngcontent-%COMP%]{min-height:30rem;position:relative;display:table;width:100%;height:auto;padding-top:8rem;padding-bottom:8rem;background-image:url(Simplifyist_home_page.be7091ff7ae854b1.jpg);background-position:center center;background-repeat:no-repeat;background-size:cover}.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .masthead[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:3.5rem;margin:0;padding:0;line-height:1}.masthead[_ngcontent-%COMP%]   .projectHead[_ngcontent-%COMP%]{color:red;text-align:right;margin-top:-25%}.masthead[_ngcontent-%COMP%]   .projectContact[_ngcontent-%COMP%]{color:red;text-align:right}@media (max-width: 480px){.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .masthead[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:2rem;margin:0;padding:0}.masthead[_ngcontent-%COMP%]   .projectHead[_ngcontent-%COMP%]{width:100%;color:red;text-align:right;margin-top:-60%}.masthead[_ngcontent-%COMP%]   .projectContact[_ngcontent-%COMP%]{width:100%;color:red;text-align:right}.domain[_ngcontent-%COMP%]{width:100%;font-size:medium!important;text-align:right}.domain-sub[_ngcontent-%COMP%]{font-size:small!important;text-align:right;font-style:italic}hr[_ngcontent-%COMP%]{display:block;margin:.5em 0 .5em 800px;border-style:inset;border-width:2px}}@media (min-width: 481px) and (max-width: 991px){.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .masthead[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:2rem;margin:0;padding:0}.masthead[_ngcontent-%COMP%]   .projectHead[_ngcontent-%COMP%]{width:100%;color:red;text-align:right;margin-top:-45%}.masthead[_ngcontent-%COMP%]   .projectContact[_ngcontent-%COMP%]{width:100%;color:red;text-align:right}.domain[_ngcontent-%COMP%]{width:100%;font-size:medium!important;text-align:right}.domain-sub[_ngcontent-%COMP%]{font-size:small!important;text-align:right;font-style:italic}hr[_ngcontent-%COMP%]{display:block;margin:.5em 0 .5em 800px;border-style:inset;border-width:2px}}@media (min-width: 992px){.masthead[_ngcontent-%COMP%]{height:100vh}.domain[_ngcontent-%COMP%]{font-size:1.5rem;text-align:right}.domain-sub[_ngcontent-%COMP%]{font-size:1rem;text-align:right;font-style:italic}hr[_ngcontent-%COMP%]{display:block;margin:.5em 0 .5em 800px;border-style:inset;border-width:2px}}"]}),t})()},2953:(Z,h,s)=>{s.r(h),s.d(h,{TopModule:()=>n});var a=s(6895),r=s(4364),l=s(3842),o=s(4650);const t=[{path:"",component:l.P}];let i=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[r.Bz.forChild(t),r.Bz]}),e})(),n=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.ez,i]}),e})()},5272:(Z,h,s)=>{s.d(h,{I:()=>r});var a=s(4650);let r=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-trainer"]],decls:2,vars:0,consts:[[1,"d-flex","align-items-center",2,"width","100vh"],["src","https://t.me/sukantahuiphotography/2","alt","",1,"img-fluid"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"img",1),a.qZA())}}),l})()},2122:(Z,h,s)=>{s.r(h),s.d(h,{TrainerModule:()=>n});var a=s(6895),r=s(4364),l=s(5272),o=s(4650);const t=[{path:"",component:l.I}];let i=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[r.Bz.forChild(t),r.Bz]}),e})(),n=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.ez,i]}),e})()},5932:(Z,h,s)=>{s.r(h),s.d(h,{MsexcelBasicLookupFunctionModule:()=>f});var a=s(3608),r=s(6895),l=s(4364),o=s(805),t=s(4650),i=s(2174),n=s(2453),e=s(5108);function m(u,T){if(1&u&&(t.TgZ(0,"div",6)(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()),2&u){const _=T.$implicit;t.xp6(2),t.Oqu(_.summary),t.xp6(2),t.Oqu(_.detail)}}function v(u,T){1&u&&(t.TgZ(0,"div",7),t._uU(1,"VLOOKUP"),t.qZA())}function y(u,T){1&u&&(t.TgZ(0,"div",8)(1,"p-divider",9)(2,"div",10)(3,"h2"),t._uU(4,"Summary"),t.qZA()()(),t.TgZ(5,"p",11),t._uU(6," VLOOKUP is an Excel function to ook up data in a table organized vertically. VLOOKUP supports approximate and exact matching, and wildcards (* ?) for partial matches. Lookup values must appear in the first column of the table passed into VLOOKUP. "),t.qZA(),t.TgZ(7,"p-divider",9)(8,"div",10)(9,"h2"),t._uU(10,"Purpose"),t.qZA()()(),t.TgZ(11,"p",11),t._uU(12,"Lookup a value in a table by matching on the first column"),t.qZA(),t.TgZ(13,"p-divider",9)(14,"div",10)(15,"h2"),t._uU(16,"Return value "),t.qZA()()(),t.TgZ(17,"p",11),t._uU(18,"The matched value from a table."),t.qZA(),t.TgZ(19,"p-divider",9)(20,"div",10)(21,"h2"),t._uU(22,"Syntax"),t.qZA()()(),t.TgZ(23,"h3",12),t._uU(24," = "),t.TgZ(25,"span",13),t._uU(26,"VLOOKUP"),t.qZA(),t.TgZ(27,"span",14),t._uU(28,"("),t.qZA(),t.TgZ(29,"span",15),t._uU(30,"lookup_value"),t.qZA(),t._uU(31,", "),t.TgZ(32,"span",15),t._uU(33,"table_array"),t.qZA(),t._uU(34,", "),t.TgZ(35,"span",15),t._uU(36,"column_index_num"),t.qZA(),t._uU(37,", [range_lookup] "),t.TgZ(38,"span",14),t._uU(39,")"),t.qZA()(),t.TgZ(40,"p-divider",9)(41,"div",10)(42,"h2"),t._uU(43,"Arguments "),t.qZA()()(),t.TgZ(44,"dl",11)(45,"dt"),t._uU(46,"lookup_value "),t.qZA(),t.TgZ(47,"dd"),t._uU(48,"- The value to look for in the first column of a table."),t.qZA(),t.TgZ(49,"dt"),t._uU(50,"table_array "),t.qZA(),t.TgZ(51,"dd"),t._uU(52,"- The table from which to retrieve a value."),t.qZA(),t.TgZ(53,"dt"),t._uU(54,"column_index_num "),t.qZA(),t.TgZ(55,"dd"),t._uU(56,"- The column in the table from which to retrieve a value."),t.qZA(),t.TgZ(57,"dt"),t._uU(58,"range_lookup"),t.qZA(),t.TgZ(59,"dd"),t._uU(60,"-[optional] TRUE = approximate match (default). FALSE = exact match."),t.qZA()()())}function C(u,T){1&u&&(t.TgZ(0,"div",7),t._uU(1,"MATCH"),t.qZA())}function x(u,T){1&u&&(t.TgZ(0,"div",8)(1,"p-divider",9)(2,"div",10)(3,"h2"),t._uU(4,"Summary"),t.qZA()()(),t.TgZ(5,"p",11),t._uU(6," MATCH is an Excel function used to locate the position of a lookup value in a row, column, or table. MATCH supports approximate and exact matching, and wildcards (* ?) for partial matches. Often, MATCH is combined with the INDEX function to retrieve a value at a matched position. "),t.qZA(),t.TgZ(7,"p-divider",9)(8,"div",10)(9,"h2"),t._uU(10,"Purpose"),t.qZA()()(),t.TgZ(11,"p",11),t._uU(12,"Get the position of an item in an array"),t.qZA(),t.TgZ(13,"p-divider",9)(14,"div",10)(15,"h2"),t._uU(16,"Return value "),t.qZA()()(),t.TgZ(17,"p",11),t._uU(18,"A number representing a position in lookup_array."),t.qZA(),t.TgZ(19,"p-divider",9)(20,"div",10)(21,"h2"),t._uU(22,"Syntax"),t.qZA()()(),t.TgZ(23,"h3",12),t._uU(24," = "),t.TgZ(25,"span",13),t._uU(26,"MATCH"),t.qZA(),t.TgZ(27,"span",14),t._uU(28,"("),t.qZA(),t.TgZ(29,"span",15),t._uU(30,"lookup_value"),t.qZA(),t._uU(31,", "),t.TgZ(32,"span",15),t._uU(33,"lookup_array"),t.qZA(),t._uU(34,", [match_lookup] "),t.TgZ(35,"span",14),t._uU(36,")"),t.qZA()(),t.TgZ(37,"p-divider",9)(38,"div",10)(39,"h2"),t._uU(40,"Arguments "),t.qZA()()(),t.TgZ(41,"dl",11)(42,"dt"),t._uU(43,"lookup_value "),t.qZA(),t.TgZ(44,"dd"),t._uU(45,"- The value to match in lookup_array."),t.qZA(),t.TgZ(46,"dt"),t._uU(47,"lookup_array "),t.qZA(),t.TgZ(48,"dd"),t._uU(49,"- A range of cells or an array reference."),t.qZA(),t.TgZ(50,"dt"),t._uU(51,"match_type - "),t.qZA(),t.TgZ(52,"dd"),t._uU(53,"- The column in the table from which to retrieve a value."),t.qZA(),t.TgZ(54,"dt"),t._uU(55,"range_lookup"),t.qZA(),t.TgZ(56,"dd"),t._uU(57,"-[optional] TRUE = exact or next smallest (default), 0 = exact match, -1 = exact or next largest"),t.qZA()()())}function b(u,T){1&u&&(t.TgZ(0,"div",7),t._uU(1,"INDEX"),t.qZA())}function A(u,T){1&u&&(t.TgZ(0,"div",8)(1,"p-divider",9)(2,"div",10)(3,"h2"),t._uU(4,"Summary"),t.qZA()()(),t.TgZ(5,"p",11),t._uU(6," The Excel "),t.TgZ(7,"span",16),t._uU(8,"INDEX"),t.qZA(),t._uU(9," function returns the value at a given location in a range or array. You can use INDEX to retrieve individual values, or entire rows and columns. The MATCH function is often used together with INDEX to provide row and column numbers. "),t.qZA(),t.TgZ(10,"p-divider",9)(11,"div",10)(12,"h2"),t._uU(13,"Purpose"),t.qZA()()(),t.TgZ(14,"p",11),t._uU(15,"Get a value in a list or table based on location"),t.qZA(),t.TgZ(16,"p-divider",9)(17,"div",10)(18,"h2"),t._uU(19,"Return value "),t.qZA()()(),t.TgZ(20,"p",11),t._uU(21,"The value at a given location."),t.qZA(),t.TgZ(22,"p-divider",9)(23,"div",10)(24,"h2"),t._uU(25,"Syntax"),t.qZA()()(),t.TgZ(26,"h3",12),t._uU(27," = "),t.TgZ(28,"span",13),t._uU(29,"INDEX "),t.qZA(),t.TgZ(30,"span",14),t._uU(31,"("),t.qZA(),t.TgZ(32,"span",17),t._uU(33,"array"),t.qZA(),t._uU(34,", "),t.TgZ(35,"span",18),t._uU(36,"row_num"),t.qZA(),t._uU(37,", "),t.TgZ(38,"span",19),t._uU(39,"[col_num],"),t.qZA(),t.TgZ(40,"span",20),t._uU(41," [area_num]"),t.qZA(),t.TgZ(42,"span",14),t._uU(43,")"),t.qZA()(),t.TgZ(44,"p-divider",9)(45,"div",10)(46,"h2"),t._uU(47,"Arguments "),t.qZA()()(),t.TgZ(48,"dl",11)(49,"dt"),t._uU(50,"array "),t.qZA(),t.TgZ(51,"dd"),t._uU(52,"- A range of cells, or an array constant."),t.qZA(),t.TgZ(53,"dt"),t._uU(54,"row_num "),t.qZA(),t.TgZ(55,"dd"),t._uU(56,"- The row position in the reference or array."),t.qZA(),t.TgZ(57,"dt"),t._uU(58,"col_num - "),t.qZA(),t.TgZ(59,"dd"),t._uU(60,"- [optional] The column position in the reference or array."),t.qZA(),t.TgZ(61,"dt"),t._uU(62,"area_num "),t.qZA(),t.TgZ(63,"dd"),t._uU(64,"-[optional] The range in reference that should be used."),t.qZA()()())}const M=[{path:"",component:(()=>{class u{constructor(_){this.messageService=_}ngOnInit(){}onTabOpen(_){this.messageService.add({key:"myKey1",severity:"info",summary:"VENV Explaining",detail:"Function: "+["VLOOKUP","MATCH","INDEX"][_.index]})}onReject(){this.messageService.clear()}}return u.\u0275fac=function(_){return new(_||u)(t.Y36(o.ez))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-msexcel-basic-lookup-function"]],features:[t._Bn([o.ez])],decls:13,vars:1,consts:[["position","top-center","key","myKey1",3,"baseZIndex","onClose"],["pTemplate","message"],["data-aos","fade-right"],[3,"onOpen"],["pTemplate","header"],["pTemplate","content"],[2,"text-align","center"],[2,"color","#3804a0"],[1,"text-body"],["align","left"],[1,"inline-flex","align-items-center"],[1,"pl-4"],[1,"function-prototype","pl-4"],[1,"function-name"],[1,"bracket"],[1,"required-parameter"],["pTooltip","=INDEX (array, row_num, [col_num], [area_num])",2,"color","blue"],["pTooltip"," array=> A range of cells, or an array constant.",1,"required-parameter"],["pTooltip"," row_num=> The row position in the reference or array.",1,"required-parameter"],["pTooltip"," col_num=> [optional] The column position in the reference or array."],["pTooltip"," area_num=> [optional] The range in reference that should be used."]],template:function(_,F){1&_&&(t.TgZ(0,"p-toast",0),t.NdJ("onClose",function(){return F.onReject()}),t.YNc(1,m,5,2,"ng-template",1),t.qZA(),t.TgZ(2,"div",2)(3,"p-accordion",3),t.NdJ("onOpen",function(w){return F.onTabOpen(w)}),t.TgZ(4,"p-accordionTab"),t.YNc(5,v,2,0,"ng-template",4),t.YNc(6,y,61,0,"ng-template",5),t.qZA(),t.TgZ(7,"p-accordionTab"),t.YNc(8,C,2,0,"ng-template",4),t.YNc(9,x,58,0,"ng-template",5),t.qZA(),t.TgZ(10,"p-accordionTab"),t.YNc(11,b,2,0,"ng-template",4),t.YNc(12,A,65,0,"ng-template",5),t.qZA()()()),2&_&&t.Q6J("baseZIndex",5e3)},dependencies:[i.UQ,i.US,o.jx,n.FN,e.i,a.u],styles:[".function-prototype[_ngcontent-%COMP%]{color:gray}.required-parameter[_ngcontent-%COMP%]{color:#015987}.function-name[_ngcontent-%COMP%]{color:#8a2be2}.bracket[_ngcontent-%COMP%]{color:#191970}.accordion-body[_ngcontent-%COMP%]{background-color:#e9ecef;padding:5px;max-width:30vw;border-radius:20px}.p-accordion[_ngcontent-%COMP%]   .p-accordion-header[_ngcontent-%COMP%]   .p-accordion-header-link[_ngcontent-%COMP%]{padding:1rem;border:1px solid #dee2e6;color:#495057;background:#13497e!important;font-weight:600;border-radius:3px;transition:box-shadow .2s}.text-body[_ngcontent-%COMP%]{background-image:url(/assets/img/eduvenv.png)}"]}),u})()}];let g=(()=>{class u{}return u.\u0275fac=function(_){return new(_||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[l.Bz.forChild(M),l.Bz]}),u})();var p=s(4247),c=s(2946),d=s(5593);let f=(()=>{class u{}return u.\u0275fac=function(_){return new(_||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[r.ez,g,i.fx,n.EV,d.hJ,c.L,e.x,p.d,a.z]}),u})()},4238:(Z,h,s)=>{s.r(h),s.d(h,{CourseContentExcelRoutingModule:()=>i});var a=s(4364),r=s(4650),l=s(2174);const t=[{path:"",component:(()=>{class n{constructor(){this.activeState=[!0,!1,!1]}ngOnInit(){}}return n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-course-content-excel"]],decls:11,vars:1,consts:[["data-aos","fade-right"],["header","Header I",3,"selected"],["header","Header II"],["header","Header III"]],template:function(m,v){1&m&&(r.TgZ(0,"div",0)(1,"p-accordion")(2,"p-accordionTab",1)(3,"p"),r._uU(4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.qZA()(),r.TgZ(5,"p-accordionTab",2)(6,"p"),r._uU(7,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."),r.qZA()(),r.TgZ(8,"p-accordionTab",3)(9,"p"),r._uU(10,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."),r.qZA()()()()),2&m&&(r.xp6(2),r.Q6J("selected",!0))},dependencies:[l.UQ,l.US],styles:[".ui-accordion[_ngcontent-%COMP%]   .ui-accordion-content[_ngcontent-%COMP%]{background:#de8282!important}"]}),n})()}];let i=(()=>{class n{}return n.\u0275fac=function(m){return new(m||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[a.Bz.forChild(t),a.Bz]}),n})()},8058:(Z,h,s)=>{s.r(h),s.d(h,{JavaInitialCodingModule:()=>g});var a=s(6895),r=s(4364),l=s(805),o=s(4650),t=s(2174),i=s(2453),n=s(5108);function e(p,c){if(1&p&&(o.TgZ(0,"div",5)(1,"h3"),o._uU(2),o.qZA(),o.TgZ(3,"p"),o._uU(4),o.qZA()()),2&p){const d=c.$implicit;o.xp6(2),o.Oqu(d.summary),o.xp6(2),o.Oqu(d.detail)}}function m(p,c){1&p&&(o.TgZ(0,"div",6),o._uU(1,"Introduction"),o.qZA())}function v(p,c){if(1&p&&(o.TgZ(0,"div",7)(1,"p-divider",8)(2,"div",9)(3,"h2"),o._uU(4,"Subtraction of two user input value"),o.qZA()()(),o.TgZ(5,"div",10)(6,"pre"),o._uU(7),o.qZA()(),o.TgZ(8,"p")(9,"a",11),o._uU(10,"example"),o.qZA()()()),2&p){const d=o.oxw();o.xp6(7),o.Oqu(d.SubtractionCode)}}const C=[{path:"",component:(()=>{class p{constructor(d){this.messageService=d,this.SubtractionCode='\n  import java.util.Scanner;\n  public class FirstJavaProgram{\n    public static void main(String[] args){\n        \n        Scanner sn ;\n        sn = new Scanner(System.in);\n        System.out.println("Enter a number: ");\n        int x = sn.nextInt();\n        System.out.println("Enter another number");\n        int y = sn.nextInt();\n        int z = x-y;\n        System.out.println("The answer is " + z);\n        sn.close();\n    }\n  }\n  '}ngOnInit(){}onTabOpen(d){this.messageService.add({key:"myKey1",severity:"info",summary:"VENV Explaining",detail:"Function: "+["DGET Function","DSUM Function","DAVERAGE Function","DCOUNT Function"][d.index]})}onReject(){this.messageService.clear()}}return p.\u0275fac=function(d){return new(d||p)(o.Y36(l.ez))},p.\u0275cmp=o.Xpm({type:p,selectors:[["app-java-initial-coding"]],features:[o._Bn([l.ez])],decls:7,vars:1,consts:[["position","top-center","key","myKey1",3,"baseZIndex","onClose"],["pTemplate","message"],["data-aos","fade-right"],["pTemplate","header"],["pTemplate","content"],[2,"text-align","center"],[2,"color","#3804a0"],[1,"accordion-body"],["align","left"],[1,"inline-flex","align-items-center"],[1,"code-box"],["target","_blank","href","https://github.com/sukantahui/java_for_students/blob/6acac32c3f24902ac243b0609543a7c04e79f890/fibonacciseries/FibonacciSeries.java"]],template:function(d,f){1&d&&(o.TgZ(0,"p-toast",0),o.NdJ("onClose",function(){return f.onReject()}),o.YNc(1,e,5,2,"ng-template",1),o.qZA(),o.TgZ(2,"div",2)(3,"p-accordion")(4,"p-accordionTab"),o.YNc(5,m,2,0,"ng-template",3),o.YNc(6,v,11,1,"ng-template",4),o.qZA()()()),2&d&&o.Q6J("baseZIndex",5e3)},dependencies:[t.UQ,t.US,l.jx,i.FN,n.i],styles:[".code-box[_ngcontent-%COMP%]{background-color:#eae8e8;padding:5px;border:2px solid rgb(195,194,194);border-radius:10px}"]}),p})()}];let x=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[r.Bz.forChild(C),r.Bz]}),p})();var b=s(5593),A=s(2946),U=s(4247),M=s(9247);let g=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[a.ez,x,t.fx,i.EV,b.hJ,A.L,n.x,U.d,M.z8]}),p})()},5866:(Z,h,s)=>{s.d(h,{F:()=>r});var a=s(4650);let r=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-nor-based-flip-flop"]],decls:29,vars:0,consts:[[1,"d-flex","flex-row","bd-highlight","mb-3"],["data-aos","fade-left","data-aos-duration","4000",1,"card",2,"background-color","#d9d8d8"],["src","assets/tutorial/flipflop/nor-based-flip-flop.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"],[1,"card-body"],[1,"card-text","text-black"],["src","assets/tutorial/flipflop/nor-based-flip-flop-table.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"],[2,"background-color","#0081c2","align-self","center"],["src","assets/tutorial/flipflop/nor-based-clocked-flip-flop.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0)(1,"div")(2,"div",1),a._UZ(3,"img",2),a.TgZ(4,"div",3)(5,"p",4),a._uU(6," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),a.qZA()()()(),a.TgZ(7,"div")(8,"div",1),a._UZ(9,"img",5),a.TgZ(10,"div",3)(11,"p",4),a._uU(12," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),a.qZA()()()()(),a._UZ(13,"hr"),a.TgZ(14,"div",0)(15,"div")(16,"div",1)(17,"h1",6),a._uU(18,"Nor Based Clocked Flip-Flop"),a.qZA(),a._UZ(19,"img",7),a.TgZ(20,"div",3)(21,"p",4),a._uU(22," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),a.qZA()()()(),a.TgZ(23,"div")(24,"div",1),a._UZ(25,"img",5),a.TgZ(26,"div",3)(27,"p",4),a._uU(28," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),a.qZA()()()()())},styles:[".filter-black[_ngcontent-%COMP%]{filter:brightness(20%)}@keyframes haunted{0%{filter:brightness(20%)}48%{filter:brightness(20%)}50%{filter:sepia(1) contrast(2) brightness(200%)}96%{filter:brightness(400%)}}"]}),l})()},1845:(Z,h,s)=>{s.r(h),s.d(h,{NorBasedFlipFlopModule:()=>n});var a=s(6895),r=s(4364),l=s(5866),o=s(4650);const t=[{path:"",component:l.F}];let i=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[r.Bz.forChild(t),r.Bz]}),e})(),n=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.ez,i]}),e})()},4148:(Z,h,s)=>{s.d(h,{U:()=>r});var a=s(4650);let r=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-nor-based-jkflip-flop"]],decls:13,vars:0,consts:[[1,"d-flex","flex-row","bd-highlight","mb-3"],["data-aos","fade-left","data-aos-duration","4000",1,"card",2,"background-color","#d9d8d8"],["src","assets/tutorial/flipflop/nor-based-clocked-jk-flip-flop.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"],[1,"card-body"],[1,"card-text","text-black"],["src","assets/tutorial/flipflop/nor-based-clocked-jk-flip-flop-table.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0)(1,"div")(2,"div",1),a._UZ(3,"img",2),a.TgZ(4,"div",3)(5,"p",4),a._uU(6," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),a.qZA()()()(),a.TgZ(7,"div")(8,"div",1),a._UZ(9,"img",5),a.TgZ(10,"div",3)(11,"p",4),a._uU(12," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),a.qZA()()()()())},styles:[".filter-black[_ngcontent-%COMP%]{filter:brightness(20%)}"]}),l})()},6509:(Z,h,s)=>{s.r(h),s.d(h,{NorBasedJKFlipFlopModule:()=>n});var a=s(6895),r=s(4364),l=s(4148),o=s(4650);const t=[{path:"",component:l.U}];let i=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[r.Bz.forChild(t),r.Bz]}),e})(),n=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.ez,i]}),e})()},3561:(Z,h)=>{var a=function(){function r(){this._dataLength=0,this._bufferLength=0,this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}return r.hashStr=function(l,o){return void 0===o&&(o=!1),this.onePassHasher.start().appendStr(l).end(o)},r.hashAsciiStr=function(l,o){return void 0===o&&(o=!1),this.onePassHasher.start().appendAsciiStr(l).end(o)},r._hex=function(l){var i,n,e,m,o=r.hexChars,t=r.hexOut;for(m=0;m<4;m+=1)for(n=8*m,i=l[m],e=0;e<8;e+=2)t[n+1+e]=o.charAt(15&i),t[n+0+e]=o.charAt(15&(i>>>=4)),i>>>=4;return t.join("")},r._md5cycle=function(l,o){var t=l[0],i=l[1],n=l[2],e=l[3];i=((i+=((n=((n+=((e=((e+=((t=((t+=(i&n|~i&e)+o[0]-680876936|0)<<7|t>>>25)+i|0)&i|~t&n)+o[1]-389564586|0)<<12|e>>>20)+t|0)&t|~e&i)+o[2]+606105819|0)<<17|n>>>15)+e|0)&e|~n&t)+o[3]-1044525330|0)<<22|i>>>10)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i&n|~i&e)+o[4]-176418897|0)<<7|t>>>25)+i|0)&i|~t&n)+o[5]+1200080426|0)<<12|e>>>20)+t|0)&t|~e&i)+o[6]-1473231341|0)<<17|n>>>15)+e|0)&e|~n&t)+o[7]-45705983|0)<<22|i>>>10)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i&n|~i&e)+o[8]+1770035416|0)<<7|t>>>25)+i|0)&i|~t&n)+o[9]-1958414417|0)<<12|e>>>20)+t|0)&t|~e&i)+o[10]-42063|0)<<17|n>>>15)+e|0)&e|~n&t)+o[11]-1990404162|0)<<22|i>>>10)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i&n|~i&e)+o[12]+1804603682|0)<<7|t>>>25)+i|0)&i|~t&n)+o[13]-40341101|0)<<12|e>>>20)+t|0)&t|~e&i)+o[14]-1502002290|0)<<17|n>>>15)+e|0)&e|~n&t)+o[15]+1236535329|0)<<22|i>>>10)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i&e|n&~e)+o[1]-165796510|0)<<5|t>>>27)+i|0)&n|i&~n)+o[6]-1069501632|0)<<9|e>>>23)+t|0)&i|t&~i)+o[11]+643717713|0)<<14|n>>>18)+e|0)&t|e&~t)+o[0]-373897302|0)<<20|i>>>12)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i&e|n&~e)+o[5]-701558691|0)<<5|t>>>27)+i|0)&n|i&~n)+o[10]+38016083|0)<<9|e>>>23)+t|0)&i|t&~i)+o[15]-660478335|0)<<14|n>>>18)+e|0)&t|e&~t)+o[4]-405537848|0)<<20|i>>>12)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i&e|n&~e)+o[9]+568446438|0)<<5|t>>>27)+i|0)&n|i&~n)+o[14]-1019803690|0)<<9|e>>>23)+t|0)&i|t&~i)+o[3]-187363961|0)<<14|n>>>18)+e|0)&t|e&~t)+o[8]+1163531501|0)<<20|i>>>12)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i&e|n&~e)+o[13]-1444681467|0)<<5|t>>>27)+i|0)&n|i&~n)+o[2]-51403784|0)<<9|e>>>23)+t|0)&i|t&~i)+o[7]+1735328473|0)<<14|n>>>18)+e|0)&t|e&~t)+o[12]-1926607734|0)<<20|i>>>12)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i^n^e)+o[5]-378558|0)<<4|t>>>28)+i|0)^i^n)+o[8]-2022574463|0)<<11|e>>>21)+t|0)^t^i)+o[11]+1839030562|0)<<16|n>>>16)+e|0)^e^t)+o[14]-35309556|0)<<23|i>>>9)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i^n^e)+o[1]-1530992060|0)<<4|t>>>28)+i|0)^i^n)+o[4]+1272893353|0)<<11|e>>>21)+t|0)^t^i)+o[7]-155497632|0)<<16|n>>>16)+e|0)^e^t)+o[10]-1094730640|0)<<23|i>>>9)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i^n^e)+o[13]+681279174|0)<<4|t>>>28)+i|0)^i^n)+o[0]-358537222|0)<<11|e>>>21)+t|0)^t^i)+o[3]-722521979|0)<<16|n>>>16)+e|0)^e^t)+o[6]+76029189|0)<<23|i>>>9)+n|0,i=((i+=((n=((n+=((e=((e+=((t=((t+=(i^n^e)+o[9]-640364487|0)<<4|t>>>28)+i|0)^i^n)+o[12]-421815835|0)<<11|e>>>21)+t|0)^t^i)+o[15]+530742520|0)<<16|n>>>16)+e|0)^e^t)+o[2]-995338651|0)<<23|i>>>9)+n|0,i=((i+=((e=((e+=(i^((t=((t+=(n^(i|~e))+o[0]-198630844|0)<<6|t>>>26)+i|0)|~n))+o[7]+1126891415|0)<<10|e>>>22)+t|0)^((n=((n+=(t^(e|~i))+o[14]-1416354905|0)<<15|n>>>17)+e|0)|~t))+o[5]-57434055|0)<<21|i>>>11)+n|0,i=((i+=((e=((e+=(i^((t=((t+=(n^(i|~e))+o[12]+1700485571|0)<<6|t>>>26)+i|0)|~n))+o[3]-1894986606|0)<<10|e>>>22)+t|0)^((n=((n+=(t^(e|~i))+o[10]-1051523|0)<<15|n>>>17)+e|0)|~t))+o[1]-2054922799|0)<<21|i>>>11)+n|0,i=((i+=((e=((e+=(i^((t=((t+=(n^(i|~e))+o[8]+1873313359|0)<<6|t>>>26)+i|0)|~n))+o[15]-30611744|0)<<10|e>>>22)+t|0)^((n=((n+=(t^(e|~i))+o[6]-1560198380|0)<<15|n>>>17)+e|0)|~t))+o[13]+1309151649|0)<<21|i>>>11)+n|0,i=((i+=((e=((e+=(i^((t=((t+=(n^(i|~e))+o[4]-145523070|0)<<6|t>>>26)+i|0)|~n))+o[11]-1120210379|0)<<10|e>>>22)+t|0)^((n=((n+=(t^(e|~i))+o[2]+718787259|0)<<15|n>>>17)+e|0)|~t))+o[9]-343485551|0)<<21|i>>>11)+n|0,l[0]=t+l[0]|0,l[1]=i+l[1]|0,l[2]=n+l[2]|0,l[3]=e+l[3]|0},r.prototype.start=function(){return this._dataLength=0,this._bufferLength=0,this._state.set(r.stateIdentity),this},r.prototype.appendStr=function(l){var n,e,o=this._buffer8,t=this._buffer32,i=this._bufferLength;for(e=0;e<l.length;e+=1){if((n=l.charCodeAt(e))<128)o[i++]=n;else if(n<2048)o[i++]=192+(n>>>6),o[i++]=63&n|128;else if(n<55296||n>56319)o[i++]=224+(n>>>12),o[i++]=n>>>6&63|128,o[i++]=63&n|128;else{if((n=1024*(n-55296)+(l.charCodeAt(++e)-56320)+65536)>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");o[i++]=240+(n>>>18),o[i++]=n>>>12&63|128,o[i++]=n>>>6&63|128,o[i++]=63&n|128}i>=64&&(this._dataLength+=64,r._md5cycle(this._state,t),i-=64,t[0]=t[16])}return this._bufferLength=i,this},r.prototype.appendAsciiStr=function(l){for(var n,o=this._buffer8,t=this._buffer32,i=this._bufferLength,e=0;;){for(n=Math.min(l.length-e,64-i);n--;)o[i++]=l.charCodeAt(e++);if(i<64)break;this._dataLength+=64,r._md5cycle(this._state,t),i=0}return this._bufferLength=i,this},r.prototype.appendByteArray=function(l){for(var n,o=this._buffer8,t=this._buffer32,i=this._bufferLength,e=0;;){for(n=Math.min(l.length-e,64-i);n--;)o[i++]=l[e++];if(i<64)break;this._dataLength+=64,r._md5cycle(this._state,t),i=0}return this._bufferLength=i,this},r.prototype.getState=function(){var l=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[l[0],l[1],l[2],l[3]]}},r.prototype.setState=function(l){var n,o=l.buffer,t=l.state,i=this._state;for(this._dataLength=l.length,this._bufferLength=l.buflen,i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],n=0;n<o.length;n+=1)this._buffer8[n]=o.charCodeAt(n)},r.prototype.end=function(l){void 0===l&&(l=!1);var o=this._bufferLength,t=this._buffer8,i=this._buffer32,n=1+(o>>2);this._dataLength+=o;var e=8*this._dataLength;if(t[o]=128,t[o+1]=t[o+2]=t[o+3]=0,i.set(r.buffer32Identity.subarray(n),n),o>55&&(r._md5cycle(this._state,i),i.set(r.buffer32Identity)),e<=4294967295)i[14]=e;else{var m=e.toString(16).match(/(.*?)(.{0,8})$/);if(null===m)return;var v=parseInt(m[2],16),y=parseInt(m[1],16)||0;i[14]=v,i[15]=y}return r._md5cycle(this._state,i),l?this._state:r._hex(this._state)},r.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),r.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),r.hexChars="0123456789abcdef",r.hexOut=[],r.onePassHasher=new r,r}();if(h.V=a,"5d41402abc4b2a76b9719d911017c592"!==a.hashStr("hello"))throw new Error("Md5 self test failed.")},5054:(Z,h,s)=>{s.d(h,{$:()=>M,E:()=>U});var a=s(4650),r=s(6895),l=s(805),o=s(7340),t=s(9592),i=s(982);const n=["mask"];function e(g,p){1&g&&a.GkF(0)}function m(g,p){if(1&g&&(a.ynx(0),a.YNc(1,e,1,0,"ng-container",7),a.BQk()),2&g){const c=a.oxw(2);a.xp6(1),a.Q6J("ngTemplateOutlet",c.indicatorTemplate)}}function v(g,p){1&g&&a._UZ(0,"i",8)}function y(g,p){if(1&g){const c=a.EpF();a.TgZ(0,"div",4),a.NdJ("click",function(){a.CHM(c);const f=a.oxw();return a.KtG(f.onImageClick())}),a.YNc(1,m,2,1,"ng-container",5),a.YNc(2,v,1,0,"ng-template",null,6,a.W1O),a.qZA()}if(2&g){const c=a.MAs(3),d=a.oxw();a.xp6(1),a.Q6J("ngIf",d.indicatorTemplate)("ngIfElse",c)}}const C=function(g,p){return{showTransitionParams:g,hideTransitionParams:p}},x=function(g){return{value:"visible",params:g}};function b(g,p){if(1&g){const c=a.EpF();a.TgZ(0,"div"),a.NdJ("@animation.start",function(f){a.CHM(c);const u=a.oxw(2);return a.KtG(u.onAnimationStart(f))})("@animation.done",function(f){a.CHM(c);const u=a.oxw(2);return a.KtG(u.onAnimationEnd(f))}),a.TgZ(1,"img",21),a.NdJ("click",function(){a.CHM(c);const f=a.oxw(2);return a.KtG(f.onPreviewImageClick())}),a.qZA()()}if(2&g){const c=a.oxw(2);a.Q6J("@animation",a.VKq(6,x,a.WLB(3,C,c.showTransitionOptions,c.hideTransitionOptions))),a.xp6(1),a.Q6J("ngStyle",c.imagePreviewStyle()),a.uIk("src",c.src,a.LSH)}}function A(g,p){if(1&g){const c=a.EpF();a.TgZ(0,"div",9,10),a.NdJ("click",function(){a.CHM(c);const f=a.oxw();return a.KtG(f.onMaskClick())}),a.TgZ(2,"div",11)(3,"button",12),a.NdJ("click",function(){a.CHM(c);const f=a.oxw();return a.KtG(f.rotateRight())}),a._UZ(4,"i",13),a.qZA(),a.TgZ(5,"button",12),a.NdJ("click",function(){a.CHM(c);const f=a.oxw();return a.KtG(f.rotateLeft())}),a._UZ(6,"i",14),a.qZA(),a.TgZ(7,"button",15),a.NdJ("click",function(){a.CHM(c);const f=a.oxw();return a.KtG(f.zoomOut())}),a._UZ(8,"i",16),a.qZA(),a.TgZ(9,"button",15),a.NdJ("click",function(){a.CHM(c);const f=a.oxw();return a.KtG(f.zoomIn())}),a._UZ(10,"i",17),a.qZA(),a.TgZ(11,"button",18),a._UZ(12,"i",19),a.qZA()(),a.YNc(13,b,2,8,"div",20),a.qZA()}if(2&g){const c=a.oxw();a.xp6(7),a.Q6J("disabled",c.zoomDisabled()),a.xp6(2),a.Q6J("disabled",c.zoomDisabled()),a.xp6(4),a.Q6J("ngIf",c.previewVisible)}}let U=(()=>{class g{constructor(c,d){this.config=c,this.cd=d,this.preview=!1,this.showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new a.vpe,this.onHide=new a.vpe,this.maskVisible=!1,this.previewVisible=!1,this.rotate=0,this.scale=1,this.previewClick=!1}ngAfterContentInit(){this.templates.forEach(c=>{c.getType(),this.indicatorTemplate=c.template})}onImageClick(){this.preview&&(this.maskVisible=!0,this.previewVisible=!0)}onMaskClick(){this.previewClick||(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1}onPreviewImageClick(){this.previewClick=!0}rotateRight(){this.rotate+=90,this.previewClick=!0}rotateLeft(){this.rotate-=90,this.previewClick=!0}zoomIn(){this.scale=this.scale+.1,this.previewClick=!0}zoomOut(){this.scale=this.scale-.1,this.previewClick=!0}zoomDisabled(){return this.scale<=.5||this.scale>=1.5}onAnimationStart(c){switch(c.toState){case"visible":this.container=c.element,this.wrapper=this.container.parentElement,this.appendContainer(),this.moveOnTop();break;case"void":t.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(c){switch(c.toState){case"void":i.P9.clear(this.container),this.maskVisible=!1,this.container=null,this.wrapper=null,this.cd.markForCheck(),this.onHide.emit({});break;case"visible":this.onShow.emit({})}}moveOnTop(){i.P9.set("modal",this.container,this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.wrapper):t.p.appendChild(this.wrapper,this.appendTo))}imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}}containerClass(){return{"p-image p-component":!0,"p-image-preview-container":this.preview}}}return g.\u0275fac=function(c){return new(c||g)(a.Y36(l.b4),a.Y36(a.sBO))},g.\u0275cmp=a.Xpm({type:g,selectors:[["p-image"]],contentQueries:function(c,d,f){if(1&c&&a.Suo(f,l.jx,4),2&c){let u;a.iGM(u=a.CRH())&&(d.templates=u)}},viewQuery:function(c,d){if(1&c&&a.Gf(n,5),2&c){let f;a.iGM(f=a.CRH())&&(d.mask=f.first)}},hostAttrs:[1,"p-element"],inputs:{imageClass:"imageClass",imageStyle:"imageStyle",styleClass:"styleClass",style:"style",src:"src",alt:"alt",width:"width",height:"height",appendTo:"appendTo",preview:"preview",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},decls:4,vars:13,consts:[[3,"ngClass","ngStyle"],[3,"ngStyle"],["class","p-image-preview-indicator",3,"click",4,"ngIf"],["class","p-image-mask p-component-overlay p-component-overlay-enter",3,"click",4,"ngIf"],[1,"p-image-preview-indicator",3,"click"],[4,"ngIf","ngIfElse"],["defaultTemplate",""],[4,"ngTemplateOutlet"],[1,"p-image-preview-icon","pi","pi-eye"],[1,"p-image-mask","p-component-overlay","p-component-overlay-enter",3,"click"],["mask",""],[1,"p-image-toolbar"],["type","button",1,"p-image-action","p-link",3,"click"],[1,"pi","pi-refresh"],[1,"pi","pi-undo"],["type","button",1,"p-image-action","p-link",3,"disabled","click"],[1,"pi","pi-search-minus"],[1,"pi","pi-search-plus"],["type","button",1,"p-image-action","p-link"],[1,"pi","pi-times"],[4,"ngIf"],[1,"p-image-preview",3,"ngStyle","click"]],template:function(c,d){1&c&&(a.TgZ(0,"span",0),a._UZ(1,"img",1),a.YNc(2,y,4,2,"div",2),a.YNc(3,A,14,3,"div",3),a.qZA()),2&c&&(a.Tol(d.styleClass),a.Q6J("ngClass",d.containerClass())("ngStyle",d.style),a.xp6(1),a.Tol(d.imageClass),a.Q6J("ngStyle",d.imageStyle),a.uIk("src",d.src,a.LSH)("alt",d.alt)("width",d.width)("height",d.height),a.xp6(1),a.Q6J("ngIf",d.preview),a.xp6(1),a.Q6J("ngIf",d.maskVisible))},dependencies:[r.mk,r.PC,r.O5,r.tP],styles:[".p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon{font-size:1.5rem}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}\n"],encapsulation:2,data:{animation:[(0,o.X$)("animation",[(0,o.eR)("void => visible",[(0,o.oB)({transform:"scale(0.7)",opacity:0}),(0,o.jt)("{{showTransitionParams}}")]),(0,o.eR)("visible => void",[(0,o.jt)("{{hideTransitionParams}}",(0,o.oB)({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0}),g})(),M=(()=>{class g{}return g.\u0275fac=function(c){return new(c||g)},g.\u0275mod=a.oAB({type:g}),g.\u0275inj=a.cJS({imports:[[r.ez],l.m8]}),g})()}}]);