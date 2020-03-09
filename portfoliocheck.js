$(document).ready(function () {
    
    $('#hamburger').on('click', function() {
    
       $(this).toggleClass('menu-toggler open');
        $('.top-nav').toggleClass('menu-toggler open');
        
    });

    // $('.top-nav .nav-link').on('click', function () {
    //     $('.menu-toggler').removeclass('open');
    //     $('.top-nav').removeclass('open');
    // });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( {
            scrolltop: $($(this).attr('href')).offset().top - 100
        },  2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate( {
            scrolltop: 0
        }, 2000);
    });



    AOS.init({
        easing: 'ease',
        duration: 1000,
        once: true
    });
});