let blur = (function() {
    let wrapper = document.querySelector('.js-feedback'),
      form = document.querySelector('.feed__form_bg');
  
    return {
      set: function() {
        let imgWidth = document.querySelector('.js-blur').offsetWidth,
          imgHeight = document.querySelector('.js-blur').offsetHeight,
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop,
          blurCSS = form.style;

        blurCSS.width = `${imgWidth}px`;
        blurCSS.height = `${imgHeight}px`;
        blurCSS.transform = `translate(${posLeft}px,${posTop}px)`;
      },
    };
  }());
  
  blur.set();
  
  window.onresize = function() {
    blur.set();
  };