$(document).ready(function () {
  $(".revslider-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: "#revsliderPrev",
    nextArrow: "#revsliderNext",
    responsive: [
      { breakpoint: 1439, 
        settings: { 
          slidesToShow: 2,
        } 
      },
      { breakpoint: 767, 
        settings: { 
          slidesToShow: 1,
        } 
      },
    ],
  });
});

$(document).ready(function () {
  $(".servslider-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: "#servsliderPrev",
    nextArrow: "#servsliderNext",
    responsive: [
      { breakpoint: 1439, 
        settings: { 
          slidesToShow: 2,
        } 
      },
      { breakpoint: 767, 
        settings: { 
          slidesToShow: 1,
        } 
      },
    ],
  });
});

$(document).ready(function () {
  const faqs = document.querySelectorAll(".faq__container-item-question");

  faqs.forEach(function (faq) {
    faq.addEventListener("click", function () {
      $(faq).closest(".faq__container-item").toggleClass("active");
    });
  });
});
