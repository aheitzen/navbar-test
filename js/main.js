console.log("I work");


 // $(document).ready(function () {
 //    //initialize swiper when document ready
 //    var mySwiper = new Swiper ('.swiper-container', {
 //      // Optional parameters
 //      direction: 'vertical',
 //      loop: true
 //    })
 //  });

  var swiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });