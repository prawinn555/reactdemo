(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[14],{120:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}return(0,s.default)(r)};var r,l=t(222),s=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},222:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,s,n){var i=l||"<<anonymous>>",o=n||r;if(null==t[r])return a?new Error("Required "+s+" `"+o+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),m=6;m<c;m++)d[m-6]=arguments[m];return e.apply(void 0,[t,r,i,s,o].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},54:function(e,a,t){"use strict";t.r(a);var r=t(11),l=t(12),s=t(14),n=t(13),i=t(0),o=t.n(i),c=t(88),d=t(26),m=t(83),u=t.n(m),f=function(e){Object(s.a)(t,e);var a=Object(n.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).handleFormChange=function(e){var a={};a[e.target.name]=e.target.value,l.setState(a),console.log("handleFormChange",a)},l.formatJson=function(){var e={};try{e=JSON.parse(l.state.jsonContent)}catch(a){e={err:""+a}}l.setState({formattedObject:e}),console.log("formatJson",e)},l.state={formattedObject:{},jsonContent:'{ "value" : "3" }'},l}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"px-2"},o.a.createElement(c.a,null,o.a.createElement(c.a.Group,{controlId:"jsonContent"},o.a.createElement(c.a.Label,null,"Json content"),o.a.createElement(c.a.Control,{as:"textarea",row:"5",name:"jsonContent",placeholder:'{ "value" : "3" }',onChange:this.handleFormChange,value:this.state.jsonContent})),o.a.createElement(d.a,{variant:"primary",onClick:this.formatJson},"Format")),o.a.createElement("div",{className:"py-2"},o.a.createElement(u.a,{displayDataTypes:!1,src:this.state.formattedObject})))}}]),t}(i.PureComponent);a.default=f},88:function(e,a,t){"use strict";var r=t(1),l=t(2),s=t(4),n=t.n(s),i=t(0),o=t.n(i),c=(t(120),t(3)),d=t.n(c),m={type:d.a.string.isRequired,as:d.a.elementType},u=o.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,i=e.className,c=e.type,d=Object(l.a)(e,["as","className","type"]);return o.a.createElement(s,Object(r.a)({},d,{ref:a,className:n()(i,c&&c+"-feedback")}))}));u.displayName="Feedback",u.propTypes=m,u.defaultProps={type:"valid"};var f=u,b=o.a.createContext({controlId:void 0}),v=t(5),p=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.isValid,u=e.isInvalid,f=e.isStatic,p=e.as,O=void 0===p?"input":p,j=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(i.useContext)(b),y=x.controlId,h=x.custom?[c,"custom-control-input"]:[s,"form-check-input"],N=h[0],P=h[1];return s=Object(v.b)(N,P),o.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,className:n()(d,s,m&&"is-valid",u&&"is-invalid",f&&"position-static")}))}));p.displayName="FormCheckInput",p.defaultProps={type:"checkbox"};var O=p,j=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(i.useContext)(b),f=u.controlId,p=u.custom?[s,"custom-control-label"]:[t,"form-check-label"],O=p[0],j=p[1];return t=Object(v.b)(O,j),o.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||f,className:n()(c,t)}))}));j.displayName="FormCheckLabel";var x=j,y=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.inline,m=e.disabled,u=e.isValid,p=e.isInvalid,j=e.feedback,y=e.className,h=e.style,N=e.title,P=e.type,C=e.label,E=e.children,F=e.custom,I=e.as,w=void 0===I?"input":I,g=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===P||F,R=k?[c,"custom-control"]:[s,"form-check"],V=R[0],L=R[1];s=Object(v.b)(V,L);var S=Object(i.useContext)(b).controlId,J=Object(i.useMemo)((function(){return{controlId:t||S,custom:k}}),[S,k,t]),M=null!=C&&!1!==C&&!E,_=o.a.createElement(O,Object(r.a)({},g,{type:"switch"===P?"checkbox":P,ref:a,isValid:u,isInvalid:p,isStatic:!M,disabled:m,as:w}));return o.a.createElement(b.Provider,{value:J},o.a.createElement("div",{style:h,className:n()(y,s,k&&"custom-"+P,d&&s+"-inline")},E||o.a.createElement(o.a.Fragment,null,_,M&&o.a.createElement(x,{title:N},C),(u||p)&&o.a.createElement(f,{type:u?"valid":"invalid"},j))))}));y.displayName="FormCheck",y.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},y.Input=O,y.Label=x;var h=y,N=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.isValid,u=e.isInvalid,f=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(i.useContext)(b),y=x.controlId,h=x.custom?[c,"custom-file-input"]:[s,"form-control-file"],N=h[0],P=h[1];return s=Object(v.b)(N,P),o.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,type:"file",lang:f,className:n()(d,s,m&&"is-valid",u&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,C=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(i.useContext)(b),f=u.controlId,p=u.custom?[s,"custom-file-label"]:[t,"form-file-label"],O=p[0],j=p[1];return t=Object(v.b)(O,j),o.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||f,className:n()(c,t),"data-browse":m["data-browse"]}))}));C.displayName="FormFileLabel";var E=C,F=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.disabled,m=e.isValid,u=e.isInvalid,p=e.feedback,O=e.className,j=e.style,x=e.label,y=e.children,h=e.custom,N=e.lang,C=e["data-browse"],F=e.as,I=void 0===F?"div":F,w=e.inputAs,g=void 0===w?"input":w,k=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),R=h?[c,"custom"]:[s,"form-file"],V=R[0],L=R[1];s=Object(v.b)(V,L);var S=Object(i.useContext)(b).controlId,J=Object(i.useMemo)((function(){return{controlId:t||S,custom:h}}),[S,h,t]),M=null!=x&&!1!==x&&!y,_=o.a.createElement(P,Object(r.a)({},k,{ref:a,isValid:m,isInvalid:u,disabled:d,as:g,lang:N}));return o.a.createElement(b.Provider,{value:J},o.a.createElement(I,{style:j,className:n()(O,s,h&&"custom-file")},y||o.a.createElement(o.a.Fragment,null,h?o.a.createElement(o.a.Fragment,null,_,M&&o.a.createElement(E,{"data-browse":C},x)):o.a.createElement(o.a.Fragment,null,M&&o.a.createElement(E,null,x),_),(m||u)&&o.a.createElement(f,{type:m?"valid":"invalid"},p))))}));F.displayName="FormFile",F.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},F.Input=P,F.Label=E;var I=F,w=(t(30),o.a.forwardRef((function(e,a){var t,s,c=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,u=e.size,f=e.id,p=e.className,O=e.isValid,j=e.isInvalid,x=e.plaintext,y=e.readOnly,h=e.custom,N=e.as,P=void 0===N?"input":N,C=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),E=Object(i.useContext)(b).controlId,F=h?[d,"custom"]:[c,"form-control"],I=F[0],w=F[1];if(c=Object(v.b)(I,w),x)(s={})[c+"-plaintext"]=!0,t=s;else if("file"===m){var g;(g={})[c+"-file"]=!0,t=g}else if("range"===m){var k;(k={})[c+"-range"]=!0,t=k}else if("select"===P&&h){var R;(R={})[c+"-select"]=!0,R[c+"-select-"+u]=u,t=R}else{var V;(V={})[c]=!0,V[c+"-"+u]=u,t=V}return o.a.createElement(P,Object(r.a)({},C,{type:m,ref:a,readOnly:y,id:f||E,className:n()(p,t,O&&"is-valid",j&&"is-invalid")}))})));w.displayName="FormControl",w.Feedback=f;var g=w,k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.children,d=e.controlId,m=e.as,u=void 0===m?"div":m,f=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.b)(t,"form-group");var p=Object(i.useMemo)((function(){return{controlId:d}}),[d]);return o.a.createElement(b.Provider,{value:p},o.a.createElement(u,Object(r.a)({},f,{ref:a,className:n()(s,t)}),c))}));k.displayName="FormGroup";var R=k,V=["xl","lg","md","sm","xs"],L=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,c=void 0===i?"div":i,d=Object(l.a)(e,["bsPrefix","className","as"]),m=Object(v.b)(t,"col"),u=[],f=[];return V.forEach((function(e){var a,t,r,l=d[e];if(delete d[e],null!=l&&"object"===typeof l){var s=l.span;a=void 0===s||s,t=l.offset,r=l.order}else a=l;var n="xs"!==e?"-"+e:"";null!=a&&u.push(!0===a?""+m+n:""+m+n+"-"+a),null!=r&&f.push("order"+n+"-"+r),null!=t&&f.push("offset"+n+"-"+t)})),u.length||u.push(m),o.a.createElement(c,Object(r.a)({},d,{ref:a,className:n.a.apply(void 0,[s].concat(u,f))}))}));L.displayName="Col";var S=L,J=o.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,c=e.bsPrefix,d=e.column,m=e.srOnly,u=e.className,f=e.htmlFor,p=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(i.useContext)(b).controlId;c=Object(v.b)(c,"form-label");var j="col-form-label";"string"===typeof d&&(j=j+"-"+d);var x=n()(u,c,m&&"sr-only",d&&j);return f=f||O,d?o.a.createElement(S,Object(r.a)({as:"label",className:x,htmlFor:f},p)):o.a.createElement(s,Object(r.a)({ref:a,className:x,htmlFor:f},p))}));J.displayName="FormLabel",J.defaultProps={column:!1,srOnly:!1};var M=J,_=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,c=void 0===i?"small":i,d=e.muted,m=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.b)(t,"form-text"),o.a.createElement(c,Object(r.a)({},m,{ref:a,className:n()(s,t,d&&"text-muted")}))}));_.displayName="FormText";var A=_,T=o.a.forwardRef((function(e,a){return o.a.createElement(h,Object(r.a)({},e,{ref:a,type:"switch"}))}));T.displayName="Switch",T.Input=h.Input,T.Label=h.Label;var q=T,G=t(22),z=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,i=e.className,c=e.validated,d=e.as,m=void 0===d?"form":d,u=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.b)(t,"form"),o.a.createElement(m,Object(r.a)({},u,{ref:a,className:n()(i,c&&"was-validated",s&&t+"-inline")}))}));z.displayName="Form",z.defaultProps={inline:!1},z.Row=Object(G.a)("form-row"),z.Group=R,z.Control=g,z.Check=h,z.File=I,z.Switch=q,z.Label=M,z.Text=A;a.a=z}}]);
//# sourceMappingURL=14.29ac6142.chunk.js.map