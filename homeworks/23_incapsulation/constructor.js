'use strict';

// constructor
function User(name, age) {
  let userName = name;
  let userAge = age;

  this.say = function () {
    console.log(`Имя пользователя ${userName}, возраст ${userAge}`);
  };

  this.getAge = function () {
    return userAge;
  };
  this.setAge = function (num) {
    if (typeof num === 'number' && num > 0 && num < 100) {
      userAge = num;
    } else {
      console.log('Недопустимое значение');
    }
  };
}

const Ivan = new User('Иван', 25);
Ivan.name = 'Петя';
Ivan.age = 67;
Ivan.say();
console.log(Ivan.getAge());
Ivan.setAge(30);
Ivan.setAge(300);
Ivan.say();
