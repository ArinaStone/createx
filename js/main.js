$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })
    
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        // slidesToShow: 1,
        appendDots: $('.testimonials__dots'),
        waitForAnimate: false,
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })
    
    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    // Вариант, когда можно открыть все вкладки одновременно и они не будут закрываться
    // $('.program__acc-link').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // })

    // Вариант, когда можно открыть только одну вкладку единовременно, остальные закроются
    $('.program__acc-link').on('click', function(e){
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
            stopImmediatePropagation()
        }   
        $('.program__acc-link').removeClass('program__acc-link--active')
        $('.program__acc-text').slideUp()
        $(this).toggleClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideDown()
    })

    $(".header__nav-list a, .header__btn, .footer__go-top").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100
        $('body,html').animate({ scrollTop: top }, 800)
        })

})