const sliders = document.querySelectorAll('.works-slider__slide-change');
const ranges = document.querySelectorAll('.slider__range-js');

ranges.forEach((range, index) => {
  range.addEventListener('input', () => {
    if (sliders[index]) {
      sliders[index].style.setProperty('--value', range.value + '%');
    }
  });
});

$(document).ready(function () {
  $(".works-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: "220px",
    prevArrow: "#worksPrev",
    nextArrow: "#worksNext",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ]
  });

  $('.works-slider__slide-change').on('touchstart touchmove', function(e) {
    e.stopPropagation(); // Остановить дальнейшее распространение событий
  });
});
