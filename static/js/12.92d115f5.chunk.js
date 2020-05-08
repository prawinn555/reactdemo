(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[12,21],{39:function(e,t,n){"use strict";n.r(t),n.d(t,"findItems",(function(){return c})),n.d(t,"findItemById",(function(){return l})),n.d(t,"deleteItemById",(function(){return f})),n.d(t,"saveItem",(function(){return d})),n.d(t,"formatJson",(function(){return m})),n.d(t,"getTimeStamp",(function(){return b}));var r=n(74),a=n.n(r),s=n(75),o=n(40);function c(e){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("filter with ".concat(t)),n="items"+(t?"?"+t:""),r=o.serviceUrl+n,e.next=5,fetch(r);case 5:return s=e.sent,e.next=8,s.json();case 8:return c=e.sent,console.log(n+" => ",c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("find by id ".concat(t)),n="items/"+t,r=o.serviceUrl+n,e.next=5,fetch(r);case 5:return s=e.sent,e.next=8,s.json();case 8:return c=e.sent,console.log(n+" => ",c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete by id ".concat(t)),n="items/"+t+"/delete",r=o.serviceUrl+n,e.next=5,fetch(r,{method:"DELETE",mode:"cors"});case 5:return s=e.sent,e.next=8,s.json();case 8:return c=e.sent,console.log(n+" => ",c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("save",t),n="items/save",r=o.serviceUrl+n,e.next=5,fetch(r,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(t)});case 5:return s=e.sent,e.next=8,s.json();case 8:return c=e.sent,console.log(n+" => ",c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var t;if(!e)return null;try{t=JSON.parse(e)}catch(n){console.log("json invalide",n),t={jsonInvalide:""+n}}return console.log("formatJson",t),"object"===typeof t?t:{nonJsonData:""+t}}function b(){var e=function(e){return(e>9?"":"0")+e},t=new Date,n=t.getMonth()+1,r=e(t.getDate()),a=e(t.getHours()),s=e(t.getMinutes()),o=e(t.getSeconds());return[t.getFullYear(),n,r,"_",a,s,o].join("")}},40:function(e,t,n){"use strict";n.r(t),n.d(t,"serviceUrl",(function(){return r}));var r="https://generic-db.glitch.me/"},41:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(12),s=n(14),o=n(13),c=n(0),i=n.n(c),l=n(79),u=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).refAlert=i.a.createRef(),a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.scrollToVisible()}},{key:"componentDidUpdate",value:function(){this.scrollToVisible()}},{key:"scrollToVisible",value:function(){this.props.alert&&this.refAlert&&this.refAlert.current.scrollIntoView()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.alert&&i.a.createElement(l.a,{variant:this.props.alertVariant,ref:this.refAlert},this.props.alert))}}]),n}(c.PureComponent);t.default=u},47:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n.r(t);var s=n(74),o=n.n(s),c=n(75),i=n(11),l=n(12),u=n(14),f=n(13),p=n(0),d=n.n(p),h=n(88),m=n(26),b=n(101),v=n(41),y=n(83),g=n.n(y),j=n(39),O=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleFormChange=function(e){var t={};t[e.target.name]=e.target.value,r.setState(t)},r.save=Object(c.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r.showInfo("Saving..."),t=Object(j.formatJson)(r.state.content),e.next=5,Object(j.saveItem)({id:r.state.id,type:r.state.type,description:r.state.description,content:r.state.content});case 5:n=e.sent,r.props.callbackRefresh&&r.props.callbackRefresh(),r.setState({formattedObject:t}),"OK"===n.status?r.showSuccess(n.message):r.showError(n.message),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),r.showError("Error "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),r.adjustRows=function(e){if(!e)return 3;var t=e.split("\n");return Math.min(t.length+1,10)},r.showError=function(e){r.setState({alert:e,alertVariant:"danger"})},r.showWarn=function(e){r.setState({alert:e,alertVariant:"warning"})},r.showSuccess=function(e){r.setState({alert:e,alertVariant:"success",ready:!0})},r.showInfo=function(e){r.setState({alert:e,alertVariant:"info"})},r.state={alert:"Loading...",alertVariant:"info"},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.props.itemId)Object(j.findItemById)(this.props.itemId).then((function(t){if(t.length>0){var n=Object(j.formatJson)(t[0].content);e.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t[0],{idReadOnly:!0,formattedObject:n})),e.showSuccess("")}else e.showError("Error : not found")}),(function(t){e.showError("Error while loading : "+t)}));else{this.setState({formattedObject:Object(j.formatJson)(""),id:"",description:"",content:"",type:this.props.objectType}),this.showSuccess("")}}},{key:"render",value:function(){return d.a.createElement("div",{className:"px-2"},d.a.createElement(v.default,{alert:this.state.alert,alertVariant:this.state.alertVariant}),this.state.ready&&d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,null,d.a.createElement(b.a,{className:"mb-3"},d.a.createElement(b.a.Prepend,null,d.a.createElement(b.a.Text,{id:"fieldLabel-id"},"Unique ID")),d.a.createElement(h.a.Control,{name:"id",value:this.state.id,placeholder:"required",onChange:this.handleFormChange,"aria-describedby":"fieldLabel-id",disabled:Boolean(this.state.idReadOnly)})),d.a.createElement(b.a,{className:"mb-3"},d.a.createElement(b.a.Prepend,null,d.a.createElement(b.a.Text,{id:"fieldLabel-description"},"Description")),d.a.createElement(h.a.Control,{name:"description",value:this.state.description?this.state.description:"",placeholder:"describe your data",onChange:this.handleFormChange,"aria-describedby":"fieldLabel-description"})),d.a.createElement(h.a.Group,{controlId:"content"},d.a.createElement(h.a.Label,null,"Json content"),d.a.createElement(h.a.Control,{as:"textarea",name:"content",rows:this.adjustRows(this.state.content),placeholder:'{ "value" : "3" }',onChange:this.handleFormChange,value:this.state.content?this.state.content:""})),d.a.createElement(m.a,{variant:"primary",onClick:this.save},"Save")),this.state.formattedObject&&d.a.createElement("div",{className:"py-2"},d.a.createElement("div",null,"Json view"),d.a.createElement(g.a,{displayDataTypes:!1,src:this.state.formattedObject}))))}}]),n}(p.PureComponent);t.default=O}}]);
//# sourceMappingURL=12.92d115f5.chunk.js.map