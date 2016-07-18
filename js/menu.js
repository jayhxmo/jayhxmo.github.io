$('.js-menu').sidr();

var initialHamburgerPosition = $('.js-menu').position().top;
var hamburgerPosition = $('.js-menu').position().top;

$('.js-menu').click(function() {
    if ($('.js-menu').hasClass('is-active')) {
        $('.js-menu').removeClass('is-active');
        $('.js-menu').removeClass('hamburger-white');

        setTimeout(function() {
        $('.hamburger').css('top', '10vh');
            $('.js-menu').removeClass('is-fixed');
        }, 500);
    }

    else {
        $('.hamburger').css('top', hamburgerPosition);

        $('.js-menu').addClass('is-active');
        $('.js-menu').addClass('hamburger-white');

        $('.js-menu').addClass('is-fixed');
    }
    
});

$(document).scroll(function() {
    hamburgerPosition = $('.js-menu').position().top - $(window).scrollTop();

    if ($('.js-menu').hasClass('is-active')) {
        $('.js-menu').click();
    }
});