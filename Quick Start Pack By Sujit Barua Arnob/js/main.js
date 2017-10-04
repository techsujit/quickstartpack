(function ($) {
 "use strict";
 
  $(".slider-active").owlCarousel({
     loop:true, 
      autoplay:true,
      smartSpeed:3000,
      nav:false,
      items:1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
      
  });
    /*Testimonial-Active*/
    $(".testimonial-active").owlCarousel({
     loop:true, 
      nav:false,
      items:1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }
      
  });    
    
  $(".blog-active").owlCarousel({
     loop:true, 
      nav:false,
      items:1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }
      
  });
 $(".brand-active").owlCarousel({
     loop:true, 
      nav:false,
     dots:false,
      items:1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:4
          }
      }
      
  });


})(jQuery); 