var search_txt = document.getElementById('search-txt');
var search = document.getElementsByClassName('search')[0];

var add_btn = document.querySelector('#add-btn');
var popup = document.querySelector(".full-cover");
var pop_cancle = document.querySelector('#pop-cancle');

add_btn.addEventListener("click", scrap);
pop_cancle.addEventListener("click", cancle);

function scrap(){
	popup.style.display = "flex";
//	01. display
//	02. opacity
	popup.style.opacity = "1";
}

function cancle(){
	popup.style.display = "none";
}












