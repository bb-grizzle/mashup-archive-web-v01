
window.onload = function () {
	fillList();
}
var addBtnStatus = false;
var add_btn = document.querySelector('#add-btn');
var pop_cancle = document.querySelector('#pop-cancle');
var popup = document.querySelector(".full-cover");
var mobilePopup = document.querySelector('#mobile-Popup')

add_btn.addEventListener("click", scrap);
pop_cancle.addEventListener("click", cancle);


//scrap popup-------------------------------

function scrap(){
	var screenWidth = document.body.scrollWidth;
	if(screenWidth<600){
		if(!addBtnStatus){
			showScrapMobile();
			addBtnStatus = true;
		}else{
			hideScrapMobile();
			addBtnStatus = false;
		}

	}else{
		console.log('web');
		popup.style.display = "flex";
		//	01. display
		//	02. opacity 
		popup.style.opacity = "1";

	}
}

function showScrapMobile(){
	console.log("mobile");
	var mobilePopup = document.getElementById('mobile-Popup');
	mobilePopup.style.transform = "translateY(0)";

	var addBtn = document.querySelector('.add');
	addBtn.style.transform = "rotate(45deg)";
	var addBtnImg = document.querySelector('#add-icon');
	addBtnImg.style.width = "30px";

	var search = document.querySelector('.search');
	search.style.opacity = "0";

	var headerLogo = document.querySelector('.header-logo');
	headerLogo.style.opacity = "0";
	console.log(mobilePopup);
	setTimeout(() => {
		search.style.display = "none";
		headerLogo.style.display = "none";
	}, 300);
}

function hideScrapMobile(){
	var mobilePopup = document.getElementById('mobile-Popup');
	var addBtn = document.querySelector('.add');
	var addBtnImg = document.querySelector('#add-icon');
	var search = document.querySelector('.search');
	var headerLogo = document.querySelector('.header-logo');

	mobilePopup.style.transform = "translateY(-100vh)";
	addBtn.style.transform = "rotate(0deg)";
	addBtnImg.style.width = "40px";
	search.style.display = "block";
	headerLogo.style.display = "block";

	
	setTimeout(() => {
		search.style.opacity = "1";
		headerLogo.style.opacity = "1";
		
	}, 100);
}

function cancle(){
	popup.style.display = "none";
}

// fill thumnail ----------------------------
function fillList(){
	var thumList = document.querySelectorAll('.list-thum');
	
	for(var i=0; i<thumList.length; i++){
		thumList[i].style.backgroundImage = "url(source/img/thum" + (i +1) + ".png)";
	}
}


// add tag btn event

var addTagBtn = document.querySelector('#tag-btn');
var addTagBtn_m = mobilePopup.querySelector('#tag-btn');

var tagList = document.querySelector('#tag-list');
var tagList_m = mobilePopup.querySelector('#tag-list');

addTagBtn.addEventListener('click', addTag);
addTagBtn_m.addEventListener('click', addTag);

function addTag(){
	var screenWidth = document.body.scrollWidth;
	if(screenWidth<600){
		var tag = mobilePopup.querySelector('#pop-tag');
	
		var list = document.createElement('li');
		var listText = document.createTextNode(tag.value);
		list.appendChild(listText);
		tagList_m.appendChild(list);

		tag.value = "";
		console.log(tag.value);
		
	}else{
		var tag = document.querySelector('#pop-tag');
	
		var list = document.createElement('li');
		var listText = document.createTextNode(tag.value);
		list.appendChild(listText);
		tagList.appendChild(list);

		tag.value = "";
		console.log(tag.value);
		

	}
	
}

//remove tag


// scroll event
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   var secSearch = document.querySelector('.sec-search');
   var addBtn = document.querySelector('.add-btn-wrap');
   if (st > lastScrollTop){
	  // downscroll code
	  console.log("down");
	  secSearch.style.transform = "translateY(-154px)";
	  secSearch.style.opacity = "0";
	  
	  addBtn.style.transform = "translateY(-154px)";
	  addBtn.style.opacity = "0";

   } else {
      // upscroll code
	  console.log("up");
	  secSearch.style.transform = "translateY(0)";
	  addBtn.style.transform = "translateY(0)";
	  secSearch.style.opacity = "1";
	  addBtn.style.opacity = "1";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


