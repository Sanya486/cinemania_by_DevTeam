!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},n=e.parcelRequired7c6;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},e.parcelRequired7c6=n),n("jTnTT"),n("ldyZu"),n("qudGN"),n("dMHQ5"),n("6Zpxp"),n("jMR00"),n("dEJWt"),n("Folgn"),n("hLMxQ"),n("5T9lI"),n("chpbE"),n("2qgrg"),n("8FKnS"),n("6MRYZ"),n("6y5lF"),n("gOyL5");var a,r,l=n("bpxeT"),s=n("2TvXO"),c={};a=void 0!==e?e:"undefined"!=typeof window?window:c,r=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,i="Success",o="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},l=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},s=function(e){return e||(e="head"),null!==t.document[e]||(l('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var o=function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=c(t[o],i[o]):t[o]=i[o])};i<arguments.length;i++)o(arguments[i]);return t},m=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,p=function(l,m,p,u){if(!s("body"))return!1;e||d.Notify.init({});var y=c(!0,e,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof u&&!Array.isArray(u)){var x={};"object"==typeof p?x=p:"object"==typeof u&&(x=u),e=c(!0,e,x)}var h,g,v=e[l.toLocaleLowerCase("en")];f++,"string"!=typeof m&&(m="Notiflix "+l),e.plainText&&(h=m,(g=t.document.createElement("div")).innerHTML=h,m=g.textContent||g.innerText||""),!e.plainText&&m.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),m='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),m.length>e.messageMaxLength&&(m=m.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(b.id=r.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(r.overlayID)||t.document.createElement("div");w.id=r.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=v.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(b);var k=t.document.createElement("div");k.id=e.ID+"-"+f,k.className=e.className+" "+v.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof p?"nx-with-close-button":"")+" "+("function"==typeof p?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=v.textColor,k.style.background=v.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof p&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+m+"</span>"+(e.closeButton?N:"");else{var I="";l===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':l===o?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':l===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':l===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+m+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+m+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var C=t.document.getElementById(r.wrapID);C.insertBefore(k,C.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var S=t.document.getElementById(k.id);if(S){var T,L,A=function(){S.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(T)},M=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(L)};if(e.closeButton&&"function"!=typeof p&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var t=setTimeout((function(){M(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof p||e.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof p&&p(),A();var t=setTimeout((function(){M(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof p){var O=function(){T=setTimeout((function(){A()}),e.timeout),L=setTimeout((function(){M()}),e.timeout+e.cssAnimationDuration)};O(),e.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(T),clearTimeout(L)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),O()})))}}if(e.showOnlyTheLastOne&&f>0)for(var W=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+f+"])"),z=0;z<W.length;z++){var E=W[z];null!==E.parentNode&&E.parentNode.removeChild(E)}e=c(!0,e,y)},d={Notify:{init:function(i){e=c(!0,r,i),function(e,i){if(!s("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var o=t.document.createElement("style");o.id=i,o.innerHTML=e(),t.document.head.appendChild(o)}}(m,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return l("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,o){p(i,t,e,o)},failure:function(t,e,i){p(o,t,e,i)},warning:function(t,e,i){p(n,t,e,i)},info:function(t,e,i){p(a,t,e,i)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],(function(){return r(a)})):"object"==typeof c?c=r(a):a.Notiflix=r(a);var m,f,p=n("jMR00"),d=n("dMHQ5"),u=n("ldyZu"),y=n("5T9lI"),x={heroContainer:document.querySelector(".home-hero > .container"),trailerModal:document.querySelector(".trailer-modal"),trailerModalContent:document.querySelector(".trailer-modal-content"),moreDetail:document.querySelector(".modal-film-info"),wrap:document.querySelector(".flex"),closeModalBtn:document.querySelector(".modal-film-info .close-modal"),closeTrailerBtn:document.querySelector(".close-trailer-btn"),homeTrendsList:document.querySelector(".home-trends-list")},h=[],g=localStorage.getItem("films-id-array");function v(){return(v=t(l)(t(s).mark((function e(){var i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.fetchTrendingMovies)();case 3:if(0!==(i=t.sent).length){t.next=7;break}return c.Notify.failure("We are sorry but we don't have any upcoming films"),t.abrupt("return");case 7:b(k(i)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0.message);case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function b(t){return w.apply(this,arguments)}function w(){return w=t(l)(t(s).mark((function e(i){var o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(i.map(function(){var e=t(l)(t(s).mark((function e(i){var o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,y.cardMarkup)(i.id);case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:o=e.sent,x.homeTrendsList.innerHTML=o.join(""),N(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),w.apply(this,arguments)}function k(t){var e=Math.floor(5*Math.random());return t.slice(e,e+3)}function N(){var t=document.querySelectorAll(".film-card"),e=!0,i=!1,o=void 0;try{for(var n,a=t[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){n.value.addEventListener("click",I)}}catch(t){i=!0,o=t}finally{try{e||null==a.return||a.return()}finally{if(i)throw o}}}function I(t){var e;t.preventDefault(),m=+t.currentTarget.id,e=m,x.moreDetail.classList.remove("is-hidden"),function(t){T.apply(this,arguments)}(e),console.log(e),document.addEventListener("keydown",S)}function C(){x.moreDetail.classList.add("is-hidden"),isModalOpen=!1,document.removeEventListener("keydown",S)}function S(t){"Escape"===t.key&&C()}function T(){return(T=t(l)(t(s).mark((function e(i){var o,n,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.fetchMovieDetails)(i);case 3:o=t.sent,n='<div class="poster"> \n          <img src="https://image.tmdb.org/t/p/original/'.concat(o.smallPoster,'" class="poster-img" alt="the poster of the movie you have chosen"/>\n        </div><div>\n          <h1 class="movie-title">').concat(o.title,'</h1><div class="movie-info">\n            <div class="info">\n              <ul>\n                <li>Vote / Votes</li>\n                <li>Popularity</li>\n                <li>Genre</li>\n              </ul>\n            </div><div class="params">\n              <ul>\n                <li>\n                  <div class="vote">').concat(o.voteAverage,'</div>\n                  /\n                  <div class="votes">').concat(o.voteCount,'</div>\n                </li>\n                <li><span class="popularity">').concat(o.popularity.toFixed(1),'</span></li>\n                <li><span class="genre">').concat(o.genres,'</span></li>  \n              </ul>  \n            </div>\n          </div><div class="about">\n            <h2>ABOUT</h2>\n            <p>').concat(o.overview,'</p>\n          </div><div class="btn-list">\n            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller" data-id="').concat(i,'">Watch trailer</button>\n            <button class="rm-dark-bcg-btn btn modal" id="btn-add-to-my-library">Add to my library</button>\n          </div>\n        </div>'),x.wrap.innerHTML=n,a=document.querySelector("#btn-watch-treiller"),f=document.querySelector("#btn-add-to-my-library"),a.addEventListener("click",L),f.addEventListener("click",E),z(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function L(t){var e,i=+t.target.dataset.id;console.log(i),e=i,x.trailerModal.classList.remove("is-hidden"),function(t){A.apply(this,arguments)}(e),document.addEventListener("keydown",O),x.closeTrailerBtn.addEventListener("click",W)}function A(){return(A=t(l)(t(s).mark((function e(i){var o,n,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.fetchTrailers)(i);case 3:(o=t.sent).length>0?(n=o[0].key,a=M(n),x.trailerModalContent.innerHTML='<div class="trailer-modal-content">'.concat(a,"</div>")):('\n    <div class="trailer-error-info">\n      <p>OOPS...</p>\n      <p>We are very sorry!</p>\n      <p>But we couldn\'t find the trailer.</p>\n    </div>\n    <picture>\n      <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 320px)">\n      <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 768px)">\n      <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" \n              media="(min-width: 769px)">\n      <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Traier is not found">\n    </picture>\n    </div>\n  ',x.trailerModal.innerHTML='<div class="trailer-modal-content">'.concat('\n    <div class="trailer-error-info">\n      <p>OOPS...</p>\n      <p>We are very sorry!</p>\n      <p>But we couldn\'t find the trailer.</p>\n    </div>\n    <picture>\n      <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 320px)">\n      <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" \n              media="(max-width: 768px)">\n      <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, \n                    ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" \n              media="(min-width: 769px)">\n      <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Traier is not found">\n    </picture>\n    </div>\n  ',"</div>")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching trailer:",t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function M(t){return'\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/'.concat(t,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n  ')}function O(t){"Escape"===t.key&&W()}function W(){x.trailerModal.classList.add("is-hidden"),x.trailerModalContent.innerHTML="",document.removeEventListener("keydown",O),x.closeModalBtn.removeEventListener("click",W)}function z(){JSON.parse(g).includes(m)&&B("Remove from my library"),null===g&&B("Add to my library")}function E(){try{if(null===g)return h.push(m),localStorage.setItem("films-id-array",JSON.stringify(h)),g=localStorage.getItem("films-id-array"),void B("Remove from my library");var t=JSON.parse(g);if(!t.includes(m))return t.push(m),localStorage.setItem("films-id-array",JSON.stringify(t)),g=localStorage.getItem("films-id-array"),void B("Remove from my library");if(t.includes(m)){var e=t.indexOf(m);t.splice(e,1),localStorage.setItem("films-id-array",JSON.stringify(t)),g=localStorage.getItem("films-id-array"),B("Add to my library")}}catch(t){c.Notify.failure("Please, try one more time")}}function B(t){f.textContent=t}window.addEventListener("load",(function(){return v.apply(this,arguments)})),x.closeModalBtn.addEventListener("click",C);l=n("bpxeT"),s=n("2TvXO"),u=n("ldyZu");var D,j,q=n("jTnTT"),H={filmBlock:document.querySelector(".home-upcoming-film-wrap-js")},R=[],F=localStorage.getItem("films-id-array");function P(){return(P=t(l)(t(s).mark((function e(){var i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,q.fetchUpcoming)();case 3:if(0!==(i=t.sent).length){t.next=7;break}return c.Notify.failure("We are sorry but we don't have any upcoming films"),t.abrupt("return");case 7:J(i),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),K(t.t0);case 13:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function J(t){return U.apply(this,arguments)}function U(){return(U=t(l)(t(s).mark((function e(i){var o,n;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Math.floor(20*Math.random()),n=i.slice(o,o+1)[0].id,t.prev=2,t.next=5,(0,u.fetchMovieDetails)(n);case 5:V(D=t.sent),_(),G(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),K(t.t0);case 14:case"end":return t.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function Q(t,e,i){var o='<div class="home-upcoming-film-poster-wrap"><div class="home-upcoming-film-poster-overlay"></div><img class="home-upcoming-film-poster" src="'.concat(e,'"></div><div class="home-upcoming-film-info-wrap">\n          <h3 class="home-upcoming-film-title text">').concat(t.title,'</h3>\n            <ul class="home-upcoming-film-info-list">\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Release date</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-date text">').concat(t.date.split("-").reverse().join("."),'</p></div>\n              </li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Vote / Votes</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-rating text light-theme-color"><span class="home-upcoming-film-info-rating-number text">').concat(i,'</span>/<span class="home-upcoming-film-info-rating-number text">').concat(t.voteCount,'</span></p></div></li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Popularity</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-popularity text light-theme-color">').concat(t.popularity.toFixed(1),'</p></div>\n              </li>\n              <li class="home-upcoming-film-info-item">\n                <div class="home-upcoming-film-info-item-wrap">\n                  <p class="home-upcoming-film-info-item-text text">Genre</p>\n                </div>\n                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-genres text light-theme-color">').concat(t.genres,'</p></div>\n              </li>\n            </ul>\n          <p class="home-upcoming-film-about text">About</p>\n          <p class="home-upcoming-film-about-text text">Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city\'s lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.</p>\n          <button class="main-accent-sml-btn btn home-upcoming-btn-js" type="button">Add to my library</button>\n        </div>');H.filmBlock.innerHTML=o}function V(t){var e=Z(t),i=function(t,e){return"https://image.tmdb.org/t/p/original/".concat("poster"===t?e.poster:e.smallPoster)}(window.matchMedia("(min-width: 768px)").matches?"poster":"smallPoster",t);Q(t,i,e)}function Z(t){if(0===t.voteAverage){return t.voteCount="-","-"}return t.voteAverage.toFixed(1)}function _(){(j=document.querySelector(".home-upcoming-btn-js")).addEventListener("click",Y)}function G(){JSON.parse(F).includes(D.id)&&X("Remove from my library"),null===F&&X("Add to my library")}function Y(){try{if(null===F)return R.push(D.id),localStorage.setItem("films-id-array",JSON.stringify(R)),F=localStorage.getItem("films-id-array"),void X("Remove from my library");var t=JSON.parse(F);if(!t.includes(D.id))return t.push(D.id),localStorage.setItem("films-id-array",JSON.stringify(t)),F=localStorage.getItem("films-id-array"),void X("Remove from my library");if(t.includes(D.id)){var e=t.indexOf(D.id);t.splice(e,1),localStorage.setItem("films-id-array",JSON.stringify(t)),F=localStorage.getItem("films-id-array"),X("Add to my library")}}catch(t){c.Notify.failure("Please, try one more time")}}function X(t){j.textContent=t,j.classList.toggle("remove-js"),j.classList.toggle("main-accent-sml-btn")}function K(t){console.log(t.message)}window.addEventListener("load",(function(){return P.apply(this,arguments)})),window.matchMedia("(orientation: portrait)").addEventListener("change",(function(t){var e;e=t.matches?"https://image.tmdb.org/t/p/original/".concat(D.smallPoster):"https://image.tmdb.org/t/p/original/".concat(D.poster);try{var i=Z(D);Q(D,e,i),_(),G()}catch(t){K(t)}}))}();
//# sourceMappingURL=index.43ff8459.js.map
