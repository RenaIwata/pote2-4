$(document).ready(function(){   
    $('.js-slider').slick({
        centerMode: true,
        centerPadding: 0,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        accessibility: true,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false
    });
});