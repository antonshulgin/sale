!function(){"use strict";!function(e,t,n,i,o,c,r){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,c=t.createElement(n),r=t.getElementsByTagName(n)[0],c.async=1,c.src=i,r.parentNode.insertBefore(c,r)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-92538779-1","auto"),ga("send","pageview"),function(){!function(e,t,n){(t[n]=t[n]||[]).push(function(){try{t.yaCounter43049609=new Ya.Metrika({id:43049609,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(e){}});var i=e.getElementsByTagName("script")[0],o=e.createElement("script"),c=function(){i.parentNode.insertBefore(o,i)};o.type="text/javascript",o.async=!0,o.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",c,!1):c()}(document,window,"yandex_metrika_callbacks");var e=document.createElement("noscript");e.innerHTML='<div><img src="https://mc.yandex.ru/watch/43049609" style="position:absolute; left:-9999px;" alt="" /></div>',document.body.append(e)}()}(),function(e){"use strict";function t(){L(A()),S()&&(x(j()),k()&&(b(I()),p()&&(q(),i(),l(!0),e.showcase={startSlideshow:l,stopSlideshow:u,bumpGallery:d,showNextImage:v,showPreviousImage:f,toggleDetails:r})))}function n(){return V.keyboardActions}function i(){var e={};e[z]=d,e[J]=f,e[Q]=v,e[R]=r,V.keyboardActions=e,window.addEventListener("keyup",o,!1)}function o(e){if(e){var t=n();if(t&&(e.preventDefault(),e.keyCode)){var i=e.keyCode;c(i)&&t[i](!0,e.shiftKey)}}}function c(e){var t=n();if(t&&t.hasOwnProperty(e))return C(t[e])}function r(){S().classList.toggle(G)}function a(){return V.isSlideshowActive}function s(){u(),l()}function u(){a()&&(clearInterval(V.slideshowInterval),V.isSlideshowActive=!1,S().classList.remove(M))}function l(e){a()||p()&&(e&&h(w()),V.slideshowInterval=setInterval(v,Y),V.isSlideshowActive=!0,S().classList.add(M))}function d(e,t){return t?void f(e):void v(e)}function f(e){h(w()-1,e)}function v(e){h(w()+1,e)}function h(e,t){var n=p();if(n)return g(),m(e),n[w()].classList.add(T),t?void u():void(a()&&s())}function w(){return V.activeImageIndex||0}function m(e){if(E(e))return e>=p().length?void(V.activeImageIndex=0):e<0?void(V.activeImageIndex=p().length-1):void(V.activeImageIndex=e)}function g(){var e=y();if(e){var t;for(t=0;t<e.length;t+=1)e[t].classList.remove(T)}}function y(){if(k())return k().querySelectorAll(K)}function p(){return V.images}function b(e){e&&(V.images=e)}function I(){if(k())return k().querySelectorAll(H)}function k(){return V.gallery}function x(e){e&&(V.gallery=e)}function j(){if(S())return S().querySelector(_)}function S(){return V.showcase}function L(e){e&&(V.showcase=e)}function A(){return document.querySelector(P)}function q(){var e=S();if(e){var t=e.querySelectorAll(U);if(t){var n=["moc.xmg","@","nigluhs",".","notna"],i=["mailto:",n.join("").split("").reverse().join("")],o=e.querySelector("h1");o&&o.textContent&&(i=i.concat(["?subject=",o.textContent])),i=i.join("");var c;for(c=0;c<t.length;c+=1)t[c].href=i}}}function E(e){return"[object Number]"===N(e)&&isFinite(e)}function C(e){return"[object Function]"===N(e)}function N(e){return Object.prototype.toString.call(e)}var B="showcase",O="showcase-gallery",D="showcase-image",T="showcase-image-active",M="showcase-slideshow-active",F="showcase-contact-email",G="showcase-details-folded",P="."+B,_="."+O,H="."+D,K="."+T,U="."+F,Y=6666,z=32,J=37,Q=39,R=27,V={};window.addEventListener("load",t,!1)}(this);
//# sourceMappingURL=sale.js.map
