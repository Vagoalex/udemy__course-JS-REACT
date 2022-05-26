// 'use strict';

let inputRUB = document.querySelector('#rub'),
  inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', (e) => {
  const request = new XMLHttpRequest();
  //   request.open(method, src, async = true, login, password);
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-Type', 'application/json, charset=utf-8');
  request.send();

  // свойства:
  // status: 200, 300, 400, 500;
  // statusText: 'OK', 'Not Found';
  // readyState: 'done';
  // response

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      const convert = +inputRUB.value / data.current.usd;

      isNaN(convert)
        ? (inputUSD.value = 'Это не число!')
        : (inputUSD.value = '$' + convert.toFixed(2));
    } else {
      inputUSD.value = 'Что-то пошло не так';
    }
  });
});
