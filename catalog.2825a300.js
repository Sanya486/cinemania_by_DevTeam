!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,r){n[e]=r},r.parcelRequired7c6=a),a("jTnTT"),a("ldyZu"),a("qudGN"),a("dMHQ5"),a("6Zpxp"),a("jMR00");var c,s=a("bpxeT"),o=a("2TvXO"),u=a("dIxxU"),i=(c=e(s)(e(o).mark((function r(){var t,n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat("3e1aa277fd6b8a3cd0a3e29dfce20a5c"));case 2:return t=e.sent,n={weeklyPage:t.data.page,weeklyTrendsList:t.data.results,weeklyTrendsPages:t.data.total_pages,weeklyTrendsTotal:t.data.total_results},e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)}))),function(){return c.apply(this,arguments)});a("dEJWt"),a("Folgn"),a("8FKnS"),a("6MRYZ"),a("6y5lF");s=a("bpxeT"),o=a("2TvXO");var l=a("5T9lI"),d=document.querySelector(".card-list-search-result");window.addEventListener("load",(function(){var r,t=(r=e(s)(e(o).mark((function r(){var t,n,a;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i();case 2:return t=r.sent,console.log(t),n=t.weeklyTrendsList,console.log(n),r.next=8,Promise.all(n.map(function(){var r=e(s)(e(o).mark((function r(t){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.cardMarkup)(t.id);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()));case 8:a=r.sent,d&&(d.innerHTML=a.join("")),console.log(d);case 11:case"end":return r.stop()}}),r)}))),function(){return r.apply(this,arguments)});t()})),a("gOyL5");s=a("bpxeT"),o=a("2TvXO");var p=a("jMR00"),f=(l=a("5T9lI"),function(){var r=e(s)(e(o).mark((function r(){var t,n,a,c,s,u,i,d,f,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.fetchTrendingMovies)();case 3:t=e.sent,n=document.querySelector(".card-list-search-result"),a="",c=!0,s=!1,u=void 0,e.prev=7,i=t[Symbol.iterator]();case 9:if(c=(d=i.next()).done){e.next=24;break}return f=d.value,e.prev=11,e.next=14,(0,l.cardMarkup)(f.id);case 14:v=e.sent,a+="<li>".concat(v,"</li>"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),console.log(e.t0);case 21:c=!0,e.next=9;break;case 24:e.next=30;break;case 26:e.prev=26,e.t1=e.catch(7),s=!0,u=e.t1;case 30:e.prev=30,e.prev=31,c||null==i.return||i.return();case 33:if(e.prev=33,!s){e.next=36;break}throw u;case 36:return e.finish(33);case 37:return e.finish(30);case 38:n.insertAdjacentHTML("beforeend",a),e.next=44;break;case 41:e.prev=41,e.t2=e.catch(0),console.log(e.t2);case 44:case"end":return e.stop()}}),r,null,[[0,41],[7,26,30,38],[11,18],[31,,33,37]])})));return function(){return r.apply(this,arguments)}}());document.querySelector(".header-catalog").addEventListener("click",e(s)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:case"end":return e.stop()}}),r)})))),document.addEventListener("click",(function(e){var r=e.target.closest(".film-card");r&&r.getAttribute("id")}))}();
//# sourceMappingURL=catalog.2825a300.js.map
