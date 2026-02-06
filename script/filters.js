document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll(
    ".catalog-filters__filter-list-item-label"
  );
  labels.forEach((label) => {
    label.addEventListener("click", function () {
      const checkbox = label.previousElementSibling;
      checkbox.checked = !checkbox.checked;
    });
  });

  const filterBlocks = document.querySelectorAll(".catalog-filters__filter");
  filterBlocks.forEach(function (filterBlock) {
    const items = filterBlock.querySelectorAll(
      ".catalog-filters__filter-list-item"
    );
    const showMoreButton = filterBlock.querySelector(
      ".catalog-filters__filter-list-item-more"
    );
    for (let i = 0; i < 5 && i < items.length; i++) {
      items[i].classList.add("show");
    }
    showMoreButton.addEventListener("click", function () {
      let currentVisibleItems = filterBlock.querySelectorAll(
        ".catalog-filters__filter-list-item.show"
      ).length;
      for (
        let i = currentVisibleItems;
        i < currentVisibleItems + 5 && i < items.length;
        i++
      ) {
        items[i].classList.add("show");
      }
      if (currentVisibleItems + 5 >= items.length) {
        showMoreButton.style.display = "none";
      }
    });
  });
});

$(document).ready(function () {
  const faqs = document.querySelectorAll(".catalog-filters__filter-show");

  faqs.forEach(function (faq) {
    faq.addEventListener("click", function () {
      $(faq).closest(".catalog-filters__filter").toggleClass("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const closeButtons = [
    document.querySelector(".catalog-filters__close"),
    document.querySelector(".head-filters-close"),
  ];
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  const clearCheckboxes = () => {
    const anyChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );
    if (anyChecked) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  };

  closeButtons.forEach((button) => {
    button.addEventListener("click", clearCheckboxes);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".catalog-container__head-filters-item")
    .addEventListener("click", function () {
      this.style.display = "none";
    });
});

$(document).ready(function () {
  $(".catalog-filters__mob").click(function () {
    $('.catalog-filters__close').toggleClass("active");
    $('.catalog-filters__column').toggleClass("active");
  });
});
