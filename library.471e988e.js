var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n("kQlMt"),n("e9oz9"),n("6SEeX"),n("aDtKJ"),n("4Q23v"),n("fgOKF"),n("lbZk7"),n("hy2MT"),n("5WXxt"),n("jqxwP");var l=n("iQIUW"),o=n("8nneY"),i=n("aDtKJ"),a=n("e9oz9");const c={heroContainer:document.querySelector(".home-hero > .container"),trailerModal:document.querySelector(".trailer-modal-backdrop"),trailerModalContent:document.querySelector(".trailer-modal-content"),trailerErrorImage:document.querySelector(".trailer-placeholder-default"),moreDetail:document.querySelector(".modal-film-info"),closeModalBtn:document.querySelector(".modal-film-info .close-modal"),closeTrailerBtn:document.querySelector(".close-trailer-btn"),homeTrendsList:document.querySelector(".home-trends-list"),body:document.querySelector("body"),scrollUpBtn:document.querySelector("#back-to-top"),wrap:document.querySelector(".flex"),selectSection:document.querySelector(".genre-filter"),select:document.querySelector(".select"),selectList:document.querySelector(".select-options"),selectStyled:document.querySelector(".select-styled-content"),selectAll:document.querySelector(".select-styled")},s=document.querySelector(".library-film-list"),d=document.querySelector(".card-list-search-result"),u=document.querySelector("#js-loadmore");let m,y,f,p=[],v=localStorage.getItem("films-id-array");c.closeModalBtn.addEventListener("click",M),window.addEventListener("load",h);let b=1;function h(){if(null===v||0===JSON.parse(v).length)S();else{const e=JSON.parse(v).slice(9*(b-1),9*b).map((e=>(0,o.cardMarkup)(e)));Promise.all(e).then((e=>{const t=e.join("");d.innerHTML+=t,w(),L()})).catch((e=>{console.error("Error rendering film cards:",e)}))}c.select.addEventListener("click",D)}function g(){if(b=1,v=localStorage.getItem("films-id-array"),null===v||0===JSON.parse(v).length)S();else{const e=JSON.parse(v).map((e=>(0,o.cardMarkup)(e))).slice(9*(b-1),9*b);Promise.all(e).then((e=>{const t=e.join("");d.innerHTML=t,w()})).catch((e=>{console.error("Error rendering film cards:",e)}))}c.select.addEventListener("click",D)}function S(){l.Notify.info("OOPS... You don't have any movies at your library.");s.innerHTML='<div class="container-library container">\n      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don\'t have any movies at your library.</p>\n      <button class="main-accent-sml-btn btn library" onclick="window.location.href=\'catalog.html\'">Search movie</button>\n    </div>',c.selectSection.classList.add("hidden")}function w(){JSON.parse(v).length>9*b?u.style.display="block":u.style.display="none",L()}function L(){let e=document.querySelectorAll(".film-card");for(const t of e)t.addEventListener("click",k)}function k(e){var t;e.preventDefault(),m=+e.currentTarget.id,t=m,c.moreDetail.classList.remove("is-hidden"),async function(e){try{const t=await(0,a.fetchMovieDetails)(e),r=`<div class="poster"> \n          <img src="https://image.tmdb.org/t/p/original/${t.smallPoster}" class="poster-img" loading="lazy" alt="the poster of the movie you have chosen"/>\n        </div><div>\n          <h3 class="movie-title">${t.title}</h3><div class="movie-info">\n            <div class="info">\n              <ul class="film-info-list">\n                <li><p class="film-info-item-text">Vote / Votes</p></li>\n                <li><p class="film-info-item-text">Popularity</p></li>\n                <li><p class="film-info-item-text">Genre</p></li>\n              </ul>\n            </div><div class="params">\n              <ul class="film=info-params-list">\n                <li><p class="film-info-params-vote"><span class="film-info-params-vote-number">${t.voteAverage.toFixed(1)}</span> / <span class="film-info-params-vote-number">${t.voteCount}</span></p>\n                </li>\n                <li><p class="popularity">${t.popularity.toFixed(1)}</p></li>\n                <li><p class="genre">${t.genres}</p></li>  \n              </ul>  \n            </div>\n          </div><div class="about">\n            <p>About</p>\n            <p>${t.overview}</p>\n          </div><div class="btn-list">\n            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller" data-id="${e}">Watch trailer</button>\n            <button class="add-to-my-library-btn btn modal" id="btn-add-to-my-library">Add to my library</button>\n          </div>\n        </div>`;c.wrap.innerHTML=r;const n=document.querySelector("#btn-watch-treiller");y=document.querySelector("#btn-add-to-my-library"),n.addEventListener("click",O),y.addEventListener("click",J),JSON.parse(v).includes(m)&&C("Remove from my library"),null===v&&C("Add to my library")}catch(e){console.log(e)}}(t),document.addEventListener("keydown",q),c.moreDetail.addEventListener("click",E),c.body.style.overflow="hidden",c.scrollUpBtn.style.display="none"}function E(e){!function(e,t){if(e.target!==e.currentTarget)return;t()}(e,M)}function M(){c.moreDetail.classList.add("is-hidden"),document.removeEventListener("keydown",q),c.moreDetail.removeEventListener("click",E),c.body.style.overflow="auto",c.selectStyled.textContent="Genre",c.selectStyled.style.color="#b7b7b7"}function q(e){"Escape"===e.key&&M()}function O(e){const t=+e.target.dataset.id;var r;r=t,c.trailerModal.classList.remove("is-hidden"),async function(e){try{const t=await(0,i.fetchTrailers)(e);if(t.length>0){const e=function(e){return viewportWidth<=767?`\n      <iframe width="250" height="160" src="https://www.youtube.com/embed/${e}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    `:`\n      <iframe width="600" height="300" src="https://www.youtube.com/embed/${e}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    `}(t[0].key);c.trailerModalContent.innerHTML=e}else T()}catch(e){console.error("Error fetching trailer:",e),T()}}(r),document.addEventListener("keydown",x),c.closeTrailerBtn.addEventListener("click",N)}function T(){trailerErrorImage.classList.remove("is-hidden"),c.trailerModalContent.innerHTML='\n    <div class="error-mode-content">\n      <div class="trailer-error-info">\n        <p>OOPS...</p>\n        <p>We are very sorry!</p>\n        <p>But we couldn\'t find the trailer.</p>\n      </div>\n  '}function x(e){"Escape"===e.key&&N()}function N(){c.trailerModal.classList.add("is-hidden"),c.trailerModalContent.innerHTML="",document.removeEventListener("keydown",x),c.closeModalBtn.removeEventListener("click",N)}function J(){M(),v=localStorage.getItem("films-id-array");try{if(null===v)return p.push(m),localStorage.setItem("films-id-array",JSON.stringify(p)),v=localStorage.getItem("films-id-array"),C("Remove from my library"),void g();let e=JSON.parse(v);if(!e.includes(m))return e.push(m),localStorage.setItem("films-id-array",JSON.stringify(e)),v=localStorage.getItem("films-id-array"),C("Remove from my library"),void g();if(e.includes(m)){const t=e.indexOf(m);e.splice(t,1),localStorage.setItem("films-id-array",JSON.stringify(e)),v=localStorage.getItem("films-id-array"),C("Add to my library"),g()}}catch(e){l.Notify.failure("Please, try one more time")}}function C(e){y.textContent=e}function D(e){f=e.target,f.hasAttribute("id")?(c.selectStyled.textContent=f.textContent,I(),function(e){if(""!==e.id&&c.body.classList.contains("light"))return void(c.selectStyled.style.color="#282828");""!==e.id&&(c.selectStyled.style.color="#ffffff")}(f),async function(e){d.innerHTML="";try{JSON.parse(v).forEach((async t=>{const r=await(0,a.fetchMovieDetails)(t);if(r.genres.includes(e)){const e=await(0,o.cardMarkup)(r.id);d.innerHTML+=e,L()}}))}catch(e){console.log(e)}}(f.textContent)):I()}function I(){"none"!==c.selectList.style.display?c.selectList.style.display="none":c.selectList.style.display="block"}u.addEventListener("click",(()=>{b+=1,h()})),n("97pP7"),n("faktv");
//# sourceMappingURL=library.471e988e.js.map
