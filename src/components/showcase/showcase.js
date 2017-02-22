(function () {
	// jshint esnext: true
	'use strict';

	var CLASS_NAME_SHOWCASE_GALLERY = 'showcase-gallery';
	var CLASS_NAME_SHOWCASE_IMAGE = 'showcase-image';
	var CLASS_NAME_SHOWCASE_ACTIVE_IMAGE = 'showcase-image-active';

	window.addEventListener('load', init, false);

	function init() {
		var gallery = getGallery();

		if (!gallery) {
			return;
		}

		var images = getImages(gallery);
		var activeImageIndex = 0;

		setActiveImage(activeImageIndex, images);
		gallery.addEventListener('click', bumpActiveImage, false);
		setInterval(bumpActiveImage, 6666);

		function bumpActiveImage() {
			activeImageIndex += 1;
			if (!images[activeImageIndex]) {
				activeImageIndex = 0;
			}
			setActiveImage(activeImageIndex, images);
		}

	}

	function setActiveImage(imageIndex, images) {
		if (!images[imageIndex]) {
			return;
		}
		for (var idx = 0; idx < images.length; idx += 1) {
			images[idx].classList.remove(CLASS_NAME_SHOWCASE_ACTIVE_IMAGE);
		}
		images[imageIndex].classList.add(CLASS_NAME_SHOWCASE_ACTIVE_IMAGE);
	}

	function getImages(gallery) {
		if (!gallery) {
			return;
		}
		return gallery.querySelectorAll('.' + CLASS_NAME_SHOWCASE_IMAGE);
	}

	function getGallery() {
		return document.querySelector('.' + CLASS_NAME_SHOWCASE_GALLERY);
	}

})();
