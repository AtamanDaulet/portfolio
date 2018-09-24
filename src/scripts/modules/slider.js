const slides = document.querySelectorAll("#sliders .slide ");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const controls = document.querySelectorAll(".controls ");

let currentSlide = 0;

//осуществяет переход к слайду номер n
function goToSlide(n) {
    slides[currentSlide].className = "name";
    currentSlide = (n+slides.length)%slides.length //остаток от деления
    slides[currentSlide].className = "slide showing";
}

function setupListners() {
    next.onclick = function(){
        goToSlide(currentSlide+1);
    }
    previous.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

// показывает кнопки для навигации
function showButtons() {
    for (let i = 0; i < controls.length; i++) {
        controls[i].style.display = "inline-block";        
    }
}

function sliderInit() {
    if(sliderInit.length !== 0){
        setupListners();
        showButtons();
    }
}
module.exports = sliderInit;