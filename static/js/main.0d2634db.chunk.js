(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[23],{15:function(e,a,n){"use strict";function t(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[.+*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function o(e){var a;if(!e)return null;try{a=JSON.parse(e)}catch(n){console.log("json invalide",n),a={jsonInvalide:""+n}}return console.log("formatJson",a),"object"===typeof a?a:{nonJsonData:""+a}}function r(){var e=function(e){return(e>9?"":"0")+e},a=new Date,n=a.getMonth()+1,t=e(a.getDate()),o=e(a.getHours()),r=e(a.getMinutes()),s=e(a.getSeconds());return[a.getFullYear(),n,t,"_",o,r,s].join("")}function s(e){var a=e.replace(/['"]?([$a-z0-9A-Z_]+)['"]?\s*:/g,'"$1":').replace(/['"]?(\/[\w\s]+\/)['"]?/gi,'"$1"');return e!==a&&console.log("correctedJson ",a),a}n.d(a,"c",(function(){return t})),n.d(a,"b",(function(){return o})),n.d(a,"d",(function(){return r})),n.d(a,"a",(function(){return s}))},59:function(e,a,n){e.exports=n(69)},66:function(e,a,n){var t={"./Alert/AutoFocusAlert":[41,9,12],"./Alert/AutoFocusAlert.js":[41,9,12],"./DynamicForm/DynamicFormChild":[42,9,2,18],"./DynamicForm/DynamicFormChild.js":[42,9,2,18],"./DynamicForm/EditCustomForm":[43,9,0,1,2,10,11],"./DynamicForm/EditCustomForm.js":[43,9,0,1,2,10,11],"./DynamicForm/JsonFormExample":[53,9,2,17],"./DynamicForm/JsonFormExample.js":[53,9,2,17],"./DynamicForm/SchemaForm":[44,9,19],"./DynamicForm/SchemaForm.js":[44,9,19],"./DynamicForm/data":[49,9,20],"./DynamicForm/data.js":[49,9,20],"./EditRawJson/EditRawJson":[47,9,0,1,9],"./EditRawJson/EditRawJson.js":[47,9,0,1,9],"./EditRawJson/data":[54,9,21],"./EditRawJson/data.js":[54,9,21],"./FormatJson/FormatJson":[55,9,0,14],"./FormatJson/FormatJson.js":[55,9,0,14],"./ManageData/ManageData":[56,9,0,1,2,3,6],"./ManageData/ManageData.js":[56,9,0,1,2,3,6],"./ManageData/ManageList":[48,9,0,1,2,3,7],"./ManageData/ManageList.js":[48,9,0,1,2,3,7],"./ManageData/ViewItem":[46,9,0,1,15],"./ManageData/ViewItem.js":[46,9,0,1,15],"./ManageForms/ManageForms":[57,9,0,1,2,3,5],"./ManageForms/ManageForms.js":[57,9,0,1,2,3,5],"./ManageForms/formCatalog":[50,9,22],"./ManageForms/formCatalog.js":[50,9,22],"./Modal/ConfirmModal":[45,9,3,13],"./Modal/ConfirmModal.js":[45,9,3,13],"./Movies/Movie":[51,9,0,4,16],"./Movies/Movie.js":[51,9,0,4,16],"./Movies/Movies":[58,9,0,1,4,8],"./Movies/Movies.css":[70,7,26],"./Movies/Movies.js":[58,9,0,1,4,8]};function o(e){if(!n.o(t,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=t[e],o=a[0];return Promise.all(a.slice(2).map(n.e)).then((function(){return n.t(o,a[1])}))}o.keys=function(){return Object.keys(t)},o.id=66,e.exports=o},67:function(e,a,n){},69:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(16),s=n.n(r),c=n(11),i=n(12),m=n(14),l=n(13),u=n(10),d=n(21),f=n.n(d),g=n(15),M=function(e){Object(m.a)(n,e);var a=Object(l.a)(n);function n(e){var t;Object(c.a)(this,n),(t=a.call(this,e)).menuListe=[["ManageData/ManageData","Manage your data"],["ManageForms/ManageForms","Manage your forms"],["Movies/Movies","Finding movies"],["FormatJson/FormatJson","Example : How to format Json"],["DynamicForm/JsonFormExample","Example : Dynamic form"]],t.state={menuItemText:""};var o=Object(g.c)("menu");console.log("menuKey",o);var r=t.menuListe.find((function(e){return e[0]===o}));return r&&(t.state.menuItemText=r[1]),console.log("baseurl",window.location.href.split("?")[0]),t}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container  py-2"},o.a.createElement("div",{className:"row"},f.a.rabbitFace,o.a.createElement("span",{className:"px-1"},"Welcome !!!"),o.a.createElement("a",{target:"__BLANK",href:"https://github.com/prawinn555/reactdemo/wiki",className:"px-1"}," please see Wiki"),f.a.rabbit,o.a.createElement(u.a,{className:"px-1"},o.a.createElement(u.a.Toggle,{variant:"primary",id:"dropdown-basic"},"Menu"),o.a.createElement(u.a.Menu,null,this.menuListe.map((function(e,a){return o.a.createElement(u.a.Item,{href:"#",onClick:function(){return window.location.href=window.location.href.split("?")[0]+"?menu="+e[0]},key:e[0]},e[1])})))),o.a.createElement("header",{className:"px-3"},this.state.menuItemText)))}}]),n}(t.PureComponent),p=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={module:null},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;n(66)("./".concat(this.props.path)).then((function(a){return e.setState({module:a.default})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.module;return o.a.createElement("div",null,e&&o.a.createElement(e,null))}}]),t}(t.Component);function v(e){var a=Object(g.c)("menu");return console.log("menu",a),o.a.createElement("div",{className:"p-3"},o.a.createElement(M,{selectedMenu:""}),o.a.createElement("hr",null),a&&o.a.createElement(p,{path:a}),!a&&o.a.createElement("div",null,"Please select a menu"))}n(67),n(68);s.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[59,24,25]]]);
//# sourceMappingURL=main.0d2634db.chunk.js.map