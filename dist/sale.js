!function(e){"use strict";function t(){x(j()),y()&&(I(S()),m()&&(g(w()),d()&&(q(),c(),e.showcase={startSlideshow:c,stopSlideshow:s,showNextImage:a,showPreviousImage:r,toggleDetails:n})))}function n(){var e=y();e&&e.classList.toggle(D)}function i(){return B.isSlideshowActive}function o(){s(),c()}function s(){clearInterval(B.slideshowInterval),B.isSlideshowActive=!1,y().classList.remove(C)}function c(){l(u()),B.slideshowInterval=setInterval(a,z),B.isSlideshowActive=!0,y().classList.add(C)}function r(){l(u()-1)}function a(){l(u()+1)}function l(e){d()&&(f(e),v(),d()[u()].classList.add(p),i()&&o())}function u(){return B.activeImageIndex||0}function f(e){var t="[object Number]"===Object.prototype.toString.call(e);if(t){var n=isFinite(e);if(n)return e>=d().length?void(B.activeImageIndex=0):e<0?void(B.activeImageIndex=d().length-1):void(B.activeImageIndex=e)}}function v(){var e=h();if(e){var t;for(t=0;t<e.length;t+=1)e[t].classList.remove(p)}}function h(){if(m())return m().querySelectorAll(P)}function d(){return B.images}function g(e){e&&(B.images=e)}function w(){if(m())return m().querySelectorAll(O)}function m(){return B.gallery}function I(e){e&&(B.gallery=e)}function S(){if(y())return y().querySelector(F)}function y(){return B.showcase}function x(e){e&&(B.showcase=e)}function j(){return document.querySelector(E)}function q(){var e=y();if(e){var t=e.querySelectorAll(k);if(t){var n=["moc.xmg","@","nigluhs",".","notna"],i=["mailto:",n.join("").split("").reverse().join("")],o=e.querySelector("h1");o&&o.textContent&&(i=i.concat(["?subject=",o.textContent])),i=i.join("");var s;for(s=0;s<t.length;s+=1)t[s].href=i}}}var A="showcase",L="showcase-gallery",b="showcase-image",p="showcase-image-active",C="showcase-slideshow-active",N="showcase-contact-email",D="showcase-details-folded",E="."+A,F="."+L,O="."+b,P="."+p,k="."+N,z=6666,B={};window.addEventListener("load",t,!1)}(this);
//# sourceMappingURL=sale.js.map
