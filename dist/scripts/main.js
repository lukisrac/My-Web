!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(n){var o,r;/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-e)),i=window.setTimeout((function(){t(o+r)}),r);return e=o+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,i="",a=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===a?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(i)}};return function(a,c){var u,s,l,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",u)},animateScroll:function(o,a,c){f.cancelScroll();var s=n(u||t,c||{}),m="[object Number]"===Object.prototype.toString.call(o),p=m||!o.tagName?null:o;if(m||p){var h=e.pageYOffset;s.header&&!l&&(l=document.querySelector(s.header));var y,v,g,w,b,S,E,A,O=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(l),M=m?o:function(t,n,o,i){var a=0;if(t.offsetParent)for(;a+=t.offsetTop,t=t.offsetParent;);return a=Math.max(a-n-o,0),i&&(a=Math.min(a,r()-e.innerHeight)),a}(p,O,parseInt("function"==typeof s.offset?s.offset(o,a):s.offset,10),s.clip),q=M-h,L=r(),k=0,C=(y=q,g=(v=s).speedAsDuration?v.speed:Math.abs(y/1e3*v.speed),v.durationMax&&g>v.durationMax?v.durationMax:v.durationMin&&g<v.durationMin?v.durationMin:parseInt(g,10)),I=function(t){var n,r,c;w||(w=t),k+=t-w,S=h+q*(r=b=1<(b=0===C?0:k/C)?1:b,"easeInQuad"===(n=s).easing&&(c=r*r),"easeOutQuad"===n.easing&&(c=r*(2-r)),"easeInOutQuad"===n.easing&&(c=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(c=r*r*r),"easeOutCubic"===n.easing&&(c=--r*r*r+1),"easeInOutCubic"===n.easing&&(c=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(c=r*r*r*r),"easeOutQuart"===n.easing&&(c=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(c=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(c=r*r*r*r*r),"easeOutQuint"===n.easing&&(c=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(c=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(c=n.customEasing(r)),c||r),e.scrollTo(0,Math.floor(S)),function(t,n){var r,c,u,l=e.pageYOffset;if(t==n||l==n||(h<n&&e.innerHeight+l)>=L)return f.cancelScroll(!0),c=n,u=m,0===(r=o)&&document.body.focus(),u||(r.focus(),document.activeElement!==r&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),e.scrollTo(0,c)),i("scrollStop",s,o,a),!(d=w=null)}(S,M)||(d=e.requestAnimationFrame(I),w=t)};0===e.pageYOffset&&e.scrollTo(0,0),E=o,A=s,m||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:E.id},document.title,E===document.documentElement?"#top":"#"+E.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?e.scrollTo(0,Math.floor(M)):(i("scrollStart",s,o,a),f.cancelScroll(!0),e.requestAnimationFrame(I))}}},m=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(s=t.target.closest(a))&&"a"===s.tagName.toLowerCase()&&!t.target.closest(u.ignore)&&s.hostname===e.location.hostname&&s.pathname===e.location.pathname&&/#/.test(s.href)){var n,r=o(s.hash);if("#"===r){if(!u.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(r);(n=n||"#top"!==r?n:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(u),f.animateScroll(n,s))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){u&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),d=l=s=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),u=n(t,c||{}),l=u.header?document.querySelector(u.header):null,document.addEventListener("click",m,!1),u.updateURL&&u.popstate&&e.addEventListener("popstate",p,!1)}(),f}}(r)}.apply(t,[]))||(e.exports=o)}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var u=function(){function e(t){i(this,e),this.container=t}return c(e,[{key:"sticky",value:function(){var e=this;window.addEventListener("scroll",(function(){var t=e.container.scrollHeight;window.scrollY>=t?e.container.classList.add("sticky"):e.container.classList.remove("sticky")}))}}]),e}(),s=function(){function e(t){i(this,e),this.link=t}return c(e,[{key:"init",value:function(){var e=this;window.addEventListener("scroll",(function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?(e.link.style.opacity="1",e.link.style.display="block"):(e.link.style.opacity="0",e.link.addEventListener("transitionend",(function(){e.link.style.display="none"})))}))}}]),e}();new r.a('a[href*="#"]',{updateURL:!1});new u(document.querySelector(".navbar")).sticky(),new s(document.querySelector(".back-to-top")).init();var l=document.querySelector(".projects__container"),d=new Isotope(l,{itemSelector:".project__item",layoutMode:"masonry"}),f=document.querySelectorAll(".projects__filter-item");document.querySelectorAll(".projects__filter-category").forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.parentElement;f.forEach((function(e){e.classList.remove("active"),t===e&&t.classList.toggle("active")}));var n=e.target.getAttribute("data-filter");d.arrange({filter:n})}))}))}]);