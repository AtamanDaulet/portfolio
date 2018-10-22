
var parallax = (function () {
    var bg = document.querySelector(".hero__parallax");
    var user = document.querySelector(".parallax__base");
    var sectionText = document.querySelector(".parallax__title");

    return{
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll/ - strafeAmount + "%";
            var transformString = "translate3d(0," + strafe + ",0";

            var style = block.style;
            style.transform = transformString;
            style.webkitTransform = transformString;

            style.top = strafe;            
        },
        init: function (wScroll) {  
            this.move(bg, wScroll, 45);           
            this.move(sectionText, wScroll, 30);           
            this.move(user, wScroll, 20);           
        }
    }
}());

window.onscroll = function(){
    var wScroll = window.pageYOffset;

    parallax.init(wScroll);
}