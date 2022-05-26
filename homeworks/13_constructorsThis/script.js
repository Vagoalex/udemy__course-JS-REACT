'use strict';
// CONSTRUCTORS
const userBox = document.querySelector('.humans');

function User(name, surname, age, gender) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.sayHello = function () {
    const p = document.createElement('p');
    p.textContent = `Меня зовут ${this.surname} ${this.name}, мне ${this.age}. Я - ${this.gender}`;
    p.setAttribute('data-name', this.name);
    userBox.append(p);
  };
}

User.prototype.exit = function () {
  const users = userBox.querySelectorAll('p');
  users.forEach((user) => {
    if (user.getAttribute('data-name') === this.name) user.remove();
  });
  console.log(`Пользователь ${this.name} вышел из чата`);
};

const ivan = new User('Иван', 'Сидоров', 23, 'мужчина');
const fedor = new User('Федор', 'Кузнецов', 76, 'мужчина');
const maria = new User('Мария', 'Кури', 25, 'женщина');
const ann = new User('Анна', 'Палкина', 22, 'женщина');
const peter = new User('Питер', 'Паркер', 43, 'мужчина');

ivan.sayHello();
fedor.sayHello();
maria.sayHello();
ann.sayHello();
peter.sayHello();
// peter.exit();

// THIS

function showThis() {
  console.log(this); // WINDOW without use strict
}
// showThis();

function showLog(a, b) {
  console.log(this); // WINDOW without use strict
  function sum() {
    console.log(this); // WINDOW without use strict
    return this.a + this.b; // WINDOW without use strict
  }
  console.log(sum()); // NaN
}
// showLog(2, 3);
// 1) function declaration => this === window. 'use strict' this === undefined

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this); // obj
  },
};
// 2) object methods this == obj

function NewUser(name, surname, age, gender) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
}
const vasiliy = new NewUser('Василий', 'Терешков', 63, 'мужчина');
// 3) this в конструкторах классах это новый экземпляр объекта

function sayName(age) {
  console.log(this);
  console.log(this.name + ' ' + this.surname + ' ' + age);
}

const user = {
  name: 'John',
  surname: 'Smith',
};

sayName.call(user, 25);
sayName.apply(user, [25]);

const bindedUserObj = sayName.bind(user);
bindedUserObj(25);

function count(num) {
  return this * num;
}

const double = count.bind(2); // this === 2
const triple = count.bind(3); // this === 3
const fourth = count.bind(4); // this === 4
const fifth = count.bind(5); // this === 5
console.log(fifth(2)); // num === 2

// 4) Ручная привязка this через call\apply\bind

// =============================
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  console.log('Declaration', this); // => button
  this.classList.toggle('btn-declaration');
});

btn.addEventListener('click', () => {
  console.log('Arrow', this); // => window
});

// 5) У стрелочной функции нет своего контекста вызова, нет arguments

const someObj = {
  num: 'ЧИСЛО 5',
  some: true,
  sayNumber: function () {
    // контекст родителя - someObj
    const say = () => {
      console.log(this.num); // контекст у родителя, у sayNumber
    };
    say();
  },
};
someObj.sayNumber();

const doubleSum = (a) => a * 2;
