$(document).ready(function(){
    $('.slider__inner').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1, 
        autoplay: true,
        autoplaySpeed: 2200,
        dotsClass: 'slider-dots', 
        arrows: false,
    });
});

$(document).ready(function(){
    $('.section__slider').slick({
        dots: true,
        slidesToShow: 3, 
        arrows: true,
        centerMode: true,
        centerPadding: '1px',
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow-left2"></span><div class="slick-prev-strip"></div></button>',
        nextArrow: '<button type="button" class="slick-prev"><div class="slick-next-strip"></div><span class="icon-arrow-right2"></span></button>',
        appendArrows: '.prev-next',
        dotsClass: 'slider-dots',
        appendDots: '.section__line',
        responsive: [
            {
            breakpoint: 426,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2200,
                speed: 1000,
              }
            }  
          ]
    });
    $(".section__slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 01);
    });
});

$('.gallery__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    appendArrows: '.gallery__prev-next',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow-left2"></span><div class="slick-prev-strip"></div></button>',
    nextArrow: '<button type="button" class="slick-prev"><div class="slick-next-strip"></div><span class="icon-arrow-right2"></span></button>',
    responsive: [
        {
        breakpoint: 426,
          settings: {
            slidesToShow: 2,
          }
        }, 
        {
        breakpoint: 321,
            settings: {
            initialSlide: -2,
            centerMode: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2200,
            speed: 1000,
            }
        }  
      ]
});

$('.gallery__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-slide').removeClass('slick-active-first slick-active-last');
    $('.slick-current').addClass('slick-active-first');
    console.log ($('.gallery__slider-item.slick-slide.slick-active')[1].classList.add("slick-active-last"))
})
$('.gallery__slider').trigger('afterChange');

$('.reviews__slider').slick({
    infinite: true,
    dots: true,
    dotsClass: 'slider-dots',
    appendDots: '.reviews__line',
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: '.reviews__prev-next',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow-left2"></span><div class="slick-prev-strip"></div></button>',
    nextArrow: '<button type="button" class="slick-prev"><div class="slick-next-strip"></div><span class="icon-arrow-right2"></span></button>',
    responsive: [
        {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        },
      },
      {
      breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      }  
    ]
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})