'use strict';

console.log('Запрос данных');

const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Подготовка данных...');
    console.log('Прошло 2 секунды');
    const product = {
      name: 'TV',
      price: '2000',
    };

    resolve(product);
  }, 2000);
});

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Прошло еще 2 секунды');
        product.status = 'order';
        resolve(product);
      }, 2000);
    });
  })
  .then((data) => {
    data.size = 'XL';
    return data;
  })
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Прошло еще 2 + 2 секунды');
        product.data = '20.02.2020';
        resolve(product);
      }, 2000);
    });
  })
  .then((data) => {
    const entries = Object.entries(data);

    entries.forEach((entry) => console.log(entry));
  })
  .catch((err) => console.error(err))
  .finally(() => console.log('Приложение запущено'));
