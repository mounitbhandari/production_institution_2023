"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[8235],{8235:(y,p,s)=>{s.r(p),s.d(p,{StudentSyllabusModule:()=>P});var i=s(6895),h=s(4364),t=s(4650),d=s(5620),g=s(2820),m=s(9366);function f(o,a){1&o&&t._UZ(0,"div")}function b(o,a){if(1&o&&(t.TgZ(0,"span",13)(1,"a",14),t._UZ(2,"i",15),t.qZA()(),t._uU(3," \xa0\xa0 "),t.TgZ(4,"span"),t._uU(5),t.qZA()),2&o){const r=t.oxw().$implicit,l=t.oxw();t.xp6(1),t.hYB("href","",l.defaultPicture,"",r.file_url,"",t.LSH),t.xp6(4),t.Oqu(r.file_url)}}function c(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1,"No File Attach"),t.qZA())}function S(o,a){if(1&o&&(t.TgZ(0,"tr")(1,"th",9),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.YNc(6,f,1,0,"div",10),t.TgZ(7,"p"),t.YNc(8,b,6,3,"ng-template",null,11,t.W1O),t.qZA(),t.TgZ(10,"p"),t.YNc(11,c,2,0,"ng-template",null,12,t.W1O),t.qZA()()()),2&o){const r=a.$implicit,l=a.index,_=t.MAs(9),v=t.MAs(12);t.xp6(2),t.Oqu(l+1),t.xp6(2),t.hij(" ",r.syllabus_description,""),t.xp6(2),t.Q6J("ngIf",r.file_url)("ngIfThen",_)("ngIfElse",v)}}const e=[{path:"",component:(()=>{class o{constructor(r,l,_,v){this.commonService=r,this.reportService=l,this.route=_,this.authService=v,this.studentSyllabusArray=[],this.tempNewsObj={},this.organisationId=0,this.UserID=0,this.ledgerId=0,this.defaultPicture="",this.studentCourseHistoryArray=[];const u=localStorage.getItem("user");u&&(this.UserID=JSON.parse(u).uniqueId,this.organisationId=JSON.parse(u).organisationId,this.ledgerId=JSON.parse(u).ledgerId,console.log("user localUserID:",this.UserID),console.log("user organisationId:",this.organisationId),console.log("Ledger id:",this.ledgerId)),this.getStudentToCourseRegistrationListLedgerId(this.ledgerId)}ngOnInit(){this.defaultPicture=this.commonService.getPublic()+"/syllabus_upload/"}getStudentToCourseRegistrationListLedgerId(r){this.reportService.fetchStudentToCourseRegistrationReportLedgerId(r).subscribe(l=>{this.studentCourseHistoryArray=l.data,console.log("studentCourseHistoryArray:",this.studentCourseHistoryArray),this.tempNewsObj={courseId:this.studentCourseHistoryArray[0].course_id,organisationId:this.organisationId},console.log("course ID:",this.tempNewsObj),this.getStudentSyllabusList()})}getStudentSyllabusList(){this.reportService.fetchStudentSyllabusListReport(this.tempNewsObj).subscribe(r=>{this.studentSyllabusArray=r.data,console.log("studentSyllabusArray:",this.studentSyllabusArray)})}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(d.v),t.Y36(g.r),t.Y36(h.gz),t.Y36(m.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-student-syllabus"]],decls:17,vars:1,consts:[[1,"head"],[1,"headerobjectswrapper"],[1,"container-fluid",2,"background-color","rgb(248, 241, 215)"],[1,"container","table-responsive","py-5"],[1,"table","table-bordered","table-hover"],[1,"thead-dark"],[2,"background-color","black","color","white"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],[2,"font-size","xx-large"],["download","{{item.file_url}","target","_blank",3,"href"],[1,"bi","bi-download"]],template:function(r,l){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"header"),t._uU(3,"Your Syllabus"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"table",4)(7,"thead",5)(8,"tr",6)(9,"th",7),t._uU(10,"#"),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Syllabus Description"),t.qZA(),t.TgZ(13,"th",7),t._uU(14,"Download File"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,S,13,5,"tr",8),t.qZA()()()()()),2&r&&(t.xp6(16),t.Q6J("ngForOf",l.studentSyllabusArray))},dependencies:[i.sg,i.O5],styles:['body[_ngcontent-%COMP%]{font-family:"Droid Serif",serif;font-size:14px;color:#2f2f2f;background-color:#f9f7f1}header[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-weight:900;font-size:80px;text-transform:uppercase;display:inline-block;line-height:72px;margin-bottom:20px}p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:20px}.head[_ngcontent-%COMP%]{text-align:center;position:relative}.subhead[_ngcontent-%COMP%]{text-transform:uppercase;border-bottom:2px solid #2f2f2f;border-top:2px solid #2f2f2f;padding:12px 0;background-color:#f9f7f1}.weatherforcastbox[_ngcontent-%COMP%]{position:relative;width:12%;left:10px;border:3px double #2f2f2f;padding:10px 15px;line-height:20px;display:inline-block;margin:0 50px 20px -360px}.collumn[_ngcontent-%COMP%]{font-size:14px;line-height:20px;width:17.5%;display:inline-block;padding:0 1%;vertical-align:top;margin-bottom:50px;transition:all .7s}.collumn[_ngcontent-%COMP%] + .collumn[_ngcontent-%COMP%]{border-left:1px solid #2f2f2f}.collumn[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]{text-align:center;line-height:normal;font-family:Playfair Display,serif;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .headline.hl1[_ngcontent-%COMP%]{font-weight:700;font-size:30px;text-transform:uppercase;padding:10px 0}.collumn[_ngcontent-%COMP%]   .headline.hl2[_ngcontent-%COMP%]{font-weight:400;font-style:italic;font-size:24px;box-sizing:border-box;padding:10px 0}.collumn[_ngcontent-%COMP%]   .headline.hl2[_ngcontent-%COMP%]:before{border-top:1px solid #2f2f2f;content:"";width:100px;height:7px;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .headline.hl2[_ngcontent-%COMP%]:after{border-bottom:1px solid #2f2f2f;content:"";width:100px;height:13px;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .headline.hl3[_ngcontent-%COMP%]{font-weight:400;font-style:italic;font-size:36px;box-sizing:border-box;padding:10px 0}.collumn[_ngcontent-%COMP%]   .headline.hl4[_ngcontent-%COMP%]{font-weight:700;font-size:12px;box-sizing:border-box;padding:10px 0}.collumn[_ngcontent-%COMP%]   .headline.hl4[_ngcontent-%COMP%]:before{border-top:1px solid #2f2f2f;content:"";width:100px;height:7px;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .headline.hl4[_ngcontent-%COMP%]:after{border-bottom:1px solid #2f2f2f;content:"";width:100px;height:10px;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .headline.hl5[_ngcontent-%COMP%]{font-weight:400;font-size:42px;text-transform:uppercase;font-style:italic;box-sizing:border-box;padding:10px 0}.collumn[_ngcontent-%COMP%]   .headline.hl6[_ngcontent-%COMP%]{font-weight:400;font-size:18px;box-sizing:border-box;padding:10px 0}.collumn[_ngcontent-%COMP%]   .headline.hl6[_ngcontent-%COMP%]:before{border-top:1px solid #2f2f2f;content:"";width:100px;height:7px;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .headline.hl6[_ngcontent-%COMP%]:after{border-bottom:1px solid #2f2f2f;content:"";width:100px;height:10px;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .headline.hl7[_ngcontent-%COMP%]{font-weight:700;font-size:12px;box-sizing:border-box;display:block;padding:10px 0}.collumn[_ngcontent-%COMP%]   .headline.hl8[_ngcontent-%COMP%], .collumn[_ngcontent-%COMP%]   .headline.hl9[_ngcontent-%COMP%], .collumn[_ngcontent-%COMP%]   .headline.hl10[_ngcontent-%COMP%]{font-weight:700;font-size:12px;box-sizing:border-box;padding:10px 0}.collumn[_ngcontent-%COMP%]   .citation[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-size:36px;line-height:44px;text-align:center;font-weight:400;display:block;margin:40px 0;font-feature-settings:"liga","dlig"}.collumn[_ngcontent-%COMP%]   .citation[_ngcontent-%COMP%]:before{border-top:1px solid #2f2f2f;content:"";width:100px;height:16px;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .citation[_ngcontent-%COMP%]:after{border-bottom:1px solid #2f2f2f;content:"";width:100px;height:16px;display:block;margin:0 auto}.collumn[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]{margin:0 0 20px}.collumn[_ngcontent-%COMP%]   .figcaption[_ngcontent-%COMP%]{font-style:italic;font-size:12px}.media[_ngcontent-%COMP%]{filter:sepia(80%) grayscale(1) contrast(1) opacity(.8);mix-blend-mode:multiply;width:100%}@media only all and (max-width: 1300px){.weatherforcastbox[_ngcontent-%COMP%]{display:none}}@media only all and (max-width: 1200px){.collumn[_ngcontent-%COMP%]{width:31%}}@media only all and (max-width: 900px){.collumn[_ngcontent-%COMP%]{width:47%}}@media only all and (max-width: 600px){.collumn[_ngcontent-%COMP%]{width:100%}.collumn[_ngcontent-%COMP%] + .collumn[_ngcontent-%COMP%]{border-left:none;border-bottom:1px solid #2f2f2f}header[_ngcontent-%COMP%]{max-width:320px;font-size:60px;line-height:54px;overflow:hidden}}']}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.Bz.forChild(e),h.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.ez,x]}),o})()},2820:(y,p,s)=>{s.d(p,{r:()=>b});var i=s(262),h=s(7579),t=s(8505),d=s(4650),g=s(5620),m=s(4889),f=s(529);let b=(()=>{class c{constructor(n,e,x){this.commonService=n,this.errorService=e,this.http=x,this.incomeReportList=[],this.newsDataList=[],this.incomeReportSubject=new h.x}fetchPivotTableIncomeList(n){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableIncomeListReport/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchPivotTableAdmissionList(n){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableAdmissionList/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchStudentMarksList(n){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getMarkStudents",n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchSubjectListByCourseId(n){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getSubjectsByCourseId/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchStudentNewsListReport(n){return this.http.post(this.commonService.getAPI()+"/getStudentNewsList",n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentSyllabusListReport(n){return this.http.post(this.commonService.getAPI()+"/getStudentSyllabusList",n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}updateNewsStatus(n){return this.http.patch(this.commonService.getAPI()+"/updateNewsStatus",n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at news status update",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchNewsListReport(n){return this.http.get(this.commonService.getAPI()+"/getNewsList/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchSyllabusListReport(n){return this.http.get(this.commonService.getAPI()+"/getSyllabusList/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}saveNews(n){return this.http.post(this.commonService.getAPI()+"/saveNews",n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchAllReceiptIncomeReport(n){return this.http.get(this.commonService.getAPI()+"/getAllIncomeReport/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList]),console.log("all Income:",this.incomeReportList)}))}fetchWorkingDaysReport(n){return this.http.get(this.commonService.getAPI()+"/transactions/workingDays/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentBirthDayDaysReport(n){return this.http.get(this.commonService.getAPI()+"/reportStudentBirthday/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data}))}fetchStudentUpcomingDueListReport(n){return this.http.get(this.commonService.getAPI()+"/reportUpcomingDueList/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data}))}fetchStudentToCourseRegistrationReport(n){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationList/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentToCourseRegistrationReportLedgerId(n){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationListLedgerId/"+n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchAllIncomeReport(n){return this.http.post(this.commonService.getAPI()+"/getAllIncomeListReport",n).pipe((0,i.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}}return c.\u0275fac=function(n){return new(n||c)(d.LFG(g.v),d.LFG(m.T),d.LFG(f.eN))},c.\u0275prov=d.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);