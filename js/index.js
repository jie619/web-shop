
$(document).ready(function(){

  //Banner輪播  
  $('.js-carousel').carousel();

  //Banner手機版滑動效果
  $('.js-carousel').swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:'vertical'
  });

  //優惠輪播  
  $('.js-promotions').carousel();

  $('.es_textbox_class').attr('placeholder', 'Enter your Email');

  $('.subscribe .es_button .es_submit_button').hover(function() {
    $('.subscribe .mail-image').css({'opacity': '0.5'});
  }, function() {
    $('.subscribe .mail-image').css({'opacity': '1'});
  });
    
});