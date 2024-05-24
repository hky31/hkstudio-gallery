/*********************************** */
/* prev/next button for slider index */
/*********************************** */
const $next = document.querySelector(".next");
const $prev = document.querySelector(".prev");

$next.addEventListener("click", () => {
	const items = document.querySelectorAll(".item");
	document.querySelector(".slide").appendChild(items[0]);
});

$prev.addEventListener("click", () => {
	const items = document.querySelectorAll(".item");
	document.querySelector(".slide").prepend(items[items.length - 1]);
});

/************************************ */
/* prev/next button for slider_street */
/************************************ */
const $next_street = document.getElementById("next_street");
const $prev_street = document.getElementById("prev_street");

$next_street.addEventListener("click", () => {
	const items = document.querySelectorAll(".item_street");
	document.querySelector(".slide_street").appendChild(items[0]);
});

$prev_street.addEventListener("click", () => {
	const items = document.querySelectorAll(".item_street");
	document.querySelector(".slide_street").prepend(items[items.length - 1]);
});

/*********************************** */
/* prev/next button for slider_archi */
/*********************************** */
const $next_archi = document.getElementById("next_archi");
const $prev_archi = document.getElementById("prev_archi");

$next_archi.addEventListener("click", () => {
	const items = document.querySelectorAll(".item_archi");
	document.querySelector(".slide_archi").appendChild(items[0]);
});

$prev_archi.addEventListener("click", () => {
	const items = document.querySelectorAll(".item_archi");
	document.querySelector(".slide_archi").prepend(items[items.length - 1]);
});

/*************************************** */
/* prev/next button for slider_landscape */
/*************************************** */
const $next_lands = document.getElementById("next_lands");
const $prev_lands = document.getElementById("prev_lands");

$next_lands.addEventListener("click", () => {
	const items = document.querySelectorAll(".item_lands");
	document.querySelector(".slide_lands").appendChild(items[0]);
});

$prev_lands.addEventListener("click", () => {
	const items = document.querySelectorAll(".item_lands");
	document.querySelector(".slide_lands").prepend(items[items.length - 1]);
});

/*************************************** */
/* prev/next button for slider_reflect */
/*************************************** */
const $next_reflect = document.getElementById("next_reflect");
const $prev_reflect = document.getElementById("prev_reflect");

$next_reflect.addEventListener("click", () => {
	const items = document.querySelectorAll(".item_reflect");
	document.querySelector(".slide_reflect").appendChild(items[0]);
});

$prev_reflect.addEventListener("click", () => {
	const items = document.querySelectorAll(".item_reflect");
	document.querySelector(".slide_reflect").prepend(items[items.length - 1]);
});

/**************************************** */
/* floating button to get back to the top */
/**************************************** */
// const btn = document.getElementById("back-to-top");

// window.onscroll = function () {
// 	scrollFunction();
// };

// function scrollFunction() {
// 	if (
// 		document.body.scrollTop > 200 ||
// 		document.documentElement.scrollTop > 200
// 	) {
// 		btn.style.opacity = 1;
// 	} else {
// 		btn.style.opacity = 0;
// 	}
// }

// // When the user clicks on the button, scroll to the top of the document
// btn.addEventListener("click", function () {
// 	document.body.scrollTop = 0; // For Safari
// 	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// });
