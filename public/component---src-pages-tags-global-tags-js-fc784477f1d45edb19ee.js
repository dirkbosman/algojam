(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2Te1":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("q1tI"),o=a.n(c),l=a("TSYQ"),s=a.n(l),i=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,c=e.color,l=e.innerRef,u=e.pill,b=e.tag,f=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(i.e)(s()(t,"badge","badge-"+c,!!u&&"badge-pill"),a);return f.href&&"span"===b&&(b="a"),o.a.createElement(b,Object(n.a)({},f,{className:p,ref:l}))};u.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=u},OSPL:function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},l01k:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("wx14"),o=a("zLVn"),l=a("TSYQ"),s=a.n(l),i=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,n=e.size,l=e.vertical,u=e.tag,b=Object(o.a)(e,["className","cssModule","size","vertical","tag"]),f=Object(i.e)(s()(t,!!n&&"btn-group-"+n,l?"btn-group-vertical":"btn-group"),a);return r.a.createElement(u,Object(c.a)({},b,{className:f}))};u.defaultProps={tag:"div",role:"group"};var b=u,f=a("sOKU"),p=a("2Te1"),m=(a("Bl7J"),a("Wbzz")),d=a("OSPL"),v="count",g="name",E=(t.default=function(e){var t=e.data,a=Object(n.useState)([]),c=a[0],o=a[1],l=Object(n.useState)(v),s=l[0],i=l[1];Object(n.useEffect)((function(){var e=E(t);o(h(e))}),[t.length]);var u=function(e){i(e),o(h(c,e))};return r.a.createElement("div",null,r.a.createElement("h3",null,"Community Tags "),r.a.createElement("div",{className:"cardTags"},r.a.createElement(b,null,r.a.createElement(f.a,{size:"sm",color:"primary",active:s===g,onClick:function(){return u(g)}},"Sort by Name"),r.a.createElement(f.a,{size:"sm",color:"primary",onClick:function(){return u(v)},active:s===v},"Sort by Count")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",{className:"postTags"},c.map((function(e){var t=e.name,a=e.count;return r.a.createElement("li",{key:t},r.a.createElement(m.Link,{to:"/tag/"+Object(d.slugify)(t),tabIndex:0},r.a.createElement(p.a,{color:"info"},t," (",a,")")))})))))},function(e){var t={};e.forEach((function(e){e.node.frontmatter.tags.forEach((function(e){if(t[e]){var a=t[e].count+1;t[e]={count:a}}else t[e]={count:1}}))}));var a=[];return Object.keys(t).forEach((function(e){a.push({name:e,count:t[e].count})})),a}),h=function(e,t){return t||(t=v),e.sort((function(e,a){return t===v?e.count<a.count?1:-1:a.name<e.name?1:-1}))}},sOKU:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("JX7q"),o=a("dI71"),l=a("q1tI"),s=a.n(l),i=a("TSYQ"),u=a.n(i),b=a("33Jr"),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(c.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],c=e.block,o=e.className,l=e.close,i=e.cssModule,f=e.color,p=e.outline,m=e.size,d=e.tag,v=e.innerRef,g=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&void 0===g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"×"));var E="btn"+(p?"-outline":"")+"-"+f,h=Object(b.e)(u()(o,{close:l},l||"btn",l||E,!!m&&"btn-"+m,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),i);g.href&&"button"===d&&(d="a");var O=l?"Close":null;return s.a.createElement(d,Object(n.a)({type:"button"===d&&g.onClick?"button":void 0},g,{className:h,ref:v,onClick:this.onClick,"aria-label":a||O}))},t}(s.a.Component);f.defaultProps={color:"secondary",tag:"button"},t.a=f}}]);
//# sourceMappingURL=component---src-pages-tags-global-tags-js-fc784477f1d45edb19ee.js.map