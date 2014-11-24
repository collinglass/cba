// Function to change the content of t2
function mainmenu(e) {
	e.preventDefault();
	window.location.assign("/mainmenu.html");
}

// add event listener to table
var login = document.getElementById("form-login");
if (login)
	login.addEventListener("submit", mainmenu, false);

// Function to change the content of t2
function todirections(e) {
	e.preventDefault();
	window.location.assign("/directions.html");
}

// add event listener to table
var directions = document.getElementById("btn-directions");
if (directions)
	directions.addEventListener("click", todirections, false);