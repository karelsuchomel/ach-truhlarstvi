/* Navigation, search, lang menu handeling */
(function() {
	const menuToggleButton = document.getElementById("primary-navigation-toggle");
	const menuContainerEl = document.querySelector(".menu-header-navigation-container");
	const dimBGel = document.getElementById("dimm-background");
	
	function toggleMobileMenu () {
		menuContainerEl.classList.toggle('active');
		dimBGel.classList.toggle('active');
	}

	menuToggleButton.addEventListener( "click", toggleMobileMenu );
	dimBGel.addEventListener( "click", toggleMobileMenu );
})(window);