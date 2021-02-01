$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {

  const productsThumbs = new Swiper('.products__thumbs', {
    speed: 600,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  const productsSlider = new Swiper('.products__slider', {
    navigation: {
      nextEl: '.products .swiper-button-next',
      prevEl: '.products .swiper-button-prev',
    },
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 600,
    thumbs: {
      swiper: productsThumbs
    },
    // breakpoints: {
    //   0: {
    //     autoHeight: true
    //   },
    //   768: {
    //     autoHeight: false
    //   },
    // }
  });

  productsThumbs.on('slideChange', function () {
    $('.js-products-step').html(`0${productsThumbs.activeIndex + 1}`);
  });

  $('.js-products-step').html(`0${productsThumbs.activeIndex + 1}`);

  $('.js-products-length').html(`0${productsThumbs.slides.length}`);
});

$(() => {

    const modelsSlider = new Swiper('.models__slider', {
        navigation: {
            nextEl: '.models .swiper-button-next',
            prevEl: '.models .swiper-button-prev',
        },
        speed: 600,
        breakpoints: {
            0: {
                slidesPerView: 1,
              spaceBetween: 30
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 14
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
        // effect: 'fade',
        // navigation: {
        //     nextEl: '.slider .swiper-button-next',
        //     prevEl: '.slider .swiper-button-prev',
        // },
        // pagination: {
        //     el: '.slider .swiper-pagination',
        //     clickable: true,
        // },
    });
});

$(() => {

  const casesPreview = new Swiper('.cases__bottom', {
    centeredSlides: true,
    initialSlide: 4,
    speed: 600,
    slidesPerView: 6,
    spaceBetween: 15,
  });

  const casesSlider = new Swiper('.cases__slider', {
    navigation: {
      nextEl: '.cases .swiper-button-next',
      prevEl: '.cases .swiper-button-prev',
    },
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 600,
    thumbs: {
      swiper: casesPreview
    },
    breakpoints: {
      0: {
        initialSlide: 2,
        autoHeight: true
      },
      1200: {
        initialSlide: 4,
        autoHeight: false
      },
    }
  });
});

$(() => {
    const questionsSlider = new Swiper('.questions__slider', {
      slidesPerView: 1,
      spaceBetween: 35,
      loop: false,
      allowTouchMove: false,
      speed: 600,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      breakpoints: {
        0: {
          navigation: {
            nextEl: '.questions__bottom-navigation .swiper-button-next',
            prevEl: '.questions__bottom-navigation .swiper-button-prev',
          },
        },
        1200: {
          navigation: {
            nextEl: '.questions__navigation .swiper-button-next',
            prevEl: '.questions__navigation .swiper-button-prev',
          },
        },
      }
    });

    questionsSlider.on('slideChange', function () {
      $('.questions__item').removeClass('active').find('.questions__item-dropdown').slideUp();
    });
});

$(() => {
  const documentsSlider = new Swiper('.documents__slider', {
    speed: 600,
    navigation: {
      nextEl: '.documents .swiper-button-next',
      prevEl: '.documents .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });
});

$(() => {
    $('[data-fancybox]').fancybox({
      animationDuration: 600,
      animationEffect   : 'slide-in-in',
      touch: false
    });
});


$(() => {
    $('.questions__item-top').on('click', function () {
      if($(this).parent('.questions__item').hasClass('active')){
        $(this).parent('.questions__item').removeClass('active').find('.questions__item-dropdown').slideUp();
      } else {
        $('.questions__item').parent('.questions__item').removeClass('active').find('.questions__item-dropdown').slideUp();
        $(this).parent('.questions__item').toggleClass('active').find('.questions__item-dropdown').slideToggle()
      }
    })
});

$('input[type="tel"]').mask("+7 ( 999 ) - 999 - 99 - 99");


$(() => {
  $('.js-toggle-menu').on('click', function toggleMenu() {
    $('body').toggleClass('show-menu');
  });


  $(document).on('click', function(event) {
    var $target = $(event.target);
    if(!$target.closest('.header').length &&
        $('body').hasClass('show-menu')) {
      $('body').removeClass('show-menu');
    }
  });
});


$(() => {
  $('.js-anchor-link').on('click', function anchorLinkClick (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    console.log(top);
    $('body,html').animate({scrollTop: top}, 800);
    // $('.content').animate({scrollTop: top - 100}, 800);
  });
});
