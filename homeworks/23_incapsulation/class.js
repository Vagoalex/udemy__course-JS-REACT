'use strict';

// class
class User {
  constructor(name, age) {
    this._userName = name;
    this._userAge = age;
  }

  #surname = 'Приват';

  say = () => {
    console.log(
      `Имя пользователя ${this._userName} ${this.#surname}, возраст ${
        this._userAge
      }`
    );
  };

  get age() {
    return this._userAge;
  }

  set age(num) {
    if (typeof num === 'number' && num > 0 && num < 100) {
      this._userAge = num;
    } else {
      console.log('Недопустимое значение');
    }
  }
}

const Ivan = new User('Иван', 25);
Ivan.name = 'Петя';
Ivan.userAge = 67;
Ivan.age = 67;
console.log(Ivan);
Ivan.say();
console.log(Ivan.age);
Ivan.age = 50;
Ivan.say();
