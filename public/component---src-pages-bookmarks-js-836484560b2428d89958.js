(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JTam:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=a("ok1R"),c=a("rhny"),s=a("s9e1"),l=a("Bl7J"),u=a("WuCn"),m=a("ynlL"),i=a("nHBi"),d=a("vDqi"),f=a.n(d);t.default=function(){var e=Object(s.a)(),t=Object(o.useState)([]),a=t[0],d=t[1];return Object(o.useEffect)((function(){f.a.get("http://dojoyo.pythonanywhere.com/aggregatedbookmarks").then((function(e){console.log(e),d(e.data)})).catch((function(e){console.log("Request failed")}))}),[]),n.a.createElement(i.b,null,n.a.createElement(l.a,null,n.a.createElement(r.a,null,n.a.createElement(c.a,{md:"8"},n.a.createElement("h3",null,"Community Bookmark Activity"),n.a.createElement("div",{className:"commBookmarksContainer"},a.map((function(e,t){var a=e.count;return n.a.createElement("div",{className:"commBookmarks",key:t},n.a.createElement("div",{className:"commBookmarkItem"},a))}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(u.a,{data:e,title:"Your Bookmarks",isLocal:!0})),n.a.createElement(c.a,{md:"4"},n.a.createElement(m.a,null)))))}},ok1R:function(e,t,a){"use strict";var o=a("wx14"),n=a("zLVn"),r=a("q1tI"),c=a.n(r),s=a("TSYQ"),l=a.n(s),u=a("33Jr"),m=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,s=e.tag,m=e.form,i=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(t,a){var o=e[t];if(delete d[t],o){var n=!a;f.push(n?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var h=Object(u.e)(l()(t,r?"no-gutters":null,m?"form-row":"row",f),a);return c.a.createElement(s,Object(o.a)({},d,{className:h}))};m.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},t.a=m},rhny:function(e,t,a){"use strict";var o=a("wx14"),n=a("zLVn"),r=a("q1tI"),c=a.n(r),s=a("TSYQ"),l=a.n(s),u=a("33Jr"),m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},i=function(e){var t=e.className,a=e.cssModule,r=e.widths,s=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),d=[];r.forEach((function(t,o){var n=e[t];if(delete i[t],n||""===n){var r=!o;if(Object(u.d)(n)){var c,s=r?"-":"-"+t+"-",f=m(r,t,n.size);d.push(Object(u.e)(l()(((c={})[f]=n.size||""===n.size,c["order"+s+n.order]=n.order||0===n.order,c["offset"+s+n.offset]=n.offset||0===n.offset,c)),a))}else{var h=m(r,t,n);d.push(h)}}})),d.length||d.push("col");var f=Object(u.e)(l()(t,d),a);return c.a.createElement(s,Object(o.a)({},i,{className:f}))};i.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},t.a=i}}]);
//# sourceMappingURL=component---src-pages-bookmarks-js-836484560b2428d89958.js.map