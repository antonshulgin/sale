!function(e){"use strict";function t(){j(q()),x()&&(S(y()),I()&&(w(m()),g()&&(A(),c(!0),e.showcase={startSlideshow:c,stopSlideshow:s,bumpGallery:r,showNextImage:l,showPreviousImage:a,toggleDetails:n})))}function n(){var e=x();e&&e.classList.toggle(E)}function o(){return B.isSlideshowActive}function i(){s(),c()}function s(){clearInterval(B.slideshowInterval),B.isSlideshowActive=!1,x().classList.remove(N)}function c(e){g()&&(e&&l(),B.slideshowInterval=setInterval(l,z),B.isSlideshowActive=!0,x().classList.add(N))}function r(e,t){return t?void a(e):void l(e)}function a(e){u(f()-1),e&&s()}function l(e){u(f()+1),e&&s()}function u(e){g()&&(v(e),d(),g()[f()].classList.add(C),o()&&i(),console.log({showImage:f()}))}function f(){return B.activeImageIndex||0}function v(e){if("[object Number]"===Object.prototype.toString.call(e)&&isFinite(e))return e>=g().length?void(B.activeImageIndex=0):e<0?void(B.activeImageIndex=g().length-1):void(B.activeImageIndex=e)}function d(){var e=h();if(e){var t;for(t=0;t<e.length;t+=1)e[t].classList.remove(C)}}function h(){if(I())return I().querySelectorAll(P)}function g(){return B.images}function w(e){e&&(B.images=e)}function m(){if(I())return I().querySelectorAll(O)}function I(){return B.gallery}function S(e){e&&(B.gallery=e)}function y(){if(x())return x().querySelector(G)}function x(){return B.showcase}function j(e){e&&(B.showcase=e)}function q(){return document.querySelector(F)}function A(){var e=x();if(e){var t=e.querySelectorAll(k);if(t){var n=["moc.xmg","@","nigluhs",".","notna"],o=["mailto:",n.join("").split("").reverse().join("")],i=e.querySelector("h1");i&&i.textContent&&(o=o.concat(["?subject=",i.textContent])),o=o.join("");var s;for(s=0;s<t.length;s+=1)t[s].href=o}}}var L="showcase",b="showcase-gallery",p="showcase-image",C="showcase-image-active",N="showcase-slideshow-active",D="showcase-contact-email",E="showcase-details-folded",F="."+L,G="."+b,O="."+p,P="."+C,k="."+D,z=6666,B={};window.addEventListener("load",t,!1)}(this);
//# sourceMappingURL=sale.js.map
