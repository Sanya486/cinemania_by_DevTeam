function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequired7c6=r),r("kyEFX").register(JSON.parse('{"2WPor":"catalog.76175fd8.js","hXtxB":"post-holder.c3208f8d.jpg","kZ1i9":"trailer-placeholder-1@1x.d36d622d.png","bLal4":"library.1a077f5e.js","6RgB0":"index.67bde10f.js"}')),r("kQlMt"),r("e9oz9");var a=r("2shzp");const o=new URLSearchParams({api_key:"3e1aa277fd6b8a3cd0a3e29dfce20a5c"});async function s(){try{return(await a.default.get(`https://api.themoviedb.org/3/genre/movie/list?${o}`)).data.genres}catch(t){throw new Error(t.message)}}r("aDtKJ"),r("4Q23v"),r("fgOKF");a=r("2shzp");const l=async(t=1)=>{try{const e=await a.default.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=3e1aa277fd6b8a3cd0a3e29dfce20a5c&page=${t}`);return{weeklyPage:e.data.page,weeklyTrendsList:e.data.results,weeklyTrendsPages:e.data.total_pages,weeklyTrendsTotal:e.data.total_results}}catch(t){console.log(t)}};r("lbZk7"),r("hy2MT"),r("ctBDl"),r("5WXxt"),r("jqxwP"),r("97pP7");var c,u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,v=m||g||Function("return this")(),y=Object.prototype.toString,_=Math.max,b=Math.min,x=function(){return v.Date.now()};function E(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function P(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(E(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=E(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=p.test(t);return n||d.test(t)?h(t.slice(2),n?2:8):f.test(t)?NaN:+t}c=function(t,e,n){var i,r,a,o,s,l,c=0,u=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=i,a=r;return i=r=void 0,c=e,o=t.apply(a,n)}function h(t){return c=t,s=setTimeout(g,e),u?d(t):o}function m(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-c>=a}function g(){var t=x();if(m(t))return v(t);s=setTimeout(g,function(t){var n=e-(t-l);return f?b(n,a-(t-c)):n}(t))}function v(t){return s=void 0,p&&i?d(t):(i=r=void 0,o)}function y(){var t=x(),n=m(t);if(i=arguments,r=this,l=t,n){if(void 0===s)return h(l);if(f)return s=setTimeout(g,e),d(l)}return void 0===s&&(s=setTimeout(g,e)),o}return e=P(e)||0,E(n)&&(u=!!n.leading,a=(f="maxWait"in n)?_(P(n.maxWait)||0,e):a,p="trailing"in n?!!n.trailing:p),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=r=s=void 0},y.flush=function(){return void 0===s?o:v(x())},y};const w={inputEl:document.querySelector(".input-film-name-search-form"),closeBtnEl:document.querySelector(".input-close-svg")};w.inputEl.addEventListener("input",t(c)((function(t){""!==t.target.value?w.closeBtnEl.classList.remove("hidden"):w.closeBtnEl.classList.add("hidden")}),300)),w.closeBtnEl.addEventListener("click",(function(t){w.inputEl.value="",w.closeBtnEl.classList.add("hidden")}));(()=>{let t=[];for(let e=(new Date).getFullYear();e>=1896;--e)t.push(e);t.map((t=>`<option value="${t}">${t}</option>`)).join("")})();var L,M=r("e9oz9"),S=r("59yTk");function C(e){try{const n=[];e.genre_ids.forEach((t=>t?n.push(t.name):void 0));const i=e.id,r=e.poster_path;let a;const o=n.join(", "),s=e.release_date;let l,c="";const u=(0,S.rateArray)(Math.round(e.vote_average));l=r?"https://image.tmdb.org/t/p/original"+r:t(L),a=e.title?e.title:e.name,c=s?s.slice(0,4):e.first_air_date.slice(0,4);const f=u.map((t=>`<li class="rating-item">\n              <img class="rating-icon" src="${t}" alt="">\n              </li>`)).join("");return`\n    <li class="film-card" id="${i}">\n    <div class="img-ovelay"></div>\n    <img class ="film-poster" src="${l}" alt="${a}, ${c}, ${o}">\n    <div class="film-card-info">\n    <p class="film-name">${a}</p>\n    <div class="film-wrap">\n      <p class="film-feature">${o} | ${c}</p>\n      <ul class="film-rating">${f}</ul>\n    </div>\n  </div>\n</li> `}catch(e){return console.log(e),`\n<li class="film-card">\n<img src="${t(L)}" alt="">\n </li>`}}L=new URL(r("kyEFX").resolve("hXtxB"),import.meta.url).toString();var T;T=new URL(r("kyEFX").resolve("kZ1i9"),import.meta.url).toString();var k,B=r("aDtKJ"),I={};window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
k=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,r,a,o=Object.prototype.hasOwnProperty;for(r=1,a=arguments.length;r<a;r+=1)for(i in n=arguments[r])o.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),r=n(17),a=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):a(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var r,a;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(a=e.length,r=n;n>=0&&r<a;r+=1)if(e[r]===t)return r;return-1}},function(t,e,n){var i=n(29),r=n(30),a=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=a(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),r=n(7),a=n(0),o=n(1),s=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=r({init:function(t,e){this._options=a({},c,e),this._currentPage=0,this._view=new s(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),a=this._getEdge(t);return e.leftPageNumber=a.left,e.rightPageNumber=a.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,r=this._getLastPage(),a=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(a/2),(n=(e=Math.max(t-i,1))+a-1)>r&&(e=Math.max(r-a+1,1),n=r)):(e=(o-1)*a+1,n=o*a,n=Math.min(n,r)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){var i=n(0),r=n(14),a=n(4),o=n(16),s=n(2),l=n(5),c=n(3),u=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){i(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var i=this;a(t)?(t=t.split(u),c(t,(function(t){i._bindEvent(t,e,n)}))):o(t)&&(n=e,c(t,(function(t,e){i.on(e,t,n)})))},f.prototype.once=function(t,e,n){var i=this;if(o(t))return n=e,void c(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function r(){e.apply(n,arguments),i.off(t,r,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},f.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,a=e===i.context,o=r&&a;return o&&n._forgetContext(i.context),o}},f.prototype._offByEventName=function(t,e){var n=this,i=l(e),r=n._matchHandler(e);t=t.split(u),c(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?c(t,(function(t,e){i.off(e,t)})):a(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},f.prototype.off=function(t,e){a(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),r=n(7),a=n(21),o=n(22),s=n(24),l=n(25),c=n(0),u=n(4),f=n(28),p=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(m,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||l(e,this._firstItemClassName),n!==r||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,i,r=a(e);s(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!p.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),r=n(3),a=n(23);function o(t,e,n,i){function o(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,i){var o=a(t,e),s=!1;r(o,(function(t){return t.handler!==n||(s=!0,!1)})),s||o.push({handler:n,wrappedHandler:i})}(t,e,n,o)}t.exports=function(t,e,n,a){i(e)?r(e.split(/\s+/g),(function(e){o(t,e,n,a)})):r(e,(function(e,i){o(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),r=n(8),a=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,l=[];s?i(n,(function(e){t.classList.add(e)})):((e=a(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){r(t,l)<0&&l.push(t)})),o(t,l))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),r=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),r=n(3),a=n(2),o=n(4),s=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,d=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],a=0,o=0;return r(e,(function(t,r){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(o,r)),o=r+1)})),i.push(e.slice(o)),{exps:n,sourcesInsideIf:i}}(t,e),a=!1,o="";return r(i.exps,(function(t,e){return(a=b(t,n))&&(o=x(i.sourcesInsideIf[e],n)),!a})),o},each:function(t,e,n){var i=b(t,n),o=a(i)?"@index":"@key",l={},c="";return r(i,(function(t,i){l[o]=i,l["@this"]=t,s(n,l),c+=x(e.slice(),n)})),c},with:function(t,e,n){var r=i("as",t),a=t[r+1],o=b(t.slice(0,r),n),l={};return l[a]=o,x(e,s(n,l))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],a=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(a,i)),a=i+n[0].length,n=e.exec(t);return r.push(t.slice(a)),r};function y(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):c.test(t)?i=y((n=t.split(u))[0],e)[y(n[1],e)]:f.test(t)?i=y((n=t.split(p))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function _(t,e,n){for(var i,r,a,s,l=g[t],c=1,u=2,f=e[u];c&&o(f);)0===f.indexOf(t)?c+=1:0===f.indexOf("/"+t)&&(c-=1,i=u),f=e[u+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(r=0,a=i,(s=e.splice(r+1,a-r)).pop(),s),n),e}function b(t,e){var n=y(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return r(e,(function(t){i.push(y(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,r,a=1,s=t[a];o(s);)i=(n=s.split(" "))[0],g[i]?(r=_(i,t.splice(a,t.length-a),e),t=t.concat(r)):t[a]=b(n,e),s=t[a+=2];return t.join("")}t.exports=function(t,e){return x(v(t,l),e)}},function(t,e,n){var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(a);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,(function(t,e){r+="&"+e+"="+t})),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},I=k();var N=r("4Q23v");const O={heroContainer:document.querySelector(".home-hero > .container"),trailerModal:document.querySelector(".trailer-modal-backdrop"),trailerModalContent:document.querySelector(".trailer-modal-content"),moreDetail:document.querySelector(".modal-film-info"),wrap:document.querySelector(".flex"),closeModalBtn:document.querySelector(".modal-film-info .close-modal"),closeTrailerBtn:document.querySelector(".close-trailer-btn"),homeTrendsList:document.querySelector(".home-trends-list"),body:document.querySelector("body"),scrollUpBtn:document.querySelector("#back-to-top"),cardListSearchResult:document.querySelector(".card-list-search-result"),paginationEl:document.querySelector(".tui-pagination"),searchResult:document.querySelector(".search-result")};let H,$,j=[],A=localStorage.getItem("films-id-array");const R=document.body.clientWidth;document.querySelector(".card-list-search-result"),document.querySelector(".year-of-film-search-form");O.closeModalBtn.addEventListener("click",K),window.addEventListener("load",async function(e){try{const n=await s();let i=await l(e),r=i.weeklyTrendsList.map((t=>t.genre_ids.map((t=>n.find((e=>e.id===t))))));i.weeklyTrendsList.forEach(((t,e)=>t.genre_ids=r[e])),i.weeklyTrendsList.forEach((t=>{O.cardListSearchResult.insertAdjacentHTML("beforeend",C(t))})),O.cardListSearchResult.addEventListener("click",(e=>{var n;e.target!==e.currentTarget&&(H=+e.target.parentNode.id,n=H,O.moreDetail.classList.remove("is-hidden"),async function(e){try{const n="https://image.tmdb.org/t/p/original";let i;const r=await(0,M.fetchMovieDetails)(e);i=r.smallPoster?n+r.smallPoster:t(L);const a=`<div class="poster"> \n          <img src="${i}" class="poster-img" alt="the poster of the movie you have chosen"/>\n        </div><div>\n          <h3 class="movie-title">${r.title}</h3><div class="movie-info">\n            <div class="info">\n              <ul class="film-info-list">\n                <li><p class="film-info-item-text">Vote / Votes</p></li>\n                <li><p class="film-info-item-text">Popularity</p></li>\n                <li><p class="film-info-item-text">Genre</p></li>\n              </ul>\n            </div><div class="params">\n              <ul class="film=info-params-list">\n                <li><p class="film-info-params-vote"><span class="film-info-params-vote-number">${r.voteAverage.toFixed(1)}</span> / <span class="film-info-params-vote-number">${r.voteCount}</span></p>\n                </li>\n                <li><p class="popularity">${r.popularity.toFixed(1)}</p></li>\n                <li><p class="genre">${r.genres}</p></li>  \n              </ul>  \n            </div>\n          </div><div class="about">\n            <p>About</p>\n            <p>${r.overview}</p>\n          </div><div class="btn-list">\n            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller" data-id="${e}">Watch trailer</button>\n            <button class="add-to-my-library-btn btn modal" id="btn-add-to-my-library">Add to my library</button>\n          </div>\n        </div>`;O.wrap.innerHTML=a;const o=document.querySelector("#btn-watch-treiller");$=document.querySelector("#btn-add-to-my-library"),o.addEventListener("click",Y),$.addEventListener("click",et),JSON.parse(A).includes(H)&&nt("Remove from my library"),null===A&&nt("Add to my library")}catch(t){console.log(t)}}(n),document.addEventListener("keydown",Q),O.moreDetail.addEventListener("click",J),O.body.style.overflow="hidden",O.scrollUpBtn.style.display="none")})),z({totalItems:i.weeklyTrendsTotal,itemsPerPage:i.weeklyTrendsList.length,fetchCallBack:V})}catch(t){console.log(t)}}(1));const F=document.querySelector(".search-form"),q=document.querySelector(".input-film-name-search-form");F.addEventListener("submit",(t=>{t.preventDefault();const e=q.value.trim();""!==e&&D(e)}));const D=async t=>{O.cardListSearchResult.innerHTML="";let e=await(0,N.fetchSearch)(t,1);if(0!==e.total_results){const t=await s();let n=e.results.map((e=>e.genre_ids.map((e=>t.find((t=>t.id===e))))));e.results.forEach(((t,e)=>t.genre_ids=n[e])),e.results.forEach((t=>{O.cardListSearchResult.insertAdjacentHTML("beforeend",C(t))})),z({totalItems:+e.total_results,itemsPerPage:+e.results.length,fetchCallBack:U})}else O.paginationEl.innerHTML="",O.cardListSearchResult.innerHTML='<p class="oops-catalog-search">OOPS...</br>\n    We are very sorry!</br>\n    We don’t have any results matching your search.</p>'};function z({totalItems:e,itemsPerPage:n,fetchCallBack:i=un}){function r(t){return t.toString().padStart(2,"0")}({tuiPaginationEl:document.querySelector("#pagination")}).tuiPaginationEl.innerHTML="";const a={totalItems:e,itemsPerPage:n,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:function(t){return`<span class="tui-page-btn btn">${r(t.page)}</span>`},currentPage:function(t){return`<strong class="tui-page-btn tui-is-selected btn">${r(t.page)}</strong>`},moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<div class="tui-page-btn tui-is-disabled tui-{{type}}"><div class="tui-ico-{{type}}">{{type}}</div></div>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip btn"><span class="tui-ico-ellip">...</span></a>'}};new(t(I))("pagination",a).on("afterMove",i)}async function V(t){O.cardListSearchResult.innerHTML="";const e=await s();let n=await l(t.page),i=n.weeklyTrendsList.map((t=>t.genre_ids.map((t=>e.find((e=>e.id===t))))));n.weeklyTrendsList.forEach(((t,e)=>t.genre_ids=i[e])),n.weeklyTrendsList.forEach((t=>{O.cardListSearchResult.insertAdjacentHTML("beforeend",C(t))})),W()}async function U(t){O.cardListSearchResult.innerHTML="";const e=q.value.trim();let n=await(0,N.fetchSearch)(e,t.page);const i=await s();let r=n.results.map((t=>t.genre_ids.map((t=>i.find((e=>e.id===t))))));n.results.forEach(((t,e)=>t.genre_ids=r[e])),n.results.forEach((t=>{O.cardListSearchResult.insertAdjacentHTML("beforeend",C(t))})),W()}function W(){R>=1280?scroll({top:880,behavior:"smooth"}):scroll({top:560,behavior:"smooth"})}function J(t){X(t,K)}function Z(t){X(t,tt)}function X(t,e){t.target===t.currentTarget&&e()}function K(){O.moreDetail.classList.add("is-hidden"),document.removeEventListener("keydown",Q),O.moreDetail.removeEventListener("click",J),O.body.style.overflow="auto"}function Q(t){"Escape"===t.key&&K()}function Y(e){const n=+e.target.dataset.id;var i;i=n,O.trailerModal.classList.remove("is-hidden"),async function(e){try{const n=await(0,B.fetchTrailers)(e);if(n.length>0){const t=function(t){return`\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/${t}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n  `}(n[0].key);O.trailerModalContent.innerHTML=`<div class="trailer-modal-content">${t}</div>`}else{const e=`\n  <div class="trailer-error-mode-content is-hidden">\n\n        <div class="trailer-error-info">\n          <p>OOPS...</p>\n      <p>We are very sorry!</p>\n      <p>But we couldn't find the trailer.</p>\n        </div>\n        <div class="error-img-placeholder is-hidden">\n             <img\n          src="${t(T)}"\n          alt="Trailer is not found"\n          />\n         </div>\n      </div>\n  `;O.trailerModalContent.innerHTML=`<div class="trailer-modal-content">${e}</div>`}}catch(t){console.error("Error fetching trailer:",t)}}(i),document.addEventListener("keydown",G),O.closeTrailerBtn.addEventListener("click",tt),O.trailerModal.addEventListener("click",Z)}function G(t){"Escape"===t.key&&tt()}function tt(){O.trailerModal.classList.add("is-hidden"),O.trailerModalContent.innerHTML="",document.removeEventListener("keydown",G),O.closeModalBtn.removeEventListener("click",tt),O.trailerModal.removeEventListener("click",Z)}function et(){A=localStorage.getItem("films-id-array");try{if(null===A)return j.push(H),localStorage.setItem("films-id-array",JSON.stringify(j)),A=localStorage.getItem("films-id-array"),void nt("Remove from my library");let t=JSON.parse(A);if(!t.includes(H))return t.push(H),localStorage.setItem("films-id-array",JSON.stringify(t)),A=localStorage.getItem("films-id-array"),void nt("Remove from my library");if(t.includes(H)){const e=t.indexOf(H);t.splice(e,1),localStorage.setItem("films-id-array",JSON.stringify(t)),A=localStorage.getItem("films-id-array"),nt("Add to my library")}}catch(t){Notify.failure("Please, try one more time")}}function nt(t){$.textContent=t}r("faktv");
//# sourceMappingURL=catalog.76175fd8.js.map
