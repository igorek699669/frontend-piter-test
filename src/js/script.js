$(document).ready(function () {
    $('.tab-buttons-wrapper__button').on('click', function () {

       if(!$('.offers-slider').eq($(this).index()).hasClass('active')){
           $('.offers-slider').removeClass('active');
           $('.offers-slider').eq($(this).index()).addClass('active');
           $('.tab-buttons-wrapper__button').removeClass('active');
           $(this).addClass('active');
           changeArrowsClass();
           refreshSliders();
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
        //почему то обновляет стрелки слайдера не с 1го раза
        $('.offers-slider.fire-offers').slick('refresh');
        $('.offers-slider.all-offers').slick('refresh');
        setTimeout(function () {
            $('.offers-slider.fire-offers').slick('refresh');
            $('.offers-slider.all-offers').slick('refresh');
        }, 50);
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


    const PADDING_FOR_LABEL = 24;
    $('.input input').on('focus' , function () {
        let labelWidth = $(this).closest('.input').find('label').width();
        let borderRightWidth = $(this).closest('.input').find('.top-border-right').width();
        let newBorderWidth = borderRightWidth - labelWidth - PADDING_FOR_LABEL;
        if(!$(this).closest('.input').hasClass('active')){
            $(this).closest('.input').addClass('active');
            $(this).closest('.input').find('.top-border-right').width(newBorderWidth);
        }
    });
    $('.input input').on('focusout' , function () {
        if(!$(this).val()){
            $(this).closest('.input').removeClass('active');
            $(this).closest('.input').find('.top-border-right').width('calc(100% - 8px)')
        }
    });
});