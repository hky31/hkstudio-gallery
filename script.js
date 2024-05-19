/* function showLoader(divLoader) {
	document.getElementById("loader-apple").style.display = "none";
	document.getElementById("loader-globe").style.display = "none";
	document.getElementById("loader-multicolor").style.display = "none";
	document.getElementById("loader-compass").style.display = "none";
	document.getElementById("loader-samsung").style.display = "none";

	document.getElementById("loader-" + divLoader).style.display = "block";
}

function showCarrousel(divCarrousel) {
	document.getElementById("image-accordion").style.display = "non";
	document.getElementById("image-slider").style.display = "none";

	document.getElementById("image-" + divCarrousel).style.display = "block";
} */

function showDiv(div) {
	document.getElementById("div-apple").style.display = "none";
	document.getElementById("div-globe").style.display = "none";
	document.getElementById("div-multicolor").style.display = "none";
	document.getElementById("div-compass").style.display = "none";
	document.getElementById("div-samsung").style.display = "none";
	document.getElementById("div-accordion").style.display = "non";
	document.getElementById("div-slider").style.display = "none";

	document.getElementById("div-" + div).style.display = "block";
}
