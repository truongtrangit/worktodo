(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{36:function(e,t,a){e.exports=a(65)},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),o=a.n(l),c=(a(41),a(13)),s=a(14),i=a(16),u=a(15),m=a(10),d=a(33),p=a(34),f=a(1),g=a(12),E=a(3),h=a.n(E),v=a(18);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var N=function(e){Object(i.a)(a,e);var t=b(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(v.a)({},a,r))},n.onSubmit=function(e){var t=n.state,a=t.name,r=t.status;if(""===a)alert("You must fill work's name"),e.preventDefault();else if(""!==n.state._id){e.preventDefault();var l=n.state._id;n.props.editWork({_id:l,name:a,status:r}),n.resetValue(e)}else e.preventDefault(),n.props.AddNewWork({name:a,status:r}),n.resetValue(e)},n.resetValue=function(e){e.preventDefault(),n.setState({name:"",status:"Pending"})},n.state={_id:"",name:"",status:"Pending"},n}return Object(s.a)(a,[{key:"componentWillMount",value:function(){this.props.valueEditting&&this.setState({_id:this.props.valueEditting._id,name:this.props.valueEditting.name,status:this.props.valueEditting.status})}},{key:"render",value:function(){return r.a.createElement("div",{className:"panel panel-warning"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},""===this.state._id?"Add New Work":"Edit Work",r.a.createElement("span",{className:"fa fa-times-circle",style:{float:"right"},onClick:this.props.onCloseForm}))),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",className:"form-control",id:"",placeholder:"Work's Name",name:"name",value:this.state.name,onChange:this.onChange}),r.a.createElement("label",{style:{marginTop:10}},"Status:"),r.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},r.a.createElement("option",null,"Pending"),r.a.createElement("option",null,"Doing"),r.a.createElement("option",null,"Done"))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-success"}," ",r.a.createElement("i",{className:"fas fa-plus"})," ",""===this.state.id?"Add":"Save")," ","\xa0",r.a.createElement("button",{className:"btn btn-danger",onClick:this.resetValue},r.a.createElement("i",{className:"fas fa-trash-restore"})," Reset")))))}}]),a}(n.Component),w=a(4),k=function(e){var t=e.work,a=e.index;return r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",{scope:"row",style:{textAlign:"center"}},a+1),r.a.createElement("td",null,t.name),r.a.createElement("td",null,"Pending"===t.status?r.a.createElement("span",{className:"label label-danger",onClick:function(){return e.changeWorkStatus("Doing")}},t.status):"Doing"===t.status?r.a.createElement("span",{className:"label label-warning",onClick:function(){return e.changeWorkStatus("Done")}},t.status):r.a.createElement("span",{className:"label label-success",onClick:function(){return e.changeWorkStatus("Pending")}},t.status)),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:e.editWork}," ",r.a.createElement("i",{className:"fas fa-pencil-alt"})," Edit"),"\xa0 \xa0",r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e.deleteWork},r.a.createElement("i",{className:"far fa-trash-alt"})," Delete")))},y=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)("All"),s=Object(w.a)(c,2),i=s[0],u=s[1];return r.a.createElement("table",{className:"table table-bordered table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center"},"#"),r.a.createElement("th",{className:"text-center"},"Name"),r.a.createElement("th",{className:"text-center"},"Status"),r.a.createElement("th",{className:"text-center"}))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",name:"filterName",value:l,onChange:function(t){o(t.target.value),e.filter(t.target.value,i)}})),r.a.createElement("td",null,r.a.createElement("select",{className:"form-control",name:"filterStatus",value:i,onChange:function(t){u(t.target.value),e.filter(l,t.target.value)}},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Pending"},"Pending"),r.a.createElement("option",{value:"Doing"},"Doing"),r.a.createElement("option",{value:"Done"},"Done"))),r.a.createElement("td",null)),e.works.map((function(t,a){return r.a.createElement(k,{key:a,work:t,index:a,changeWorkStatus:function(a){return e.changeWorkStatus(t,a)},editWork:function(){return e.editWork(t)},deleteWork:function(){return e.deleteWork(t)}})}))))},S=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),l=a[0],o=a[1];return r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{name:"keywork",type:"text",className:"form-control",placeholder:"Type keyword",onChange:function(e){return o(e.target.value)}}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.searchByKeyword(l)}},r.a.createElement("i",{className:"fas fa-search"})," Search")))},C=function(e){return r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-warning dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Filter ",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},r.a.createElement("li",{onClick:function(){return e.onSort({by:"name",value:1})}},r.a.createElement("a",{role:"button",href:!0},r.a.createElement("i",{className:"fas fa-sort-alpha-down"})," Name A-Z")),r.a.createElement("li",{onClick:function(){return e.onSort({by:"name",value:-1})}},r.a.createElement("a",{role:"button",href:!0},r.a.createElement("i",{className:"fas fa-sort-alpha-down-alt"})," Name A-Z")),r.a.createElement("li",{role:"separator",className:"divider"}),r.a.createElement("li",{onClick:function(){return e.onSort({by:"status",value:"Pending"})}},r.a.createElement("a",{role:"button",href:!0},"Pending Status")),r.a.createElement("li",{onClick:function(){return e.onSort({by:"status",value:"Doing"})}},r.a.createElement("a",{role:"button",href:!0},"Doing Status")),r.a.createElement("li",{onClick:function(){return e.onSort({by:"status",value:"Done"})}},r.a.createElement("a",{role:"button",href:!0},"Done Status"))))},x=function(e){return r.a.createElement("div",{className:"row",style:{marginTop:15}},r.a.createElement("div",{className:"col-xs-5 col-sm-5 col-md-5 col-lg-5"},r.a.createElement(S,{searchByKeyword:function(t){return e.searchByKeyword(t)}})),r.a.createElement("div",{className:"col-xs-2 col-sm-2 col-md-2 col-lg-2"},r.a.createElement(C,{onSort:function(t){return e.onSort(t)}})),r.a.createElement("div",{className:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e.deleteCompleted},"DeleteCompleted")),r.a.createElement("div",{className:"col-xs-2 col-sm-2 col-md-2 col-lg-2"},r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e.deleteAll},"Delete All")))},O="http://100.26.249.85:8080/api",W=function(){return!!localStorage.getItem("token")},j=function(){return localStorage.getItem("token")},D=a(5),P=a.n(D),A=function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(void 0),s=Object(w.a)(c,2),i=s[0],u=s[1],m=Object(n.useState)(void 0),d=Object(w.a)(m,2),p=d[0],f=d[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"modal ".concat(l?"show":""),id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Update Password"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return o(!1)}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Old Password"),r.a.createElement("input",{type:"password",className:"form-control",value:i,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"New Password"),r.a.createElement("input",{type:"password",className:"form-control",value:p,onChange:function(e){return f(e.target.value)}}))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal",onClick:function(){return o(!1)}},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.awrap(P.a.post("".concat(O,"/updatePassword"),{oldPassword:i,newPassword:p},{headers:{Authorization:"Bearer ".concat(j())}}));case 2:!0===e.sent.data.success?(o(!1),u(""),f(""),alert("Changed password!!!")):(o(!1),u(""),f(""),alert("Cannot change your password, Please try again!!!"));case 4:case"end":return e.stop()}}),null,null,null,Promise)}},"Update Password"))))),r.a.createElement("div",{className:"btn-group",style:{display:"inline",justifyContent:"flex-start",marginTop:"1%"}},r.a.createElement("button",{type:"button",className:"btn btn-danger btn-lg  dropdown-toggle"},e.userInfo?e.userInfo.email:"")),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1%"}},r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-success btn-lg dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},e.userInfo?e.userInfo.name:""," ",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return o(!0)},style:{cursor:"pointer"},href:!0},"Update Password")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("UserInfo"),window.location="".concat("http://localhost:3000","/login"),e.resetLogin()},style:{cursor:"pointer"},href:!0},"Logout"))))))};function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var F=function(e){Object(i.a)(a,e);var t=B(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onToggleForm=function(){var e=n.state.isShowForm;n.setState({editingWork:null,isShowForm:!e})},n.onCloseForm=function(){n.setState({isShowForm:!1})},n.addNewWork=function(e){var t,a,r;return h.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.name,a=e.status,l.next=3,h.a.awrap(P.a.post("".concat(O,"/createNewWork"),{name:t,status:a},{headers:{Authorization:"Bearer ".concat(j())}}));case 3:return l.next=5,h.a.awrap(P.a.get("".concat(O,"/works"),{headers:{Authorization:"Bearer ".concat(j())}}));case 5:r=l.sent,n.setState({works:r.data}),n.onToggleForm(),n.setState({editingWork:null});case 9:case"end":return l.stop()}}),null,null,null,Promise)},n.changeWorkStatus=function(e,t){var a;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return(a=n.state.works).forEach((function(a){a===e&&(a.status=t)})),n.setState({works:a}),r.next=5,h.a.awrap(P.a.post("".concat(O,"/updateWork/").concat(e._id),{updData:{name:e.name,status:t}},{headers:{Authorization:"Bearer ".concat(j())}}));case 5:case"end":return r.stop()}}),null,null,null,Promise)},n.editWork=function(e){n.onToggleForm(),n.setState({editingWork:e})},n.deleteWork=function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(P.a.get("".concat(O,"/deleteWork/").concat(e._id),{headers:{Authorization:"Bearer ".concat(j())}}));case 2:(t=n.state.works).forEach((function(a,n){a===e&&t.splice(n,1)})),n.setState({works:t});case 5:case"end":return a.stop()}}),null,null,null,Promise)},n.handleDeleteCompleted=function(){return h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:P.a.get("".concat(O,"/deleteCompleted"),{headers:{Authorization:"Bearer ".concat(j())}}).then((function(e){!0===e.data.success&&(console.log(e),n.setState({works:e.data.works}))}));case 1:case"end":return e.stop()}}),null,null,null,Promise)},n.handleDeleteAll=function(){return h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.awrap(P.a.get("".concat(O,"/deleteAll"),{headers:{Authorization:"Bearer ".concat(j())}}));case 2:n.setState({works:[]});case 3:case"end":return e.stop()}}),null,null,null,Promise)},n.handleEditingWork=function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,h.a.awrap(P.a.post("".concat(O,"/updateWork/").concat(e._id),{updData:{name:e.name,status:e.status}},{headers:{Authorization:"Bearer ".concat(j())}}));case 3:return a.next=5,h.a.awrap(P.a.get("".concat(O,"/works"),{headers:{Authorization:"Bearer ".concat(j())}}));case 5:t=a.sent,n.setState({works:t.data}),n.onToggleForm(),n.setState({editingWork:null});case 9:case"end":return a.stop()}}),null,null,null,Promise)},n.onFilter=function(e,t){n.setState({filter:{filterName:e,filterStatus:t}})},n.state={works:[],isShowForm:!1,editingWork:null,keyword:"",sort:{by:"",value:1},isLogin:!1,user:null},n}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;localStorage&&P.a.get("".concat(O,"/works"),{headers:{Authorization:"Bearer ".concat(j())}}).then((function(t){e.setState({works:t.data,isLogin:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isShowForm,n=t.works,l=t.editingWork,o=t.filter,c=t.keyword,s=t.sort;return o&&(o.filterName&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(o.filterName.toLowerCase())}))),o.filterStatus&&(n=n.filter((function(e){return"All"===o.filterStatus?e:e.status===o.filterStatus})))),c&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(c.toLowerCase())}))),""!==s.by&&("name"===s.by?n.sort((function(e,t){return e.name>t.name?s.value:e.name<t.name?-s.value:0})):n=n.filter((function(e){return e.status===s.value}))),r.a.createElement("div",{className:"container"},r.a.createElement(A,{userInfo:JSON.parse(localStorage.getItem("UserInfo")),resetLogin:function(){return e.setState({isLogin:!1})}}),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"WORKS MANAGE")),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:a?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""},a?r.a.createElement(N,{onCloseForm:this.onCloseForm,AddNewWork:this.addNewWork,valueEditting:l,editWork:function(t){return e.handleEditingWork(t)}}):""),r.a.createElement("div",{className:a?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement("button",{className:"btn btn-success",onClick:this.onToggleForm},r.a.createElement("i",{className:"far fa-plus-square"})," \xa0 Add New Task"),r.a.createElement("div",{className:"row",style:{marginLeft:0}},r.a.createElement(x,{searchByKeyword:function(t){return e.setState({keyword:t})},onSort:function(t){return e.setState({sort:t})},deleteCompleted:this.handleDeleteCompleted,deleteAll:this.handleDeleteAll})),r.a.createElement("div",{className:"row",style:{marginTop:15}},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement(y,{works:n,changeWorkStatus:this.changeWorkStatus,editWork:this.editWork,deleteWork:this.deleteWork,filter:this.onFilter}))))))}}]),a}(n.Component),I=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(w.a)(o,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"wrap-login100"},r.a.createElement("form",{className:"login100-form validate-form"},r.a.createElement("span",{className:"login100-form-title p-b-26"},"Welcome"),r.a.createElement("span",{className:"login100-form-title p-b-48"},r.a.createElement("img",{alt:"",src:"./images/logo.png",style:{width:"30%",marginBottom:"-5%"}})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Valid email is: a@b.c"},r.a.createElement("input",{className:"input100",type:"text",name:"email",onChange:function(e){return l(e.target.value)}}),r.a.createElement("span",{className:"focus-input100","data-placeholder":"Email"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter password"},r.a.createElement("span",{className:"btn-show-pass"},r.a.createElement("i",{className:"zmdi zmdi-eye"})),r.a.createElement("input",{className:"input100",type:"password",name:"pass",onChange:function(e){return i(e.target.value)}}),r.a.createElement("span",{className:"focus-input100","data-placeholder":"Password"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{className:"login100-form-btn",onClick:function(e){e.preventDefault(),P.a.post("".concat(O,"/login"),{email:a,password:s}).then((function(e){(console.log(e),!0===e.data.success)?(!function(e,t){localStorage.setItem("token",e),console.log(t),localStorage.setItem("UserInfo",JSON.stringify(t))}(e.data.token,e.data.user),window.location="".concat("http://localhost:3000")):alert("Wrong email or password. Plz check again!!!")}))}},"Login"))),r.a.createElement("div",{className:"text-center p-t-115"},r.a.createElement("span",{className:"txt1"},"Don\u2019t have an account? "),r.a.createElement(g.b,{className:"txt2",to:"/sign-up"},"Sign Up"))))))},L=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),s=Object(w.a)(c,2),i=s[0],u=s[1],m=Object(n.useState)(""),d=Object(w.a)(m,2),p=d[0],f=d[1];return r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"wrap-login100"},r.a.createElement("form",{className:"login100-form validate-form"},r.a.createElement("span",{className:"login100-form-title p-b-26"},"Welcome"),r.a.createElement("span",{className:"login100-form-title p-b-48"},r.a.createElement("img",{alt:"",src:"./images/logo.png",style:{width:"30%",marginBottom:"-5%"}})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Valid email is: a@b.c"},r.a.createElement("input",{className:"input100",type:"text",name:"email",onChange:function(e){return o(e.target.value)}}),r.a.createElement("span",{className:"focus-input100","data-placeholder":"Email"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter password"},r.a.createElement("span",{className:"btn-show-pass"},r.a.createElement("i",{className:"zmdi zmdi-eye"})),r.a.createElement("input",{className:"input100",type:"password",name:"pass",onChange:function(e){return u(e.target.value)}}),r.a.createElement("span",{className:"focus-input100","data-placeholder":"Password"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter password"},r.a.createElement("input",{className:"input100",type:"text",name:"name",onChange:function(e){return f(e.target.value)}}),r.a.createElement("span",{className:"focus-input100","data-placeholder":"Your Name"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{className:"login100-form-btn",onClick:function(e){e.preventDefault(),P.a.post("".concat(O,"/signUp"),{email:l,password:i,name:p}).then((function(e){console.log(e),e.data._id?window.location="".concat("http://localhost:3000","/login"):alert("Cannot create account. Email existed in system. Plz check again!!!")}))}},"Create Account"))),r.a.createElement("div",{className:"text-center p-t-75"},r.a.createElement("span",{className:"txt1"},"Already have an account? "),r.a.createElement(g.b,{className:"txt2",to:"/login"},"Login"))))))},R=function(){return r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{class:"notfound"},r.a.createElement("div",{class:"notfound-404"},r.a.createElement("h1",null,"4",r.a.createElement("span",null),"4")),r.a.createElement("h2",null,"Oops! Page Not Be Found"),r.a.createElement("p",null,"Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"),r.a.createElement(g.b,{to:"/"},"Back to homepage")))};function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var T=function(e){var t=e.component,a=e.isLogin,n=Object(p.a)(e,["component","isLogin"]);return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object(d.a)({},e)):r.a.createElement(f.a,{to:"/login"})}}))},_=function(e){Object(i.a)(a,e);var t=z(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/login"},W()?r.a.createElement(f.a,{to:"/"}):r.a.createElement(I,null)),r.a.createElement(f.b,{path:"/sign-up"},W()?r.a.createElement(f.a,{to:"/"}):r.a.createElement(L,null)),r.a.createElement(T,{component:F,path:"/",exact:!0,isLogin:W()}),r.a.createElement(f.b,{component:R})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5148f6c3.chunk.js.map