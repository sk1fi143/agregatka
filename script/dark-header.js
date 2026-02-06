document.addEventListener('DOMContentLoaded', () => {
  const parentBlocks = document.querySelectorAll('.header-dark'); // замените на ваш класс родительского блока
  parentBlocks.forEach((block) => {
    // Внутри каждого блока ищем необходимые элементы
    const headers = block.querySelectorAll('.services-header-id-dark');
    const openBlocks = block.querySelectorAll('.open-block-header-id-dark');
    const services = block.querySelectorAll('.services-id-dark');

    const repairs = block.querySelectorAll('.repair-id-dark');
    const diagnostics = block.querySelectorAll('.diagnostic-id-dark');

    const remontButtons = block.querySelectorAll('.remont-id-dark');
    const zamenButtons = block.querySelectorAll('.zamena-id-dark');

    const companyHeader = block.querySelector('.company-header-id-dark');
    const akppHeader = block.querySelector('#akpp-header-id-dark');

    const companyHeadercl = block.querySelectorAll('.company-header-id-dark');
    const akppHeadercl = block.querySelectorAll('.akpp-header-id-dark');

    // Изначально скрываем блок открытия
    const openBlockElement = block.querySelector('.open-block-header-id-dark');
    if (openBlockElement) {
      openBlockElement.style.top = '-1000px';
    } else {
      console.error('Элемент .open-block-header-id не найден внутри блока');
    }

    // Проверка наличия элементов
    if (openBlocks.length === 0) {
      console.error('Элемент .open-block-header-id не найден');
    }
    if (services.length === 0) {
      console.error('Элемент .services-id не найден');
    }
    if (!companyHeader) {
      console.error('Элемент #company-header-id не найден');
    }
    if (!akppHeader) {
      console.error('Элемент #akpp-header-id не найден');
    }

    console.log('Найдено заголовков:', headers.length);
    console.log('Блок:', openBlocks);
    console.log('Services:', services);
    console.log('Ремонты:', repairs.length);
    console.log('Диагностики:', diagnostics.length);
    console.log('Кнопки ремонт:', remontButtons.length);
    console.log('Кнопки замена:', zamenButtons.length);
    console.log('Company header:', companyHeader);
    console.log('AKPP header:', akppHeader);

    let isToggled = false;

    headers.forEach((hdr) => {
      hdr.addEventListener('click', () => {
        console.log('Заголовок кликнут!');
        const openBlock = block.querySelector('.open-block-header-id-dark');
        if (openBlock) {
          openBlock.style.display = 'flex';
        } else {
          console.error('.open-block-header-id-dark');
        }
        console.log(openBlock.style.top);
        if (openBlock.style.top != '128px') {
          console.log('Открываем меню');
          openBlock.style.top = '128px';
          block.querySelector('.services-id-dark').style.display = 'flex';
          block.querySelector('.akpp-header-id-dark').style.display = 'none';
          block.querySelector('.repair-id-dark').style.display = 'none';
          block.querySelector('.diagnostic-id-dark').style.display = 'none';
        } else if (
          openBlock.style.top === '128px' &&
          block.querySelector('.akpp-header-id-dark').style.display === 'flex'
        ) {
          block.querySelector('.services-id-dark').style.display = 'flex';
          block.querySelector('.akpp-header-id-dark').style.display = 'none';
          block.querySelector('.repair-id-dark').style.display = 'none';
          block.querySelector('.diagnostic-id-dark').style.display = 'none';
        } else {
          openBlock.style.top = '-200%';
        }
      });
    });

    companyHeadercl.forEach((cl) => {
      console.log('Клик по companyHeader');
      cl.addEventListener('click', () => {
        console.log('Клик по companyHeader');
        const openBlock = block.querySelector('.open-block-header-id-dark');
        if (openBlock) {
          openBlock.style.display = 'flex';
        } else {
          console.error('Элемент .open-block-header-id не найден внутри блока');
        }

        if (openBlock.style.top !== '128px') {
          console.log('Q');
          openBlock.style.top = '128px';
          block.querySelector('.services-id-dark').style.display = 'none';
          block.querySelector('.akpp-header-id-dark').style.display = 'flex';
          block.querySelector('.repair-id-dark').style.display = 'none';
          block.querySelector('.diagnostic-id-dark').style.display = 'none';
        } else if (
          openBlock.style.top === '128px' &&
          block.querySelector('.services-id-dark').style.display === 'flex'
        ) {
          console.log('12');
          block.querySelector('.akpp-header-id-dark').style.display = 'flex';
          block.querySelector('.services-id-dark').style.display = 'none';
          block.querySelector('.repair-id-dark').style.display = 'none';
          block.querySelector('.diagnostic-id-dark').style.display = 'none';
        } else if (openBlock.style.top === '128px') {
          console.log('123');
          openBlock.style.top = '-200%';
          block.querySelector('.repair-id-dark').style.display = 'none';
          block.querySelector('.diagnostic-id-dark').style.display = 'none';
        }
      });
    });

    remontButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        console.log('Кнопка ремонта нажата');
        block.querySelector('.zamena-id-dark').classList.remove('menu-active-dark');
        const isActive = btn.classList.contains('menu-active-dark');
        const zamenaElement = block.querySelector('.zamena-id-dark');
        if (zamenaElement) {
          const spanInZamena = zamenaElement.querySelector('span');
          if (spanInZamena) {
            spanInZamena.style.color = 'white';
          }
        }
        if (isActive) {
          btn.classList.remove('menu-active-dark');

          const span = btn.querySelector('span');
          if (span) {
            span.style.color = '';
          }

          // Скрываем ремонты и показываем диагностики
          repairs.forEach((r) => {
            r.style.display = 'none';
          });
          diagnostics.forEach((d) => {});
        } else {
          // Удаляем активность у всех кнопок
          remontButtons.forEach((b) => {
            b.classList.remove('menu-active-dark');
            const otherSpan = b.querySelector('span');
            if (otherSpan) {
              otherSpan.style.color = '';
            }
          });

          // Активируем текущую кнопку
          btn.classList.add('menu-active-dark');

          const span = btn.querySelector('span');
          if (span) {
            span.style.color = 'white';
          }

          // Показываем ремонты, скрываем диагностики
          repairs.forEach((r) => {
            r.style.display = 'flex';
          });
          diagnostics.forEach((d) => {
            d.style.display = 'none';
          });
        }
      });
    });

    zamenButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        console.log('1');

        const span = btn.querySelector('span');
        const isActive = btn.classList.contains('menu-active-dark');

        const diagnosticElement = block.querySelector('.diagnostic-id-dark');
        const repairElement = block.querySelector('.repair-id-dark');

        if (diagnosticElement && diagnosticElement.style.display === 'flex') {
          btn.classList.remove('menu-active-dark');
          console.log('333');

          repairElement.style.display = 'none';
          diagnosticElement.style.display = 'none';

          if (span) {
            span.style.color = '';
          }

          // Дополнительно можно сбросить стили у других кнопок, если нужно
          remontButtons.forEach((b) => {
            b.classList.remove('menu-active-dark');
            const otherSpan = b.querySelector('span');
            if (otherSpan) otherSpan.style.color = '';
          });
          zamenButtons.forEach((b) => {
            b.classList.remove('menu-active-dark');
            const otherSpan = b.querySelector('span');
            if (otherSpan) otherSpan.style.color = '';
          });
        } else {
          console.log('4');

          repairElement.style.display = 'none';
          diagnosticElement.style.display = 'flex';

          // Удаляем активность у всех кнопок
          remontButtons.forEach((b) => {
            b.classList.remove('menu-active-dark');
            const otherSpan = b.querySelector('span');
            if (otherSpan) otherSpan.style.color = '';
          });
          zamenButtons.forEach((b) => {
            b.classList.remove('menu-active-dark');
            const otherSpan = b.querySelector('span');
            if (otherSpan) otherSpan.style.color = '';
          });

          // Активируем текущую кнопку
          btn.classList.add('menu-active-dark');
          if (span) {
            span.style.color = 'white';
          }
        }
      });
    });

    if (companyHeadercl.length > 0) {
      companyHeadercl.forEach((cl) => {
        console.log('12');
        cl.addEventListener('click', () => {
          const openBlock = block.querySelector('.open-block-header-id-dark');
          if (isToggled) {
            console.log('12');
            cl.style.top = '-200%';
            akppHeader.style.display = 'flex';
            services.style.display = 'none';
            isToggled = !isToggled;
          }
          if (!isToggled) {
            akppHeader.style.display = 'none';
          } else {
            if (getComputedStyle(akppHeader).display === 'none') {
              akppHeader.style.display = 'flex';
              services.style.display = 'none';
            } else {
              akppHeader.style.display = 'none';
              services.style.display = 'flex';
            }
          }
        });
      });
    }
  });
});
