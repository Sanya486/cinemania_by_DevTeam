!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("jTnTT"),o("ldyZu"),o("qudGN"),o("dMHQ5"),o("6Zpxp"),o("jMR00"),o("dEJWt"),o("Folgn"),o("chpbE"),o("8FKnS");var l,i,a,c=o("bpxeT"),s=o("2TvXO"),d=o("h6c0i"),u=o("5T9lI"),f=o("dMHQ5"),m=o("ldyZu"),p={heroContainer:document.querySelector(".home-hero > .container"),trailerModal:document.querySelector(".trailer-modal-backdrop"),trailerModalContent:document.querySelector(".trailer-modal-content"),trailerErrorImage:document.querySelector(".trailer-placeholder-default"),moreDetail:document.querySelector(".modal-film-info"),closeModalBtn:document.querySelector(".modal-film-info .close-modal"),closeTrailerBtn:document.querySelector(".close-trailer-btn"),homeTrendsList:document.querySelector(".home-trends-list"),body:document.querySelector("body"),scrollUpBtn:document.querySelector("#back-to-top"),wrap:document.querySelector(".flex"),selectSection:document.querySelector(".genre-filter"),select:document.querySelector(".select"),selectList:document.querySelector(".select-options"),selectStyled:document.querySelector(".select-styled-content"),selectAll:document.querySelector(".select-styled")},y=document.querySelector(".library-film-list"),v=document.querySelector(".card-list-search-result"),h=document.querySelector("#js-loadmore"),b="films-id-array",g=[],S=localStorage.getItem(b);p.closeModalBtn.addEventListener("click",O),window.addEventListener("load",L);var w=1;function L(){if(null===S||0===JSON.parse(S).length)x();else{var e=JSON.parse(S).slice(9*(w-1),9*w).map((function(e){return(0,u.cardMarkup)(e)}));Promise.all(e).then((function(e){var t=e.join("");v.innerHTML+=t,M(),E()})).catch((function(e){console.error("Error rendering film cards:",e)}))}p.select.addEventListener("click",_)}function k(){if(w=1,null===(S=localStorage.getItem(b))||0===JSON.parse(S).length)x();else{var e=JSON.parse(S).map((function(e){return(0,u.cardMarkup)(e)})).slice(9*(w-1),9*w);Promise.all(e).then((function(e){var t=e.join("");v.innerHTML=t,M()})).catch((function(e){console.error("Error rendering film cards:",e)}))}p.select.addEventListener("click",_)}function x(){d.Notify.info("OOPS... You don't have any movies at your library.");y.innerHTML='<div class="container-library container">\n      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don\'t have any movies at your library.</p>\n      <button class="main-accent-sml-btn btn library" onclick="window.location.href=\'catalog.html\'">Search movie</button>\n    </div>',p.selectSection.classList.add("hidden")}function M(){JSON.parse(S).length>9*w?h.style.display="block":h.style.display="none",E()}function E(){var e=document.querySelectorAll(".film-card"),t=!0,n=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){o.value.addEventListener("click",T)}}catch(e){n=!0,r=e}finally{try{t||null==l.return||l.return()}finally{if(n)throw r}}}function T(e){var t;e.preventDefault(),l=+e.currentTarget.id,t=l,p.moreDetail.classList.remove("is-hidden"),function(e){C.apply(this,arguments)}(t),document.addEventListener("keydown",N),p.moreDetail.addEventListener("click",q),p.body.style.overflow="hidden",p.scrollUpBtn.style.display="none"}function q(e){!function(e,t){if(e.target!==e.currentTarget)return;t()}(e,O)}function O(){p.moreDetail.classList.add("is-hidden"),document.removeEventListener("keydown",N),p.moreDetail.removeEventListener("click",q),p.body.style.overflow="auto",p.selectStyled.textContent="Genre",p.selectStyled.style.color="#b7b7b7"}function N(e){"Escape"===e.key&&O()}function C(){return(C=e(c)(e(s).mark((function t(n){var r,o,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.fetchMovieDetails)(n);case 3:r=e.sent,o='<div class="poster"> \n          <img src="https://image.tmdb.org/t/p/w400/'.concat(r.smallPoster,'" class="poster-img" loading="lazy" alt="the poster of the movie you have chosen"/>\n        </div><div>\n          <h3 class="movie-title">').concat(r.title,'</h3><div class="movie-info">\n            <div class="info">\n              <ul class="film-info-list">\n                <li><p class="film-info-item-text">Vote / Votes</p></li>\n                <li><p class="film-info-item-text">Popularity</p></li>\n                <li><p class="film-info-item-text">Genre</p></li>\n              </ul>\n            </div><div class="params">\n              <ul class="film=info-params-list">\n                <li><p class="film-info-params-vote"><span class="film-info-params-vote-number">').concat(r.voteAverage.toFixed(1),'</span> / <span class="film-info-params-vote-number">').concat(r.voteCount,'</span></p>\n                </li>\n                <li><p class="popularity">').concat(r.popularity.toFixed(1),'</p></li>\n                <li><p class="genre">').concat(r.genres,'</p></li>  \n              </ul>  \n            </div>\n          </div><div class="about">\n            <p>About</p>\n            <p>').concat(r.overview,'</p>\n          </div><div class="btn-list">\n            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller" data-id="').concat(n,'">Watch trailer</button>\n            <button class="add-to-my-library-btn btn modal" id="btn-add-to-my-library">Add to my library</button>\n          </div>\n        </div>'),p.wrap.innerHTML=o,l=document.querySelector("#btn-watch-treiller"),i=document.querySelector("#btn-add-to-my-library"),l.addEventListener("click",I),i.addEventListener("click",F),P(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function I(e){var t,n=+e.target.dataset.id;t=n,p.trailerModal.classList.remove("is-hidden"),function(e){J.apply(this,arguments)}(t),document.addEventListener("keydown",A),p.closeTrailerBtn.addEventListener("click",B)}function J(){return(J=e(c)(e(s).mark((function t(n){var r,o,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.fetchTrailers)(n);case 3:(r=e.sent).length>0?(o=r[0].key,l=H(o),p.trailerModalContent.innerHTML=l):D(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trailer:",e.t0),D();case 11:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function H(e){return viewportWidth<=767?'\n      <iframe width="250" height="160" src="https://www.youtube.com/embed/'.concat(e,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    '):'\n      <iframe width="600" height="300" src="https://www.youtube.com/embed/'.concat(e,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    ')}function D(){trailerErrorImage.classList.remove("is-hidden"),p.trailerModalContent.innerHTML='\n    <div class="error-mode-content">\n      <div class="trailer-error-info">\n        <p>OOPS...</p>\n        <p>We are very sorry!</p>\n        <p>But we couldn\'t find the trailer.</p>\n      </div>\n  '}function A(e){"Escape"===e.key&&B()}function B(){p.trailerModal.classList.add("is-hidden"),p.trailerModalContent.innerHTML="",document.removeEventListener("keydown",A),p.closeModalBtn.removeEventListener("click",B)}function P(){JSON.parse(S).includes(l)&&R("Remove from my library"),null===S&&R("Add to my library")}function F(){O(),S=localStorage.getItem(b);try{if(null===S)return g.push(l),localStorage.setItem(b,JSON.stringify(g)),S=localStorage.getItem(b),R("Remove from my library"),void k();var e=JSON.parse(S);if(!e.includes(l))return e.push(l),localStorage.setItem(b,JSON.stringify(e)),S=localStorage.getItem(b),R("Remove from my library"),void k();if(e.includes(l)){var t=e.indexOf(l);e.splice(t,1),localStorage.setItem(b,JSON.stringify(e)),S=localStorage.getItem(b),R("Add to my library"),k()}}catch(e){d.Notify.failure("Please, try one more time")}}function R(e){i.textContent=e}function _(e){(a=e.target).hasAttribute("id")?(p.selectStyled.textContent=a.textContent,W(),function(e){if(""!==e.id&&p.body.classList.contains("light"))return void(p.selectStyled.style.color="#282828");""!==e.id&&(p.selectStyled.style.color="#ffffff")}(a),function(e){j.apply(this,arguments)}(a.textContent)):W()}function j(){return j=e(c)(e(s).mark((function t(n){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.innerHTML="","";try{JSON.parse(S).forEach(function(){var t=e(c)(e(s).mark((function t(r){var o,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.fetchMovieDetails)(r);case 2:if(!(o=e.sent).genres.includes(n)){e.next=9;break}return e.next=6,(0,u.cardMarkup)(o.id);case 6:l=e.sent,v.innerHTML+=l,E();case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(e){console.log(e)}case 3:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}function W(){"none"!==p.selectList.style.display?p.selectList.style.display="none":p.selectList.style.display="block"}h.addEventListener("click",(function(){w+=1,L()})),o("6y5lF"),o("gOyL5")}();
//# sourceMappingURL=library.ca2116f3.js.map
