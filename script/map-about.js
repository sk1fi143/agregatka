const switchToggle = document.getElementById('toggle');

switchToggle.addEventListener('change', function () {
  const isSwitchOn = switchToggle.checked;

  const elementsToShow = [document.getElementById('list1')];
  const alternativeElement = document.getElementById('newBlock');

  const block3 = document.getElementById('list3');
  const block4 = document.getElementById('list4');
  const block5 = document.getElementById('list5');

  const servicesNavigation = document.querySelector('.services-list__navigation');
  const leftNavigation = document.querySelector('.services-list__left-navigation');

  if (isSwitchOn) {
    // Показываем list1
    elementsToShow.forEach((element) => {
      if (element) {
        element.classList.remove('hidden');
      }
    });
    // Скрываем альтернативный блок
    if (alternativeElement) {
      alternativeElement.classList.add('hidden');
    }
    // Показываем блоки 3 и 4
    if (block3) {
      block3.classList.remove('hidden');
    }
    if (block4) {
      block4.classList.remove('hidden');
      block4.classList.remove('active5');
      // Добавляем класс active4
      block4.classList.add('active4');
      // Устанавливаем top: 64px
      block4.style.top = '64px';
    }
    if (block5) {
      block5.classList.remove('marg');
    }
    if (servicesNavigation) {
      servicesNavigation.style.marginTop = '64px';
    }
    // Скрываем левое навигационное меню
    if (leftNavigation) {
      leftNavigation.classList.add('hidden');
    }
  } else {
    // Скрываем list1
    elementsToShow.forEach((element) => {
      if (element) {
        element.classList.add('hidden');
      }
    });
    // Показываем альтернативный блок
    if (alternativeElement) {
      alternativeElement.classList.remove('hidden');
    }
    // Скрываем блоки 3 и 4
    if (block3) {
      block3.classList.add('hidden');
    }
    if (block4) {
      // Убираем класс active4
      block4.classList.remove('active4');
      // Можно сбросить top
      block4.style.top = '';
      // Или оставить без изменений
      // block4.classList.add('active5');
    }
    if (block5) {
      block5.classList.add('marg');
    }
    if (servicesNavigation) {
      servicesNavigation.style.marginTop = '0px';
    }
    // Восстанавливаем видимость левого меню
    if (leftNavigation) {
      leftNavigation.classList.remove('hidden');
    }
  }
});
