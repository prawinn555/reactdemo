(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[9],{109:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(4),i=n.n(o),c=n(0),s=n.n(c),l=n(5),u=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.striped,u=e.bordered,p=e.borderless,f=e.hover,d=e.size,m=e.variant,b=e.responsive,v=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=Object(l.b)(n,"table"),h=i()(o,E,m&&E+"-"+m,d&&E+"-"+d,c&&E+"-striped",u&&E+"-bordered",p&&E+"-borderless",f&&E+"-hover"),O=s.a.createElement("table",Object(a.a)({},v,{className:h,ref:t}));if(b){var j=E+"-responsive";return"string"===typeof b&&(j=j+"-"+b),s.a.createElement("div",{className:j},O)}return O}));t.a=u},110:function(e,t,n){"use strict";var a=n(27);function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var o=/([A-Z])/g;var i=/^ms-/;function c(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||r(e).getPropertyValue(c(t));Object.keys(t).forEach((function(r){var o=t[r];o||0===o?!function(e){return!(!e||!s.test(e))}(r)?n+=c(r)+": "+o+";":a+=r+"("+o+") ":e.style.removeProperty(c(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},118:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(4),i=n.n(o),c=n(29),s=n(110),l=n(8);c.a&&window;function u(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(l.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),o()}}var p=function(e,t,n){null==n&&(n=function(e){var t=Object(s.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var a=u(e,n),r=Object(l.a)(e,"transitionend",t);return function(){a(),r()}},f=n(0),d=n.n(f),m=n(28),b=(n(3),n(16)),v=n.n(b),E=!1,h=d.a.createContext(null),O=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,o=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?o?(r="exited",a.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:r},a.nextCallback=null,a}Object(m.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=v.a.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e,t){var n=this,a=this.props.enter,r=this.context?this.context.isMounting:t,o=this.getTimeouts(),i=r?o.appear:o.enter;!t&&!a||E?this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,r),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,r)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n&&!E?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=Object(r.a)(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"===typeof n)return d.a.createElement(h.Provider,{value:null},n(e,a));var o=d.a.Children.only(n);return d.a.createElement(h.Provider,{value:null},d.a.cloneElement(o,a))},t}(d.a.Component);function j(){}O.contextType=h,O.propTypes={},O.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j},O.UNMOUNTED=0,O.EXITED=1,O.ENTERING=2,O.ENTERED=3,O.EXITING=4;var x,g=O;var y=((x={}).entering="show",x.entered="show",x),w=d.a.forwardRef((function(e,t){var n=e.className,o=e.children,c=Object(r.a)(e,["className","children"]),s=Object(f.useCallback)((function(e){!function(e){e.offsetHeight}(e),c.onEnter&&c.onEnter(e)}),[c]);return d.a.createElement(g,Object(a.a)({ref:t,addEndListener:p},c,{onEnter:s}),(function(e,t){return d.a.cloneElement(o,Object(a.a)({},t,{className:i()("fade",n,o.props.className,y[e])}))}))}));w.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},w.displayName="Fade";t.a=w},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(27),r=n(0),o=function(e){var t;return"undefined"===typeof document?null:null==e?Object(a.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function i(e,t){var n=Object(r.useState)((function(){return o(e)})),a=n[0],i=n[1];if(!a){var c=o(e);c&&i(c)}return Object(r.useEffect)((function(){t&&a&&t(a)}),[t,a]),Object(r.useEffect)((function(){var t=o(e);t!==a&&i(t)}),[e,a]),a}},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}},230:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(28),i=n(32),c=n(0),s=n.n(c),l=n(31),u=n(154),p=Math.pow(2,31)-1;function f(){var e=Object(l.a)(),t=Object(c.useRef)();return Object(u.a)((function(){return clearTimeout(t.current)})),Object(c.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=p?t.current=setTimeout(a,r):function e(t,n,a){var r=a-Date.now();t.current=r<=p?setTimeout(n,r):setTimeout((function(){return e(t,n,a)}),p)}(t,a,Date.now()+r))},clear:n}}),[])}var d=n(30),m=(n(25),n(4)),b=n.n(m),v=n(3),E=n.n(v),h=n(16),O=n.n(h),j=n(17),x=n(7),g=n(34),y=n(22),w=n(35),C=n(152),N=s.a.forwardRef((function(e,t){var n,o,i=e.flip,l=e.placement,u=e.containerPadding,p=void 0===u?5:u,f=e.popperConfig,d=void 0===f?{}:f,m=e.transition,b=Object(j.a)(),v=b[0],E=b[1],h=Object(j.a)(),g=h[0],N=h[1],k=Object(x.a)(E,t),T=Object(C.a)(e.container),S=Object(C.a)(e.target),P=Object(c.useState)(!e.show),D=P[0],R=P[1],M=Object(y.b)(d.modifiers),L=Object(y.a)(S,v,Object(a.a)({},d,{placement:l||"bottom",modifiers:Object(a.a)({},M,{eventListeners:{enabled:!!e.show},preventOverflow:Object(a.a)({},M.preventOverflow,{options:Object(a.a)({padding:p||5},null==(n=M.preventOverflow)?void 0:n.options)}),arrow:Object(a.a)({},M.arrow,{enabled:!!g,options:Object(a.a)({},null==(o=M.arrow)?void 0:o.options,{element:g})}),flip:Object(a.a)({enabled:!!i},M.flip)})})),_=L.styles,F=L.arrowStyles,U=Object(r.a)(L,["styles","arrowStyles"]);e.show?D&&R(!1):e.transition||D||R(!0);var B=e.show||m&&!D;if(Object(w.a)(v,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!B)return null;var A=e.children(Object(a.a)({},U,{show:!!e.show,props:{style:_,ref:k},arrowProps:{style:F,ref:N}}));if(m){var H=e.onExit,I=e.onExiting,J=e.onEnter,X=e.onEntering,V=e.onEntered;A=s.a.createElement(m,{in:e.show,appear:!0,onExit:H,onExiting:I,onExited:function(){R(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:J,onEntering:X,onEntered:V},A)}return T?O.a.createPortal(A,T):null}));N.displayName="Overlay",N.propTypes={show:E.a.bool,placement:E.a.oneOf(g.b),target:E.a.any,container:E.a.any,flip:E.a.bool,children:E.a.func.isRequired,containerPadding:E.a.number,popperConfig:E.a.object,rootClose:E.a.bool,rootCloseEvent:E.a.oneOf(["click","mousedown"]),rootCloseDisabled:E.a.bool,onHide:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r;return e.rootClose?(r=E.a.func).isRequired.apply(r,[e].concat(n)):E.a.func.apply(E.a,[e].concat(n))},transition:E.a.elementType,onEnter:E.a.func,onEntering:E.a.func,onEntered:E.a.func,onExit:E.a.func,onExiting:E.a.func,onExited:E.a.func};var k=N,T=n(33),S=n(118),P={transition:S.a,rootClose:!1,show:!1,placement:"top"};function D(e){var t=e.children,n=e.transition,o=e.popperConfig,i=void 0===o?{}:o,l=Object(r.a)(e,["children","transition","popperConfig"]),u=Object(c.useRef)({}),p=Object(T.a)(),f=p[0],m=p[1];return n=!0===n?S.a:n||null,s.a.createElement(k,Object(a.a)({},l,{ref:f,popperConfig:Object(a.a)({},i,{modifiers:m.concat(i.modifiers||[])}),transition:n}),(function(e){var o=e.props,i=e.arrowProps,c=e.show,l=e.state,p=e.scheduleUpdate,f=e.placement,m=e.outOfBoundaries,v=Object(r.a)(e,["props","arrowProps","show","state","scheduleUpdate","placement","outOfBoundaries"]);!function(e,t){var n=e.ref,a=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(d.a)(e))}),t.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(d.a)(e))})}(o,i);var E=Object.assign(u.current,{state:l,scheduleUpdate:p,placement:f,outOfBoundaries:m});return"function"===typeof t?t(Object(a.a)({},v,{},o,{placement:f,show:c,popper:E,arrowProps:i})):s.a.cloneElement(t,Object(a.a)({},v,{},o,{placement:f,arrowProps:i,popper:E,className:b()(t.props.className,!n&&c&&"show"),style:Object(a.a)({},t.props.style,{},o.style)}))}))}D.defaultProps=P;var R=D,M=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return this.props.children},t}(s.a.Component);function L(e,t,n){var a=t.currentTarget,r=t.relatedTarget||t.nativeEvent[n];r&&r===a||Object(i.a)(a,r)||e(t)}function _(e){var t=e.trigger,n=e.overlay,o=e.children,i=e.popperConfig,l=void 0===i?{}:i,u=e.defaultShow,p=e.delay,m=e.placement,b=e.flip,v=void 0===b?m&&-1!==m.indexOf("auto"):b,E=Object(r.a)(e,["trigger","overlay","children","popperConfig","defaultShow","delay","placement","flip"]),h=Object(c.useRef)(null),O=f(),j=Object(c.useRef)(),x=Object(c.useState)(!!u),g=x[0],y=x[1],w=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(p),C=s.a.Children.only(o),N=C.props,k=N.onFocus,T=N.onBlur,S=N.onClick,P=Object(c.useCallback)((function(){return Object(d.a)(h.current)}),[]),D=Object(c.useCallback)((function(){O.clear(),j.current="show",w.show?O.set((function(){"show"===j.current&&y(!0)}),w.show):y(!0)}),[w.show,O]),_=Object(c.useCallback)((function(){O.clear(),j.current="hide",w.hide?O.set((function(){"hide"===j.current&&y(!1)}),w.hide):y(!1)}),[w.hide,O]),F=Object(c.useCallback)((function(e){D(e),k&&k(e)}),[D,k]),U=Object(c.useCallback)((function(e){_(e),T&&T(e)}),[_,T]),B=Object(c.useCallback)((function(e){y((function(e){return!e})),S&&S(e)}),[S]),A=Object(c.useCallback)((function(e){L(D,e,"fromElement")}),[D]),H=Object(c.useCallback)((function(e){L(_,e,"toElement")}),[_]),I={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){t.elements.reference.removeAttribute("aria-describedby")}},fn:function(e){var t=e.state.elements,n=t.popper,a=t.reference;if(g&&a){var r=n.getAttribute("role")||"";n.id&&"tooltip"===r.toLowerCase()&&a.setAttribute("aria-describedby",n.id)}}},J=null==t?[]:[].concat(t),X={};return-1!==J.indexOf("click")&&(X.onClick=B),-1!==J.indexOf("focus")&&(X.onFocus=F,X.onBlur=U),-1!==J.indexOf("hover")&&(X.onMouseOver=A,X.onMouseOut=H),s.a.createElement(s.a.Fragment,null,s.a.createElement(M,{ref:h},Object(c.cloneElement)(C,X)),s.a.createElement(R,Object(a.a)({},E,{popperConfig:Object(a.a)({},l,{modifiers:[I].concat(l.modifiers||[])}),show:g,onHide:_,target:P,placement:m,flip:v}),n))}_.defaultProps={defaultShow:!1,trigger:["hover","focus"]};t.a=_},231:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(4),i=n.n(o),c=n(0),s=n.n(c),l=(n(52),n(5)),u=s.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,c=e.bsPrefix,u=e.className,p=e.children,f=Object(r.a)(e,["as","bsPrefix","className","children"]);return c=Object(l.b)(c,"popover-header"),s.a.createElement(o,Object(a.a)({ref:t},f,{className:i()(c,u)}),p)})),p=s.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,c=e.bsPrefix,u=e.className,p=e.children,f=Object(r.a)(e,["as","bsPrefix","className","children"]);return c=Object(l.b)(c,"popover-body"),s.a.createElement(o,Object(a.a)({ref:t},f,{className:i()(u,c)}),p)})),f=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.placement,c=e.className,u=e.style,f=e.children,d=e.content,m=e.arrowProps,b=(e.popper,e.show,Object(r.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),v=Object(l.b)(n,"popover");return s.a.createElement("div",Object(a.a)({ref:t,role:"tooltip",style:u,"x-placement":o,className:i()(c,v,"bs-popover-"+o)},b),s.a.createElement("div",Object(a.a)({className:"arrow"},m,{style:m?Object(a.a)({},m.style,{margin:0}):void 0})),d?s.a.createElement(p,null,f):f)}));f.defaultProps={placement:"right"},f.Title=u,f.Content=p;t.a=f},51:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(0),r=n.n(a),o=n(109),i=n(26),c=n(230),s=n(231),l=n(83),u=n.n(l);function p(e){var t=e.movie,n=r.a.createElement(s.a,{id:"pop-".concat(t._id),className:"popFullPlot"},r.a.createElement(s.a.Title,{as:"h3"},"Full plot"),r.a.createElement(s.a.Content,null,t.fullplot));return r.a.createElement("div",{className:"px-2 py-2",key:"movie-".concat(t._id)},r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"px-2 py-2"},r.a.createElement(c.a,{placement:"right",overlay:n},r.a.createElement("span",{className:"action title"},t.title," (",t.year,")")),r.a.createElement(o.a,{className:"movieTable"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"poster"},t.poster&&r.a.createElement("img",{className:"img-fluid",src:t.poster,alt:t.poster})),r.a.createElement("td",{className:"movieInfo"},r.a.createElement("div",null,"Cast : ",t.cast&&t.cast.map((function(t,n){return r.a.createElement("span",{key:t},n>0&&r.a.createElement("span",null,",\xa0"),r.a.createElement("span",{className:"action cast",onClick:function(){return e.addLabel({type:"cast",value:t})}},t))}))),r.a.createElement("div",null,t.genres&&t.genres.map((function(t,n){return r.a.createElement("span",{key:t},n>0&&r.a.createElement("span",null,",\xa0"),r.a.createElement("span",{className:"action genre",onClick:function(){return e.addLabel({type:"genres",value:t})}},t))}))),t.directors&&r.a.createElement("div",null,"Directors : ",t.directors.join(", ")),r.a.createElement("div",null,t.countries&&t.countries.join(", "),"  ",t.languages&&"(".concat(t.languages.join(", "),")")),r.a.createElement("div",{className:"plot"},t.plot),r.a.createElement("div",{className:"py-2"},r.a.createElement(c.a,{trigger:"click",rootClose:!0,placement:"bottom",overlay:r.a.createElement(s.a,{id:"pop-json-".concat(t._id),className:"popMovieJson"},r.a.createElement(s.a.Title,{as:"h3"},"Json view"),r.a.createElement(s.a.Content,null,r.a.createElement(u.a,{displayDataTypes:!1,src:t})))},r.a.createElement(i.a,{variant:"light",className:"btnMovieJson"},"\ud83c\udf9e\ufe0f More data"))))))))))}}}]);
//# sourceMappingURL=9.f80586d9.chunk.js.map