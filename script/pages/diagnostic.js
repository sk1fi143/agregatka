function setActive(index) {
  const listItems = document.querySelectorAll(".advantages-col__list-item");
  listItems.forEach((item, i) => {
    item.classList.remove("advantages-col__list-item--active");
    document
      .querySelectorAll(".advantages-slides__item")
      [i].classList.remove("advantages-slides__item--active");
  });

  listItems[index].classList.add("advantages-col__list-item--active");
  document
    .querySelectorAll(".advantages-slides__item")
    [index].classList.add("advantages-slides__item--active");
}

$(document).ready(function () {
  $(".technologies__slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "220px",
    prevArrow: "#technologiesPrev",
    nextArrow: "#technologiesNext",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ]
  });
});
