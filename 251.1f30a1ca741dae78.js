"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[251],{4259:(b,d,o)=>{o.r(d),o.d(d,{MarksheetModule:()=>P});var c=o(6895),l=o(4364),s=o(4006),t=o(4650),v=o(5620),S=o(2820),L=o(6102),g=o(8796);function u(n,h){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"input",17),t.qZA()()),2&n){const i=h.$implicit;t.xp6(2),t.Oqu(i.subject_id),t.xp6(2),t.Oqu(i.subject_full_name)}}function f(n,h){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",15)(2,"tr")(3,"td")(4,"h1"),t._uU(5),t.qZA()()(),t.YNc(6,u,7,2,"tr",13),t.qZA(),t.TgZ(7,"button",16),t.NdJ("click",function(){const m=t.CHM(i).$implicit,C=t.oxw();return t.KtG(C.onSaveMarks(m))}),t._uU(8," Save "),t.qZA(),t.BQk()}if(2&n){const i=h.$implicit,a=h.index,p=t.oxw();t.xp6(5),t.AsE("",a+1,"\xa0",i.ledger_name,""),t.xp6(1),t.Q6J("ngForOf",p.subjectsArray)}}const e=[{path:"",component:(()=>{class n{constructor(i,a,p){this.commonService=i,this.reportService=a,this.courseService=p,this.UserID=0,this.organisationId=0,this.studentsArray=[],this.subjectsArray=[],this.courseArray=[],this.tempObject={};const m=localStorage.getItem("user");m&&(this.UserID=JSON.parse(m).uniqueId,this.organisationId=JSON.parse(m).organisationId,console.log("user localUserID:",this.UserID),console.log("user organisationId:",this.organisationId)),this.getCourseList(this.organisationId)}ngOnInit(){this.marksheetFormGroup=new s.cw({course_id:new s.NI(null,[s.kI.required]),marks:new s.NI(null,[s.kI.required])})}onSaveMarks(i){const a=this.marksheetFormGroup.value.marks;console.log("save data:",i),console.log("save marks:",a)}getCourseList(i){this.courseService.fetchAllCourses(i).subscribe(a=>{this.courseArray=a.data,console.log("courseList:",this.courseArray)})}getStudentList(i){this.reportService.fetchStudentMarksList(i).subscribe(a=>{this.studentsArray=a.data,console.log("studentsArray:",this.studentsArray)})}getSubjectList(i){this.reportService.fetchSubjectListByCourseId(i).subscribe(a=>{this.subjectsArray=a.data,console.log("subjectsArray:",this.subjectsArray)})}chooseSubject(i){console.log(i),this.getSubjectList(i.id),this.tempObject={couseId:i.id,organisationId:this.organisationId},this.getStudentList(this.tempObject)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(v.v),t.Y36(S.r),t.Y36(L.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-marksheet"]],decls:22,vars:4,consts:[["align","center"],[1,"container"],[3,"formGroup"],[1,"main-dev",2,"background-color","rgb(214, 212, 212)"],[1,"row","p-3"],[1,"col-sm-5"],["fxFlex","100","bindLabel","full_name","bindValue","id","appendTo","body","formControlName","course_id","placeholder","select Course / Class Name",1,"custom",3,"items","change"],[1,"detail-div",2,"background-color","rgb(241, 188, 188)"],["id","student-div"],["id","marks-div"],[1,"row"],[1,"col-sm-6"],[1,"table","table-hover","table-striped"],[4,"ngFor","ngForOf"],[2,"background-color","yellow","color","black"],[2,"background-color","aquamarine"],["type","button",1,"btn","btn-success",3,"click"],["type","text","formControlName","marks","placeholder","Enter Marks","aria-label","Recipient's username","aria-describedby","basic-addon2",1,"form-control"]],template:function(i,a){1&i&&(t.TgZ(0,"u")(1,"h1",0),t._uU(2," Marksheet Entry Form "),t.qZA()(),t.TgZ(3,"div",1)(4,"form",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"ng-select",6),t.NdJ("change",function(m){return a.chooseSubject(m)}),t.qZA()()()(),t.TgZ(9,"div",7),t._UZ(10,"div",8),t.TgZ(11,"div",9)(12,"div",10)(13,"div",11)(14,"table",12)(15,"tbody"),t.YNc(16,f,9,3,"ng-container",13),t.qZA()()(),t.TgZ(17,"div",11)(18,"pre",14),t._uU(19,"                "),t._uU(20),t._uU(21,"\n              "),t.qZA()()()()()()()),2&i&&(t.xp6(4),t.Q6J("formGroup",a.marksheetFormGroup),t.xp6(4),t.Q6J("items",a.courseArray),t.xp6(8),t.Q6J("ngForOf",a.studentsArray),t.xp6(4),t.hij("\n                marksheetFormGroup = ",a.marksheetFormGroup.value,"\n               "))},dependencies:[c.sg,g.w9,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(e),l.Bz]}),n})();var I=o(7466),R=o(5593),D=o(4144),E=o(9602),M=o(3238),y=o(1740);let P=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,A,I.U$,R.hJ,g.A0,s.u5,s.UX,D.c,E.FA,M.XK,y.j]}),n})()},2820:(b,d,o)=>{o.d(d,{r:()=>g});var c=o(262),l=o(7579),s=o(8505),t=o(4650),v=o(5620),S=o(4889),L=o(529);let g=(()=>{class u{constructor(r,e,A){this.commonService=r,this.errorService=e,this.http=A,this.incomeReportList=[],this.newsDataList=[],this.incomeReportSubject=new l.x}fetchPivotTableIncomeList(r){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableIncomeListReport/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.newsDataList=e.data}))}fetchPivotTableAdmissionList(r){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableAdmissionList/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.newsDataList=e.data}))}fetchStudentMarksList(r){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getMarkStudents",r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.newsDataList=e.data}))}fetchSubjectListByCourseId(r){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getSubjectsByCourseId/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.newsDataList=e.data}))}fetchStudentNewsListReport(r){return this.http.post(this.commonService.getAPI()+"/getStudentNewsList",r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentSyllabusListReport(r){return this.http.post(this.commonService.getAPI()+"/getStudentSyllabusList",r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentAssignmentListReport(r){return this.http.post(this.commonService.getAPI()+"/getStudentAssignmentList",r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}updateNewsStatus(r){return this.http.patch(this.commonService.getAPI()+"/updateNewsStatus",r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{console.log("at news status update",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchNewsListReport(r){return this.http.get(this.commonService.getAPI()+"/getNewsList/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.newsDataList=e.data}))}fetchSyllabusListReport(r){return this.http.get(this.commonService.getAPI()+"/getSyllabusList/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.newsDataList=e.data}))}fetchAssignmentListReport(r){return this.http.get(this.commonService.getAPI()+"/getAssignmentList/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.newsDataList=e.data}))}saveNews(r){return this.http.post(this.commonService.getAPI()+"/saveNews",r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchAllReceiptIncomeReport(r){return this.http.get(this.commonService.getAPI()+"/getAllIncomeReport/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList]),console.log("all Income:",this.incomeReportList)}))}fetchWorkingDaysReport(r){return this.http.get(this.commonService.getAPI()+"/transactions/workingDays/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentBirthDayDaysReport(r){return this.http.get(this.commonService.getAPI()+"/reportStudentBirthday/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.incomeReportList=e.data}))}fetchStudentUpcomingDueListReport(r){return this.http.get(this.commonService.getAPI()+"/reportUpcomingDueList/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.incomeReportList=e.data}))}fetchStudentToCourseRegistrationReport(r){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationList/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentToCourseRegistrationReportLedgerId(r){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationListLedgerId/"+r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchAllIncomeReport(r){return this.http.post(this.commonService.getAPI()+"/getAllIncomeListReport",r).pipe((0,c.K)(this.errorService.serverError),(0,s.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}}return u.\u0275fac=function(r){return new(r||u)(t.LFG(v.v),t.LFG(S.T),t.LFG(L.eN))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);