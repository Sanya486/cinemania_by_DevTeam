function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var r=i[e];delete i[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){i[e]=r},t.parcelRequired7c6=a),a.register("kyEFX",(function(r,t){var n,i;e(r.exports,"register",(function(){return n}),(function(e){return n=e})),e(r.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)a[r[t]]=e[r[t]]},i=function(e){var r=a[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),a.register("8nneY",(function(r,t){e(r.exports,"cardMarkup",(function(){return s}));var n=a("e9oz9"),i=a("59yTk");const s=async e=>await(0,n.fetchMovieDetails)(e).then((e=>{const r={id:e.id,smallPoster:e.smallPoster,title:e.title,genres:e.genres,year:e.date.slice(0,4),rate:Math.round(e.voteAverage)},t=(0,i.rateArray)(r.rate).map((e=>`<li class="rating-item">\n               <img class="rating-icon" src="${e}" alt="">\n               </li>`)).join("");return`\n          <div class="film-card" id="${r.id}">\n          <a class="card-link" href="">\n          <div class="img-ovelay"></div>\n          <img class ="film-poster" src="https://image.tmdb.org/t/p/original${r.smallPoster}" alt="${r.title}, ${r.year}, ${r.genres}">\n          <div class="film-card-info">\n          <p class="film-name">${r.title}</p>\n          <div class="film-wrap">\n            <p class="film-feature">${r.genres} | ${r.year}</p>\n            <ul class="film-rating">\n    \n            ${t}\n            </ul>\n            </div>\n          </div>\n        </a>\n        </div>\n        `})).catch((e=>console.log(e)))})),a.register("59yTk",(function(t,n){e(t.exports,"rateArray",(function(){return c}));var i=a("SIKRz"),s=a("1cBhF"),l=a("hAeG2");const o={full:r(i),half:r(s),empty:r(l)},c=e=>["","","","",""].map((()=>0===e?o.empty:e>=2?(e-=2,o.full):1===e?(e-=1,o.half):void 0))})),a.register("SIKRz",(function(e,r){e.exports=new URL(a("kyEFX").resolve("hF6eL"),import.meta.url).toString()})),a.register("1cBhF",(function(e,r){e.exports=new URL(a("kyEFX").resolve("7GXgT"),import.meta.url).toString()})),a.register("hAeG2",(function(e,r){e.exports=new URL(a("kyEFX").resolve("i1mK8"),import.meta.url).toString()})),a("kyEFX").register(JSON.parse('{"8asZY":"templates.8df86640.js","hF6eL":"star-full.92151347.svg","7GXgT":"star-half.304c284f.svg","i1mK8":"star-empty.aaa63a40.svg","i00xH":"templates.c9087fff.js","bYBap":"templates.6e64c767.js"}')),a("8nneY");
//# sourceMappingURL=templates.8df86640.js.map
