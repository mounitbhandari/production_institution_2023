"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[1606],{1606:(et,Z,n)=>{n.r(Z),n.d(Z,{TeacherUpdateModule:()=>tt});var d=n(6895),T=n(4364),a=n(4006),C=n(5226),c=n.n(C),t=n(4650),b=n(4339),U=n(5620),m=n(9549),I=n(7392),p=n(3848),v=n(4144),_=n(8796),h=n(7466),N=n(805),f=n(5593),A=n(1740),g=n(9602);function q(o,r){if(1&o&&(t.TgZ(0,"mat-icon",78),t._uU(1,"trending_up"),t.qZA(),t._uU(2," View Teacher / Staff \xa0 "),t.TgZ(3,"span",79),t._uU(4),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.hij(" ",e.teacherList.length,"")}}function x(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",80)(1,"p-button",81),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onClickAdd())}),t.qZA(),t.TgZ(2,"span",82),t._UZ(3,"i",83),t.TgZ(4,"input",84),t.NdJ("input",function(s){t.CHM(e);const l=t.oxw(),u=t.MAs(11);return t.KtG(u.filterGlobal(l.getEventValue(s),"contains"))}),t.qZA()()()}}function w(o,r){1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"ID"),t.qZA(),t.TgZ(3,"th",85),t._uU(4,"Name "),t._UZ(5,"p-sortIcon",86),t.qZA(),t.TgZ(6,"th",87),t._uU(7,"Guardain Name "),t._UZ(8,"p-sortIcon",88),t.qZA(),t.TgZ(9,"th",89),t._uU(10,"Address "),t._UZ(11,"p-sortIcon",90),t.qZA(),t.TgZ(12,"th"),t._uU(13,"WhatsApp No "),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Qualification "),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Entry Date "),t.qZA(),t.TgZ(18,"th",91),t._uU(19,"Edit "),t._UZ(20,"p-sortIcon",92),t.qZA(),t.TgZ(21,"th",93),t._uU(22,"Delete "),t._UZ(23,"p-sortIcon",94),t.qZA()())}function D(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td")(17,"p-button",95),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.editTeacher(l))}),t.qZA()(),t.TgZ(18,"td")(19,"p-button",96),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.deleteTeacher(l))}),t.qZA()()()}if(2&o){const e=r.$implicit;t.xp6(2),t.Oqu(e.studentId),t.xp6(2),t.Oqu(e.studentName),t.xp6(2),t.Oqu(e.guardianName),t.xp6(2),t.Oqu(e.address),t.xp6(2),t.Oqu(e.whatsappNumber),t.xp6(2),t.Oqu(e.qualification),t.xp6(2),t.Oqu(t.xi3(15,7,e.entryDate,"dd/MM/yyyy"))}}function M(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",97),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(),l=t.MAs(11);return t.KtG(s.clear(l))}),t.qZA()}}function y(o,r){1&o&&(t.TgZ(0,"mat-icon",78),t._uU(1,"trending_up"),t.qZA(),t._uU(2," Teacher / Staff Entry "))}function L(o,r){1&o&&(t.TgZ(0,"mat-error",75),t._uU(1," Student Name is required "),t.qZA())}function k(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,L,2,0,"mat-error",98),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.teacherRegistrationFormGroup.controls.studentName.errors.required)}}function F(o,r){1&o&&(t.TgZ(0,"mat-error",75),t._uU(1," Student Address is required"),t.qZA())}function S(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,F,2,0,"mat-error",98),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.teacherRegistrationFormGroup.controls.address.errors.required)}}function G(o,r){1&o&&(t.TgZ(0,"mat-error",75),t._uU(1,"DOB is required"),t.qZA())}function R(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,G,2,0,"mat-error",98),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.teacherRegistrationFormGroup.controls.dob.errors.required)}}function J(o,r){1&o&&(t.TgZ(0,"mat-error",75),t._uU(1," Student Email is required"),t.qZA())}function O(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,J,2,0,"mat-error",98),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.teacherRegistrationFormGroup.controls.emailId.errors.required)}}function B(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",99),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onTeacherSave())}),t._UZ(1,"i",100),t._uU(2,"\xa0 Save"),t.qZA()}}const E=function(){return[5,10,25,50]},Q=function(){return["studentId","episodeId","studentName","motherName"]},Y=[{path:"",component:(()=>{class o{constructor(e,i){this.studentService=e,this.commonService=i,this.stateList=[],this.organisationList=[],this.studentList=[],this.teacherList=[],this.showDiv=!1,this.showDivStudentExists=!1,this.organisationName="",this.address="",this.city="",this.contactNumber="",this.emailId="",this.organisationPin="",this.emailMobileNoCheckNgModel="",this.successMessage=0,this.organisationId=0,this.studentData={},this.selectedIndex=0;const s=localStorage.getItem("user");s&&(this.UserID=JSON.parse(s).uniqueId,this.organisationId=JSON.parse(s).organisationId,console.log("user localUserID:",this.UserID),console.log("user organisationId:",this.organisationId)),this.getStateList(),this.getOrganisationList(),this.getAllTeachers(this.organisationId)}onTabChanged(e){console.log(e)}getEventValue(e){return e.target.value}clear(e){e.clear()}onClickAdd(){this.selectedIndex=1}editTeacher(e){}deleteTeacher(e){}showDivClick(e){this.showDiv=!0,console.log("data:",e),this.organisationName=e.organisation_name,this.address=e.address,this.city=e.city,this.contactNumber=e.contact_number,this.emailId=e.email_id,this.organisationPin=e.pin}ngOnInit(){const e=new Date;let i=(0,d.p6)(e,"yyyy-MM-dd","en");this.teacherRegistrationFormGroup=new a.cw({studentName:new a.NI(null,[a.kI.required,a.kI.maxLength(100),a.kI.minLength(4)]),address:new a.NI(null,[a.kI.required,a.kI.maxLength(255),a.kI.minLength(4)]),city:new a.NI(null),district:new a.NI(null),guardainName:new a.NI(null),qualification:new a.NI("B.TECH"),sex:new a.NI("M"),relation:new a.NI(null),pin:new a.NI(null),guardianContactNumber:new a.NI(null,[a.kI.required,a.kI.maxLength(10),a.kI.minLength(10)]),whatsappNumber:new a.NI(null,[a.kI.required,a.kI.maxLength(10),a.kI.minLength(10)]),emailId:new a.NI(null,[a.kI.required,a.kI.email]),stateId:new a.NI(20),dob:new a.NI(i,[a.kI.required])})}getStateList(){this.studentService.fetchAllStates().subscribe(e=>{this.stateList=e.data,console.log("stateList:",this.stateList)})}getOrganisationList(){this.organisationList=[],this.studentService.fetchAllOrganisaction().subscribe(e=>{this.organisationList=e.data,console.log("organisationList:",this.organisationList)})}getAllTeachers(e){this.studentService.fetchAllTeachers(this.organisationId).subscribe(i=>{this.teacherList=i.data,console.log("teacherList list:",this.teacherList)})}onClearTeacher(){const e=new Date;let i=(0,d.p6)(e,"yyyy-MM-dd","en");this.teacherRegistrationFormGroup=new a.cw({studentName:new a.NI(null,[a.kI.required,a.kI.maxLength(100),a.kI.minLength(4)]),address:new a.NI(null,[a.kI.required,a.kI.maxLength(255),a.kI.minLength(4)]),city:new a.NI(null),district:new a.NI(null),guardainName:new a.NI(null),qualification:new a.NI("B.TECH"),sex:new a.NI("M"),relation:new a.NI(null),pin:new a.NI(null),guardianContactNumber:new a.NI(null,[a.kI.required,a.kI.maxLength(10),a.kI.minLength(10)]),whatsappNumber:new a.NI(null),emailId:new a.NI(null,[a.kI.required,a.kI.email]),stateId:new a.NI(20),dob:new a.NI(i,[a.kI.required])})}onTeacherSave(){c().fire({title:"Are you sure?",text:"Save This Record...?",icon:"info",showCancelButton:!0,confirmButtonText:"Yes, Save it!",cancelButtonText:"No, keep it"}).then(e=>{e.isConfirmed?(this.studentData.studentName=this.teacherRegistrationFormGroup.value.studentName,this.studentData.billingName=this.teacherRegistrationFormGroup.value.studentName,this.studentData.guardainName=this.teacherRegistrationFormGroup.value.guardainName,this.studentData.relation=this.teacherRegistrationFormGroup.value.relation,this.studentData.dob=this.teacherRegistrationFormGroup.value.dob,this.studentData.sex=this.teacherRegistrationFormGroup.value.sex,this.studentData.qualification=this.teacherRegistrationFormGroup.value.qualification,this.studentData.address=this.teacherRegistrationFormGroup.value.address,this.studentData.city=this.teacherRegistrationFormGroup.value.city,this.studentData.district=this.teacherRegistrationFormGroup.value.district,this.studentData.stateId=this.teacherRegistrationFormGroup.value.stateId,this.studentData.pin=this.teacherRegistrationFormGroup.value.pin,this.studentData.guardianContactNumber=this.teacherRegistrationFormGroup.value.guardianContactNumber,this.studentData.whatsappNumber=this.teacherRegistrationFormGroup.value.whatsappNumber,this.studentData.emailId=this.teacherRegistrationFormGroup.value.emailId,this.studentData.organisationId=this.organisationId,this.studentService.saveTeacherRegistration(this.studentData).subscribe(i=>{1===i.success&&(c().fire({position:"top-end",icon:"success",title:"Teacher has been saved",showConfirmButton:!1,timer:1500}),this.onClearTeacher(),console.log("Return student data:",i.data),this.selectedIndex=0,this.getAllTeachers(this.organisationId))},i=>{c().fire({icon:"error",title:"Oops...",text:i,footer:"<a href>Why do I have this issue?</a>",timer:0})})):e.dismiss===c().DismissReason.cancel&&c().fire("Cancelled","Your imaginary file is safe :)","error")})}onGo(e){console.log("test:",e.target.value),this.studentService.fetchCheckStudentExists(e.target.value).subscribe(s=>{this.studentList=s.data,this.successMessage=s.success,this.successMessage>0?(this.showDivStudentExists=!0,this.studentName=this.studentList[0].ledger_name,this.address=this.studentList[0].address,this.gurardainName=this.studentList[0].guardian_name,this.dob=this.studentList[0].dob,this.qualification=this.studentList[0].qualification,this.organisationName=this.studentList[0].organisation_name):this.showDivStudentExists=!1,console.log("studentList:",this.studentList),console.log("successMessage:",this.successMessage)})}sameAsWhatsAppNo(){this.teacherRegistrationFormGroup.patchValue({guardianContactNumber:this.teacherRegistrationFormGroup.value.whatsappNumber})}setDOBSQL(e){this.teacherRegistrationFormGroup.patchValue({dob:this.commonService.getSQLDate(e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b.V),t.Y36(U.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-teacher-update"]],decls:173,vars:18,consts:[[1,"container-fluid","page"],[1,"row","d-flex","align-items-center","justify-content-between"],[1,"col-12","header"],[1,"bi","bi-cash"],[1,"row"],[1,"col-12","mt-3","feeleft"],["animationDuration","200ms",2,"background-image","linear-gradient(to bottom right, rgb(8, 2, 68), rgb(7, 32, 146))","color","aliceblue","padding","12px","border-radius","5px","padding","0px",3,"selectedIndex","selectedTabChange","selectedIndexChange"],["mat-tab-label",""],["dataKey","studentId","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-gridlines",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","globalFilterFields"],["teachers",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],[3,"formGroup"],[2,"background-color","whitesmoke","padding","20px"],[1,"",2,"background-color","white"],[1,"col-sm-12"],["appearance","outline",2,"width","100%"],[1,"bi","bi-person-fill"],["matInput","","placeholder","Student Name","formControlName","studentName",1,"custom"],[4,"ngIf"],[1,"col-sm-7"],["matInput","","placeholder","Guardain's Name","formControlName","guardainName",1,"custom"],[1,"col-sm-5"],["matInput","","placeholder","Father","formControlName","relation",1,"custom"],[1,"col-sm-8"],[1,"bi","bi-geo-alt-fill"],["matInput","","placeholder","Teacher Address","formControlName","address",1,"custom"],[1,"col-sm-4"],["matInput","","formControlName","dob",1,"col-9",3,"matDatepicker","dateInput"],["ref",""],["matSuffix","",3,"for"],["dob",""],["matInput","","placeholder","City","formControlName","city",1,"custom"],["matInput","","placeholder","Pin","formControlName","pin",1,"custom"],["matInput","","placeholder","District","formControlName","district",1,"custom"],["bindLabel","state_name","bindValue","id","formControlName","stateId","autofocus","","appendTo","body","placeholder","State",1,"custom",3,"items"],["matInput","","placeholder","Pin","formControlName","whatsappNumber",1,"custom",3,"blur"],["matInput","","placeholder","Pin","formControlName","guardianContactNumber",1,"custom"],[1,"bi","bi-envelope-fill","mr-1"],["matInput","email","placeholder","Email ID","formControlName","emailId",1,"custom"],["matNativeControl","","formControlName","qualification"],["value","Class-I"],["value","Class-II"],["value","Class-III"],["value","Class-IV"],["value","Class-V"],["value","Class-VI"],["value","Class-VII"],["value","Class-VIII"],["value","Class-IX"],["value","Class-X"],["value","Class-XI"],["value","Class-XII"],["value","B.A"],["value","M.A"],["value","B.COM"],["value","M.COM"],["value","B.SC"],["value","M.SC"],["value","B.sc(IT)"],["value","BCA"],["value","MCA"],["value","B.TECH"],["value","M.TECH"],["value","DIPLOMA"],["value","PhD"],["value","B.ED"],["value","M.ED"],["value","Other"],["matNativeControl","","required","","formControlName","sex"],["value","M"],["value","F"],["value","O"],[1,"text-right"],["type","button","class","btn btn-success",3,"click",4,"ngIf"],["type","button",1,"btn","btn-info",3,"click"],[1,"example-tab-icon"],[2,"height","20px","width","20px","border-radius","50%","background-color","red","border","1px solid red","font-weight","bolder"],[1,"flex"],["type","button","icon","pi pi-plus","label","ADD",1,"p-button-outlined",3,"click"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],["pSortableColumn","studentName"],["field","studentName"],["pSortableColumn","guardianName"],["field","guardianName"],["pSortableColumn","address"],["field","address"],["pSortableColumn","edit"],["field","edit"],["pSortableColumn","delete"],["field","delete"],["type","button","icon","pi pi-pencil","styleClass","p-button-text",3,"click"],["type","button","icon","pi pi-trash","styleClass","p-button-text",3,"click"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined",3,"click"],["class","text-right",4,"ngIf"],["type","button",1,"btn","btn-success",3,"click"],[1,"bi","bi-save"]],template:function(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"i",3),t._uU(4,"\xa0 Teacher / Staff Registration"),t.qZA()(),t.TgZ(5,"div",4)(6,"div",5)(7,"mat-tab-group",6),t.NdJ("selectedTabChange",function(u){return i.onTabChanged(u)})("selectedIndexChange",function(u){return i.selectedIndex=u}),t.TgZ(8,"mat-tab"),t.YNc(9,q,5,1,"ng-template",7),t.TgZ(10,"p-table",8,9),t.YNc(12,x,5,0,"ng-template",10),t.YNc(13,w,24,0,"ng-template",11),t.YNc(14,D,20,10,"ng-template",12),t.YNc(15,M,1,0,"ng-template",13),t.qZA()(),t.TgZ(16,"mat-tab"),t.YNc(17,y,3,0,"ng-template",7),t.TgZ(18,"form",14)(19,"div",15)(20,"div",16)(21,"div",4)(22,"div",17)(23,"mat-form-field",18)(24,"mat-label"),t._UZ(25,"i",19),t._uU(26," \xa0 Teacher Name"),t.qZA(),t._UZ(27,"input",20),t.YNc(28,k,2,1,"div",21),t.qZA()()(),t.TgZ(29,"div",4)(30,"div",22)(31,"mat-form-field",18)(32,"mat-label"),t._UZ(33,"i",19),t._uU(34," \xa0Guardain Name"),t.qZA(),t._UZ(35,"input",23),t.qZA()(),t.TgZ(36,"div",24)(37,"mat-form-field",18)(38,"mat-label"),t._uU(39,"Relation (Like e.g: Father / Mother)"),t.qZA(),t._UZ(40,"input",25),t.qZA()()(),t.TgZ(41,"div",4)(42,"div",26)(43,"mat-form-field",18)(44,"mat-label"),t._UZ(45,"i",27),t._uU(46," \xa0 Address "),t.qZA(),t._UZ(47,"input",28),t.YNc(48,S,2,1,"div",21),t.qZA()(),t.TgZ(49,"div",29)(50,"mat-form-field",18)(51,"mat-label"),t._uU(52,"Date of Birth"),t.qZA(),t.TgZ(53,"input",30,31),t.NdJ("dateInput",function(){t.CHM(s);const u=t.MAs(54);return t.KtG(i.setDOBSQL(u.value))}),t.qZA(),t.YNc(55,R,2,1,"div",21),t._UZ(56,"mat-datepicker-toggle",32)(57,"mat-datepicker",null,33),t.qZA()()(),t.TgZ(59,"div",4)(60,"div",29)(61,"mat-form-field",18)(62,"mat-label"),t._uU(63,"City"),t.qZA(),t._UZ(64,"input",34),t.qZA()(),t.TgZ(65,"div",29)(66,"mat-form-field",18)(67,"mat-label"),t._uU(68,"Pin"),t.qZA(),t._UZ(69,"input",35),t.qZA()(),t.TgZ(70,"div",29)(71,"mat-form-field",18)(72,"mat-label"),t._uU(73,"District"),t.qZA(),t._UZ(74,"input",36),t.qZA()()(),t.TgZ(75,"div",4)(76,"div",29),t._UZ(77,"ng-select",37),t.qZA(),t.TgZ(78,"div",29)(79,"mat-form-field",18)(80,"mat-label"),t._uU(81,"WhatsApp No"),t.qZA(),t.TgZ(82,"input",38),t.NdJ("blur",function(){return i.sameAsWhatsAppNo()}),t.qZA()()(),t.TgZ(83,"div",29)(84,"mat-form-field",18)(85,"mat-label"),t._uU(86,"Contact No"),t.qZA(),t._UZ(87,"input",39),t.qZA()()(),t.TgZ(88,"div",4)(89,"div",29)(90,"mat-form-field",18)(91,"mat-label"),t._UZ(92,"i",40),t._uU(93," \xa0 Email ID"),t.qZA(),t._UZ(94,"input",41),t.YNc(95,O,2,1,"div",21),t.qZA()(),t.TgZ(96,"div",29)(97,"mat-form-field",18)(98,"mat-label"),t._uU(99,"Qualification"),t.qZA(),t.TgZ(100,"select",42)(101,"option",43),t._uU(102,"Class-I"),t.qZA(),t.TgZ(103,"option",44),t._uU(104,"Class-II"),t.qZA(),t.TgZ(105,"option",45),t._uU(106,"Class-III"),t.qZA(),t.TgZ(107,"option",46),t._uU(108,"Class-IV"),t.qZA(),t.TgZ(109,"option",47),t._uU(110,"Class-V"),t.qZA(),t.TgZ(111,"option",48),t._uU(112,"Class-VI"),t.qZA(),t.TgZ(113,"option",49),t._uU(114,"Class-VII"),t.qZA(),t.TgZ(115,"option",50),t._uU(116,"Class-VIII"),t.qZA(),t.TgZ(117,"option",51),t._uU(118,"Class-IX"),t.qZA(),t.TgZ(119,"option",52),t._uU(120,"Class-X"),t.qZA(),t.TgZ(121,"option",53),t._uU(122,"Class-XI"),t.qZA(),t.TgZ(123,"option",54),t._uU(124,"H.S"),t.qZA(),t.TgZ(125,"option",55),t._uU(126,"B.A"),t.qZA(),t.TgZ(127,"option",56),t._uU(128,"M.A"),t.qZA(),t.TgZ(129,"option",57),t._uU(130,"B.COM"),t.qZA(),t.TgZ(131,"option",58),t._uU(132,"M.COM"),t.qZA(),t.TgZ(133,"option",59),t._uU(134,"B.SC"),t.qZA(),t.TgZ(135,"option",60),t._uU(136,"M.SC"),t.qZA(),t.TgZ(137,"option",61),t._uU(138,"B.sc(IT)"),t.qZA(),t.TgZ(139,"option",62),t._uU(140,"BCA"),t.qZA(),t.TgZ(141,"option",63),t._uU(142,"MCA"),t.qZA(),t.TgZ(143,"option",64),t._uU(144,"B.TECH"),t.qZA(),t.TgZ(145,"option",65),t._uU(146,"M.TECH"),t.qZA(),t.TgZ(147,"option",66),t._uU(148,"DIPLOMA"),t.qZA(),t.TgZ(149,"option",67),t._uU(150,"PhD"),t.qZA(),t.TgZ(151,"option",68),t._uU(152,"B.ED"),t.qZA(),t.TgZ(153,"option",69),t._uU(154,"M.ED"),t.qZA(),t.TgZ(155,"option",70),t._uU(156,"Other"),t.qZA()()()(),t.TgZ(157,"div",29)(158,"mat-form-field",18)(159,"mat-label"),t._uU(160,"Gender"),t.qZA(),t.TgZ(161,"select",71)(162,"option",72),t._uU(163,"Male"),t.qZA(),t.TgZ(164,"option",73),t._uU(165,"Female"),t.qZA(),t.TgZ(166,"option",74),t._uU(167,"Other"),t.qZA()()()()(),t.TgZ(168,"div",75),t.YNc(169,B,3,0,"button",76),t._uU(170,"\xa0\xa0 "),t.TgZ(171,"button",77),t.NdJ("click",function(){return i.onClearTeacher()}),t._uU(172,"\xa0 Clear"),t.qZA()()()()()()()()()()}if(2&e){const s=t.MAs(58);t.xp6(7),t.Q6J("selectedIndex",i.selectedIndex),t.xp6(3),t.Q6J("value",i.teacherList)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(16,E))("globalFilterFields",t.DdM(17,Q)),t.xp6(8),t.Q6J("formGroup",i.teacherRegistrationFormGroup),t.xp6(10),t.Q6J("ngIf",i.teacherRegistrationFormGroup.controls.studentName.errors&&i.teacherRegistrationFormGroup.controls.studentName.touched),t.xp6(20),t.Q6J("ngIf",i.teacherRegistrationFormGroup.controls.address.errors&&i.teacherRegistrationFormGroup.controls.address.touched),t.xp6(5),t.Q6J("matDatepicker",s),t.xp6(2),t.Q6J("ngIf",i.teacherRegistrationFormGroup.controls.dob.errors&&i.teacherRegistrationFormGroup.controls.dob.touched),t.xp6(1),t.Q6J("for",s),t.xp6(21),t.Q6J("items",i.stateList),t.xp6(18),t.Q6J("ngIf",i.teacherRegistrationFormGroup.controls.emailId.errors&&i.teacherRegistrationFormGroup.controls.emailId.touched),t.xp6(74),t.Q6J("ngIf",i.teacherRegistrationFormGroup.valid)}},dependencies:[d.O5,m.TO,m.KE,m.hX,m.R9,I.Hw,p.SP,p.uD,p.uX,v.Nt,_.w9,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.sg,a.u,h.iA,N.jx,h.lQ,h.fz,f.Hq,f.zx,A.o,g.Mq,g.hl,g.nW,d.uU],styles:[".header[_ngcontent-%COMP%]{background-color:#f8f1d7;color:#b80707!important;padding:.5em 1em;font-size:1.5em;margin:0;font-family:Impact,Haettenschweiler,Arial Narrow Bold,sans-serif;font-size:xx-large}  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit{background-color:#050505!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#050505!important}  .custom{color:#050505!important;font-size:medium!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#050505!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#050505!important;opacity:.8!important}  .mat-input-element{caret-color:#050505!important}  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element{caret-color:#050505!important}  .mat-form-field-label{color:#787676!important;font-size:large!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#050505!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#050505!important}    .mat-form-field .mat-input-element{color:#080808;font-size:medium}    .mat-form-field .mat-form-field-label{color:#0a0a0a;font-size:medium}    .mat-form-field .mat-form-field-underline{background-color:#04203b}    .mat-form-field .mat-form-field-ripple{background-color:#708090}    .mat-form-field .mat-form-field-required-marker{color:#be1509}    datepicker-value-example .mat-form-field-label{color:#43b2ee}    .mat-datepicker-toggle{color:#43b2ee}    .mat-form-field-underline{background:#43b2ee}  .organisation-details{font-size:medium;background-color:#f0e4791c;border-radius:10px;padding:10px;margin-bottom:10px}  .comname{font-size:2em;font-weight:800;letter-spacing:.1em;color:#100998}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.Bz.forChild(Y),T.Bz]}),o})();var H=n(4850),V=n(6338),z=n(8255),K=n(3683),X=n(3238),j=n(5362),W=n(1167),$=n(5121);let tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,P,m.lN,I.Ps,H.t,V.ie,z.Tx,K.g0,p.Nh,v.c,_.A0,a.u5,a.UX,h.U$,f.hJ,A.j,g.FA,X.XK,j.Qy,W.KZ,$.Z_]}),o})()}}]);