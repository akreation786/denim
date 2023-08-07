

;(function ($) {
  "use strict";


  $(document).ready(function(){

    $('.testimonial_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-arrow-left-long"></i></span>',
      nextArrow: '<span class="next_arrow"><i class="fa-solid fa-arrow-right-long"></i></span>',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
          }
        },    
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  });


})(jQuery);


