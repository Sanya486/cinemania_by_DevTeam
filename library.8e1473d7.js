var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("kQlMt"),o("e9oz9"),o("6SEeX"),o("aDtKJ"),o("4Q23v"),o("8fHRS"),o("lbZk7"),o("hy2MT"),o("8lRc6"),o("8tl5M");var n=o("iQIUW"),l=o("imk7a"),i=o("aDtKJ"),a=o("e9oz9"),c=o("5ZOIY"),s=o("hRoFA");s=o("hRoFA");const d={heroContainer:document.querySelector(".home-hero > .container"),trailerModalBackDrop:document.querySelector(".trailer-modal-backdrop"),trailerModalContent:document.querySelector(".trailer-modal-content"),trailerAvaible:document.querySelector(".trailer-avaible"),trailerErrorContent:document.querySelector(".trailer-error-mode-content"),trailerErrorImage:document.querySelector(".trailer-placeholder-default"),moreDetail:document.querySelector(".modal-film-info"),closeModalBtn:document.querySelector(".modal-film-info .close-modal"),closeTrailerBtn:document.querySelector(".close-trailer-btn"),homeTrendsList:document.querySelector(".home-trends-list"),body:document.querySelector("body"),scrollUpBtn:document.querySelector("#back-to-top"),wrap:document.querySelector(".flex"),selectSection:document.querySelector(".genre-filter"),select:document.querySelector(".select"),selectList:document.querySelector(".select-options"),selectStyled:document.querySelector(".select-styled-content"),selectAll:document.querySelector(".select-styled"),sectionLibrary:document.querySelector(".library-film-list"),libraryCardList:document.querySelector(".card-list-search-result"),loadMoreBtn:document.querySelector("#js-loadmore"),resetBtn:document.querySelector(".reset-filter-button")};let u,y,m,f=[],v=localStorage.getItem("films-id-array");let p=1;function S(){if(null===v||0===JSON.parse(v).length)b();else{const e=JSON.parse(v).slice(9*(p-1),9*p).map((e=>(0,l.cardMarkup)(e)));Promise.all(e).then((e=>{const t=e.join("");d.libraryCardList.innerHTML+=t,h(),k()})).catch((e=>{console.error("Error rendering film cards:",e)}))}d.select.addEventListener("click",C),d.resetBtn.addEventListener("click",(()=>{document.location.reload()}))}function L(){if(p=1,v=localStorage.getItem("films-id-array"),null===v||0===JSON.parse(v).length)b();else{const e=JSON.parse(v).map((e=>(0,l.cardMarkup)(e))).slice(9*(p-1),9*p);Promise.all(e).then((e=>{const t=e.join("");d.libraryCardList.innerHTML=t,h()})).catch((e=>{console.error("Error rendering film cards:",e)}))}d.select.addEventListener("click",C),d.resetBtn.addEventListener("click",(()=>{document.location.reload()}))}function b(){n.Notify.info("OOPS... You don't have any movies at your library.");d.sectionLibrary.innerHTML='<div class="container-library container">\n      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don\'t have any movies at your library.</p>\n      <button class="main-accent-sml-btn btn library" onclick="window.location.href=\'catalog.html\'">Search movie</button>\n    </div>',d.selectSection.classList.add("hidden")}function h(){JSON.parse(v).length>9*p?d.loadMoreBtn.style.display="block":d.loadMoreBtn.style.display="none",k()}function k(){let e=document.querySelectorAll(".film-card");for(const t of e)t.addEventListener("click",g)}function g(e){var t;e.preventDefault(),u=+e.currentTarget.id,t=u,d.moreDetail.classList.remove("is-hidden"),async function(e){try{const t=await(0,c.markupMoreDetails)(e);d.wrap.innerHTML=t;const r=document.querySelector("#btn-watch-treiller");y=document.querySelector("#btn-add-to-my-library"),r.addEventListener("click",q),y.addEventListener("click",D),JSON.parse(v).includes(u)&&T("Remove from my library"),null===v&&T("Add to my library")}catch(e){console.log(e)}}(t),document.addEventListener("keydown",M),d.moreDetail.addEventListener("click",(e=>(0,s.closeOnBacdrop)(e,E))),d.body.style.overflow="hidden",d.scrollUpBtn.style.display="none"}function E(){d.moreDetail.classList.add("is-hidden"),document.removeEventListener("keydown",M),d.moreDetail.removeEventListener("click",s.closeOnBacdrop),d.body.style.overflow="auto"}function M(e){"Escape"===e.key&&E()}function q(e){const t=+e.target.dataset.id;var r;r=t,d.trailerModalBackDrop.classList.remove("is-hidden"),async function(e){try{const t=await(0,i.fetchTrailers)(e);if(t.length>0){const e=t[0].key,r=(0,s.showTrailer)(e);d.trailerAvaible.innerHTML=r}else d.trailerErrorContent.classList.remove("hidden")}catch(e){console.error("Error fetching trailer:",e),d.trailerErrorContent.classList.remove("hidden")}}(r),document.addEventListener("keydown",O),d.closeTrailerBtn.addEventListener("click",B),d.trailerModalBackDrop.addEventListener("click",w)}function w(e){closeOnBackdropClick(e,B)}function O(e){"Escape"===e.key&&B()}function B(){d.trailerModalBackDrop.classList.add("is-hidden"),d.trailerErrorContent.classList.add("hidden"),d.trailerAvaible.innerHTML="",document.removeEventListener("keydown",O),d.closeModalBtn.removeEventListener("click",B),d.trailerModalBackDrop.removeEventListener("click",w)}function D(){E(),v=localStorage.getItem("films-id-array");try{if(null===v)return f.push(u),localStorage.setItem("films-id-array",JSON.stringify(f)),v=localStorage.getItem("films-id-array"),T("Remove from my library"),void L();let e=JSON.parse(v);if(!e.includes(u))return e.push(u),localStorage.setItem("films-id-array",JSON.stringify(e)),v=localStorage.getItem("films-id-array"),T("Remove from my library"),void L();if(e.includes(u)){const t=e.indexOf(u);e.splice(t,1),localStorage.setItem("films-id-array",JSON.stringify(e)),v=localStorage.getItem("films-id-array"),T("Add to my library"),L()}}catch(e){n.Notify.failure("Please, try one more time")}}function T(e){y.textContent=e}function C(e){m=e.target,m.hasAttribute("id")?(d.selectStyled.textContent=m.textContent,N(),function(e){if(""!==e.id&&d.body.classList.contains("light"))return void(d.selectStyled.style.color="#282828");""!==e.id&&(d.selectStyled.style.color="#ffffff")}(m),async function(e){d.libraryCardList.innerHTML="";try{JSON.parse(v).forEach((async t=>{const r=await(0,a.fetchMovieDetails)(t);if(r.genres.includes(e)){const e=await(0,l.cardMarkup)(r.id);d.libraryCardList.innerHTML+=e,k()}}))}catch(e){console.log(e)}}(m.textContent)):N()}function N(){"none"!==d.selectList.style.display?d.selectList.style.display="none":d.selectList.style.display="block"}d.closeModalBtn.addEventListener("click",E),window.addEventListener("load",S),d.loadMoreBtn.addEventListener("click",(()=>{p+=1,S()})),o("cFYrD"),o("fsbGD");
//# sourceMappingURL=library.8e1473d7.js.map