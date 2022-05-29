function calc() {
  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio;

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(`${selector} div`);
    elements.forEach((item) => {
      item.classList.remove(activeClass);

      if (item.getAttribute('id') === localStorage.getItem('sex')) {
        item.classList.add(activeClass);
      }
      if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        item.classList.add(activeClass);
      }
    });
  }
  initLocalSettings('#gender', 'calculating__choose-item_active');
  initLocalSettings(
    '.calculating__choose_big',
    'calculating__choose-item_active'
  );

  const calcTotal = () => {
    const femaleResult = Math.round(
      (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
    );
    const maleResult = Math.round(
      (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
    );

    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '0';
      return;
    }

    if (sex === 'female') {
      result.textContent = femaleResult > 0 ? femaleResult : '0';
    } else {
      result.textContent = maleResult > 0 ? maleResult : '0';
    }
  };
  calcTotal();

  const getStaticInformation = (parentSelector, activeClass) => {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        elements.forEach((element) => {
          element.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  };

  getStaticInformation('#gender', 'calculating__choose-item_active');
  getStaticInformation(
    '.calculating__choose_big',
    'calculating__choose-item_active'
  );

  const getDynamicInformation = (selector) => {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '2px solid red';
        input.style.borderRadius = '15px';
      } else {
        input.style.border = 'none';
        input.style.borderRadius = '';
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
      calcTotal();
    });
  };

  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');
}

module.exports = calc;
