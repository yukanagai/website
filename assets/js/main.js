$(document).ready(function () {
    // const title = document.querySelector("h1");

    // init scroller library
    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    // Changes bg color
    const $target = $('body');
    inView('.color-change').on('enter', function(el){
      var color = $(el).attr('data-background-color');
      $target.css('background-color', color );
    });

    $(".animated-title").lettering('lines');
    
    window.addEventListener("scroll", scaleTitleText);

    function scaleTitleText() {
        title.style.fontSize = `clamp(2rem, 20rem, 20rem)`;
    }

});