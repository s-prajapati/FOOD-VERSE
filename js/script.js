// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:2000,

      autoplayHoverPause:true,
      center: true,
      navText: [
          "<img src='../img/left.svg' class='fa fa-angle-left'></img>",
          "<img src='../img/right.svg' class='fa fa-angle-left'></img>"
      ],
      responsive:{
          0:{
              items:3
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
    });
  });