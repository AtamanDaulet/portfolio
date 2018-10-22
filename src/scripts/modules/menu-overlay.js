var hamburger = document.querySelector(".hamburger");
var cancel = document.querySelector(".overlay__icon");
var overlay = document.querySelector(".overlay");

function openOverlay(){
    overlay.style.zIndex = 12;
}

function closeOverlay(){
    overlay.style.zIndex = -12;
}

hamburger.addEventListener( "click", openOverlay );
cancel.addEventListener( "click", closeOverlay );
