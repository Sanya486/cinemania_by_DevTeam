!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("2qgrg",(function(t,r){var n,i,a,c=o("bpxeT"),l=o("2TvXO"),s=o("dIxxU"),d=o("ldyZu"),u=o("hLMxQ"),m=o("dMHQ5"),p={heroContainer:document.querySelector(".home-hero > .container"),trailerModal:document.querySelector(".trailer-modal-backdrop"),trailerModalContent:document.querySelector(".trailer-modal-content"),trailerErrorImage:document.querySelector(".trailer-placeholder-default"),moreDetail:document.querySelector(".modal-film-info"),poster:document.querySelector(".poster-img"),title:document.querySelector(".movie-title"),vote:document.querySelector(".vote"),votes:document.querySelector(".votes"),popularity:document.querySelector(".popularity"),genre:document.querySelector(".genre"),description:document.querySelector(".about p"),closeModalBtn:document.querySelector(".close-trailer-btn"),wrap:document.querySelector(".flex"),body:document.querySelector("body")},f=[],v=localStorage.getItem("films-id-array"),y=document.body.clientWidth,h=(a=e(c)(e(l).mark((function t(){var r,n,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.default.get("https://api.themoviedb.org/3/trending/movie/".concat("day","?api_key=").concat("3e1aa277fd6b8a3cd0a3e29dfce20a5c"));case 2:return r=e.sent,n=r.data,o=n.results.map((function(e){return e.id})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),t)}))),function(){return a.apply(this,arguments)});function b(){return(b=e(c)(e(l).mark((function t(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:return r=e.sent,e.next=6,g(r);case 6:e.sent,document.getElementById("btn-watch-trailer").addEventListener("click",S),document.querySelector(".btn-call-film-info").addEventListener("click",k),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0.message);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=e(c)(e(l).mark((function t(r){var n,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=Math.floor(Math.random()*r.length),o=r[n],e.next=5,(0,d.fetchMovieDetails)(o);case 5:x(e.sent),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function x(e){var t,r=e.title,n=e.overview,o=e.smallPoster,i=e.poster,a=e.voteAverage,c=e.id,l=Math.round(a),s=(0,u.rateArray)(l).map((function(e){return'<li class="rating-item">\n               <img class="rating-icon" src="'.concat(e,'" alt="">\n               </li>')})).join(""),d='<div class="home-hero-api-movie">\n      <div class="home-hero-api-movie-con"><h2 class="home-hero-api-movie-name">'.concat(r,'</h2>\n    <div class="home-hero-api-movie-rating">\n      <ul class="film-rating-hero">\n        ').concat(s,'\n      </ul>\n    </div>\n    <p class="home-hero-api-movie-description">\n      ').concat(n,'\n    </p>\n    <div class="home-hero-api-movie-btns">\n    <button class="main-accent-sml-btn btn" id=\'btn-watch-trailer\' data-id="').concat(c,'">Watch trailer</button>\n    <button class="rm-light-bcg-btn btn btn-call-film-info" data-id="').concat(c,'">More details </button>\n    </div>\n  </div>\n  <div class="home-hero-api-movie-bg">\n    <img\n      src="https://image.tmdb.org/t/p/original/').concat(o,'"\n      srcset="\n        https://image.tmdb.org/t/p/original/').concat(o,"  320w,\n        https://image.tmdb.org/t/p/original/").concat(i,"  768w,\n        https://image.tmdb.org/t/p/original/").concat(i,' 1280w\n      "\n      sizes="(max-width: 320px) 320px,\n          (max-width: 768px) 380px,\n          1280px"\n      alt="').concat(r,'"\n    />\n    </div>\n    </div>');p.heroContainer.insertAdjacentHTML("beforeend",d),(t=document.querySelector(".preloader"))&&t.remove()}function S(e){var t,r=+e.target.dataset.id;t=r,p.trailerModal.classList.remove("is-hidden"),p.body.style.overflow="hidden",function(e){C.apply(this,arguments)}(t),document.addEventListener("keydown",I),p.closeModalBtn.addEventListener("click",T),p.trailerModal.addEventListener("click",M)}function k(e){var t;n=+e.target.dataset.id,t=n,p.moreDetail.classList.remove("is-hidden"),p.body.style.overflow="hidden",function(e){N.apply(this,arguments)}(t),document.addEventListener("keydown",O),p.moreDetail.addEventListener("click",L),document.querySelector(".modal-film-info .close-modal").addEventListener("click",q)}function L(e){E(e,q)}function M(e){E(e,T)}function E(e,t){e.target===e.currentTarget&&t()}function q(){p.moreDetail.classList.add("is-hidden"),document.removeEventListener("keydown",O),p.moreDetail.removeEventListener("click",L)}function T(){p.trailerModal.classList.add("is-hidden"),p.body.style.overflow="auto",p.trailerModalContent.innerHTML="",document.removeEventListener("keydown",I),p.closeModalBtn.removeEventListener("click",T),p.trailerModal.removeEventListener("click",M)}function O(e){"Escape"===e.key&&q()}function I(e){"Escape"===e.key&&T()}function C(){return(C=e(c)(e(l).mark((function t(r){var n,o,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.fetchTrailers)(r);case 3:(n=e.sent).length>0?(o=n[0].key,i=D(o),p.trailerModalContent.innerHTML=i):A(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trailer:",e.t0),A();case 11:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function D(e){return y<=767?'\n      <iframe width="250" height="160" src="https://www.youtube.com/embed/'.concat(e,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    '):'\n      <iframe width="600" height="300" src="https://www.youtube.com/embed/'.concat(e,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    ')}function A(){trailerErrorImage.classList.remove("is-hidden"),p.trailerModalContent.innerHTML='\n    <div class="error-mode-content">\n      <div class="trailer-error-info">\n        <p>OOPS...</p>\n        <p>We are very sorry!</p>\n        <p>But we couldn\'t find the trailer.</p>\n      </div>\n  '}function N(){return(N=e(c)(e(l).mark((function t(r){var n,o,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.fetchMovieDetails)(r);case 3:n=e.sent,o='<div class="poster"> \n          <img src="https://image.tmdb.org/t/p/original/'.concat(n.smallPoster,'" class="poster-img" alt="the poster of the movie you have chosen"/>\n        </div><div>\n          <h3 class="movie-title">').concat(n.title,'</h3><div class="movie-info">\n            <div class="info">\n              <ul class="film-info-list">\n                <li><p class="film-info-item-text">Vote / Votes</p></li>\n                <li><p class="film-info-item-text">Popularity</p></li>\n                <li><p class="film-info-item-text">Genre</p></li>\n              </ul>\n            </div><div class="params">\n              <ul class="film=info-params-list">\n                <li>\n                  <p class="film-info-params-vote"><span class="film-info-params-vote-number">').concat(n.voteAverage.toFixed(1),'</span> / <span class="film-info-params-vote-number">').concat(n.voteCount,'</span></p>\n                </li>\n                <li><p class="popularity">').concat(n.popularity.toFixed(1),'</p></li>\n                <li><p class="genre">').concat(n.genres,'</p></li>  \n              </ul>  \n            </div>\n          </div><div class="about">\n            <p>ABOUT</p>\n            <p>').concat(n.overview,'</p>\n          </div><div class="btn-list">\n            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller"\n            data-id="').concat(r,'">Watch trailer</button>\n            <button class="add-to-my-library-btn" id="btn-add-to-my-library">Add to my library</button>\n          </div>\n        </div>'),p.wrap.innerHTML=o,a=document.querySelector("#btn-watch-treiller"),i=document.querySelector("#btn-add-to-my-library"),a.addEventListener("click",S),i.addEventListener("click",H),B(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function B(){JSON.parse(v).includes(n)&&J("Remove from my library"),null===v&&J("Add to my library")}function H(){v=localStorage.getItem("films-id-array");try{if(null===v)return f.push(n),localStorage.setItem("films-id-array",JSON.stringify(f)),v=localStorage.getItem("films-id-array"),void J("Remove from my library");var e=JSON.parse(v);if(!e.includes(n))return e.push(n),localStorage.setItem("films-id-array",JSON.stringify(e)),v=localStorage.getItem("films-id-array"),void J("Remove from my library");if(e.includes(n)){var t=e.indexOf(n);e.splice(t,1),localStorage.setItem("films-id-array",JSON.stringify(e)),v=localStorage.getItem("films-id-array"),J("Add to my library")}}catch(e){Notify.failure("Please, try one more time")}}function J(e){i.textContent=e}window.addEventListener("load",(function(){return b.apply(this,arguments)}))}))}();
//# sourceMappingURL=index.7402da30.js.map
