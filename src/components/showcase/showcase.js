(function (exports) {
	// jshint esnext: true
	'use strict';

	var CLASS_NAME_SHOWCASE = 'showcase';
	var CLASS_NAME_SHOWCASE_GALLERY = 'showcase-gallery';
	var CLASS_NAME_SHOWCASE_IMAGE = 'showcase-image';
	var CLASS_NAME_SHOWCASE_ACTIVE_IMAGE = 'showcase-image-active';
	var CLASS_NAME_SHOWCASE_SLIDESHOW_ACTIVE = 'showcase-slideshow-active';
	var CLASS_NAME_SHOWCASE_CONTACT_EMAIL = 'showcase-contact-email';
	var CLASS_NAME_SHOWCASE_DETAILS_FOLDED = 'showcase-details-folded';

	var SELECTOR_SHOWCASE = '.' + CLASS_NAME_SHOWCASE;
	var SELECTOR_SHOWCASE_GALLERY = '.' + CLASS_NAME_SHOWCASE_GALLERY;
	var SELECTOR_SHOWCASE_IMAGE = '.' + CLASS_NAME_SHOWCASE_IMAGE;
	var SELECTOR_SHOWCASE_ACTIVE_IMAGE = '.' + CLASS_NAME_SHOWCASE_ACTIVE_IMAGE;
	var SELECTOR_CONTACT_EMAIL = '.' + CLASS_NAME_SHOWCASE_CONTACT_EMAIL;

	var SLIDESHOW_INTERVAL = 6666;

	var internals = {};

	window.addEventListener('load', initShowcase, false);

	function initShowcase() {
		setShowcase(findShowcase());
		if (!getShowcase()) {
			return;
		}
		setGallery(findGallery());
		if (!getGallery()) {
			return;
		}
		setImages(findImages());
		if (!getImages()) {
			return;
		}
		insertEmailHrefs();
		startSlideshow();
		exports.showcase = {
			startSlideshow: startSlideshow,
			stopSlideshow: stopSlideshow,
			showNextImage: showNextImage,
			showPreviousImage: showPreviousImage,
			toggleDetails: toggleDetails
		};
	}

	function toggleDetails() {
		var showcase = getShowcase();
		if (!showcase) {
			return;
		}
		showcase.classList.toggle(CLASS_NAME_SHOWCASE_DETAILS_FOLDED);
	}

	function isSlideshowActive() {
		return internals.isSlideshowActive;
	}

	function resetSlideshowInterval() {
		stopSlideshow();
		startSlideshow();
	}

	function stopSlideshow() {
		clearInterval(internals.slideshowInterval);
		internals.isSlideshowActive = false;
		getShowcase().classList.remove(CLASS_NAME_SHOWCASE_SLIDESHOW_ACTIVE);
	}

	function startSlideshow() {
		showImage(getActiveImageIndex());
		internals.slideshowInterval = setInterval(showNextImage, SLIDESHOW_INTERVAL);
		internals.isSlideshowActive = true;
		getShowcase().classList.add(CLASS_NAME_SHOWCASE_SLIDESHOW_ACTIVE);
	}

	function showPreviousImage(isInitiatedByUser) {
		showImage(getActiveImageIndex() - 1);
		if (isInitiatedByUser) {
			stopSlideshow();
		}
	}

	function showNextImage(isInitiatedByUser) {
		showImage(getActiveImageIndex() + 1);
		if (isInitiatedByUser) {
			stopSlideshow();
		}
	}

	function showImage(imageIndex) {
		if (!getImages()) {
			return;
		}
		setActiveImageIndex(imageIndex);
		clearActiveImages();
		getImages()[getActiveImageIndex()].classList.add(CLASS_NAME_SHOWCASE_ACTIVE_IMAGE);
		if (isSlideshowActive()) {
			resetSlideshowInterval();
		}
	}

	function getActiveImageIndex() {
		return internals.activeImageIndex || 0;
	}

	function setActiveImageIndex(imageIndex) {
		var isProperNumber = (Object.prototype.toString.call(imageIndex) === '[object Number]');
		if (!isProperNumber) {
			return;
		}
		var isFiniteNumber = isFinite(imageIndex);
		if (!isFiniteNumber) {
			return;
		}
		if (imageIndex >= getImages().length) {
			internals.activeImageIndex = 0;
			return;
		}
		if (imageIndex < 0) {
			internals.activeImageIndex = getImages().length - 1;
			return;
		}
		internals.activeImageIndex = imageIndex;
	}

	function clearActiveImages() {
		var activeImages = findActiveImages();
		if (!activeImages) {
			return;
		}
		var idx;
		for (idx = 0; idx < activeImages.length; idx += 1) {
			activeImages[idx].classList.remove(CLASS_NAME_SHOWCASE_ACTIVE_IMAGE);
		}
	}

	function findActiveImages() {
		if (!getGallery()) {
			return;
		}
		return getGallery().querySelectorAll(SELECTOR_SHOWCASE_ACTIVE_IMAGE);
	}

	function getImages() {
		return internals.images;
	}

	function setImages(images) {
		if (!images) {
			return;
		}
		internals.images = images;
	}

	function findImages() {
		if (!getGallery()) {
			return;
		}
		return getGallery().querySelectorAll(SELECTOR_SHOWCASE_IMAGE);
	}

	function getGallery() {
		return internals.gallery;
	}

	function setGallery(gallery) {
		if (!gallery) {
			return;
		}
		internals.gallery = gallery;
	}

	function findGallery() {
		if (!getShowcase()) {
			return;
		}
		return getShowcase().querySelector(SELECTOR_SHOWCASE_GALLERY);
	}

	function getShowcase() {
		return internals.showcase;
	}

	function setShowcase(showcase) {
		if (!showcase) {
			return;
		}
		internals.showcase = showcase;
	}

	function findShowcase() {
		return document.querySelector(SELECTOR_SHOWCASE);
	}

	function insertEmailHrefs() {
		var showcase = getShowcase();
		if (!showcase) {
			return;
		}
		var emailLinks = showcase.querySelectorAll(SELECTOR_CONTACT_EMAIL);
		if (!emailLinks) {
			return;
		}
		var bits = [
			'moc.xmg',
			'@',
			'nigluhs',
			'.',
			'notna'
		];
		var emailHref = [
			'mailto:',
			bits.join('').split('').reverse().join(''),
		];
		var itemTitle = showcase.querySelector('h1');
		if (itemTitle && itemTitle.textContent) {
			emailHref = emailHref.concat([
				'?subject=',
				itemTitle.textContent
			]);
		}
		emailHref = emailHref.join('');
		var idx;
		for (idx = 0; idx < emailLinks.length; idx += 1) {
			emailLinks[idx].href = emailHref;
		}
	}

})(this);
