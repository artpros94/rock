$(function() {

    $('.header__slider-inner').slick({
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 5000,
        // vertical: true,
        // verticalSwiping: true
    });

    $('.members__inner').slick({
        // arrows: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.concert__slider-inner').slick({
        // arrows: false,
        prevArrow: '<div class="concer-prev"></div>',
        nextArrow: '<div class="concer-next"></div>',
        // autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.header__menu-btn').on('click', function(){
        console.log('test');
        $('.header__menu-list').slideToggle();
    });
    


});