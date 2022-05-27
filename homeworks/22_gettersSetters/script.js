'use strict';

const person = {
  name: 'John',
  age: 36,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num;
  },
};

console.log(person.userAge);

person.userAge = 5;
console.log(person);
