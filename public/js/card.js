// Navigate to bills page
function topin(e) {
	e.preventDefault();
	window.location.assign("/pin.html");
}

var visa = document.getElementById("interac-visa");
visa.addEventListener("click", topin, false);

var mastercard = document.getElementById("interac-mastercard");
mastercard.addEventListener("click", topin, false);

var amex = document.getElementById("interac-amex");
amex.addEventListener("click", topin, false);