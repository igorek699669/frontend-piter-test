$(document).ready(function () {
    $('.tab-buttons-wrapper__button').on('click', function () {

       if(!$('.offers-slider').eq($(this).index()).hasClass('active')){
           $('.offers-slider').removeClass('active');
           $('.offers-slider').eq($(this).index()).addClass('active');
           $('.tab-buttons-wrapper__button').removeClass('active');
           $(this).addClass('active');
           refreshSliders();
           changeArrowsClass();
       }


    });
    function changeArrowsClass() {
        if($('.offer-slider-buttons-wrapper__button').hasClass('fire-offers')){
            $('.offer-slider-buttons-wrapper__button').removeClass('fire-offers');
            $('.offer-slider-buttons-wrapper__button').addClass('all-offers');
        }
        else {
            $('.offer-slider-buttons-wrapper__button').removeClass('all-offers');
            $('.offer-slider-buttons-wrapper__button').addClass('fire-offers');
        }
    }
    function refreshSliders(){
        $('.offers-slider.fire-offers').slick('setPosition');
        $('.offers-slider.all-offers').slick('setPosition');

    }
    $('.offers-slider.fire-offers').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.offer-slider-buttons-wrapper__button.left.fire-offers',
        nextArrow: '.offer-slider-buttons-wrapper__button.right.fire-offers',
    });
    $('.offers-slider.all-offers').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.offer-slider-buttons-wrapper__button.left.all-offers',
        nextArrow: '.offer-slider-buttons-wrapper__button.right.all-offers',
    });
});