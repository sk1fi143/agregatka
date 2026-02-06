$(document).ready(function () {
  function setupSlider() {
    if ($(window).width() < 768) {
      if ($('.advantages__slider').hasClass('slick-initialized')) {
        $('.advantages__slider').slick('unslick'); // Удалить слайдер
      }
    } else {
      if (!$('.advantages__slider').hasClass('slick-initialized')) {
        $('.advantages__slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          appendArrows: $(".advantages__row-buttons"),
          prevArrow:
            '<button class="advantages__row-buttons-btn" id="advantagesPrev"><svg class="advantages__row-buttons-btn-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 24L12 16L20 8" stroke="white" stroke-width="2" /></svg></button>',
          nextArrow:
            '<button class="advantages__row-buttons-btn" id="advantagesNext"><svg class="advantages__row-buttons-btn-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8L20 16L12 24" stroke="white" stroke-width="2" /></svg></button>',
          responsive: [
            { breakpoint: 1439, 
              settings: { 
                slidesToShow: 2,
              } 
            },
            { breakpoint: 1023, 
              settings: { 
                slidesToShow: 1,
              } 
            },
          ],
        });
      }
    }
  }

  setupSlider();

  $(window).on('resize', function () {
    setupSlider();
  });
});