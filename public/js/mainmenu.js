// Navigate to transfer page
function tomap(e) {
	e.preventDefault();
	window.location.assign("/map.html");
}

var map = document.getElementById("menu-map");
map.addEventListener("click", tomap, false);

// Navigate to cheque page
function todeposit(e) {
	e.preventDefault();
	window.location.assign("/cheque.html");
}

var cheque = document.getElementById("menu-cheque");
cheque.addEventListener("click", todeposit, false);

// Navigate to bills page
function tointerac(e) {
	e.preventDefault();
	window.location.assign("/card.html");
}

var interac = document.getElementById("menu-interac");
interac.addEventListener("click", tointerac, false);

// Navigate to bills page
function tobills(e) {
	e.preventDefault();
	window.location.assign("/bills.html");
}

var bills = document.getElementById("menu-bills");
bills.addEventListener("click", tobills, false);

// Navigate to bills page
function toNotifications(e) {
	e.preventDefault();
	window.location.assign("/notifications.html");
}

var notifications = document.getElementById("menu-notifications");
notifications.addEventListener("click", toNotifications, false);

// Navigate to security page
function tosecurity(e) {
	e.preventDefault();
	window.location.assign("/security.html");
}

var security = document.getElementById("menu-security");
security.addEventListener("click", tosecurity, false);

// Navigate to transfer page
function totransfer(e) {
	e.preventDefault();
	window.location.assign("/transfer.html");
}

var transfer = document.getElementById("menu-transfer");
transfer.addEventListener("click", totransfer, false);

// Navigate to transfer page
function tohistory(e) {
	e.preventDefault();
	window.location.assign("/history.html");
}

var transhistory = document.getElementById("menu-history");
transhistory.addEventListener("click", tohistory, false);

// Navigate to transfer page
function tobalance(e) {
	e.preventDefault();
	window.location.assign("/balance.html");
}

var balance = document.getElementById("menu-balance");
balance.addEventListener("click", tobalance, false);

// Navigate to transfer page
function toother(e) {
	e.preventDefault();
	window.location.assign("/other.html");
}

var other = document.getElementById("menu-other");
other.addEventListener("click", toother, false);