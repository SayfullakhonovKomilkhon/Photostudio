$(document).ready(function () {
    $('.nav-toggle__bar').click(function(e){
       e.preventDefault();
       $('.overlay').animate({
          right: 0
       }, 1000); 
    });
    $('.overlay-times').click(function(e){
       e.preventDefault();
       $('.overlay').animate({
         right: -90 + '%'
      }, 1000);  
    });
    
   $('.services-menu__link').click(function(e){
      e.preventDefault();
      $('.services-menu__link').removeClass('services-menu__link_active');
      $(this).addClass('services-menu__link_active');
   })
   
   //  Slick slider
   $('.slider').slick({
      vertical:false,
      slidesToShow: 1,
      prevArrow: '<button class="services-buttons__prev"></button>',
      nextArrow: '<button class="services-buttons__next"></button>'             
  });
  
  $('.services-slide__item a').click(function (e) {
     e.preventDefault();
     
     var href = $(this).attr('href');
     $('.services-imgblog img').fadeOut(200, function(){
        $(this).attr('src', href).fadeIn(200)
     });
  })
  $('.clients-slider').slick({
     dots: true,
     nextArrow: false,
     prevArrow: false,
     slidesToShow: 3,
     slidesToScroll: 3
  })
  
});