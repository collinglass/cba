// Navigate to bills page
function tobills(e) {
	e.preventDefault();
	window.location.assign("/bills.html");
}

var bills = document.getElementById("menu-bills");
bills.addEventListener("click", tobills, false);

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

// Navigate to history page
function tohistory(e) {
	e.preventDefault();
	window.location.assign("/history.html");
}

var history = document.getElementById("menu-history");
history.addEventListener("click", tohistory, false);

// Navigate to balance page
function tobalance(e) {
	e.preventDefault();
	window.location.assign("/balance.html");
}

var balance = document.getElementById("menu-balance");
balance.addEventListener("click", tobalance, false);

// Navigate to other accounts page
function toother(e) {
	e.preventDefault();
	window.location.assign("/other.html");
}

var other = document.getElementById("menu-other");
other.addEventListener("click", toother, false);