"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[9379],{9379:(E,I,a)=>{a.r(I),a.d(I,{StudentAssignmentModule:()=>dt});var i=a(6895),v=a(4364),m=a(4006),M=a(5226),f=a.n(M),t=a(4650),y=a(5620),b=a(2820),u=a(6991),x=a(9366),r=a(5593),e=a(805),A=a(7466),L=a(1740);function T(d,l){if(1&d){const s=t.EpF();t.TgZ(0,"div",11)(1,"button",12),t.NdJ("click",function(){t.CHM(s);const p=t.oxw(),h=t.MAs(8);return t.KtG(p.clear(h))}),t.qZA(),t.TgZ(2,"span",13),t._UZ(3,"i",14),t.TgZ(4,"input",15),t.NdJ("input",function(p){t.CHM(s);const h=t.oxw(),C=t.MAs(8);return t.KtG(C.filterGlobal(h.getEventValue(p),"contains"))}),t.qZA()()()}}function O(d,l){1&d&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"ID"),t.qZA(),t.TgZ(3,"th",16),t._uU(4,"Assignment Description "),t._UZ(5,"p-sortIcon",17),t.qZA(),t.TgZ(6,"th",18),t._uU(7,"Subjects "),t._UZ(8,"p-sortIcon",19),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Download Attechment "),t.qZA(),t.TgZ(11,"th",20),t._uU(12,"Date & time "),t._UZ(13,"p-sortIcon",21),t.qZA()())}function F(d,l){1&d&&t._UZ(0,"div")}function j(d,l){if(1&d&&(t.TgZ(0,"span")(1,"a",25),t._UZ(2,"i",26),t.qZA(),t._uU(3),t.qZA()),2&d){const s=t.oxw().$implicit,g=t.oxw();t.xp6(1),t.hYB("href","",g.defaultPicture,"",s.file_url,"",t.LSH),t.xp6(2),t.hij("\xa0 ",s.file_url,"")}}function Z(d,l){}function R(d,l){if(1&d&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t.YNc(8,F,1,0,"div",22),t.TgZ(9,"p"),t.YNc(10,j,4,3,"ng-template",null,23,t.W1O),t.qZA(),t.TgZ(12,"p"),t.YNc(13,Z,0,0,"ng-template",null,24,t.W1O),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&d){const s=l.$implicit,g=l.rowIndex,p=t.MAs(11),h=t.MAs(14);t.xp6(2),t.Oqu(g+1),t.xp6(2),t.Oqu(s.assignment_description),t.xp6(2),t.Oqu(s.full_name),t.xp6(2),t.Q6J("ngIf",s.file_url)("ngIfThen",p)("ngIfElse",h),t.xp6(8),t.Oqu(s.created_at)}}function U(d,l){1&d&&t._UZ(0,"p-button",27)}const P=function(){return[5,10,25,50]},w=function(){return["id","assignment_description","subject_full_name","created_at"]},o=[{path:"",component:(()=>{class d{constructor(s,g,p,h,C){this.commonService=s,this.reportService=g,this.route=p,this.transactionServicesService=h,this.authService=C,this.tempNewsObj={},this.tempChargeObj={},this.tempReceicedObj={},this.studentAssignmentArray=[],this.tempFeesReceivedArray=[],this.organisationId=0,this.UserID=0,this.payAmountNgModel=0,this.paymentAmount=0,this.ledgerId=0,this.defaultPicture="",this.studentCourseHistoryArray=[],this.autoGenerateId=0,this.isShowBtn=!1;const D=localStorage.getItem("user");D&&(this.UserID=JSON.parse(D).uniqueId,this.organisationId=JSON.parse(D).organisationId,this.ledgerId=JSON.parse(D).ledgerId,console.log("user localUserID:",this.UserID),console.log("user organisationId:",this.organisationId),console.log("Ledger id:",this.ledgerId)),this.getStudentToCourseRegistrationListLedgerId(this.ledgerId),this.randomNum(4999,99999999999)}ngOnInit(){this.defaultPicture=this.commonService.getPublic()+"/assignment_upload/",this.FinalPayFormGroup=new m.cw({payAmount:new m.NI(null,[m.kI.required])})}getStudentToCourseRegistrationListLedgerId(s){this.reportService.fetchStudentToCourseRegistrationReportLedgerId(s).subscribe(g=>{this.studentCourseHistoryArray=g.data,console.log("studentCourseHistoryArray:",this.studentCourseHistoryArray),this.tempNewsObj={courseId:this.studentCourseHistoryArray[0].course_id,organisationId:this.organisationId},console.log("course ID:",this.tempNewsObj),this.getStudentSyllabusList()})}getStudentSyllabusList(){this.reportService.fetchStudentAssignmentListReport(this.tempNewsObj).subscribe(s=>{this.studentAssignmentArray=s.data,console.log("studentAssignmentArray:",this.studentAssignmentArray)})}saveOnlinePayment(){var s=new Date;const g=(0,i.p6)(s,"yyyy-MM-dd","en-US"),p=new Date;this.transactionMonth=p.getMonth()+1,this.transactionYear=p.getFullYear(),console.log("Month No:",p.getMonth()+1),console.log("Year No:",p.getFullYear()),this.tempChargeObj={ledgerId:this.ledgerId,transactionTypeId:2,amount:this.paymentAmount},this.tempReceicedObj={ledgerId:this.ledgerId,transactionTypeId:1,amount:this.paymentAmount},this.tempFeesReceivedArray.push(this.tempReceicedObj),this.tempFeesReceivedArray.push(this.tempChargeObj),this.tempNewsObj={transactionMaster:{userId:this.UserID,referenceTransactionMasterId:262,transactionDate:g,comment:"Online Payment",feesYear:this.transactionYear,feesMonth:this.transactionMonth,organisationId:this.organisationId},transactionDetails:Object.values(this.tempFeesReceivedArray)},f().fire({text:"",title:"Are you sure ?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Save it!",cancelButtonText:"No, keep it"}).then(h=>{h.isConfirmed?this.transactionServicesService.saveFeesReceiveOnline(this.autoGenerateId,this.tempNewsObj).subscribe(C=>{1===C.success?f().fire({position:"top-end",icon:"success",title:"Fees has been Received..",showConfirmButton:!1,timer:1500}):0===C.success&&f().fire({position:"top-end",icon:"error",title:"Sorry Your Payment Not Updated.",showConfirmButton:!1,timer:1500})},C=>{f().fire({icon:"error",title:"Oops...",text:C,footer:"<a href>Why do I have this issue?</a>",timer:0})}):h.dismiss===f().DismissReason.cancel&&f().fire("Cancelled","Your imaginary file is safe :)","error")})}onlinePayment(){this.isShowBtn=!0,this.studentAssignmentArray=[],this.paymentAmount=this.payAmountNgModel,this.apiKey="099eb0cd-02cf-4e2a-8aca-3e6c6aff0399",this.merchantId="PGTESTPAYUAT",this.merchantUserId="MUID123",console.log("amount:",this.paymentAmount);let s=this.commonService.getAPI()+"/phonepe/"+this.paymentAmount+"/"+this.merchantId+"/"+this.apiKey+"/"+this.merchantUserId+"/"+this.autoGenerateId;window.open(s,"_blank")}getEventValue(s){return s.target.value}clear(s){s.clear()}randomNum(s,g){this.autoGenerateId=Math.floor(Math.random()*(g-s+1))+s}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(y.v),t.Y36(b.r),t.Y36(v.gz),t.Y36(u.D),t.Y36(x.e))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-student-assignment"]],decls:13,vars:8,consts:[[1,"head"],[1,"headerobjectswrapper"],[1,"container-fluid",2,"background-color","rgb(248, 241, 215)"],[1,"container","table-responsive","py-5"],[1,"card-body"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","globalFilterFields"],["assignmentList",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],[1,"flex"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined",3,"click"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],["pSortableColumn","assignment_description"],["field","assignment_description"],["pSortableColumn","subject_full_name"],["field","subject_full_name"],["pSortableColumn","created_at"],["field","created_at"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],["download","filename","target","_blank","rel","noopener noreferrer",3,"href"],[1,"bi","bi-download",2,"font-size","x-large"],["type","button","icon","pi pi-plus","styleClass","p-button-text"]],template:function(s,g){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"header"),t._uU(3,"Your Assignment"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"p-table",5,6),t.YNc(9,T,5,0,"ng-template",7),t.YNc(10,O,14,0,"ng-template",8),t.YNc(11,R,17,7,"ng-template",9),t.YNc(12,U,1,0,"ng-template",10),t.qZA()()()()()),2&s&&(t.xp6(7),t.Q6J("value",g.studentAssignmentArray)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(6,P))("globalFilterFields",t.DdM(7,w)))},dependencies:[i.O5,r.Hq,r.zx,e.jx,A.iA,A.lQ,A.fz,L.o],styles:['body[_ngcontent-%COMP%]{font-family:"Droid Serif",serif;font-size:14px;color:#2f2f2f;background-color:#f9f7f1}header[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-weight:900;font-size:80px;text-transform:uppercase;display:inline-block;line-height:72px;margin-bottom:20px}p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:20px}.head[_ngcontent-%COMP%]{text-align:center;position:relative}.subhead[_ngcontent-%COMP%]{text-transform:uppercase;border-bottom:2px solid #2f2f2f;border-top:2px solid #2f2f2f;padding:12px 0;background-color:#f9f7f1}.weatherforcastbox[_ngcontent-%COMP%]{position:relative;width:12%;left:10px;border:3px double #2f2f2f;padding:10px 15px;line-height:20px;display:inline-block;margin:0 50px 20px -360px}']}),d})()}];let c=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[v.Bz.forChild(o),v.Bz]}),d})();var S=a(4144),N=a(6257),K=a(1795),B=a(5121),_=a(4859),Y=a(2137),H=a(7729),G=a(1236),z=a(9764),W=a(2210),X=a(8796),J=a(9602),Q=a(3238),$=a(5362),V=a(1167),k=a(3608),q=a(3214),tt=a(2124),et=a(7957),at=a(7392),rt=a(4850),nt=a(6338),it=a(9549),ot=a(3848),st=a(3546);let dt=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[i.ez,c,S.c,m.u5,m.UX,N.T5,r.hJ,K.T,B.Z_,A.U$,_.ot,Y.D,H.S,G.q,z.Q,W.kW,X.A0,J.FA,Q.XK,$.Qy,V.KZ,k.z,q.l,tt.IJ,et.Bb,at.Ps,rt.t,nt.ie,ot.Nh,st.QW,L.j,it.lN]}),d})()},2820:(E,I,a)=>{a.d(I,{r:()=>b});var i=a(262),v=a(7579),m=a(8505),M=a(4650),f=a(5620),t=a(4889),y=a(529);let b=(()=>{class u{constructor(r,e,A){this.commonService=r,this.errorService=e,this.http=A,this.incomeReportList=[],this.newsDataList=[],this.incomeReportSubject=new v.x}fetchCheckMerchantTransactionId(r){return this.http.get(this.commonService.getAPI()+"/checkMerchantTransaction/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.newsDataList=e.data}))}fetchPivotTableIncomeList(r){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableIncomeListReport/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.newsDataList=e.data}))}fetchPivotTableAdmissionList(r){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableAdmissionList/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.newsDataList=e.data}))}fetchStudentMarksList(r){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getMarkStudents",r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.newsDataList=e.data}))}fetchSubjectListByCourseId(r){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getSubjectsByCourseId/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.newsDataList=e.data}))}fetchStudentNewsListReport(r){return this.http.post(this.commonService.getAPI()+"/getStudentNewsList",r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentSyllabusListReport(r){return this.http.post(this.commonService.getAPI()+"/getStudentSyllabusList",r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentAssignmentListReport(r){return this.http.post(this.commonService.getAPI()+"/getStudentAssignmentList",r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}onlinePaymentService(r){return this.http.post(this.commonService.getAPI()+"/phonepe",r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{console.log("at service phonepe:",e)}))}updateNewsStatus(r){return this.http.patch(this.commonService.getAPI()+"/updateNewsStatus",r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{console.log("at news status update",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchNewsListReport(r){return this.http.get(this.commonService.getAPI()+"/getNewsList/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.newsDataList=e.data}))}fetchSyllabusListReport(r){return this.http.get(this.commonService.getAPI()+"/getSyllabusList/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.newsDataList=e.data}))}fetchAssignmentListReport(r){return this.http.get(this.commonService.getAPI()+"/getAssignmentList/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.newsDataList=e.data}))}saveNews(r){return this.http.post(this.commonService.getAPI()+"/saveNews",r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchAllReceiptIncomeReport(r){return this.http.get(this.commonService.getAPI()+"/getAllIncomeReport/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList]),console.log("all Income:",this.incomeReportList)}))}fetchWorkingDaysReport(r){return this.http.get(this.commonService.getAPI()+"/transactions/workingDays/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentBirthDayDaysReport(r){return this.http.get(this.commonService.getAPI()+"/reportStudentBirthday/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.incomeReportList=e.data}))}fetchStudentUpcomingDueListReport(r){return this.http.get(this.commonService.getAPI()+"/reportUpcomingDueList/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.incomeReportList=e.data}))}fetchStudentToCourseRegistrationReport(r){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationList/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentToCourseRegistrationReportLedgerId(r){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationListLedgerId/"+r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchAllIncomeReport(r){return this.http.post(this.commonService.getAPI()+"/getAllIncomeListReport",r).pipe((0,i.K)(this.errorService.serverError),(0,m.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}}return u.\u0275fac=function(r){return new(r||u)(M.LFG(f.v),M.LFG(t.T),M.LFG(y.eN))},u.\u0275prov=M.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},3546:(E,I,a)=>{a.d(I,{$j:()=>r,C1:()=>P,QW:()=>w,a8:()=>R,dn:()=>u,n5:()=>x,vP:()=>T});var i=a(4650),v=a(3238);const m=["*",[["mat-card-footer"]]],M=["*","mat-card-footer"],y=[[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],[["img"]],"*"],b=["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","img","*"];let u=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275dir=i.lG2({type:n,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275dir=i.lG2({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),n})(),r=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275dir=i.lG2({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-card-sm-image",""],["","matCardImageSmall",""]],hostAttrs:[1,"mat-card-sm-image"]}),n})(),R=(()=>{class n{constructor(c){this._animationMode=c}}return n.\u0275fac=function(c){return new(c||n)(i.Y36(i.QbO,8))},n.\u0275cmp=i.Xpm({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(c,S){2&c&&i.ekj("_mat-animation-noopable","NoopAnimations"===S._animationMode)},exportAs:["matCard"],ngContentSelectors:M,decls:2,vars:0,template:function(c,S){1&c&&(i.F$t(m),i.Hsn(0),i.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0}),n})(),P=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["mat-card-title-group"]],hostAttrs:[1,"mat-card-title-group"],ngContentSelectors:b,decls:4,vars:0,template:function(c,S){1&c&&(i.F$t(y),i.TgZ(0,"div"),i.Hsn(1),i.qZA(),i.Hsn(2,1),i.Hsn(3,2))},encapsulation:2,changeDetection:0}),n})(),w=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[v.BQ,v.BQ]}),n})()}}]);