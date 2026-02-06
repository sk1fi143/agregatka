function selectTab(tabName) {
  const tabs = document.querySelectorAll('.services-list__tab');
  tabs.forEach((tab) => {
    tab.classList.remove('active');
    if (tab.textContent === (tabName === 'tech' ? 'Технические центры' : 'Партнеры')) {
      tab.classList.add('active');
    }
  });
}

const toggle = document.getElementById('toggle');
const leftText = document.getElementById('left-text');
const rightText = document.getElementById('right-text');

function updateTexts() {
  if (toggle.checked) {
    leftText.classList.remove('active');
    rightText.classList.add('active');
  } else {
    leftText.classList.add('active');
    rightText.classList.remove('active');
  }
}

updateTexts();

window.onload = function () {
  var box = document.getElementsByClassName('box');
  var btn = document.getElementById('button');

  for (let i = 5; i < box.length; i++) {
    box[i].style.display = 'none';
  }

  var countD = 5;

  btn.addEventListener('click', function () {
    countD += 5;

    for (let i = 0; i < box.length; i++) {
      if (i < countD) {
        box[i].style.display = 'flex';
      }
    }

    if (countD >= box.length) {
      btn.style.display = 'none';
    }
  });
};

const switchToggle = document.getElementById('toggle');

switchToggle.addEventListener('change', function () {
  const isSwitchOn = switchToggle.checked;

  const elementsToShow = [document.getElementById('list1'), document.getElementById('list2')];

  const alternativeElement = document.getElementById('newBlock');

  const block3 = document.getElementById('list3');
  const block4 = document.getElementById('list4');
  const block5 = document.getElementById('list5');

  const servicesNavigation = document.querySelector('.services-list__navigation');

  if (isSwitchOn) {
    // Показываем блоки 1 и 2
    elementsToShow.forEach((element) => {
      if (element) {
        element.style.display = 'flex';
      }
    });
    // Скрываем альтернативный блок
    if (alternativeElement) {
      alternativeElement.style.display = 'none';
    }
    // Показываем блоки 3 и 4
    if (block3) {
      block3.style.display = 'flex';
    }
    if (block4) {
      block4.style.display = 'flex';
      // Удаляем класс active6
      block4.classList.remove('active4');
      block4.classList.remove('active6');
    }
    // Убираем класс marg у блока 5
    if (block5) {
      block5.classList.remove('marg');
    }
    // Устанавливаем margin-top: 0 для services-list__navigation
    if (servicesNavigation) {
      servicesNavigation.style.marginTop = '64px';
    }
  } else {
    // Скрываем блоки 1 и 2
    elementsToShow.forEach((element) => {
      if (element) {
        element.style.display = 'none';
      }
    });
    // Показываем альтернативный блок
    if (alternativeElement) {
      alternativeElement.style.display = 'flex';
    }
    // Прячем блоки 3 и 4
    if (block3) {
      block3.style.display = 'none';
    }
    if (block4) {
      block4.style.display = 'flex';
      // Добавляем класс active6
      block4.classList.add('active4');
      block4.classList.add('active6');
    }
    // Добавляем класс marg к блоку 5
    if (block5) {
      block5.classList.add('marg');
    }
    // Восстанавливаем margin-top: 64px для services-list__navigation
    if (servicesNavigation) {
      servicesNavigation.style.marginTop = '0px';
    }
  }
});
