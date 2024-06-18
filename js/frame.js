
$(document).ready(function(){

    //判斷是否為登入狀態對應手機版選單
    // if($('#isLoggedIn').val() == 'true'){
    //   $('.js-register').hide();
    // }else{
    //   $('.js-members').hide();
    // }

    //回頂端
    $('.js-go-top').click(function(e) {
      $("html,body").animate({scrollTop:0},800);
    });

    //滾動時的選單
    if($(window).width()>975){
      $(window).scroll(function(){
        if($(this).scrollTop()>1){
          $('.js-top-head').fadeOut(200);
          $('.js-masthead').fadeOut(200);
          $('.js-float-header').slideDown(500);
          $('body').addClass('float-padding');
          $('.js-shoppingCart-list').parent().removeClass('top-head-shoppingCart');
          $('.js-shoppingCart-list').parent().addClass('float-header-shoppingCart');
        } else {
          $('.js-top-head').fadeIn(500);
          $('.js-masthead').fadeIn(500);
          $('.js-float-header').slideUp(200);
          $('body').removeClass('float-padding');
          $('.js-shoppingCart-list').parent().removeClass('float-header-shoppingCart');
          $('.js-shoppingCart-list').parent().addClass('top-head-shoppingCart');
        }
      });
    }

    //購物清單
    $('.js-top-head-shoppingCart').click(function(e) {
      if($(window).width()>975){
        $('.js-shoppingCart-list').parent().removeClass('float-header-shoppingCart');
        $('.js-shoppingCart-list').parent().addClass('top-head-shoppingCart');
      }
      $('.js-shoppingCart-list').slideDown(500);
       e.stopPropagation();
    });
    $('.js-float-header-shoppingCart').click(function(e) {
      if($(window).width()>975){
        $('.js-shoppingCart-list').parent().removeClass('top-head-shoppingCart');
        $('.js-shoppingCart-list').parent().addClass('float-header-shoppingCart');
      }
      $('.js-shoppingCart-list').slideDown(500);
       e.stopPropagation();
    });
    $('.js-phone-shoppingCart').click(function(e) {
      if($(window).width()>975){
        $('.js-shoppingCart-list').parent().removeClass('top-head-shoppingCart');
        $('.js-shoppingCart-list').parent().addClass('float-header-shoppingCart');
      }
      $('.js-shoppingCart-list').slideDown(500);
       e.stopPropagation();
    });
    $('.js-shoppingCart-list').click(function(e) {
       e.stopPropagation();
    });
    $('body').click(function() {
      $('.js-shoppingCart-list').slideUp(500);
    });

    //手機版選單按鈕
    $('.js-phone-menu').click(function() {
      $('.js-phone-menu').hide(200);
      $('.js-phone-remove').show(200);
      $('.js-nav').slideDown(500);
    });
    $('.js-phone-remove').click(function() {
      $('.js-phone-menu').show(200);
      $('.js-phone-remove').hide(200);
      $('.js-nav').slideUp(500);
    });

    //按下Footer訂閱我們清除訊息初始訊息
    // $('.footer .subscription-link').click(function() {
    //   if($('.modal #es_msg_pg').html() != ''){
    //     $('.modal #es_msg_pg').html('');
    //   }
    // });

    //按下跳出視窗訂閱我們的送出鈕時成功送出會有訊息所以判斷有無訊息有訊息就關閉跳窗
    // $('.modal .es_textbox_button').click(function() {
    //   if($('.modal #es_msg_pg').html() != ''){
    //     $('#subscriptionModal').modal('hide');
    //     $('.modal #es_msg_pg').html('');
    //   }
    // });

    if($(window).width()>975){
      $(window).scroll(function(){
        if($(this).scrollTop()>1){
          $('.go-top').fadeIn();
          //$('.service').fadeIn();
        } else {
          $('.go-top').fadeOut();
          //$('.service').fadeOut();
        }
      });
    }

    $('.footer-subscribe .es_button .es_submit_button').hover(function() {
      $('.footer-subscribe .mail-image').css({'opacity': '0.5'});
    }, function() {
      $('.footer-subscribe .mail-image').css({'opacity': '1'});
    });

});