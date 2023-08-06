

;(function ($) {
  "use strict";


  $(document).ready(function(){

    $('.testimonial_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-arrow-left-long"></i></span>',
      nextArrow: '<span class="next_arrow"><i class="fa-solid fa-arrow-right-long"></i></span>',
    });

  });


})(jQuery);