// Function to change the content of t2
function mainmenu(e) {
	e.preventDefault();
	window.location.assign("/mainmenu.html");
}

// add event listener to table
var el = document.getElementById("form-login");
el.addEventListener("submit", mainmenu, false);