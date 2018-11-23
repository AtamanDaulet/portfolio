document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.querySelector(".preloader"),
    preloaderSvg = document.querySelector(".preloader__circles_svg "),
    circleOne = document.querySelector(".preloader_circle_outside"),
    circleTwo = document.querySelector(".preloader_circle_middle"),
    circleThree = document.querySelector(".preloader_circle_inside"),
    preloaderText = document.querySelector(".preloader__text");

  let currentPercent = 0,
    delayOfircleOne = 30,
    delayOfircleTwo = 20;

  let animateInterval;

  let animatePreloader = () => {

    currentPercent += 5;
    if (currentPercent >= 100) {
      preloaderText.innerHTML = 100;
      currentPercent = 100;
      clearInterval(animateInterval);
      setTimeout(() => {
        preloaderSvg.style.opacity = 0;
        preloaderText.style.opacity = 0;
      }, 500);
      setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
          preloader.style.display = "none";
        }, 150);
      }, 100);
    }
    if (currentPercent > delayOfircleOne) {
      circleOne.style.strokeDashoffset =
        440 -
        (440 / 100) *
          (currentPercent * ((delayOfircleOne / 100) + 1) - delayOfircleOne);
    }
    if (currentPercent > delayOfircleTwo) {
      circleTwo.style.strokeDashoffset =
        345 -
        (345 / 100) *
          (currentPercent * ((delayOfircleTwo / 100) + 1) - delayOfircleTwo);
    }
    circleThree.style.strokeDashoffset = 251 - (251 / 100) * currentPercent;
    preloaderText.innerHTML = currentPercent;
  };
  if (preloaderSvg) {
    animateInterval = setInterval(animatePreloader, 90);
  }
});
