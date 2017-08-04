	var a = 0;
	function clickbtnmenu(){
					var givememenu = document.getElementById("mocha");
					givememenu.style.display = "block";
					a = 1;
}

function hidemenu() {
if (a==1) {
	var hidethis = document.getElementById("mocha");
	hidethis.style.display = "none";
}
}