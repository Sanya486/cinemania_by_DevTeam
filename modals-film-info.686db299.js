var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r.register("e9oz9",(function(e,t){var o,a,n,i;o=e.exports,a="fetchMovieDetails",n=function(){return d},Object.defineProperty(o,a,{get:n,set:i,enumerable:!0,configurable:!0});var l=r("2shzp");const d=async e=>{const t=`https://api.themoviedb.org/3/movie/${e}?api_key=3e1aa277fd6b8a3cd0a3e29dfce20a5c&language=en-US`,o=(await l.default.get(t)).data,r=o.backdrop_path,a=o.poster_path;return{poster:r,title:o.title,overview:o.overview,voteAverage:o.vote_average,voteCount:o.vote_count,popularity:o.popularity,genres:o.genres.map((e=>e.name)).join(", "),date:o.release_date,smallPoster:a,id:o.id}}})),r("e9oz9");
//# sourceMappingURL=modals-film-info.686db299.js.map