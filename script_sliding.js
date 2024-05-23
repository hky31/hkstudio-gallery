const contentLinks = document.querySelectorAll(".nav-link");

contentLinks.forEach((link) => {
	link.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent default anchor tag behavior
		const contentId = this.dataset.contentId;
		const targetContent = document.getElementById(contentId);

		// Calculate smooth scrolling animation
		const contentPosition = targetContent.offsetTop; // Get target content's position from top
		const containerScroll = window.scrollY; // Get current scroll position of the page (assuming no overflow on main content)
		const scrollDistance = contentPosition - containerScroll;

		const animationDuration = 1000; // Adjust duration (milliseconds)
		let start = null;

		const animateScroll = (timestamp) => {
			if (!start) start = timestamp;
			const progress = timestamp - start;
			const easeInOutQuad = (t) =>
				t < 0.5 ? 2 * t * t : 1 - -2 * (t - 0.5) * (t - 0.5);
			const newScrollPosition =
				containerScroll +
				easeInOutQuad(progress / animationDuration) * scrollDistance;
			window.scrollTo(0, newScrollPosition); // Scroll the entire page for divs
			if (progress < animationDuration) {
				window.requestAnimationFrame(animateScroll);
			}
		};

		window.requestAnimationFrame(animateScroll);
	});
});
