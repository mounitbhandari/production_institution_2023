"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[3166],{3166:(L,p,o)=>{o.r(p),o.d(p,{IdentityCardModule:()=>Z});var r=o(6895),h=o(4364),t=o(4650),c=o(2316),m=o(5620),v=o(2820),f=o(7078),A=o(9366),d=o(4339),S=o(6991),i=o(5593),e=o(6186);const y=[{path:"",component:(()=>{class n{constructor(a,s,l,P,C,x,E,w,U){this.studentToCourseService=a,this.commonService=s,this.reportService=l,this.organisationService=P,this.route=C,this.authService=x,this.activatedRoute=E,this.studentService=w,this.transactionServicesService=U,this.organisationId=0,this.UserID=0,this.ledgerId=0,this.organisationName="",this.studentQualification="",this.studentName="",this.studentAddress="",this.studentPin="",this.episodeId="",this.gurdainName="",this.studentCity="",this.studentSex="",this.studentEntryDate="",this.studentEndDate=0,this.studentContact="",this.studentEmail="",this.studentDOB="",this.organisationAddress="",this.organisationPin="",this.organisationContact="",this.organisationEmail="",this.studentProfileDetalilsArray=[],this.studentCourseHistoryArray=[],this.profileImageArray=[],this.defaultPicture="",this.imageSrc="";const g=localStorage.getItem("user");g&&(JSON.parse(g),this.UserID=JSON.parse(g).uniqueId,this.organisationId=JSON.parse(g).organisationId,this.ledgerId=JSON.parse(g).ledgerId,console.log("user localUserID:",this.UserID),console.log("user organisationId:",this.organisationId),console.log("Ledger id:",this.ledgerId),this.getStudentProfile(this.ledgerId),this.getStudentToCourseRegistrationListLedgerId(this.ledgerId),this.getProfileImageById(this.organisationId,this.ledgerId))}ngOnInit(){}getStudentProfile(a){const s=new Date;this.studentService.fetchAllProfile(a).subscribe(l=>{this.studentProfileDetalilsArray=l.data,this.organisationName=this.studentProfileDetalilsArray[0].organisation_name,this.studentAddress=this.studentProfileDetalilsArray[0].address,this.studentName=this.studentProfileDetalilsArray[0].ledger_name,this.episodeId=this.studentProfileDetalilsArray[0].episode_id,this.studentPin=this.studentProfileDetalilsArray[0].pin,this.studentDOB=this.studentProfileDetalilsArray[0].dob,this.studentContact=this.studentProfileDetalilsArray[0].whatsapp_number,this.studentEmail=this.studentProfileDetalilsArray[0].email_id,this.studentQualification=this.studentProfileDetalilsArray[0].qualification,this.organisationAddress=this.studentProfileDetalilsArray[0].organisationAddress,this.organisationPin=this.studentProfileDetalilsArray[0].organisationPin,this.organisationContact=this.studentProfileDetalilsArray[0].organisationContact,this.organisationEmail=this.studentProfileDetalilsArray[0].organisationEmail,this.gurdainName=this.studentProfileDetalilsArray[0].guardian_name,this.studentCity=this.studentProfileDetalilsArray[0].city,this.studentSex=this.studentProfileDetalilsArray[0].sex,this.studentEntryDate=this.studentProfileDetalilsArray[0].entry_date,this.studentEndDate=s.setMonth(s.getMonth()+12),console.log("studentProfileDetalilsArray :",this.studentProfileDetalilsArray)})}getStudentToCourseRegistrationListLedgerId(a){this.reportService.fetchStudentToCourseRegistrationReportLedgerId(a).subscribe(s=>{this.studentCourseHistoryArray=s.data,console.log("studentCourseHistoryArray:",this.studentCourseHistoryArray)})}getProfileImageById(a,s){this.authService.fetchProfileImage(a,s).subscribe(l=>{if(this.profileImageArray=l.data,console.log("Profile Images:",this.profileImageArray),this.profileImageArray[0].id>0){const P=this.profileImageArray[0].image_url;this.imageSrc=this.commonService.getPublic()+"/profile_pic/"+P}else this.defaultPicture=this.commonService.getPublic()+"/profile_pic/no_dp.png"})}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(c.p),t.Y36(m.v),t.Y36(v.r),t.Y36(f.w),t.Y36(h.gz),t.Y36(A.e),t.Y36(h.gz),t.Y36(d.V),t.Y36(S.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-identity-card"]],decls:121,vars:20,consts:[[1,"container-fluid","page"],[1,"header"],[1,"row","d-flex","align-items-center","justify-content-between"],[1,"col-md-8","dash",2,"font-family","Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif","font-size","xx-large"],[1,"bi","bi-person-circle"],[1,"container"],["id","print-icard",1,"row"],[1,"col-sm-4",2,"background-color","rgb(136, 136, 133)","border-radius","25px 5px 25px"],[1,"id-card",2,"width","275px","height","420px"],[1,"id-card-header"],[1,"id-card-text",2,"background-color","brown","width","100%","padding","10px","border-radius","25px 5px 25px"],[2,"font-size","large","font-family","sans-serif","letter-spacing","3px"],[1,"text-center",2,"font-family","'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif","color","white","text-shadow","2px 2px 4px #000000"],["align","center"],[1,"id-card-photo",3,"src","error"],[1,"id-card-info"],["border","0","align","center",2,"line-height","20px"],[1,"yellow-strap",2,"border-top","5px solid brown","color","black"],[1,"bi","bi-geo-alt-fill"],[1,"col-sm-4",2,"background-color","rgba(176, 241, 91, 0.897)","border-radius","25px 5px 25px"],[1,"id-card-text",2,"background-color","brown","width","100%","padding","5px","border-radius","25px 5px 25px"],[1,"id-card-info",2,"line-height","20px","font-size","small"],["width","100%"],["align","center",2,"color","#000000"],["align","center",1,"date",2,"color","#000000"],[1,"company-logo"],["src","assets/img/simplifyist.png","alt","Company Logo",1,"eduvenv"],[1,"text-right"],["pButton","","printSectionId","print-icard","printTitle","Develop By BAIT","ngxPrint","",1,"p-button-rounded","p-button-info","p-button-outlined"],[1,"bi","bi-printer"]],template:function(a,s){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4," \xa0\xa0 "),t._UZ(5,"i",4),t._uU(6,"\xa0Your Identity Card"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"P",11),t._uU(14),t.qZA()(),t.TgZ(15,"h1",12),t._uU(16),t.qZA(),t.TgZ(17,"div",13)(18,"img",14),t.NdJ("error",function(){return s.imageSrc=s.defaultPicture}),t.qZA()()(),t.TgZ(19,"div",15)(20,"table",16)(21,"tr")(22,"th"),t._uU(23,"ID "),t.qZA(),t.TgZ(24,"td"),t._uU(25,":"),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.qZA()(),t.TgZ(28,"tr")(29,"th"),t._uU(30,"Adddress"),t.qZA(),t.TgZ(31,"td"),t._uU(32,":"),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.qZA()(),t.TgZ(35,"tr")(36,"th"),t._uU(37,"Qulification"),t.qZA(),t.TgZ(38,"td"),t._uU(39,":"),t.qZA(),t.TgZ(40,"td"),t._uU(41),t.qZA()(),t.TgZ(42,"tr")(43,"th"),t._uU(44,"DOB"),t.qZA(),t.TgZ(45,"td"),t._uU(46,":"),t.qZA(),t.TgZ(47,"td"),t._uU(48),t.ALo(49,"date"),t.qZA()(),t.TgZ(50,"tr")(51,"th"),t._uU(52,"E-mail"),t.qZA(),t.TgZ(53,"td"),t._uU(54,":"),t.qZA(),t.TgZ(55,"td"),t._uU(56),t.qZA()(),t.TgZ(57,"tr")(58,"th"),t._uU(59,"Contact"),t.qZA(),t.TgZ(60,"td"),t._uU(61,":"),t.qZA(),t.TgZ(62,"td"),t._uU(63),t.qZA()()()(),t.TgZ(64,"div",17),t._UZ(65,"i",18),t._uU(66,"\xa0 "),t.TgZ(67,"b"),t._uU(68,"Address : "),t.qZA(),t._uU(69),t.TgZ(70,"b"),t._uU(71,"Pin :"),t.qZA(),t._uU(72),t.qZA()()(),t.TgZ(73,"div",19)(74,"div",8)(75,"div",9)(76,"div",20)(77,"P",11),t._uU(78,"TERMS AND CONDITIONS"),t.qZA()()(),t.TgZ(79,"div",21)(80,"ul")(81,"li"),t._uU(82," It is mandatory to bring your identity card with you everyday when you come in. Without Identity card, your entry will be refused. "),t.qZA()(),t._UZ(83,"hr",22),t.TgZ(84,"p",23)(85,"strong")(86,"b"),t._uU(87," Phone: "),t.qZA()(),t._uU(88),t._UZ(89,"br"),t.TgZ(90,"strong")(91,"b"),t._uU(92," E-Mail: "),t.qZA()(),t._uU(93),t._UZ(94,"br"),t.qZA(),t._UZ(95,"hr",22),t.TgZ(96,"div")(97,"p",24)(98,"strong"),t._uU(99," Joined Date: "),t.qZA(),t._uU(100),t.ALo(101,"date"),t._UZ(102,"br"),t.TgZ(103,"strong"),t._uU(104," Expire Date: "),t.qZA(),t._uU(105,"Jan 30, 2025 "),t.qZA(),t.TgZ(106,"p",25),t._UZ(107,"img",26),t.qZA()()(),t.TgZ(108,"div",17),t._UZ(109,"i",18),t._uU(110,"\xa0 "),t.TgZ(111,"b"),t._uU(112,"Address : "),t.qZA(),t._uU(113),t.TgZ(114,"b"),t._uU(115,"Pin :"),t.qZA(),t._uU(116),t.qZA()()()(),t.TgZ(117,"p",27)(118,"button",28),t._UZ(119,"i",29),t._uU(120," Print "),t.qZA()()()()),2&a&&(t.xp6(14),t.Oqu(s.organisationName),t.xp6(2),t.Oqu(s.studentName),t.xp6(2),t.Q6J("src",s.imageSrc,t.LSH),t.xp6(9),t.Oqu(s.episodeId),t.xp6(7),t.Oqu(s.studentAddress),t.xp6(7),t.Oqu(s.studentQualification),t.xp6(7),t.Oqu(t.lcZ(49,16,s.studentDOB)),t.xp6(8),t.Oqu(s.studentEmail),t.xp6(7),t.Oqu(s.studentContact),t.xp6(6),t.hij(" ",s.organisationAddress,",\xa0 "),t.xp6(3),t.hij(" ",s.organisationPin," "),t.xp6(16),t.hij(" ",s.organisationContact," "),t.xp6(5),t.hij(" ",s.organisationEmail," "),t.xp6(7),t.hij(" ",t.lcZ(101,18,s.studentEntryDate)," "),t.xp6(13),t.hij(" ",s.organisationAddress,",\xa0 "),t.xp6(3),t.hij(" ",s.organisationPin," "))},dependencies:[i.Hq,e.I,r.uU],styles:["body[_ngcontent-%COMP%]{overflow-x:hidden}.page[_ngcontent-%COMP%]{color:#fff;padding:0 0rem;background:#f1f5f9}.header[_ngcontent-%COMP%]{background-color:#f8f1d7;padding:0 1em;font-size:2em;margin:0;color:#0712a8}.id-card[_ngcontent-%COMP%]{width:350px;height:550px;background:linear-gradient(to bottom,rgb(252,115,2) 15%,transparent 100%);border-radius:0;padding:10px;margin:0 auto;position:relative;overflow:hidden;border:3px solid blue}.id-card-header[_ngcontent-%COMP%]{text-align:left;margin-bottom:20px;position:relative;z-index:1}.id-card-photo[_ngcontent-%COMP%]{display:block;width:100px;height:100px;border-radius:50%;text-align:center;background-color:#333;border:3px solid blue;position:relative;z-index:2;box-shadow:0 0 0 6px #fff}.id-card-info[_ngcontent-%COMP%]{text-align:left;font-size:15px;line-height:30px}.id-card-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#333}.id-card-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#666}.id-card-text[_ngcontent-%COMP%]{text-align:center;margin:0;color:#fff;font-family:Georgia,sans-serif;font-weight:700;font-color:white;font-size:16px}.yellow-strap[_ngcontent-%COMP%]{background-color:orange;padding:10px;position:absolute;bottom:0;left:0;width:100%;text-align:center;z-index:2}.yellow-strap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#000;font-size:14px}.company-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px}.date[_ngcontent-%COMP%]{padding:10px;float:left;line-height:30px}"]}),n})()}];let D=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(y),h.Bz]}),n})();var b=o(1740);let Z=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,D,b.j,i.hJ,e.K]}),n})()},2820:(L,p,o)=>{o.d(p,{r:()=>A});var r=o(262),h=o(7579),t=o(8505),c=o(4650),m=o(5620),v=o(4889),f=o(529);let A=(()=>{class d{constructor(i,e,I){this.commonService=i,this.errorService=e,this.http=I,this.incomeReportList=[],this.newsDataList=[],this.incomeReportSubject=new h.x}fetchCheckMerchantTransactionId(i){return this.http.get(this.commonService.getAPI()+"/checkMerchantTransaction/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchCourseCompletedId(i){return this.http.get(this.commonService.getAPI()+"/updateCourseCompleted/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchPivotTableIncomeList(i){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableIncomeListReport/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchPivotTableAdmissionList(i){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableAdmissionList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchStudentMarksList(i){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getMarkStudents",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchSubjectListByCourseId(i){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getSubjectsByCourseId/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchStudentNewsListReport(i){return this.http.post(this.commonService.getAPI()+"/getStudentNewsList",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentSyllabusListReport(i){return this.http.post(this.commonService.getAPI()+"/getStudentSyllabusList",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentOnlineClassList(i){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getStudentOnlineClassList",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentEbookList(i){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getStudentEbookList",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentQuestionPaperList(i){return this.http.post(this.commonService.getAPI()+"/getStudentQuestionPaperList",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchStudentAssignmentListReport(i){return this.http.post(this.commonService.getAPI()+"/getStudentAssignmentList",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}onlinePaymentService(i){return this.http.post(this.commonService.getAPI()+"/phonepe",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service phonepe:",e)}))}updateNewsStatus(i){return this.http.patch(this.commonService.getAPI()+"/updateNewsStatus",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at news status update",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchNewsListReport(i){return this.http.get(this.commonService.getAPI()+"/getNewsList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchSyllabusListReport(i){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getSyllabusList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchAssignmentListReport(i){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getAssignmentList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchEbookListReport(i){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getEbookList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchOnlineClassReport(i){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getOnlineClassList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}fetchQuestionPaperListReport(i){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getQuestionPaperList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.newsDataList=e.data}))}saveNews(i){return this.http.post(this.commonService.getAPI()+"/saveNews",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{console.log("at service newsDataList:",e),1===e.success&&this.newsDataList.unshift(e.data)}))}fetchAllReceiptIncomeReport(i){return this.http.get(this.commonService.getAPI()+"/getAllIncomeReport/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList]),console.log("all Income:",this.incomeReportList)}))}fetchWorkingDaysReport(i){return this.http.get(this.commonService.getAPI()+"/transactions/workingDays/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentBirthDayDaysReport(i){return this.http.get(this.commonService.getAPI()+"/reportStudentBirthday/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data}))}fetchStudentUpcomingDueListReport(i){return this.http.get(this.commonService.getAPI()+"/reportUpcomingDueList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data}))}fetchStudentToCourseRegistrationReport(i){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationList/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentToCourseRegistrationReportLedgerId(i){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationListLedgerId/"+i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchAllIncomeReport(i){return this.http.post(this.commonService.getAPI()+"/getAllIncomeListReport",i).pipe((0,r.K)(this.errorService.serverError),(0,t.b)(e=>{this.incomeReportList=e.data,this.incomeReportSubject.next([...this.incomeReportList])}))}}return d.\u0275fac=function(i){return new(i||d)(c.LFG(m.v),c.LFG(v.T),c.LFG(f.eN))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);