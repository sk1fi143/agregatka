document.querySelectorAll('.tab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(function (t) {
      t.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(function (content) {
      content.classList.remove('active');
    });

    this.classList.add('active');
    const tabNumber = this.getAttribute('data-tab');
    document.getElementById('content-' + tabNumber).classList.add('active');
  });
});

 $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.thumbnail-slider',
    prevArrow: "#mainPrev",
    nextArrow: "#mainNext",
    });
    
  $('.thumbnail-slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    dots: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    prevArrow: "",
    nextArrow: "#thumbNext",
  });

  $('.thumbnail-slider').on('afterChange', function(event, slick, currentSlide) {
    $('.thumbnail-slider .slick-slide').removeClass('thumb-active');
    $('.thumbnail-slider .slick-slide[data-slick-index="' + currentSlide + '"]').addClass('thumb-active');
});