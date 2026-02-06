const wrappers = document.querySelectorAll('.stocks-cards__wrapper');
const buttons = document.querySelectorAll('.pagination__btn');
const prevArrow = document.querySelector('#paginationPrev');
const nextArrow = document.querySelector('#paginationNext');
let currentIndex = 0;

function showWrapper(index) {
    wrappers.forEach((wrapper, i) => {
        wrapper.classList.toggle('active', i === index);
    });
    buttons.forEach(button => {
        button.classList.toggle('pagination__btn--active', button.getAttribute('data-index') == index);
    });
}

function updateIndex(delta) {
    const newIndex = currentIndex + delta;
    if (newIndex >= 0 && newIndex < buttons.length) {
        currentIndex = newIndex;
        showWrapper(currentIndex);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        currentIndex = parseInt(button.getAttribute('data-index'), 10);
        showWrapper(currentIndex);
    });
});

prevArrow.addEventListener('click', () => updateIndex(-1));
nextArrow.addEventListener('click', () => updateIndex(1));

showWrapper(currentIndex);