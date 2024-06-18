
$(document).ready(function(){

    $('.js-leftArrow').click(function() {
      $('.js-rightArrow').show();      
      $('.js-leftArrow').hide();
      $('.js-slidebar-button').animate({left: '0'}, 100);
      $('.js-slidebar').animate({left: '-280px'}, 100);
    });
    $('.js-rightArrow').click(function() {
      $('.js-leftArrow').show();      
      $('.js-rightArrow').hide();
      $('.js-slidebar-button').animate({left: '280px'}, 100);
      $('.js-slidebar').animate({left: '0'}, 100);
    });
    
});