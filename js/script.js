let query = document.querySelector(".query");
let searchBtn = document.querySelector(".searchBtn");

searchBtn.onclick = function(){
	let url = "https://www.google.com/search?client=firefox-b-lm&q=" + query.value;
	window.open(url);
}