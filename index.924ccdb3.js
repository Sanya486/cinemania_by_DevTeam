!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i("jTnTT"),i("ldyZu"),i("qudGN"),i("dMHQ5"),i("6Zpxp"),i("jMR00"),i("dEJWt"),i("Folgn"),i("hLMxQ"),i("5T9lI"),i("chpbE"),i("2qgrg"),i("8FKnS"),i("6MRYZ"),i("6y5lF"),i("gOyL5");var o,a,l=i("bpxeT"),c=i("2TvXO"),s=i("h6c0i"),m=i("jMR00"),d=i("dMHQ5"),p=i("ldyZu"),u=i("5T9lI"),f={heroContainer:document.querySelector(".home-hero > .container"),trailerModal:document.querySelector(".trailer-modal-backdrop"),trailerModalContent:document.querySelector(".trailer-modal-content"),moreDetail:document.querySelector(".modal-film-info"),wrap:document.querySelector(".flex"),closeModalBtn:document.querySelector(".modal-film-info .close-modal"),closeTrailerBtn:document.querySelector(".close-trailer-btn"),homeTrendsList:document.querySelector(".home-trends-list"),body:document.querySelector("body"),scrollUpBtn:document.querySelector("#back-to-top")},h=[],v=localStorage.getItem("films-id-array");window.addEventListener("load",(function(){return y.apply(this,arguments)})),f.closeModalBtn.addEventListener("click",M);var g=document.body.clientWidth;function y(){return(y=e(l)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.fetchTrendingMovies)();case 3:if(0!==(r=e.sent).length){e.next=7;break}return s.Notify.failure("We are sorry but we don't have any upcoming films"),e.abrupt("return");case 7:b(w(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function b(e){return x.apply(this,arguments)}function x(){return x=e(l)(e(c).mark((function t(r){var n;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all(r.map(function(){var t=e(l)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.cardMarkup)(r.id);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:n=t.sent,f.homeTrendsList.innerHTML=n.join(""),S(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),x.apply(this,arguments)}function w(e){var t=Math.floor(5*Math.random());return e.slice(t,t+3)}function S(){var e=document.querySelectorAll(".film-card"),t=!0,r=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.addEventListener("click",k)}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}}function k(e){var t;e.preventDefault(),o=+e.currentTarget.id,t=o,f.moreDetail.classList.remove("is-hidden"),function(e){E.apply(this,arguments)}(t),document.addEventListener("keydown",T),f.moreDetail.addEventListener("click",L),f.body.style.overflow="hidden",f.scrollUpBtn.style.display="none"}function L(e){!function(e,t){if(e.target!==e.currentTarget)return;t()}(e,M)}function M(){f.moreDetail.classList.add("is-hidden"),document.removeEventListener("keydown",T),f.moreDetail.removeEventListener("click",L),f.body.style.overflow="auto"}function T(e){"Escape"===e.key&&M()}function E(){return(E=e(l)(e(c).mark((function t(r){var n,i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.fetchMovieDetails)(r);case 3:n=e.sent,i='<div class="poster"> \n          <img src="https://image.tmdb.org/t/p/original/'.concat(n.smallPoster,'" class="poster-img" alt="the poster of the movie you have chosen"/>\n        </div><div>\n          <h3 class="movie-title">').concat(n.title,'</h3><div class="movie-info">\n            <div class="info">\n              <ul class="film-info-list">\n                <li><p class="film-info-item-text">Vote / Votes</p></li>\n                <li><p class="film-info-item-text">Popularity</p></li>\n                <li><p class="film-info-item-text">Genre</p></li>\n              </ul>\n            </div><div class="params">\n              <ul class="film=info-params-list">\n                <li><p class="film-info-params-vote"><span class="film-info-params-vote-number">').concat(n.voteAverage.toFixed(1),'</span> / <span class="film-info-params-vote-number">').concat(n.voteCount,'</span></p>\n                </li>\n                <li><p class="popularity">').concat(n.popularity.toFixed(1),'</p></li>\n                <li><p class="genre">').concat(n.genres,'</p></li>  \n              </ul>  \n            </div>\n          </div><div class="about">\n            <p>About</p>\n            <p>').concat(n.overview,'</p>\n          </div><div class="btn-list">\n            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller" data-id="').concat(r,'">Watch trailer</button>\n            <button class="add-to-my-library-btn btn modal" id="btn-add-to-my-library">Add to my library</button>\n          </div>\n        </div>'),f.wrap.innerHTML=i,o=document.querySelector("#btn-watch-treiller"),a=document.querySelector("#btn-add-to-my-library"),o.addEventListener("click",O),a.addEventListener("click",D),R(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function O(e){var t,r=+e.target.dataset.id;t=r,f.trailerModal.classList.remove("is-hidden"),function(e){q.apply(this,arguments)}(t),document.addEventListener("keydown",N),f.closeTrailerBtn.addEventListener("click",A)}function q(){return(q=e(l)(e(c).mark((function t(r){var n,i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.fetchTrailers)(r);case 3:(n=e.sent).length>0?(i=n[0].key,o=I(i),f.trailerModalContent.innerHTML='<div class="trailer-modal-content">'.concat(o,"</div>")):('\n    <div class="trailer-error-info">\n      <p>OOPS...</p>\n      <p>We are very sorry!</p>\n      <p>But we couldn\'t find the trailer.</p>\n    </div>\n    <picture>\n      <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 320px)">\n      <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 768px)">\n      <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" \n              media="(min-width: 769px)">\n      <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Traier is not found">\n    </picture>\n    </div>\n  ',f.trailerModal.innerHTML='<div class="trailer-modal-content">'.concat('\n    <div class="trailer-error-info">\n      <p>OOPS...</p>\n      <p>We are very sorry!</p>\n      <p>But we couldn\'t find the trailer.</p>\n    </div>\n    <picture>\n      <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 320px)">\n      <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 768px)">\n      <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" \n              media="(min-width: 769px)">\n      <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Traier is not found">\n    </picture>\n    </div>\n  ',"</div>")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trailer:",e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function I(e){return g<=767?'\n      <iframe width="250" height="160" src="https://www.youtube.com/embed/'.concat(e,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    '):'\n      <iframe width="600" height="300" src="https://www.youtube.com/embed/'.concat(e,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    ')}function N(e){"Escape"===e.key&&A()}function A(){f.trailerModal.classList.add("is-hidden"),f.trailerModalContent.innerHTML="",document.removeEventListener("keydown",N),f.closeModalBtn.removeEventListener("click",A),f.moreDetail.removeEventListener("click",L)}function R(){JSON.parse(v).includes(o)&&j("Remove from my library"),null===v&&j("Add to my library")}function D(){v=localStorage.getItem("films-id-array");try{if(null===v)return h.push(o),localStorage.setItem("films-id-array",JSON.stringify(h)),v=localStorage.getItem("films-id-array"),void j("Remove from my library");var e=JSON.parse(v);if(!e.includes(o))return e.push(o),localStorage.setItem("films-id-array",JSON.stringify(e)),v=localStorage.getItem("films-id-array"),void j("Remove from my library");if(e.includes(o)){var t=e.indexOf(o);e.splice(t,1),localStorage.setItem("films-id-array",JSON.stringify(e)),v=localStorage.getItem("films-id-array"),j("Add to my library")}}catch(e){s.Notify.failure("Please, try one more time")}}function j(e){a.textContent=e}l=i("bpxeT"),c=i("2TvXO"),s=i("h6c0i"),p=i("ldyZu");var B,J,P=i("jTnTT"),C={filmBlock:document.querySelector(".home-upcoming-film-wrap-js")},F=[],H=localStorage.getItem("films-id-array");function W(){return(W=e(l)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,P.fetchUpcoming)();case 3:if(0!==(r=e.sent).length){e.next=7;break}return s.Notify.failure("We are sorry but we don't have any upcoming films"),e.abrupt("return");case 7:U(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),z(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function U(e){return Z.apply(this,arguments)}function Z(){return(Z=e(l)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.floor(20*Math.random()),i=r.slice(n,n+1)[0].id,e.prev=2,e.next=5,(0,p.fetchMovieDetails)(i);case 5:_(B=e.sent),Q(),Y(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),z(e.t0);case 14:case"end":return e.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}function V(e,t,r){var n='<div class="home-upcoming-film-poster-wrap"><div class="home-upcoming-film-poster-overlay"></div><img class="home-upcoming-film-poster" src="'.concat(t,'"></div><div class="home-upcoming-film-info-wrap">\n          <h3 class="home-upcoming-film-title text">').concat(e.title,'</h3>\n            <ul class="home-upcoming-film-info-list">\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Release date</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-date text">').concat(e.date.split("-").reverse().join("."),'</p></div>\n              </li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Vote / Votes</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-rating text light-theme-color"><span class="home-upcoming-film-info-rating-number text">').concat(r,'</span>/<span class="home-upcoming-film-info-rating-number text">').concat(e.voteCount,'</span></p></div></li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Popularity</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-popularity text light-theme-color">').concat(e.popularity.toFixed(1),'</p></div>\n              </li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Genre</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-genres text light-theme-color">').concat(e.genres,'</p></div>\n              </li>\n            </ul>\n          <p class="home-upcoming-film-about text">About</p>\n          <p class="home-upcoming-film-about-text text">Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city\'s lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.</p>\n          <button class="main-accent-sml-btn btn home-upcoming-btn-js" type="button">Add to my library</button>\n        </div>');C.filmBlock.innerHTML=n}function _(e){var t=G(e),r=function(e,t){return"https://image.tmdb.org/t/p/original/".concat("poster"===e?t.poster:t.smallPoster)}(window.matchMedia("(min-width: 768px)").matches?"poster":"smallPoster",e);V(e,r,t)}function G(e){if(0===e.voteAverage){return e.voteCount="-","-"}return e.voteAverage.toFixed(1)}function Q(){(J=document.querySelector(".home-upcoming-btn-js")).addEventListener("click",X)}function Y(){JSON.parse(H).includes(B.id)&&K("Remove from my library"),null===H&&K("Add to my library")}function X(){H=localStorage.getItem("films-id-array");try{if(null===H)return F.push(B.id),localStorage.setItem("films-id-array",JSON.stringify(F)),H=localStorage.getItem("films-id-array"),void K("Remove from my library");var e=JSON.parse(H);if(!e.includes(B.id))return e.push(B.id),localStorage.setItem("films-id-array",JSON.stringify(e)),H=localStorage.getItem("films-id-array"),void K("Remove from my library");if(e.includes(B.id)){var t=e.indexOf(B.id);e.splice(t,1),localStorage.setItem("films-id-array",JSON.stringify(e)),H=localStorage.getItem("films-id-array"),K("Add to my library")}}catch(e){s.Notify.failure("Please, try one more time")}}function K(e){J.textContent=e,J.classList.toggle("remove-js"),J.classList.toggle("main-accent-sml-btn")}function z(e){console.log(e.message)}window.addEventListener("load",(function(){return W.apply(this,arguments)})),window.matchMedia("(orientation: portrait)").addEventListener("change",(function(e){var t;t=e.matches?"https://image.tmdb.org/t/p/original/".concat(B.smallPoster):"https://image.tmdb.org/t/p/original/".concat(B.poster);try{var r=G(B);V(B,t,r),Q(),Y()}catch(e){z(e)}}))}();
//# sourceMappingURL=index.924ccdb3.js.map
