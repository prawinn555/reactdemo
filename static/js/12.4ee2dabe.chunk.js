(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[12,26],{41:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(12),l=a(14),s=a(13),c=a(0),i=a.n(c),o=a(85),u=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).refAlert=i.a.createRef(),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.scrollToVisible()}},{key:"componentDidUpdate",value:function(){this.scrollToVisible()}},{key:"scrollToVisible",value:function(){this.props.alert&&this.refAlert&&this.refAlert.current.scrollIntoView()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.alert&&i.a.createElement(o.a,{variant:this.props.alertVariant,ref:this.refAlert},this.props.alert))}}]),a}(c.PureComponent);t.default=u},51:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(0),n=a.n(r),l=a(109),s=a(230),c=a(231),i=a(83),o=a.n(i);function u(e){var t=e.movie,a=n.a.createElement(c.a,{id:"pop-".concat(t._id),className:"popFullPlot"},n.a.createElement(c.a.Title,{as:"h3"},"Full plot"),n.a.createElement(c.a.Content,null,t.fullplot));return n.a.createElement("div",{className:"px-2 py-2",key:"movie-".concat(t._id)},n.a.createElement("div",{className:"movie"},n.a.createElement("div",{className:"px-2 py-2"},n.a.createElement(s.a,{placement:"right",overlay:a},n.a.createElement("span",{className:"action title"},t.title," (",t.year,")")),n.a.createElement(l.a,{className:"movieTable"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"poster"},t.poster&&n.a.createElement("img",{style:{width:"auto",height:"300px"},src:t.poster,alt:t.poster})),n.a.createElement("td",null,n.a.createElement("div",null,"Cast : ",t.cast&&t.cast.map((function(t,a){return n.a.createElement("span",{key:t},a>0&&n.a.createElement("span",null,",\xa0"),n.a.createElement("span",{className:"action cast",onClick:function(){return e.addLabel({type:"cast",value:t})}},t))}))),n.a.createElement("div",null,t.genres&&t.genres.map((function(t,a){return n.a.createElement("span",{key:t},a>0&&n.a.createElement("span",null,",\xa0"),n.a.createElement("span",{className:"action genre",onClick:function(){return e.addLabel({type:"genres",value:t})}},t))}))),t.directors&&n.a.createElement("div",null,"Directors : ",t.directors.join(", ")),n.a.createElement("div",null,t.countries&&t.countries.join(", "),"  ",t.languages&&"(".concat(t.languages.join(", "),")")),n.a.createElement("div",{className:"plot"},t.plot),n.a.createElement("div",{className:"py-2"},n.a.createElement(s.a,{trigger:"click",placement:"right",rootClose:!0,overlay:n.a.createElement(c.a,{id:"pop-json-".concat(t._id),className:"popMovieJson"},n.a.createElement(c.a.Title,{as:"h3"},"Json view"),n.a.createElement(c.a.Content,null,n.a.createElement(o.a,{displayDataTypes:!1,src:t})))},n.a.createElement("span",{role:"img",className:"action"},"\ud83c\udf9e\ufe0f More data"))))))))))}},58:function(e,t,a){"use strict";a.r(t);var r=a(588),n=a(79),l=a.n(n),s=a(80),c=a(11),i=a(12),o=a(14),u=a(13),m=a(0),h=a.n(m),d=a(84),p=a(27),f=a(88),v=a(41),y=a(83),E=a.n(y),b=a(89);function g(e,t){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(l.a.mark((function e(t,a){var r,n,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={filter:t||"{}",limit:a},console.log("findMovies ",r),n=new URL(b.a),Object.keys(r).forEach((function(e){return n.searchParams.append(e,r[e])})),e.next=6,fetch(n);case 6:return s=e.sent,e.next=9,s.json();case 9:return c=e.sent,console.log("result ",c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=a(15),k=a(51),C=(a(70),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.find=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.showInfo("Searching..."),e.prev=1,e.next=4,g(JSON.stringify(n.getQuery()),10);case 4:t=e.sent,n.setState({data:t}),a=t.count>10?" Only ".concat(10," results are shown"):"",t.count>=0?n.showSuccess("Found ".concat(t.count," movie(s) \n\t\t\t\t\t").concat(a)):n.showError("Error "+t.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.showError("Error "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),n.getQuery=function(){var e={};if(n.state.search_title.trim()&&(e.title="/".concat(n.state.search_title.trim(),"/")),n.state.search_cast.trim()&&(e.cast="/".concat(n.state.search_cast.trim(),"/")),n.state.search_year.trim()){var t=n.state.search_year.trim();t.startsWith("{")?e.year=Object(N.b)(Object(N.a)(t)):e.year=parseInt(t)}if(n.state.search_query.trim()){var a=n.state.search_query.trim();a=Object(N.b)(Object(N.a)(a)),Object.keys(a).forEach((function(t){return e[t]=a[t]}))}return n.addLabelsToQuery("cast",e),n.addLabelsToQuery("genres",e),n.setState({query:e}),e},n.addLabelsToQuery=function(e,t){var a=n.state.search_labels.filter((function(t){return t.type===e}));0!==a.length&&(t[e]={$in:a.map((function(e){return e.value}))})},n.addLabel=function(e){n.state.search_labels.find((function(t){return t.type===e.type&&t.value===e.value}))||n.setState({search_labels:[].concat(Object(r.a)(n.state.search_labels),[e])},n.find)},n.removeLabel=function(e){var t=n.state.search_labels.find((function(t){return t.type===e.type&&t.value===e.value}));t&&n.setState({search_labels:n.state.search_labels.filter((function(e){return!Object.is(e,t)}))},n.find)},n.showError=function(e){n.setState({alert:e,alertVariant:"danger"})},n.showWarn=function(e){n.setState({alert:e,alertVariant:"warning"})},n.showSuccess=function(e){n.setState({alert:e,alertVariant:"success",ready:!0})},n.showInfo=function(e){n.setState({alert:e,alertVariant:"info"})},n.state={alert:"What are you looking for?",alertVariant:"info",search_title:"",search_cast:"",search_year:"",search_query:"",search_labels:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"px-2"},h.a.createElement(v.default,{alert:this.state.alert,alertVariant:this.state.alertVariant}),h.a.createElement(d.a,null,h.a.createElement(f.a,{className:"mb-3"},h.a.createElement(f.a.Prepend,null,h.a.createElement(f.a.Text,{id:"fieldLabel-title"},"Title")),h.a.createElement(d.a.Control,{name:"search_title",value:this.state.search_title,placeholder:"Ex. devil",onChange:this.handleFormChange,"aria-describedby":"fieldLabel-title"})),h.a.createElement(f.a,{className:"mb-3"},h.a.createElement(f.a.Prepend,null,h.a.createElement(f.a.Text,{id:"fieldLabel-cast"},"Cast")),h.a.createElement(d.a.Control,{name:"search_cast",value:this.state.search_cast,placeholder:"Ex. tom cruise",onChange:this.handleFormChange,"aria-describedby":"fieldLabel-cast"})),h.a.createElement(f.a,{className:"mb-3"},h.a.createElement(f.a.Prepend,null,h.a.createElement(f.a.Text,{id:"fieldLabel-title"},"Year")),h.a.createElement(d.a.Control,{name:"search_year",value:this.state.search_year,placeholder:"Ex. 2014 or { $gt : 2014 } or { $gte : 2014 }",onChange:this.handleFormChange,"aria-describedby":"fieldLabel-year"})),h.a.createElement(f.a,{className:"mb-3"},h.a.createElement(f.a.Prepend,null,h.a.createElement(f.a.Text,{id:"fieldLabel-query"},"Other query in JSON")),h.a.createElement(d.a.Control,{name:"search_query",value:this.state.search_query,placeholder:"Ex. {directors:/spielberg/}",onChange:this.handleFormChange,"aria-describedby":"fieldLabel-query"})),h.a.createElement("div",{className:"py-2"},"Labels : ",this.state.search_labels.map((function(t){return h.a.createElement("span",{className:"px-2",key:"T-".concat(t.type,"-V-").concat(t.value)},h.a.createElement(p.a,{onClick:function(){return e.removeLabel(t)},className:"btn-sm",variant:"cast"===t.type?"outline-primary":"outline-success"},t.value," ",h.a.createElement("span",{role:"img"},"\u274e ")))}))),h.a.createElement(p.a,{variant:"primary",onClick:this.find},"Search")),this.state.query&&h.a.createElement("div",{className:"py-2"},h.a.createElement("div",null,"Query"),h.a.createElement(E.a,{displayDataTypes:!1,src:this.state.query,collapsed:!0})),this.state.data&&this.state.data.movies&&h.a.createElement("div",{className:"py-2"},this.state.data.movies.map((function(t){return h.a.createElement(k.default,{key:t._id,movie:t,addLabel:e.addLabel})}))))}}]),a}(m.PureComponent));t.default=C},70:function(e,t,a){},89:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r="https://generic-db.glitch.me/",n="https://verceltest-smoky.now.sh/api/movies"}}]);
//# sourceMappingURL=12.4ee2dabe.chunk.js.map