const burgerBtn = document.querySelector('.header-mobile__burger');
const burgerContent = document.querySelector('.burger-active');
const menuOpenMobile = document.querySelector('.menu-open-mobile');
const backMobile = document.querySelector('.back-mobile');
const remontOpenBtn = document.querySelector('.remont-open');
const zamenaOpenBtn = document.querySelector('.zamena-open');
const remontMobile = document.querySelector('.remont-mobile');
const zamenaMobile = document.querySelector('.zamena-mobile');
const zamenaRemontBtn = document.querySelector('.back-zamena');
const backRemontBtn = document.querySelector('.back-remont');

let isMenuOpen = false; // состояние

// Обработчик для кнопки burger
burgerBtn.addEventListener('click', () => {
  if (!isMenuOpen) {
    // Открываем меню
    burgerContent.style.display = 'flex';

    if (menuOpenMobile) {
      menuOpenMobile.style.display = 'none';
    }

    if (backMobile) {
      backMobile.style.display = 'block';
    }

    isMenuOpen = true;
  } else {
    burgerContent.style.display = 'none';
    remontMobile.style.display = 'none';
    zamenaMobile.style.display = 'none';

    if (menuOpenMobile) {
      menuOpenMobile.style.display = '';
    }

    if (backMobile) {
      backMobile.style.display = 'none';
    }

    isMenuOpen = false;
  }
});

// Обработчик для кнопки remont-open
if (remontOpenBtn && remontMobile) {
  remontOpenBtn.addEventListener('click', () => {
    // скрываем burgerContent
    burgerContent.style.display = 'none';

    // показываем remont-mobile
    remontMobile.style.display = 'flex';

    // закрываем меню, если оно было открыт
  });
}

// Обработчик для кнопки back-remont
if (backRemontBtn) {
  backRemontBtn.addEventListener('click', () => {
    // показываем burger-active
    burgerContent.style.display = 'flex';

    // скрываем remont-mobile
    remontMobile.style.display = 'none';

    // Можно оставить состояние открытого меню
    isMenuOpen = true; // или true, если хотите, чтобы оно считалось открытым
  });
}

if (zamenaOpenBtn && remontMobile) {
  zamenaOpenBtn.addEventListener('click', () => {
    // скрываем burgerContent
    burgerContent.style.display = 'none';

    // показываем remont-mobile
    zamenaMobile.style.display = 'flex';
  });
}

if (zamenaRemontBtn) {
  zamenaRemontBtn.addEventListener('click', () => {
    // показываем burger-active
    burgerContent.style.display = 'flex';

    // скрываем remont-mobile
    zamenaMobile.style.display = 'none';

    // Можно оставить состояние открытого меню
    isMenuOpen = true; // или true, если хотите, чтобы оно считалось открытым
  });
}
