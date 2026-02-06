const slidesWrapper = document.querySelector('.about-company__slides-wrapper');
const slides = document.querySelectorAll('.about-company__slide');
const totalSlides = slides.length;

let currentSlide = 0;

document.querySelectorAll('.about-company__button-next').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlidePosition();
    }
  });
});

document.querySelectorAll('.about-company__button-back').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlidePosition();
    }
  });
});

function updateSlidePosition() {
  const offset = -currentSlide * 100;
  slidesWrapper.style.transform = `translateX(${offset}vw)`;
}

const scrollContainer = document.getElementById('garant-scroll');
const backBtn = document.getElementById('garant-back');
const nextBtn = document.getElementById('garant-next');

const scrollStep = 436;

function scrollByPixels(pixels) {
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  let targetScrollLeft = scrollContainer.scrollLeft + pixels;

  if (targetScrollLeft < 0) targetScrollLeft = 0;
  if (targetScrollLeft > maxScrollLeft) targetScrollLeft = maxScrollLeft;

  scrollContainer.scrollTo({
    left: targetScrollLeft,
    behavior: 'smooth',
  });
}

backBtn.addEventListener('click', () => {
  scrollByPixels(-scrollStep);
});

nextBtn.addEventListener('click', () => {
  scrollByPixels(scrollStep);
});

window.addEventListener('load', () => {
  scrollContainer.scrollTo({
    left: 0,
    behavior: 'auto',
  });
});

const historyList = document.getElementById('history-list');
const buttonBack = document.getElementById('year-back');
const buttonNext = document.getElementById('year-next');

const historyYears = document.querySelectorAll('.about-company__history-year');

const totalBlocks = historyYears.length;

const minMarginTop = -338 * (totalBlocks - 1);
let currentMarginTop = 0;
let triggerDirection = 'up';

function changeMarginTop(delta) {
  let newMarginTop = currentMarginTop + delta;
  if (newMarginTop > 0) {
    newMarginTop = 0;
  }
  if (newMarginTop < minMarginTop) {
    newMarginTop = minMarginTop;
  }
  currentMarginTop = newMarginTop;
  historyList.style.marginTop = currentMarginTop + 'px';
}

buttonBack.addEventListener('click', () => {
  if (triggerDirection === 'up') {
    changeMarginTop(-338);
  } else {
    changeMarginTop(0);
  }
});

buttonNext.addEventListener('click', () => {
  changeMarginTop(338);
});

const historyContainer = document.querySelector('.about-company__history-list');

const btnPrevYear = document.getElementById('year-back');
const btnNextYear = document.getElementById('year-next');

const yearBlocks = document.querySelectorAll('.about-company__history-year');

const totalYearBlocks = yearBlocks.length;

const minOffset = -338 * (totalYearBlocks - 1);

function getCurrentMargin() {
  const style = window.getComputedStyle(historyContainer);
  const marginTopStr = style.marginTop;
  return parseInt(marginTopStr, 10);
}

let currentOffset = 0;

function shiftHistory(delta) {
  const currentMargin = getCurrentMargin();
  let newMargin = currentMargin + delta;

  if (newMargin > 0) newMargin = 0;
  if (newMargin < minOffset) newMargin = minOffset;

  historyContainer.style.marginTop = newMargin + 'px';

  updateImages();
}

btnPrevYear.addEventListener('click', () => {
  shiftHistory(-338);
});

btnNextYear.addEventListener('click', () => {
  shiftHistory(338);
});

const images = document.querySelectorAll('.about-company__history-img');
function updateImages() {
  const currentMargin = getCurrentMargin();

  images.forEach((img) => {
    const year = img.dataset.year;

    img.classList.remove('pre-img');
    switch (year) {
      case '2024':
        if (currentMargin === 0) {
          img.classList.add('pre-img');
        }
        break;
      case '2023':
        if (currentMargin === -338) {
          img.classList.add('pre-img');
        }
        break;
      case '2022':
        if (currentMargin === -676) {
          img.classList.add('pre-img');
        }
        break;
      case '2021':
        if (currentMargin === -1014) {
          img.classList.add('pre-img');
        }
        break;
      default:
        break;
    }
  });
}

function getCurrentMargin() {
  const style = window.getComputedStyle(historyContainer);
  const marginTopStr = style.marginTop;
  return parseInt(marginTopStr, 10);
}

const years = ['2024', '2023', '2022', '2021'];

function getCurrentIndex() {
  const margin = getCurrentMargin();
  const index = Math.abs(margin) / 338;
  if (index < 0) return 0;
  if (index >= years.length) return years.length - 1;
  return index;
}

function updateImages() {
  const currentIndex = getCurrentIndex();

  images.forEach((img) => {
    const year = img.dataset.year;

    img.classList.remove('pre-img');
    if (years[currentIndex] === year) {
      img.classList.add('pre-img');
    }
  });
}

function monitorMargin() {
  const currentMargin = getCurrentMargin();

  updateImages();

  requestAnimationFrame(monitorMargin);
}

monitorMargin();

function monitorMargin() {
  const currentMargin = getCurrentMargin();
  updateImages();
  requestAnimationFrame(monitorMargin);
}

window.addEventListener('load', () => {
  monitorMargin();
});
