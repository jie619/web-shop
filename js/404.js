
$(document).ready(function(){

  if($(window).width() > 1183){
    $('.page404 .products').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
  }else if($(window).width() <= 1183 && $(window).width() > 683){
    $('.page404 .products').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false
    });
  }else if($(window).width() <= 683){
    $('.page404 .products').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false
    });
  }
    
});