var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in o){var i=o[t];delete o[t];var n={id:t,exports:{}};return e[t]=n,i.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},t.parcelRequired7c6=i),i("kQlMt"),i("e9oz9"),i("6SEeX"),i("aDtKJ"),i("4Q23v"),i("fgOKF"),i("lbZk7"),i("hy2MT"),i("59yTk"),i("8nneY");const n=document.getElementById("toggle"),a=document.body;n.addEventListener("change",(function(){n.checked?(a.classList.remove("light"),localStorage.removeItem("theme-color-local")):(a.classList.add("light"),localStorage.setItem("theme-color-local","light"))})),"light"===localStorage.getItem("theme-color-local")?(a.classList.add("light"),n.checked=!1):(a.classList.remove("light"),n.checked=!0);var r=i("2shzp"),l=i("e9oz9"),s=i("59yTk"),c=i("aDtKJ");const m={heroContainer:document.querySelector(".home-hero > .container"),trailerModal:document.querySelector(".trailer-modal"),trailerModalContent:document.querySelector(".trailer-modal-content"),moreDetail:document.querySelector(".modal-film-info"),poster:document.querySelector(".poster-img"),title:document.querySelector(".movie-title"),vote:document.querySelector(".vote"),votes:document.querySelector(".votes"),popularity:document.querySelector(".popularity"),genre:document.querySelector(".genre"),description:document.querySelector(".about p"),closeModalBtn:document.querySelector(".close-trailer-btn"),wrap:document.querySelector(".flex")};function d(t){!function(t){m.trailerModal.classList.remove("is-hidden"),async function(t){try{const e=await(0,c.fetchTrailers)(t);if(e.length>0){const t=function(t){return`\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/${t}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n  `}(e[0].key);m.trailerModalContent.innerHTML=`<div class="trailer-modal-content">${t}</div>`}else{const t='\n    <div class="trailer-error-info">\n      <p>OOPS...</p>\n      <p>We are very sorry!</p>\n      <p>But we couldn\'t find the trailer.</p>\n    </div>\n    <picture>\n      <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 320px)">\n      <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 768px)">\n      <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" \n              media="(min-width: 769px)">\n      <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Traier is not found">\n    </picture>\n    </div>\n  ';m.trailerModal.innerHTML=`<div class="trailer-modal-content">${t}</div>`}}catch(t){console.error("Error fetching trailer:",t)}}(t),document.addEventListener("keydown",g),m.closeModalBtn.addEventListener("click",u)}(+t.target.dataset.id)}function f(t){!function(t){m.moreDetail.classList.remove("is-hidden"),async function(t){try{const e=await(0,l.fetchMovieDetails)(t),o=`<div class="poster"> \n          <img src="https://image.tmdb.org/t/p/original/${e.smallPoster}" class="poster-img" alt="the poster of the movie you have chosen"/>\n        </div><div>\n          <h1 class="movie-title">${e.title}</h1><div class="movie-info">\n            <div class="info">\n              <ul>\n                <li>Vote / Votes</li>\n                <li>Popularity</li>\n                <li>Genre</li>\n              </ul>\n            </div><div class="params">\n              <ul>\n                <li>\n                  <div class="vote">${e.voteAverage}</div>\n                  /\n                  <div class="votes">${e.voteCount}</div>\n                </li>\n                <li><span class="popularity">${e.popularity.toFixed(1)}</span></li>\n                <li><span class="genre">${e.genres}</span></li>  \n              </ul>  \n            </div>\n          </div><div class="about">\n            <h2>ABOUT</h2>\n            <p>${e.overview}</p>\n          </div><div class="btn-list">\n            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller"\n            data-id="${t}">Watch trailer</button>\n            <button class="rm-dark-bcg-btn btn modal" id="btn-add-to-my-library">Add to my library</button>\n          </div>\n        </div>`;m.wrap.innerHTML=o;const i=document.querySelector("#btn-watch-treiller"),n=document.querySelector("#btn-add-to-my-library");i.addEventListener("click",d),n.addEventListener("click",action)}catch(t){console.log(t)}}(t),document.addEventListener("keydown",y)}(+t.target.dataset.id);document.querySelector(".modal-film-info .close-modal").addEventListener("click",p)}function p(){m.moreDetail.classList.add("is-hidden"),document.removeEventListener("keydown",y)}function u(){m.trailerModal.classList.add("is-hidden"),m.trailerModalContent.innerHTML="",document.removeEventListener("keydown",g),m.closeModalBtn.removeEventListener("click",u)}function y(t){"Escape"===t.key&&p()}function g(t){"Escape"===t.key&&u()}window.addEventListener("load",(async function(){try{const t=await(async()=>(await r.default.get("https://api.themoviedb.org/3/trending/movie/day?api_key=3e1aa277fd6b8a3cd0a3e29dfce20a5c")).data.results.map((t=>t.id)))();await async function(t){try{const e=t[Math.floor(Math.random()*t.length)];!function(t){const{title:e,overview:o,smallPoster:i,poster:n,voteAverage:a,id:r}=t,l=Math.round(a),c=(0,s.rateArray)(l).map((t=>`<li class="rating-item">\n               <img class="rating-icon" src="${t}" alt="">\n               </li>`)).join(""),d=`<div class="home-hero-api-movie">\n      <div class="home-hero-api-movie-con"><h2 class="home-hero-api-movie-name">${e}</h2>\n    <div class="home-hero-api-movie-rating">\n      <ul class="film-rating-hero">\n        ${c}\n      </ul>\n    </div>\n    <p class="home-hero-api-movie-description">\n      ${o}\n    </p>\n    <div class="home-hero-api-movie-btns">\n    <button class="main-accent-sml-btn btn" id='btn-watch-trailer' data-id="${r}">Watch trailer</button>\n    <button class="rm-light-bcg-btn btn btn-call-film-info" data-id="${r}">More details </button>\n    </div>\n  </div>\n  <div class="home-hero-api-movie-bg">\n    <img\n      src="https://image.tmdb.org/t/p/original/${i}"\n      srcset="\n        https://image.tmdb.org/t/p/original/${i}  320w,\n        https://image.tmdb.org/t/p/original/${n}  768w,\n        https://image.tmdb.org/t/p/original/${n} 1280w\n      "\n      sizes="(max-width: 320px) 320px,\n          (max-width: 768px) 380px,\n          1280px"\n      alt="${e}"\n    />\n    </div>\n    </div>`;m.heroContainer.innerHTML=d}(await(0,l.fetchMovieDetails)(e))}catch(t){throw new Error(t.message)}}(t);document.getElementById("btn-watch-trailer").addEventListener("click",d);document.querySelector(".btn-call-film-info").addEventListener("click",f)}catch(t){throw new Error(t.message)}})),i("jqxwP"),i("fbGf3"),i("97pP7"),i("faktv");var h,x,v={};h=void 0!==t?t:"undefined"!=typeof window?window:v,x=function(t){if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},l=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},s=function(e){return e||(e="head"),null!==t.document[e]||(l('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},m=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,f=function(l,m,f,u){if(!s("body"))return!1;e||p.Notify.init({});var y=c(!0,e,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof u&&!Array.isArray(u)){var g={};"object"==typeof f?g=f:"object"==typeof u&&(g=u),e=c(!0,e,g)}var h,x,v=e[l.toLocaleLowerCase("en")];d++,"string"!=typeof m&&(m="Notiflix "+l),e.plainText&&(h=m,(x=t.document.createElement("div")).innerHTML=h,m=x.textContent||x.innerText||""),!e.plainText&&m.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),m='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),m.length>e.messageMaxLength&&(m=m.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(b.id=r.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(r.overlayID)||t.document.createElement("div");w.id=r.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=v.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(b);var k=t.document.createElement("div");k.id=e.ID+"-"+d,k.className=e.className+" "+v.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=v.textColor,k.style.background=v.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof f&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+m+"</span>"+(e.closeButton?N:"");else{var S="";l===o?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':l===i?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':l===n?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':l===a&&(S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=S+'<span class="nx-message nx-with-icon">'+m+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+m+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var L=t.document.getElementById(r.wrapID);L.insertBefore(k,L.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var I=t.document.getElementById(k.id);if(I){var C,M,A=function(){I.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(C)},E=function(){if(I&&null!==I.parentNode&&I.parentNode.removeChild(I),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(M)};if(e.closeButton&&"function"!=typeof f&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof f||e.clickToClose)&&I.addEventListener("click",(function(){"function"==typeof f&&f(),A();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof f){var z=function(){C=setTimeout((function(){A()}),e.timeout),M=setTimeout((function(){E()}),e.timeout+e.cssAnimationDuration)};z(),e.pauseOnHover&&(I.addEventListener("mouseenter",(function(){I.classList.add("nx-paused"),clearTimeout(C),clearTimeout(M)})),I.addEventListener("mouseleave",(function(){I.classList.remove("nx-paused"),z()})))}}if(e.showOnlyTheLastOne&&d>0)for(var T=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+d+"])"),W=0;W<T.length;W++){var D=T[W];null!==D.parentNode&&D.parentNode.removeChild(D)}e=c(!0,e,y)},p={Notify:{init:function(o){e=c(!0,r,o),function(e,o){if(!s("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(m,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return l("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){f(o,t,e,i)},failure:function(t,e,o){f(i,t,e,o)},warning:function(t,e,o){f(n,t,e,o)},info:function(t,e,o){f(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return x(h)})):"object"==typeof v?v=x(h):h.Notiflix=x(h);var b=i("fgOKF"),w=(l=i("e9oz9"),i("8nneY"));const k={heroContainer:document.querySelector(".home-hero > .container"),trailerModal:document.querySelector(".trailer-modal"),moreDetail:document.querySelector(".modal-film-info"),poster:document.querySelector(".poster-img"),title:document.querySelector(".movie-title"),vote:document.querySelector(".vote"),votes:document.querySelector(".votes"),popularity:document.querySelector(".popularity"),genre:document.querySelector(".genre"),wrap:document.querySelector(".flex"),closeModalBtn:document.querySelector(".modal-film-info .close-modal")},N=document.querySelector(".home-trends-list");function S(t){t.preventDefault();!function(t){k.moreDetail.classList.remove("is-hidden"),async function(t){try{const e=await(0,l.fetchMovieDetails)(t),o=`<div class="poster"> \n          <img src="https://image.tmdb.org/t/p/original/${e.smallPoster}" class="poster-img" alt="the poster of the movie you have chosen"/>\n        </div><div>\n          <h1 class="movie-title">${e.title}</h1><div class="movie-info">\n            <div class="info">\n              <ul>\n                <li>Vote / Votes</li>\n                <li>Popularity</li>\n                <li>Genre</li>\n              </ul>\n            </div><div class="params">\n              <ul>\n                <li>\n                  <div class="vote">${e.voteAverage}</div>\n                  /\n                  <div class="votes">${e.voteCount}</div>\n                </li>\n                <li><span class="popularity">${e.popularity}</span></li>\n                <li><span class="genre">${e.genres}</span></li>  \n              </ul>  \n            </div>\n          </div><div class="about">\n            <h2>ABOUT</h2>\n            <p>${e.overview}</p>\n          </div><div class="btn-list">\n            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller">Watch trailer</button>\n            <button class="rm-dark-bcg-btn btn modal" id="btn-add-to-my-library">Add to my library</button>\n          </div>\n        </div>`;k.wrap.innerHTML=o}catch(t){console.log(t)}}(t),document.addEventListener("keydown",I)}(+t.currentTarget.id)}function L(){k.moreDetail.classList.add("is-hidden"),isModalOpen=!1,document.removeEventListener("keydown",I)}function I(t){"Escape"===t.key&&L()}window.addEventListener("load",(async function(){try{const t=await(0,b.fetchTrendingMovies)();if(0===t.length)return void v.Notify.failure("We are sorry but we don't have any upcoming films");const e=function(t){const e=Math.floor(5*Math.random());return t.slice(e,e+3)}(t);!async function(t){try{const e=await Promise.all(t.map((async t=>await(0,w.cardMarkup)(t.id))));N.innerHTML=e.join(""),function(){let t=document.querySelectorAll(".film-card");for(const e of t)e.addEventListener("click",S);console.log(t)}()}catch(t){console.log(t.message)}}(e)}catch(t){console.log(t.message)}})),k.closeModalBtn.addEventListener("click",L);l=i("e9oz9");var C=i("kQlMt");const M={filmBlock:document.querySelector(".home-upcoming-film-wrap-js")};let A,E,z=[],T=localStorage.getItem("films-id-array");function W(t,e,o){const i=`<div class="home-upcoming-film-poster-wrap"><div class="home-upcoming-film-poster-overlay"></div><img class="home-upcoming-film-poster" src="${e}"></div><div class="home-upcoming-film-info-wrap">\n          <h3 class="home-upcoming-film-title text">${t.title}</h3>\n            <ul class="home-upcoming-film-info-list">\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Release date</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-date text">${t.date.split("-").reverse().join(".")}</p></div>\n              </li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Vote / Votes</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-rating text light-theme-color"><span class="home-upcoming-film-info-rating-number text">${o}</span>/<span class="home-upcoming-film-info-rating-number text">${t.voteCount}</span></p></div></li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Popularity</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-popularity text light-theme-color">${t.popularity.toFixed(1)}</p></div>\n              </li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Genre</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-genres text light-theme-color">${t.genres}</p></div>\n              </li>\n            </ul>\n          <p class="home-upcoming-film-about text">About</p>\n          <p class="home-upcoming-film-about-text text">Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city's lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.</p>\n          <button class="main-accent-sml-btn btn home-upcoming-btn-js" type="button">Add to my library</button>\n        </div>`;M.filmBlock.innerHTML=i}function D(t){if(0===t.voteAverage){const e="-";return t.voteCount="-",e}return t.voteAverage.toFixed(1)}function B(){E=document.querySelector(".home-upcoming-btn-js"),E.addEventListener("click",$)}function O(){JSON.parse(T).includes(A.id)&&q("Remove from my library"),null===T&&q("Add to my library")}function $(){try{if(null===T)return z.push(A.id),localStorage.setItem("films-id-array",JSON.stringify(z)),T=localStorage.getItem("films-id-array"),void q("Remove from my library");let t=JSON.parse(T);if(!t.includes(A.id))return t.push(A.id),localStorage.setItem("films-id-array",JSON.stringify(t)),T=localStorage.getItem("films-id-array"),void q("Remove from my library");if(t.includes(A.id)){const e=t.indexOf(A.id);t.splice(e,1),localStorage.setItem("films-id-array",JSON.stringify(t)),T=localStorage.getItem("films-id-array"),q("Add to my library")}}catch(t){v.Notify.failure("Please, try one more time")}}function q(t){E.textContent=t,E.classList.toggle("remove-js"),E.classList.toggle("main-accent-sml-btn")}function j(t){console.log(t.message)}window.addEventListener("load",(async function(){try{const t=await(0,C.fetchUpcoming)();if(0===t.length)return void v.Notify.failure("We are sorry but we don't have any upcoming films");!async function(t){const e=Math.floor(20*Math.random()),o=t.slice(e,e+1)[0].id;try{A=await(0,l.fetchMovieDetails)(o),function(t){const e=D(t),o=function(t,e){return"poster"===t?`https://image.tmdb.org/t/p/original/${e.poster}`:`https://image.tmdb.org/t/p/original/${e.smallPoster}`}(window.matchMedia("(min-width: 768px)").matches?"poster":"smallPoster",t);W(t,o,e)}(A),B(),O()}catch(t){j(t)}}(t)}catch(t){j(t)}})),window.matchMedia("(orientation: portrait)").addEventListener("change",(function(t){let e;e=t.matches?`https://image.tmdb.org/t/p/original/${A.smallPoster}`:`https://image.tmdb.org/t/p/original/${A.poster}`;try{const t=D(A);W(A,e,t),B(),O()}catch(t){j(t)}}));
//# sourceMappingURL=index.e5d16df6.js.map
