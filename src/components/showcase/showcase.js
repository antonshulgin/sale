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

	var KEYCODE_SPACEBAR = 32;
	var KEYCODE_ARROW_LEFT = 37;
	var KEYCODE_ARROW_RIGHT = 39;
	var KEYCODE_ESCAPE = 27;

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
		initKeyboardActions();
		startSlideshow(true);
		exports.showcase = {
			startSlideshow: startSlideshow,
			stopSlideshow: stopSlideshow,
			bumpGallery: bumpGallery,
			showNextImage: showNextImage,
			showPreviousImage: showPreviousImage,
			toggleDetails: toggleDetails
		};
	}

	function getKeyboardActions() {
		return internals.keyboardActions;
	}

	function initKeyboardActions() {
		var keyboardActions = {};
		keyboardActions[KEYCODE_SPACEBAR] = bumpGallery;
		keyboardActions[KEYCODE_ARROW_LEFT] = showPreviousImage;
		keyboardActions[KEYCODE_ARROW_RIGHT] = showNextImage;
		keyboardActions[KEYCODE_ESCAPE] = toggleDetails;
		internals.keyboardActions = keyboardActions;
		window.addEventListener('keyup', dispatchKeyboardActions, false);
	}

	function dispatchKeyboardActions(event) {
		if (!event) {
			return;
		}
		var keyboardActions = getKeyboardActions();
		if (!keyboardActions) {
			return;
		}
		event.preventDefault();
		if (!event.keyCode) {
			return;
		}
		var keyCode = event.keyCode;
		if (hasKeyboardActionHandler(keyCode)) {
			keyboardActions[keyCode](true, event.shiftKey);
		}
	}

	function hasKeyboardActionHandler(keyCode) {
		var keyboardActions = getKeyboardActions();
		if (!keyboardActions) {
			return;
		}
		if (!keyboardActions.hasOwnProperty(keyCode)) {
			return;
		}
		return isFunction(keyboardActions[keyCode]);
	}

	function toggleDetails() {
		getShowcase().classList.toggle(CLASS_NAME_SHOWCASE_DETAILS_FOLDED);
	}

	function isSlideshowActive() {
		return internals.isSlideshowActive;
	}

	function resetSlideshowTimeout() {
		stopSlideshow();
		startSlideshow();
	}

	function stopSlideshow() {
		if (!isSlideshowActive()) {
			return;
		}
		clearTimeout(internals.slideshowTimeout);
		internals.isSlideshowActive = false;
		getShowcase().classList.remove(CLASS_NAME_SHOWCASE_SLIDESHOW_ACTIVE);
	}

	function startSlideshow(isForcedUpdate) {
		if (isSlideshowActive()) {
			return;
		}
		if (!getImages()) {
			return;
		}
		if (isForcedUpdate) {
			showImage(getActiveImageIndex());
		}
		internals.slideshowTimeout = setTimeout(showNextImage, SLIDESHOW_INTERVAL);
		internals.isSlideshowActive = true;
		getShowcase().classList.add(CLASS_NAME_SHOWCASE_SLIDESHOW_ACTIVE);
	}

	function bumpGallery(isInitiatedByUser, isReverseOrder) {
		if (isReverseOrder) {
			showPreviousImage(isInitiatedByUser);
			return;
		}
		showNextImage(isInitiatedByUser);
	}

	function showPreviousImage(isInitiatedByUser) {
		showImage((getActiveImageIndex() - 1), isInitiatedByUser);
	}

	function showNextImage(isInitiatedByUser) {
		showImage((getActiveImageIndex() + 1), isInitiatedByUser);
	}

	function showImage(imageIndex, isInitiatedByUser) {
		var images = getImages();
		if (!images) {
			return;
		}
		clearActiveImages();
		setActiveImageIndex(imageIndex);
		images[getActiveImageIndex()].classList.add(CLASS_NAME_SHOWCASE_ACTIVE_IMAGE);
		if (isInitiatedByUser) {
			stopSlideshow();
			return;
		}
		if (isSlideshowActive()) {
			resetSlideshowTimeout();
		}
	}

	function getActiveImageIndex() {
		return isNumber(internals.activeImageIndex) ?
			internals.activeImageIndex : 0;
	}

	function setActiveImageIndex(imageIndex) {
		if (!isNumber(imageIndex)) {
			return;
		}
		var images = getImages();
		if (!images) {
			return;
		}
		if (imageIndex >= images.length) {
			internals.activeImageIndex = 0;
			return;
		}
		if (imageIndex < 0) {
			internals.activeImageIndex = images.length - 1;
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
		var gallery = getGallery();
		if (!gallery) {
			return;
		}
		return gallery.querySelectorAll(SELECTOR_SHOWCASE_ACTIVE_IMAGE);
	}

	function getImages() {
		return internals.images;
	}

	function setImages(images) {
		if (!isNonEmptyNodeList(images)) {
			return;
		}
		internals.images = images;
	}

	function findImages() {
		var gallery = getGallery();
		if (!gallery) {
			return;
		}
		return gallery.querySelectorAll(SELECTOR_SHOWCASE_IMAGE);
	}

	function getGallery() {
		return internals.gallery;
	}

	function setGallery(gallery) {
		if (!hasQuerySelectors(gallery)) {
			return;
		}
		internals.gallery = gallery;
	}

	function findGallery() {
		var showcase = getShowcase();
		if (!showcase) {
			return;
		}
		return showcase.querySelector(SELECTOR_SHOWCASE_GALLERY);
	}

	function getShowcase() {
		return internals.showcase;
	}

	function setShowcase(showcase) {
		if (!hasQuerySelectors(showcase)) {
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

	function isNonEmptyNodeList(item) {
		return (toStringCall(item) === '[object NodeList]') &&
			item.length;
	}

	function hasQuerySelectors(item) {
		return item &&
			isFunction(item.querySelector) &&
			isFunction(item.querySelectorAll);
	}

	function isNumber(item) {
		return (toStringCall(item) === '[object Number]') &&
			isFinite(item);
	}

	function isFunction(item) {
		return toStringCall(item) === '[object Function]';
	}

	function toStringCall(item) {
		return Object.prototype.toString.call(item);
	}

})(this);
