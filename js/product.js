/*
 *  產品頁JS
 */

$(document).ready(function(){

    $('.product-tool .product-filter').click(function(){
      $(this).toggleClass('open');
      if($(this).hasClass('open')){
        $('.widget-all').slideDown();
      }
      else{
        $('.widget-all').slideUp();
      }
    });

    //產品圖片
    $('.product-gallery-show').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-gallery-nav'
    });
    $('.product-gallery-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-gallery-show',
      arrows: false,
      centerMode: false,
      focusOnSelect: true
    });


    if($(window).width() > 1183){
      $('.related-product ul.products').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
      });
    }else if($(window).width() <= 1183 && $(window).width() > 683){
      $('.related-product ul.products').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false
      });
    }else if($(window).width() <= 683){
      $('.related-product ul.products').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false
      });
    }

    // $('.test-add-cart').click(function(){
    //   my_add_to_cart($(this).attr('data-product_id'));
    //   return false;
    // });

});


// function my_add_to_cart(product_id){
//     $.ajax({
//         type: "POST",
//         dataType: "json",
//         url: $('#ajax-add-cart-url').val(),
//         data: {
//           "action" : "woocommerce_add_variation_to_cart",
//           "product_id" : product_id,
//           //"variation_id" : "125",
//           "quantity" : 1,
//           /*"variation" : {
//               "size" : "xl",
//               "color": "pink"
//           },*/
//         },
//         success: function(data){
//           console.log(data);
//           //console.log("成功加入購物車了");
//           $('.shoppingCart-number').html(data.cart_num);
//           $('#mini_cart').html(data.mini_cart);
//           $('#addcart-'+product_id).addClass('added');

//           var msg = $( '#yith-wcwl-popup-message' );
//           $( '#yith-wcwl-message' ).html( '已加入購物車' );
//           msg.css( 'margin-left', '-' + $( msg ).width() + 'px' ).fadeIn();
//           window.setTimeout( function() {
//             msg.fadeOut();
//           }, 2000 );

//           $('.js-shoppingCart-list').slideDown(500);

//         },
//         error : function(jqXHR, textStatus, errorThrown) {
//             //$loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
//         }

//     });
// }