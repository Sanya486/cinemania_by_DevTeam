!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("ldyZu",(function(t,r){var n,a,i,u;n=t.exports,a="fetchMovieDetails",i=function(){return f},Object.defineProperty(n,a,{get:i,set:u,enumerable:!0,configurable:!0});var d,l=o("bpxeT"),c=o("2TvXO"),p=o("dIxxU"),f=(d=e(l)(e(c).mark((function t(r){var n,o,a,i,u,d,l,f,s,v,g,b,x;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat("3e1aa277fd6b8a3cd0a3e29dfce20a5c","&language=en-US"),e.next=4,p.default.get(n);case 4:return o=e.sent,a=o.data,i=a.backdrop_path,u=a.poster_path,d=a.title,l=a.overview,f=a.vote_average,s=a.vote_count,v=a.popularity,g=a.genres.map((function(e){return e.name})).join(", "),b=a.release_date,x=a.id,e.abrupt("return",{poster:i,title:d,overview:l,voteAverage:f,voteCount:s,popularity:v,genres:g,date:b,smallPoster:u,id:x});case 17:case"end":return e.stop()}}),t)}))),function(e){return d.apply(this,arguments)})}))}();
//# sourceMappingURL=templates.d08caa3c.js.map
