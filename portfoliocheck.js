$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleclass('open');
        $('.top-nav').toggleclass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeclass('open');
        $('.top-nav').removeclass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate(keyframes:{
            scrolltop: $($(this).attr('href')).offset().top - 100
        }, ptions: 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate(keyframes: {
            scrolltop: 0
        }, Options: 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
        once: true
    });
});