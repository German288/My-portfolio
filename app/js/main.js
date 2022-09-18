$(function() {
    $('.menu__btn, .menu a').on('click', function() {
        $('.header-top__inner').toggleClass('header-top__inner--active');
    });
});