(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8jAD":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InlineIcon=t.Icon=void 0;var r,n=(r=o("q1tI"))&&r.__esModule?r:{default:r};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=0,s=/(-?[0-9.]*[0-9]+[0-9.]*)/g,u=/^-?[0-9.]*[0-9]+[0-9.]*$/g,c=["width","height","inline","hFlip","vFlip","flip","rotate","align","color","box"],d={left:0,top:0,width:16,height:16,rotate:0,hFlip:!1,vFlip:!1};var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t}var t,o,r;return t=e,r=[{key:"splitAttributes",value:function(e){var t={icon:Object.create(null),node:Object.create(null)};return Object.keys(e).forEach((function(o){t[-1===c.indexOf(o)?"node":"icon"][o]=e[o]})),t}},{key:"calculateDimension",value:function(e,t,o){if(1===t)return e;if(o=void 0===o?100:o,"number"==typeof e)return Math.ceil(e*t*o)/o;var r=e.split(s);if(null===r||!r.length)return null;for(var n,a=[],i=r.shift(),l=u.test(i);;){if(l?(n=parseFloat(i),isNaN(n)?a.push(i):a.push(Math.ceil(n*t*o)/o)):a.push(i),void 0===(i=r.shift()))return a.join("");l=!l}}},{key:"replaceIDs",value:function(e){var t,o,r=/\sid="(\S+)"/g,n=[];function a(e,t,o){for(var r=0;-1!==(r=o.indexOf(e,r));)o=o.slice(0,r)+t+o.slice(r+e.length),r+=t.length;return o}for(;t=r.exec(e);)n.push(t[1]);return n.length?(o="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",n.forEach((function(t){var r=o+l;l++,e=a('="'+t+'"','="'+r+'"',e),e=a('="#'+t+'"','="#'+r+'"',e),e=a("(#"+t+")","(#"+r+")",e)})),e):e}}],(o=[{key:"getAttributes",value:function(t){var o=this._item;"object"!==a(t)&&(t=Object.create(null));var r={horizontal:"center",vertical:"middle",slice:!1},n={rotate:o.rotate,hFlip:o.hFlip,vFlip:o.vFlip},i=Object.create(null),l=Object.create(null),s=!0===t.inline||"true"===t.inline||"1"===t.inline,u={left:o.left,top:s?o.inlineTop:o.top,width:o.width,height:s?o.inlineHeight:o.height};if(["hFlip","vFlip"].forEach((function(e){void 0===t[e]||!0!==t[e]&&"true"!==t[e]&&"1"!==t[e]||(n[e]=!n[e])})),void 0!==t.flip&&t.flip.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"horizontal":n.hFlip=!n.hFlip;break;case"vertical":n.vFlip=!n.vFlip}})),void 0!==t.rotate){var c=t.rotate;if("number"==typeof c)n.rotate+=c;else if("string"==typeof c){var d=c.replace(/^-?[0-9.]*/,"");if(""===d)c=parseInt(c),isNaN(c)||(n.rotate+=c);else if(d!==c){var h=!1;switch(d){case"%":h=25;break;case"deg":h=90}h&&(c=parseInt(c.slice(0,c.length-d.length)),isNaN(c)||(n.rotate+=Math.round(c/h)))}}}var m,p=[];switch(n.hFlip?n.vFlip?n.rotate+=2:(p.push("translate("+(u.width+u.left)+" "+(0-u.top)+")"),p.push("scale(-1 1)"),u.top=u.left=0):n.vFlip&&(p.push("translate("+(0-u.left)+" "+(u.height+u.top)+")"),p.push("scale(1 -1)"),u.top=u.left=0),n.rotate%4){case 1:m=u.height/2+u.top,p.unshift("rotate(90 "+m+" "+m+")"),0===u.left&&0===u.top||(m=u.left,u.left=u.top,u.top=m),u.width!==u.height&&(m=u.width,u.width=u.height,u.height=m);break;case 2:p.unshift("rotate(180 "+(u.width/2+u.left)+" "+(u.height/2+u.top)+")");break;case 3:m=u.width/2+u.left,p.unshift("rotate(-90 "+m+" "+m+")"),0===u.left&&0===u.top||(m=u.left,u.left=u.top,u.top=m),u.width!==u.height&&(m=u.width,u.width=u.height,u.height=m)}var v,f,g=t.width?t.width:null,b=t.height?t.height:null;null===g&&null===b&&(b="1em"),null!==g&&null!==b?(v=g,f=b):null!==g?(v=g,f=e.calculateDimension(v,u.height/u.width)):(f=b,v=e.calculateDimension(f,u.width/u.height)),!1!==v&&(l.width="auto"===v?u.width:v),!1!==f&&(l.height="auto"===f?u.height:f),s&&0!==o.verticalAlign&&(i["vertical-align"]=o.verticalAlign+"em"),void 0!==t.align&&t.align.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"left":case"right":case"center":r.horizontal=e;break;case"top":case"bottom":case"middle":r.vertical=e;break;case"crop":r.slice=!0;break;case"meet":r.slice=!1}})),l.preserveAspectRatio=function(e){var t;switch(e.horizontal){case"left":t="xMin";break;case"right":t="xMax";break;default:t="xMid"}switch(e.vertical){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet"}(r),l.viewBox=u.left+" "+u.top+" "+u.width+" "+u.height;var w=e.replaceIDs(o.body);return void 0!==t.color&&(w=w.replace(/currentColor/g,t.color)),p.length&&(w='<g transform="'+p.join(" ")+'">'+w+"</g>"),!0!==t.box&&"true"!==t.box&&"1"!==t.box||(w+='<rect x="'+u.left+'" y="'+u.top+'" width="'+u.width+'" height="'+u.height+'" fill="rgba(0, 0, 0, 0)" />'),{attributes:l,body:w,style:i}}},{key:"getSVG",value:function(t,o){var r=e.splitAttributes(t),n=this.getAttributes(r.icon),a='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';return o&&Object.keys(r.node).forEach((function(e){a+=" "+e+'="'+r.node[e]+'"'})),Object.keys(n.attributes).forEach((function(e){a+=" "+e+'="'+n.attributes[e]+'"'})),a+=' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);',Object.keys(n.style).forEach((function(e){a+=" "+e+": "+n.style[e]+";"})),t&&void 0!==t.style&&(a+=t.style),a+='">',a+=n.body+"</svg>"}}])&&i(t.prototype,o),r&&i(t,r),e}();function m(e,t){if("object"!==a(e.icon))return null;var o=h.splitAttributes(e),r=o.icon,i=o.node;delete i.icon,void 0===r.inline&&(r.inline=t);var l=new h(function(e){var t,o=Object.create(null);for(t in d)o[t]=d[t];for(t in e)o[t]=e[t];return void 0===o.inlineTop&&(o.inlineTop=o.top),void 0===o.inlineHeight&&(o.inlineHeight=o.height),void 0===o.verticalAlign&&(o.verticalAlign=o.height%7==0&&o.height%8!=0?-.143:-.125),o}(e.icon)).getAttributes(r),s={transform:"rotate(360deg)"};if(void 0!==l.style["vertical-align"]&&(s.verticalAlign=l.style["vertical-align"]),void 0!==e.style)for(var u in e.style)s[u]=e.style[u];var c,m={xmlns:"http://www.w3.org/2000/svg",focusable:!1,style:s};for(c in i)m[c]=i[c];for(c in l.attributes)m[c]=l.attributes[c];return m.dangerouslySetInnerHTML={__html:l.body},n.default.createElement("svg",m,null)}var p=function(e){return m(e,!1)};t.Icon=p;t.InlineIcon=function(e){return m(e,!0)};var v=p;t.default=v},"9mE6":function(e,t){t.__esModule=!0,t.default={body:'<path d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"/>',width:24,height:24}},CZVI:function(e,t,o){"use strict";var r=o("q1tI"),n=o.n(r),a=o("Wbzz"),i=o("BLzl"),l=o("/kxI"),s=o("ChEw"),u=o("x863"),c=o("sOKU"),d=o("2Te1"),h=o("nsn4"),m=o("nHBi"),p=(o("sg+I"),o("OSPL")),v=o("z0WU"),f=o("PJYZ"),g=o.n(f),b=o("VbXa"),w=o.n(b),E=o("lSNA"),_=o.n(E),y=o("8jAD"),C=o("9mE6"),T=o.n(C),A=o("zqQw"),M=o.n(A),L=o("sCTh"),P=o.n(L),k=o("qJpP"),O=o.n(k),S=o("oJqr"),N=o.n(S),D=o("GtMS"),V=o.n(D),I=o("OHh6"),R=o.n(I),U=o("WEVi"),x=o.n(U),F=o("sRb4"),B=o.n(F),z=o("gfl7"),j=o.n(z),W=o("pVnL"),J=o.n(W),H=function(e){switch(e){case"stacked":return"rhap_stacked";case"stacked-reverse":return"rhap_stacked-reverse";case"horizontal":return"rhap_horizontal";case"horizontal-reverse":return"rhap_horizontal-reverse";default:return"rhap_stacked"}},G=function(e){return e instanceof MouseEvent?e.clientX:e.touches[0].clientX},q=function(e){return e>9?e.toString():"0"+e},K=function(e,t,o){if(!isFinite(e))return null;var r=Math.floor(e/60),n=q(r),a=q(Math.floor(e%60)),i=q(Math.floor(r%60)),l=n+":"+a,s=Math.floor(r/60)+":"+i+":"+a;return"auto"===o?t>=3600?s:l:"mm:ss"===o?l:"hh:mm:ss"===o?s:void 0};function Y(e,t){var o=!1;return function(r){o||(e(r),o=!0,setTimeout((function(){return o=!1}),t))}}var X,Q=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r))||this,_()(g()(t),"audio",void 0),_()(g()(t),"timeOnMouseMove",0),_()(g()(t),"hasAddedAudioEventListener",!1),_()(g()(t),"downloadProgressAnimationTimer",void 0),_()(g()(t),"state",{isDraggingProgress:!1,currentTimePos:"0%",hasDownloadProgressAnimation:!1,downloadProgressArr:[],waitingForSeekCallback:!1}),_()(g()(t),"getCurrentProgress",(function(e){var o=t.props,r=o.audio,n=o.progressBar;if(0!==r.src.indexOf("blob:")&&void 0===t.props.srcDuration&&(!r.src||!isFinite(r.currentTime)||!n.current))return{currentTime:0,currentTimePos:"0%"};var a=n.current.getBoundingClientRect(),i=a.width,l=G(e)-a.left;return l<0?l=0:l>i&&(l=i),{currentTime:t.getDuration()*l/i,currentTimePos:(l/i*100).toFixed(2)+"%"}})),_()(g()(t),"handleContextMenu",(function(e){e.preventDefault()})),_()(g()(t),"handleMouseDownOrTouchStartProgressBar",(function(e){e.stopPropagation();var o=t.getCurrentProgress(e.nativeEvent),r=o.currentTime,n=o.currentTimePos;isFinite(r)&&(t.timeOnMouseMove=r,t.setState({isDraggingProgress:!0,currentTimePos:n}),e.nativeEvent instanceof MouseEvent?(window.addEventListener("mousemove",t.handleWindowMouseOrTouchMove),window.addEventListener("mouseup",t.handleWindowMouseOrTouchUp)):(window.addEventListener("touchmove",t.handleWindowMouseOrTouchMove),window.addEventListener("touchend",t.handleWindowMouseOrTouchUp)))})),_()(g()(t),"handleWindowMouseOrTouchMove",(function(e){e.preventDefault(),e.stopPropagation();var o=window.getSelection();if(o&&"Range"===o.type&&o.empty(),t.state.isDraggingProgress){var r=t.getCurrentProgress(e),n=r.currentTime,a=r.currentTimePos;t.timeOnMouseMove=n,t.setState({currentTimePos:a})}})),_()(g()(t),"handleWindowMouseOrTouchUp",(function(e){e.stopPropagation();var o=t.timeOnMouseMove,r=t.props.onSeek;r?t.setState({isDraggingProgress:!1,waitingForSeekCallback:!0},(function(){r(t.props.audio,o).then((function(){return t.setState({waitingForSeekCallback:!1})}))})):(isFinite(o)&&(t.props.audio.currentTime=o),t.setState({isDraggingProgress:!1})),e instanceof MouseEvent?(window.removeEventListener("mousemove",t.handleWindowMouseOrTouchMove),window.removeEventListener("mouseup",t.handleWindowMouseOrTouchUp)):(window.removeEventListener("touchmove",t.handleWindowMouseOrTouchMove),window.removeEventListener("touchend",t.handleWindowMouseOrTouchUp))})),_()(g()(t),"handleAudioTimeUpdate",Y((function(e){var o=t.state.isDraggingProgress,r=e.target;if(!o&&!0!==t.state.waitingForSeekCallback){var n=r.currentTime,a=t.getDuration();t.setState({currentTimePos:(n/a*100||0).toFixed(2)+"%"})}}),t.props.progressUpdateInterval)),_()(g()(t),"handleAudioDownloadProgressUpdate",(function(e){for(var o=e.target,r=t.getDuration(),n=[],a=0;a<o.buffered.length;a++){var i=o.buffered.start(a),l=o.buffered.end(a);n.push({left:(Math.round(100/r*i)||0)+"%",width:(Math.round(100/r*(l-i))||0)+"%"})}clearTimeout(t.downloadProgressAnimationTimer),t.setState({downloadProgressArr:n,hasDownloadProgressAnimation:!0}),t.downloadProgressAnimationTimer=setTimeout((function(){t.setState({hasDownloadProgressAnimation:!1})}),200)})),t}w()(t,e);var o=t.prototype;return o.getDuration=function(){var e=this.props,t=e.audio,o=e.srcDuration;return void 0===o?t.duration:o},o.componentDidUpdate=function(){var e=this.props.audio;e&&!this.hasAddedAudioEventListener&&(this.audio=e,this.hasAddedAudioEventListener=!0,e.addEventListener("timeupdate",this.handleAudioTimeUpdate),e.addEventListener("progress",this.handleAudioDownloadProgressUpdate))},o.componentWillUnmount=function(){this.audio&&this.hasAddedAudioEventListener&&(this.audio.removeEventListener("timeupdate",this.handleAudioTimeUpdate),this.audio.removeEventListener("progress",this.handleAudioDownloadProgressUpdate)),clearTimeout(this.downloadProgressAnimationTimer)},o.render=function(){var e=this.props,t=e.showDownloadProgress,o=e.showFilledProgress,r=e.progressBar,a=this.state,i=a.currentTimePos,l=a.downloadProgressArr,s=a.hasDownloadProgressAnimation;return n.a.createElement("div",{className:"rhap_progress-container",ref:r,"aria-label":"Audio Progress Control",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Number(i.split("%")[0]),tabIndex:0,onMouseDown:this.handleMouseDownOrTouchStartProgressBar,onTouchStart:this.handleMouseDownOrTouchStartProgressBar,onContextMenu:this.handleContextMenu},n.a.createElement("div",{className:"rhap_progress-bar "+(t?"rhap_progress-bar-show-download":"")},n.a.createElement("div",{className:"rhap_progress-indicator",style:{left:i}}),o&&n.a.createElement("div",{className:"rhap_progress-filled",style:{width:i}}),t&&l.map((function(e,t){var o=e.left,r=e.width;return n.a.createElement("div",{key:t,className:"rhap_download-progress",style:{left:o,width:r,transitionDuration:s?".2s":"0s"}})}))))},t}(r.Component),Z=Object(r.forwardRef)((function(e,t){return n.a.createElement(Q,J()({},e,{progressBar:t}))})),$=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r))||this,_()(g()(t),"audio",void 0),_()(g()(t),"hasAddedAudioEventListener",!1),_()(g()(t),"state",{currentTime:t.props.defaultCurrentTime}),_()(g()(t),"handleAudioCurrentTimeChange",(function(e){var o=e.target,r=t.props,n=r.isLeftTime,a=r.timeFormat,i=r.defaultCurrentTime;t.setState({currentTime:K(n?o.duration-o.currentTime:o.currentTime,o.duration,a)||i})})),t}w()(t,e);var o=t.prototype;return o.componentDidUpdate=function(){var e=this.props.audio;e&&!this.hasAddedAudioEventListener&&(this.audio=e,this.hasAddedAudioEventListener=!0,e.addEventListener("timeupdate",this.handleAudioCurrentTimeChange),e.addEventListener("loadedmetadata",this.handleAudioCurrentTimeChange))},o.componentWillUnmount=function(){this.audio&&this.hasAddedAudioEventListener&&(this.audio.removeEventListener("timeupdate",this.handleAudioCurrentTimeChange),this.audio.removeEventListener("loadedmetadata",this.handleAudioCurrentTimeChange))},o.render=function(){return this.state.currentTime},t}(r.PureComponent),ee=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r))||this,_()(g()(t),"audio",void 0),_()(g()(t),"hasAddedAudioEventListener",!1),_()(g()(t),"state",{duration:t.props.defaultDuration}),_()(g()(t),"handleAudioDurationChange",(function(e){var o=e.target,r=t.props,n=r.timeFormat,a=r.defaultDuration;t.setState({duration:K(o.duration,o.duration,n)||a})})),t}w()(t,e);var o=t.prototype;return o.componentDidUpdate=function(){var e=this.props.audio;e&&!this.hasAddedAudioEventListener&&(this.audio=e,this.hasAddedAudioEventListener=!0,e.addEventListener("durationchange",this.handleAudioDurationChange),e.addEventListener("abort",this.handleAudioDurationChange))},o.componentWillUnmount=function(){this.audio&&this.hasAddedAudioEventListener&&(this.audio.removeEventListener("durationchange",this.handleAudioDurationChange),this.audio.removeEventListener("abort",this.handleAudioDurationChange))},o.render=function(){return this.state.duration},t}(r.PureComponent),te=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,_()(g()(t),"audio",void 0),_()(g()(t),"hasAddedAudioEventListener",!1),_()(g()(t),"volumeBar",Object(r.createRef)()),_()(g()(t),"volumeAnimationTimer",0),_()(g()(t),"lastVolume",t.props.volume),_()(g()(t),"state",{currentVolumePos:(t.lastVolume/1*100||0).toFixed(2)+"%",hasVolumeAnimation:!1,isDraggingVolume:!1}),_()(g()(t),"getCurrentVolume",(function(e){var o=t.props.audio;if(!t.volumeBar.current)return{currentVolume:o.volume,currentVolumePos:t.state.currentVolumePos};var r,n,a=t.volumeBar.current.getBoundingClientRect(),i=a.width,l=G(e)-a.left;return l<0?(r=0,n="0%"):l>a.width?(r=1,n="100%"):(r=l/i,n=l/i*100+"%"),{currentVolume:r,currentVolumePos:n}})),_()(g()(t),"handleContextMenu",(function(e){e.preventDefault()})),_()(g()(t),"handleClickVolumeButton",(function(){var e=t.props.audio;e.volume>0?(t.lastVolume=e.volume,e.volume=0):e.volume=t.lastVolume})),_()(g()(t),"handleVolumnControlMouseOrTouchDown",(function(e){e.stopPropagation();var o=t.props.audio,r=t.getCurrentVolume(e.nativeEvent),n=r.currentVolume,a=r.currentVolumePos;o.volume=n,t.setState({isDraggingVolume:!0,currentVolumePos:a}),e.nativeEvent instanceof MouseEvent?(window.addEventListener("mousemove",t.handleWindowMouseOrTouchMove),window.addEventListener("mouseup",t.handleWindowMouseOrTouchUp)):(window.addEventListener("touchmove",t.handleWindowMouseOrTouchMove),window.addEventListener("touchend",t.handleWindowMouseOrTouchUp))})),_()(g()(t),"handleWindowMouseOrTouchMove",(function(e){e.preventDefault(),e.stopPropagation();var o=t.props.audio,r=window.getSelection();if(r&&"Range"===r.type&&r.empty(),t.state.isDraggingVolume){var n=t.getCurrentVolume(e),a=n.currentVolume,i=n.currentVolumePos;o.volume=a,t.setState({currentVolumePos:i})}})),_()(g()(t),"handleWindowMouseOrTouchUp",(function(e){e.stopPropagation(),t.setState({isDraggingVolume:!1}),e instanceof MouseEvent?(window.removeEventListener("mousemove",t.handleWindowMouseOrTouchMove),window.removeEventListener("mouseup",t.handleWindowMouseOrTouchUp)):(window.removeEventListener("touchmove",t.handleWindowMouseOrTouchMove),window.removeEventListener("touchend",t.handleWindowMouseOrTouchUp))})),_()(g()(t),"handleAudioVolumeChange",(function(e){var o=t.state.isDraggingVolume,r=e.target.volume;(t.lastVolume>0&&0===r||0===t.lastVolume&&r>0)&&t.props.onMuteChange(),t.lastVolume=r,o||(t.setState({hasVolumeAnimation:!0,currentVolumePos:(r/1*100||0).toFixed(2)+"%"}),clearTimeout(t.volumeAnimationTimer),t.volumeAnimationTimer=setTimeout((function(){t.setState({hasVolumeAnimation:!1})}),100))})),t}w()(t,e);var o=t.prototype;return o.componentDidUpdate=function(){var e=this.props.audio;e&&!this.hasAddedAudioEventListener&&(this.audio=e,this.hasAddedAudioEventListener=!0,e.addEventListener("volumechange",this.handleAudioVolumeChange))},o.componentWillUnmount=function(){this.audio&&this.hasAddedAudioEventListener&&this.audio.removeEventListener("volumechange",this.handleAudioVolumeChange),clearTimeout(this.volumeAnimationTimer)},o.render=function(){var e=this.props.audio,t=this.state,o=t.currentVolumePos,r=t.hasVolumeAnimation,a=(e||{}).volume;return n.a.createElement("div",{ref:this.volumeBar,onMouseDown:this.handleVolumnControlMouseOrTouchDown,onTouchStart:this.handleVolumnControlMouseOrTouchDown,onContextMenu:this.handleContextMenu,role:"progressbar","aria-label":"volume Control","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Number((100*a).toFixed(0)),tabIndex:0,className:"rhap_volume-bar-area"},n.a.createElement("div",{className:"rhap_volume-bar"},n.a.createElement("div",{className:"rhap_volume-indicator",style:{left:o,transitionDuration:r?".1s":"0s"}})))},t}(r.Component);!function(e){e.CURRENT_TIME="CURRENT_TIME",e.CURRENT_LEFT_TIME="CURRENT_LEFT_TIME",e.PROGRESS_BAR="PROGRESS_BAR",e.DURATION="DURATION",e.ADDITIONAL_CONTROLS="ADDITIONAL_CONTROLS",e.MAIN_CONTROLS="MAIN_CONTROLS",e.VOLUME_CONTROLS="VOLUME_CONTROLS",e.LOOP="LOOP",e.VOLUME="VOLUME"}(X||(X={}));var oe=function(e){function t(){for(var t,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,_()(g()(t),"audio",Object(r.createRef)()),_()(g()(t),"progressBar",Object(r.createRef)()),_()(g()(t),"container",Object(r.createRef)()),_()(g()(t),"lastVolume",t.props.volume),_()(g()(t),"listenTracker",void 0),_()(g()(t),"volumeAnimationTimer",void 0),_()(g()(t),"downloadProgressAnimationTimer",void 0),_()(g()(t),"togglePlay",(function(e){e.stopPropagation();var o=t.audio.current;o.paused&&o.src?t.playAudioPromise():o.paused||o.pause()})),_()(g()(t),"playAudioPromise",(function(){t.audio.current.play().then(null).catch((function(e){var o=t.props.onPlayError;o&&o(new Error(e))}))})),_()(g()(t),"isPlaying",(function(){var e=t.audio.current;return!!e&&(!e.paused&&!e.ended)})),_()(g()(t),"handlePlay",(function(e){t.forceUpdate(),t.props.onPlay&&t.props.onPlay(e)})),_()(g()(t),"handlePause",(function(e){t.audio&&(t.forceUpdate(),t.props.onPause&&t.props.onPause(e))})),_()(g()(t),"handleAbort",(function(e){t.props.onAbort&&t.props.onAbort(e)})),_()(g()(t),"handleClickVolumeButton",(function(){var e=t.audio.current;e.volume>0?(t.lastVolume=e.volume,e.volume=0):e.volume=t.lastVolume})),_()(g()(t),"handleMuteChange",(function(){t.forceUpdate()})),_()(g()(t),"handleClickLoopButton",(function(){t.audio.current.loop=!t.audio.current.loop,t.forceUpdate()})),_()(g()(t),"handleClickRewind",(function(){var e=t.props,o=e.progressJumpSteps,r=e.progressJumpStep,n=o.backward||r;t.setJumpTime(-n)})),_()(g()(t),"handleClickForward",(function(){var e=t.props,o=e.progressJumpSteps,r=e.progressJumpStep,n=o.forward||r;t.setJumpTime(n)})),_()(g()(t),"setJumpTime",(function(e){var o=t.audio.current,r=o.duration,n=o.currentTime;if(isFinite(r)&&isFinite(n)){var a=n+e/1e3;a<0?(o.currentTime=0,a=0):a>r?(o.currentTime=r,a=r):o.currentTime=a}})),_()(g()(t),"setJumpVolume",(function(e){var o=t.audio.current.volume+e;o<0?o=0:o>1&&(o=1),t.audio.current.volume=o})),_()(g()(t),"handleKeyDown",(function(e){switch(e.keyCode){case 32:e.target!==t.container.current&&e.target!==t.progressBar.current||(e.preventDefault(),t.togglePlay(e));break;case 37:t.handleClickRewind();break;case 39:t.handleClickForward();break;case 38:e.preventDefault(),t.setJumpVolume(t.props.volumeJumpStep);break;case 40:e.preventDefault(),t.setJumpVolume(-t.props.volumeJumpStep);break;case 76:t.handleClickLoopButton();break;case 77:t.handleClickVolumeButton()}})),_()(g()(t),"renderUIModules",(function(e){return e.map((function(e,o){return t.renderUIModule(e,o)}))})),_()(g()(t),"renderUIModule",(function(e,o){var a=t.props,i=a.defaultCurrentTime,l=a.progressUpdateInterval,s=a.showDownloadProgress,u=a.showFilledProgress,c=a.defaultDuration,d=a.customIcons,h=a.showSkipControls,m=a.onClickPrevious,p=a.onClickNext,v=a.showJumpControls,f=a.customAdditionalControls,g=a.customVolumeControls,b=a.muted,w=a.timeFormat,E=a.volume,_=a.loop,C=a.mse;switch(e){case X.CURRENT_TIME:return n.a.createElement("div",{key:o,id:"rhap_current-time",className:"rhap_time rhap_current-time"},n.a.createElement($,{audio:t.audio.current,isLeftTime:!1,defaultCurrentTime:i,timeFormat:w}));case X.CURRENT_LEFT_TIME:return n.a.createElement("div",{key:o,id:"rhap_current-left-time",className:"rhap_time rhap_current-left-time"},n.a.createElement($,{audio:t.audio.current,isLeftTime:!0,defaultCurrentTime:i,timeFormat:w}));case X.PROGRESS_BAR:return n.a.createElement(Z,{key:o,ref:t.progressBar,audio:t.audio.current,progressUpdateInterval:l,showDownloadProgress:s,showFilledProgress:u,onSeek:C&&C.onSeek,srcDuration:C&&C.srcDuration});case X.DURATION:return n.a.createElement("div",{key:o,className:"rhap_time rhap_total-time"},C&&C.srcDuration?K(C.srcDuration,C.srcDuration,t.props.timeFormat):n.a.createElement(ee,{audio:t.audio.current,defaultDuration:c,timeFormat:w}));case X.ADDITIONAL_CONTROLS:return n.a.createElement("div",{key:o,className:"rhap_additional-controls"},t.renderUIModules(f));case X.MAIN_CONTROLS:var A,L=t.isPlaying();return A=L?d.pause?d.pause:n.a.createElement(y.Icon,{icon:M.a}):d.play?d.play:n.a.createElement(y.Icon,{icon:T.a}),n.a.createElement("div",{key:o,className:"rhap_main-controls"},h&&n.a.createElement("button",{"aria-label":"Previous",className:"rhap_button-clear rhap_main-controls-button rhap_skip-button",type:"button",onClick:m},d.previous?d.previous:n.a.createElement(y.Icon,{icon:P.a})),v&&n.a.createElement("button",{"aria-label":"Rewind",className:"rhap_button-clear rhap_main-controls-button rhap_rewind-button",type:"button",onClick:t.handleClickRewind},d.rewind?d.rewind:n.a.createElement(y.Icon,{icon:V.a})),n.a.createElement("button",{"aria-label":L?"Pause":"Play",className:"rhap_button-clear rhap_main-controls-button rhap_play-pause-button",type:"button",onClick:t.togglePlay},A),v&&n.a.createElement("button",{"aria-label":"Forward",className:"rhap_button-clear rhap_main-controls-button rhap_forward-button",type:"button",onClick:t.handleClickForward},d.forward?d.forward:n.a.createElement(y.Icon,{icon:N.a})),h&&n.a.createElement("button",{"aria-label":"Skip",className:"rhap_button-clear rhap_main-controls-button rhap_skip-button",type:"button",onClick:p},d.next?d.next:n.a.createElement(y.Icon,{icon:O.a})));case X.VOLUME_CONTROLS:return n.a.createElement("div",{key:o,className:"rhap_volume-controls"},t.renderUIModules(g));case X.LOOP:var k,S=t.audio.current?t.audio.current.loop:_;return k=S?d.loop?d.loop:n.a.createElement(y.Icon,{icon:B.a}):d.loopOff?d.loopOff:n.a.createElement(y.Icon,{icon:j.a}),n.a.createElement("button",{key:o,"aria-label":S?"Enable Loop":"Disable Loop",className:"rhap_button-clear rhap_repeat-button",type:"button",onClick:t.handleClickLoopButton},k);case X.VOLUME:var D,I=(t.audio.current||{}).volume,U=void 0===I?b?0:E:I;return D=U?d.volume?d.volume:n.a.createElement(y.Icon,{icon:R.a}):d.volume?d.volumeMute:n.a.createElement(y.Icon,{icon:x.a}),n.a.createElement("div",{key:o,className:"rhap_volume-container"},n.a.createElement("button",{"aria-label":U?"Mute":"Unmute",onClick:t.handleClickVolumeButton,type:"button",className:"rhap_button-clear rhap_volume-button"},D),n.a.createElement(te,{audio:t.audio.current,volume:U,onMuteChange:t.handleMuteChange}));default:return Object(r.isValidElement)(e)?e.key?e:Object(r.cloneElement)(e,{key:o}):null}})),t}w()(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;this.forceUpdate();var t=this.audio.current;this.props.muted?t.volume=0:t.volume=this.lastVolume,t.addEventListener("error",(function(t){e.props.onError&&e.props.onError(t)})),t.addEventListener("canplay",(function(t){e.props.onCanPlay&&e.props.onCanPlay(t)})),t.addEventListener("canplaythrough",(function(t){e.props.onCanPlayThrough&&e.props.onCanPlayThrough(t)})),t.addEventListener("play",this.handlePlay),t.addEventListener("abort",this.handleAbort),t.addEventListener("ended",(function(t){e.props.onEnded&&e.props.onEnded(t)})),t.addEventListener("pause",this.handlePause),t.addEventListener("timeupdate",Y((function(t){e.props.onListen&&e.props.onListen(t)}),this.props.listenInterval)),t.addEventListener("volumechange",(function(t){e.props.onVolumeChange&&e.props.onVolumeChange(t)})),t.addEventListener("encrypted",(function(t){var o=e.props.mse;o&&o.onEcrypted&&o.onEcrypted(t)}))},o.componentDidUpdate=function(e){var t=this.props,o=t.src,r=t.autoPlayAfterSrcChange;e.src!==o&&(r?this.playAudioPromise():this.forceUpdate())},o.componentWillUnmount=function(){var e=this.audio.current;e&&(e.removeEventListener("play",this.handlePlay),e.removeEventListener("pause",this.handlePause),e.removeEventListener("abort",this.handleAbort),e.removeAttribute("src"),e.load())},o.render=function(){var e=this.props,t=e.className,o=e.src,r=e.loop,a=e.preload,i=e.autoPlay,l=e.crossOrigin,s=e.mediaGroup,u=e.header,c=e.footer,d=e.layout,h=e.customProgressBarSection,m=e.customControlsSection,p=e.children,v=e.style,f=this.audio.current?this.audio.current.loop:r;return n.a.createElement("div",{role:"group",tabIndex:0,"aria-label":"Audio Player",className:"rhap_container "+t,onKeyDown:this.handleKeyDown,ref:this.container,style:v},n.a.createElement("audio",{src:o,controls:!1,loop:f,autoPlay:i,preload:a,crossOrigin:l,mediaGroup:s,ref:this.audio},p),u&&n.a.createElement("div",{className:"rhap_header"},u),n.a.createElement("div",{className:"rhap_main "+H(d)},n.a.createElement("div",{className:"rhap_progress-section"},this.renderUIModules(h)),n.a.createElement("div",{className:"rhap_controls-section"},this.renderUIModules(m))),c&&n.a.createElement("div",{className:"rhap_footer"},c))},t}(r.Component);_()(oe,"defaultProps",{autoPlay:!1,autoPlayAfterSrcChange:!0,listenInterval:1e3,progressJumpStep:5e3,progressJumpSteps:{},volumeJumpStep:.1,loop:!1,muted:!1,preload:"auto",progressUpdateInterval:20,defaultCurrentTime:"--:--",defaultDuration:"--:--",timeFormat:"auto",volume:1,className:"",showJumpControls:!0,showSkipControls:!1,showDownloadProgress:!0,showFilledProgress:!0,customIcons:{},customProgressBarSection:[X.CURRENT_TIME,X.PROGRESS_BAR,X.DURATION],customControlsSection:[X.ADDITIONAL_CONTROLS,X.MAIN_CONTROLS,X.VOLUME_CONTROLS],customAdditionalControls:[X.LOOP],customVolumeControls:[X.VOLUME],layout:"stacked"});var re=oe,ne=(o("EBAg"),o("9eSz")),ae=o.n(ne),ie=[{bpm:126,chroma_stft:.54,neighbour_1:20200914012761,neighbour_2:20200919012766,rmse:.03,spectral_bandwidth:4141,spectral_centroid:5690,spectral_rolloff:9586,uid:20200913012760,zero_crossing_rate:.18},{bpm:123,chroma_stft:.56,neighbour_1:20200913012760,neighbour_2:20200915012762,rmse:.03,spectral_bandwidth:4088,spectral_centroid:5570,spectral_rolloff:9381,uid:20200914012761,zero_crossing_rate:.18},{bpm:123,chroma_stft:.41,neighbour_1:20200919012766,neighbour_2:20200920012767,rmse:.04,spectral_bandwidth:3843,spectral_centroid:5836,spectral_rolloff:9241,uid:20200915012762,zero_crossing_rate:.22},{bpm:126,chroma_stft:.43,neighbour_1:20200917012764,neighbour_2:20200915012762,rmse:.04,spectral_bandwidth:3705,spectral_centroid:5702,spectral_rolloff:8888,uid:20200916012763,zero_crossing_rate:.23},{bpm:123,chroma_stft:.44,neighbour_1:20200915012762,neighbour_2:20200919012766,rmse:.04,spectral_bandwidth:3708,spectral_centroid:5720,spectral_rolloff:8998,uid:20200917012764,zero_crossing_rate:.22},{bpm:120,chroma_stft:.42,neighbour_1:20200921012768,neighbour_2:20200915012762,rmse:.03,spectral_bandwidth:3914,spectral_centroid:6195,spectral_rolloff:9704,uid:20200918012765,zero_crossing_rate:.24},{bpm:123,chroma_stft:.4,neighbour_1:20200915012762,neighbour_2:20200920012767,rmse:.03,spectral_bandwidth:3846,spectral_centroid:5835,spectral_rolloff:9216,uid:20200919012766,zero_crossing_rate:.22},{bpm:123,chroma_stft:.36,neighbour_1:20200919012766,neighbour_2:20200921012768,rmse:.03,spectral_bandwidth:3839,spectral_centroid:5823,spectral_rolloff:9196,uid:20200920012767,zero_crossing_rate:.22},{bpm:123,chroma_stft:.35,neighbour_1:20200920012767,neighbour_2:20200919012766,rmse:.03,spectral_bandwidth:3844,spectral_centroid:5874,spectral_rolloff:9244,uid:20200921012768,zero_crossing_rate:.22},{bpm:123,chroma_stft:.33,neighbour_1:20200920012767,neighbour_2:20200919012766,rmse:.04,spectral_bandwidth:3686,spectral_centroid:5929,spectral_rolloff:9069,uid:20200922012769,zero_crossing_rate:.23}];t.a=function(e){var t=e.uid,o=e.title,f=e.author,g=e.slug,b=e.date,w=e.audio_url,E=e.palette,_=void 0===E?[]:E,y=e.tags,C=e.fluid,T=e.body,A=Object(r.useState)(!1),M=A[0],L=A[1],P=Object(r.useState)("Show Code"),k=P[0],O=P[1],S=Object(r.useContext)(m.a),N=S.bookmarks,D=S.handleBookmarks;N||(N=[]);var V=ie.find((function(e){return e.uid===t}))||null;return n.a.createElement(m.b,null,n.a.createElement(i.a,null,n.a.createElement(l.a,null,n.a.createElement("div",{className:"cardOverallContent"},n.a.createElement("div",{className:"cardTopContent"},n.a.createElement(ae.a,{className:"card-image-top",fluid:C,style:{width:"60px",height:"60px",marginRight:"10px"}}),n.a.createElement("div",{className:"cardTitleContent"},n.a.createElement(s.a,null,n.a.createElement(a.Link,{to:g},o)),n.a.createElement(u.a,null,n.a.createElement("span",{className:"text-info"},b)," by"," ",n.a.createElement("span",{className:"text-info"},f)))),n.a.createElement(c.a,{color:"primary",size:"sm",onClick:function(){D(t,o,y),Object(v.a)("http://dojoyo.pythonanywhere.com/mark",{item_id:t,item_type:N.find((function(e){return e.uid===t}))?"unbookmark":"bookmark"})},style:{marginBottom:"1rem",backgroundColor:N.find((function(e){return e.uid===t}))?"blue":"#8CFACA",color:"black",border:"1px solid grey",borderRadius:"50%",height:"40px",width:"40px",margin:"6px 0px"}},N.find((function(e){return e.uid===t}))?"🔖":"💾")),n.a.createElement("div",{className:"cardTags"},n.a.createElement("ul",{className:"postTags"},y.map((function(e){return n.a.createElement("li",{key:e},n.a.createElement(a.Link,{to:"/tag/"+Object(p.slugify)(e)},n.a.createElement(d.a,{color:"primary"},e)))})))),n.a.createElement("div",{className:"mainPlayerVisualContainer"},w?n.a.createElement(re,{src:w,onPlay:function(e){return console.log("onPlay")},customVolumeControls:[],customAdditionalControls:[]}):n.a.createElement(n.a.Fragment,null,n.a.createElement("h5",{className:"text-center"},"VJ Color Palette"),n.a.createElement("ul",{className:"paletteContainer1",style:{marginBottom:0}},_.map((function(e){return n.a.createElement("li",{key:e,style:{backgroundColor:e}},"")}))),n.a.createElement("ul",{className:"paletteContainer2",style:{marginBottom:0}},_.slice(0).reverse().map((function(e){return n.a.createElement("li",{key:e,style:{backgroundColor:e}},"")}))),n.a.createElement("ul",{className:"paletteContainer3",style:{marginBottom:0}},_.map((function(e){return n.a.createElement("li",{key:e,style:{backgroundColor:e}},"")}))),n.a.createElement("ul",{className:"paletteContainer4",style:{marginBottom:0}},_.slice(0).reverse().map((function(e){return n.a.createElement("li",{key:e,style:{backgroundColor:e}},"")}))))),n.a.createElement("div",{className:"jamsContainer"},n.a.createElement("div",{className:"text-center"},n.a.createElement(c.a,{color:"primary",size:"sm",onClick:function(){return L(!M)},style:{marginBottom:"1rem",backgroundColor:"#ff00ff",color:"black",border:"1px solid grey",margin:"10px 0"}},k)),n.a.createElement(h.a,{isOpen:M,onEntered:function(){return O("Hide Code")},onExited:function(){return O("Show Code")}},n.a.createElement("div",{className:"audioFeaturesBigContainer"},V?n.a.createElement("div",{className:"audioFeaturesContainer"},n.a.createElement("div",null,n.a.createElement("ul",{className:"audioFeatures"},n.a.createElement("li",null,"bpm: ",V.bpm.toString()),n.a.createElement("li",null,"stft: ",V.chroma_stft.toString()),n.a.createElement("li",null,"rmse: ",V.rmse.toString()),n.a.createElement("li",null,"crossing:"," ",V.zero_crossing_rate.toString()),n.a.createElement("li",null,"bandwidth:"," ",V.spectral_bandwidth.toString()),n.a.createElement("li",null,"centroid:"," ",V.spectral_centroid.toString()),n.a.createElement("li",null,"rolloff: ",V.spectral_rolloff.toString())))):""),n.a.createElement("div",{className:"code-block"},n.a.createElement(i.a,{className:"inner-code-block",dangerouslySetInnerHTML:{__html:"<div>"+T+"</div>"}})))),V?n.a.createElement("div",{className:"recommenderContainer"},n.a.createElement("h5",null,"Similar JAMS"),n.a.createElement("div",{className:"recos"},n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"reco_0"},n.a.createElement(re,{src:"https://confident-ritchie-5e6b2d.netlify.app/"+V.neighbour_1.toString()+".mp3",layout:"horizontal-reverse",showJumpControls:!1,customVolumeControls:[],customAdditionalControls:[],showDownloadProgress:!1,customProgressBarSection:[X.PROGRESS_BAR]}),n.a.createElement(a.Link,{to:"/"+V.neighbour_1}," info")),n.a.createElement("div",{className:"reco_1"},n.a.createElement(re,{src:"https://confident-ritchie-5e6b2d.netlify.app/"+V.neighbour_2.toString()+".mp3",layout:"horizontal-reverse",showJumpControls:!1,customVolumeControls:[],customAdditionalControls:[],showDownloadProgress:!1,customProgressBarSection:[X.PROGRESS_BAR]}),n.a.createElement(a.Link,{to:"/"+V.neighbour_2}," info"))))):"")))}},EBAg:function(e,t,o){},GtMS:function(e,t){t.__esModule=!0,t.default={body:'<path d="M11.5 12l8.5 6V6m-9 12V6l-8.5 6l8.5 6z" fill="currentColor"/>',width:24,height:24}},OHh6:function(e,t){t.__esModule=!0,t.default={body:'<path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77c0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z" fill="currentColor"/>',width:24,height:24}},WEVi:function(e,t){t.__esModule=!0,t.default={body:'<path d="M3 9h4l5-5v16l-5-5H3V9m13.59 3L14 9.41L15.41 8L18 10.59L20.59 8L22 9.41L19.41 12L22 14.59L20.59 16L18 13.41L15.41 16L14 14.59L16.59 12z" fill="currentColor"/>',width:24,height:24}},gfl7:function(e,t){t.__esModule=!0,t.default={body:'<path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3-3H7v3l-4-4l4-4v3h6.73L7 10.27V11H5V8.27l-3-3M17 13h2v4.18l-2-2V13m0-8V2l4 4l-4 4V7H8.82l-2-2H17z" fill="currentColor"/>',width:24,height:24}},lSNA:function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},oJqr:function(e,t){t.__esModule=!0,t.default={body:'<path d="M13 6v12l8.5-6M4 18l8.5-6L4 6v12z" fill="currentColor"/>',width:24,height:24}},qJpP:function(e,t){t.__esModule=!0,t.default={body:'<path d="M16 18h2V6h-2M6 18l8.5-6L6 6v12z" fill="currentColor"/>',width:24,height:24}},sCTh:function(e,t){t.__esModule=!0,t.default={body:'<path d="M6 18V6h2v12H6m3.5-6L18 6v12l-8.5-6z" fill="currentColor"/>',width:24,height:24}},sRb4:function(e,t){t.__esModule=!0,t.default={body:'<path d="M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2V7z" fill="currentColor"/>',width:24,height:24}},zqQw:function(e,t){t.__esModule=!0,t.default={body:'<path d="M15 16h-2V8h2m-4 8H9V8h2m1-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"/>',width:24,height:24}}}]);
//# sourceMappingURL=ce06b61fd9386aac67080e49e25bdbfc4445ef9a-af1f4546fbb54c7cdcfa.js.map