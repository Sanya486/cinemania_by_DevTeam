var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("e9oz9");const i={poster:document.querySelector(".poster img"),title:document.querySelector(".movie-title"),vote:document.querySelector(".vote"),votes:document.querySelector(".votes"),popularity:document.querySelector(".popularity"),genre:document.querySelector(".genre"),description:document.querySelector(".about p"),btnwtreiller:document.querySelector("#btn-watch-treiller"),btnatlibrary:document.querySelector("#btn-add-to-my-library")};function l(){return 2023}i.btnwtreiller.addEventListener("click",l),i.btnatlibrary.addEventListener("click",l),(0,n.fetchMovieDetails)(2023).then((e=>{i.poster.src=`https://image.tmdb.org/t/p/original/${e.smallPoster}`,i.title.innerHTML=`${e.title}`,i.vote.innerHTML=`${e.voteAverage}`,i.votes.innerHTML=`${e.voteCount}`,i.popularity.innerHTML=`${e.popularity}`,i.genre.innerHTML=`${e.genres}`,i.description.innerHTML=`${e.overview}`})).catch((e=>console.log(e)));
//# sourceMappingURL=modals-film-info.b295158b.js.map
