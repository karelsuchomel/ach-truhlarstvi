import ScrollBooster from 'scrollbooster';

document.querySelectorAll('.wp-block-ach-product-showcase .wp-block-gallery')
	.forEach((galleryEl) => {
		const scrollEl = new ScrollBooster({
			viewport: galleryEl,
			scrollMode: 'native',
			direction: 'horizontal',
			bounceForce: 0.3,
			friction: 0.2,
		});

		// 

		// Create Arrows
		// let galleryWidth = galleryEl.scrollWidth;
		// let scrollableArea = (galleryWidth - galleryEl.parentNode.scrollWidth);
		// let currentScrollPos = scrollEl.getState().position.x;

		// if (scrollableArea > 0) {
		// 	const galleryArrowRight = document.createElement('div');
		// 	galleryArrowRight.classList.add('gallery-arrow');
		// 	galleryArrowRight.classList.add('scroll-right');
		// 	galleryEl.appendChild(galleryArrowRight);

		// 	const galleryArrowLeft = document.createElement('div');
		// 	galleryArrowLeft.classList.add('gallery-arrow');
		// 	galleryArrowLeft.classList.add('scroll-left');
		// 	galleryArrowLeft.classList.add('hidden');
		// 	galleryEl.appendChild(galleryArrowLeft);

		// 	// Scroll with the arrow right
		// 	galleryArrowRight.addEventListener('click', () => {
		// 		galleryWidth = galleryEl.scrollWidth;
		// 		scrollableArea = (galleryWidth - galleryEl.parentNode.scrollWidth);
		// 		currentScrollPos = scrollEl.getState().position.x;

		// 		galleryArrowLeft.classList.remove('hidden');

		// 		if (currentScrollPos < scrollableArea) {
		// 			let positionToScroll;

		// 			if ((currentScrollPos + 600) < scrollableArea) {
		// 				positionToScroll = currentScrollPos + 600;
		// 			} else {
		// 				positionToScroll = scrollableArea + 32; // dont really know why 32
		// 				galleryArrowRight.classList.add('hidden');
		// 			}

		// 			scrollEl.scrollTo({
		// 				x: positionToScroll,
		// 				y: 0
		// 			});
		// 		}
		// 	});

		// 	// Scroll with the arrow left
		// 	galleryArrowLeft.addEventListener('click', () => {
		// 		galleryWidth = galleryEl.scrollWidth;
		// 		scrollableArea = (galleryWidth - galleryEl.parentNode.scrollWidth);
		// 		currentScrollPos = scrollEl.getState().position.x;

		// 		galleryArrowRight.classList.remove('hidden');
				
		// 		if (currentScrollPos !== 0) {
		// 			let positionToScroll;

		// 			if ((currentScrollPos - 600) >= 0) {
		// 				positionToScroll = currentScrollPos - 600;
		// 			} else {
		// 				positionToScroll = scrollableArea - 32; // dont really know why 32
		// 				galleryArrowLeft.classList.add('hidden');
		// 			}

		// 			scrollEl.scrollTo({
		// 				x: positionToScroll,
		// 				y: 0
		// 			});
		// 		}
		// 	});
		// }

	});