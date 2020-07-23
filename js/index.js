import imagesLoaded from 'imagesloaded';

const initShowcaseGalleryArrows = () => {
	
	const showcaseGalleries = document.querySelectorAll('.wp-block-ach-product-showcase .wp-block-gallery');
	showcaseGalleries.forEach((galleryEl) => {
	
		class scrollContainer {
			constructor(containerEl) {
				this.containerEl = containerEl;
				this.galleryItems = this.containerEl.querySelectorAll('.blocks-gallery-item');
				this.firstVisibleItem = this.galleryItems[0];

				// Create Arrows
				this.arrowRight = this.createGalleryArrow("right");
				this.arrowLeft = this.createGalleryArrow("left");

				this.takeCareOfArrowVisibility();

				let ticking = false;

				containerEl.addEventListener('scroll', (e) => {
					if (!ticking) {
						window.requestAnimationFrame(() => {
							this.takeCareOfArrowVisibility()
							ticking = false;
						});

						ticking = true;
					}
				});
			}

			createGalleryArrow(direction) {
				const galleryArrow = document.createElement('div');
				galleryArrow.classList.add('gallery-arrow');
				galleryArrow.classList.add('hidden');
				galleryArrow.classList.add(direction);
				galleryEl.appendChild(galleryArrow);

				// galleryArrow.classList.add('hidden');

				direction === "right" ?
					galleryArrow.addEventListener('click', () => this.scrollRight()) :
					galleryArrow.addEventListener('click', () => this.scrollLeft());

				return galleryArrow;
			}

			getFirstItemFrom(itemOrigin) {
				let currentScrollPosition = this.containerEl.scrollLeft;
				let firstItem = null;
				let itemLine;

				for (let i = 0; i <= this.galleryItems.length; i++) {
					if (itemOrigin === "start") {
						itemLine = this.galleryItems[i].offsetLeft;

						if (itemLine > currentScrollPosition) {
							firstItem = this.galleryItems[i];
							break;
						}
					} else {
						itemLine = this.galleryItems[i].offsetLeft + this.galleryItems[i].offsetWidth + 32;

						if (itemLine >= currentScrollPosition) {
							firstItem = this.galleryItems[i];
							break;
						}
					}

				}

				return firstItem;
			}

			getFirstItemPosition() {
				let firstVisibleItem = this.containerEl.querySelector('.first-visible-item');

				return positionFromLeft;
			}

			scroll(positionFromLeft) {
				this.containerEl.scrollTo({
					left: positionFromLeft,
					behavior: 'smooth',
				});
			};

			takeCareOfArrowVisibility() {
				const lastItem = this.galleryItems[this.galleryItems.length - 1];

				if (this.containerEl.scrollLeft === 0) {
					this.arrowLeft.classList.add('hidden');					
				}
				else {
					this.arrowLeft.classList.remove('hidden');
				}

				if (this.containerEl.scrollLeft + this.containerEl.offsetWidth + 1 <
					lastItem.offsetLeft + lastItem.offsetWidth) 
				{
					this.arrowRight.classList.remove('hidden');
				}
				else {
					this.arrowRight.classList.add('hidden');
				}
			}

			scrollRight() {
				const itemToScrollTo = this.getFirstItemFrom("start");
				this.scroll(itemToScrollTo.offsetLeft);
			}

			scrollLeft() {
				const itemToScrollTo = this.getFirstItemFrom("end");
				this.scroll(itemToScrollTo.offsetLeft);
			}
		}

		return new scrollContainer(galleryEl);
	});
}

imagesLoaded('#content', initShowcaseGalleryArrows);