!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in r){var e=r[n];delete r[n];var a={id:n,exports:{}};return t[n]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){r[n]=e},e.parcelRequired7c6=a),a.register("5T9lI",(function(e,t){var r,o,i,s;r=e.exports,o="cardMarkup",i=function(){return f},Object.defineProperty(r,o,{get:i,set:s,enumerable:!0,configurable:!0});var l,c=a("bpxeT"),d=a("2TvXO"),p=a("ldyZu"),f=(l=n(c)(n(d).mark((function e(t){var r;return n(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.fetchMovieDetails)(t).then((function(n){var e={id:n.id,smallPoster:n.smallPoster,title:n.title,genres:n.genres,year:n.date.slice(0,4),rate:Math.round(n.voteAverage)},t='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none">\n          <path fill="url(#a)" d="M13.852 15.875a.563.563 0 0 1-.33-.106L9 12.491 4.48 15.77a.562.562 0 0 1-.863-.636L5.379 9.91.81 6.776a.562.562 0 0 1 .316-1.026h5.639L8.465.513a.563.563 0 0 1 1.07 0l1.702 5.238h5.638a.563.563 0 0 1 .319 1.027L12.622 9.91l1.762 5.222a.564.564 0 0 1-.532.743Z"/>\n          <defs>\n            <linearGradient id="a" x1="2.625" x2="13.876" y1="1.25" y2="16.25" gradientUnits="userSpaceOnUse">\n              <stop stop-color="#F84119"/>\n              <stop offset="1" stop-color="#F89F19" stop-opacity=".68"/>\n            </linearGradient>\n          </defs>\n        </svg>',r='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">\n          <path stroke="url(#a)" stroke-linejoin="round" d="M15 6.5H9.625L8 1.5l-1.625 5H1l4.375 3-1.688 5L8 11.375l4.313 3.125-1.688-5L15 6.5Z"/>\n          <path fill="url(#b)" d="M8 1.5v9.875L3.687 14.5l1.688-5L1 6.5h5.375L8 1.5Z"/>\n          <defs>\n            <linearGradient id="a" x1="2.71" x2="11.98" y1="2.429" y2="14.855" gradientUnits="userSpaceOnUse">\n              <stop stop-color="#F84119"/>\n              <stop offset="1" stop-color="#F89F19" stop-opacity=".68"/>\n            </linearGradient>\n            <linearGradient id="b" x1="1.855" x2="10.8" y1="2.429" y2="8.424" gradientUnits="userSpaceOnUse">\n              <stop stop-color="#F84119"/>\n              <stop offset="1" stop-color="#F89F19" stop-opacity=".68"/>\n            </linearGradient>\n          </defs>\n        </svg>',a='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none">\n          <path stroke="url(#a)" stroke-linejoin="round" d="M15 5.5H9.625L8 .5l-1.625 5H1l4.375 3-1.688 5L8 10.375l4.313 3.125-1.688-5L15 5.5Z"/>\n          <defs>\n            <linearGradient id="a" x1="2.71" x2="11.98" y1="1.429" y2="13.855" gradientUnits="userSpaceOnUse">\n              <stop stop-color="#F84119"/>\n              <stop offset="1" stop-color="#F89F19" stop-opacity=".68"/>\n            </linearGradient>\n          </defs>\n        </svg>';console.log(r,a);var o=["","","","",""].map((function(){return 0===e.rate?a:e.rate>=2?(e.rate-=2,t):1===e.rate?(e.rate-=1,r):void 0})).map((function(n){return'<li class="rating-item">\n               '.concat(n,"\n               </li>")})).join("");return'\n          <div class="film-card" id="'.concat(e.id,'">\n          <a class="card-link" href="">\n          <div class="img-ovelay"></div>\n          <img class ="film-poster" src="https://image.tmdb.org/t/p/original').concat(e.smallPoster,'" alt="').concat(e.title,", ").concat(e.year,", ").concat(e.genres,'">\n          <div class="film-card-info">\n          <p class="film-name">').concat(e.title,'</p>\n          <div class="film-wrap">\n            <p class="film-feature">').concat(e.genres," | ").concat(e.year,'</p>\n            <ul class="film-rating">\n    \n            ').concat(o,"\n            </ul>\n            </div>\n          </div>\n        </a>\n        </div>\n        ")})).catch((function(n){return console.log(n)}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),e)}))),function(n){return l.apply(this,arguments)})})),a("5T9lI")}();
//# sourceMappingURL=templates.321d46ab.js.map
