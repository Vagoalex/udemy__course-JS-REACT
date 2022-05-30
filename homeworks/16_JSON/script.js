'use strict';

const person = {
  name: 'John',
  tel: '+798300182302',
  parents: {
    mother: 'Barbara',
    father: 'Luke',
  },
};

console.log(JSON.stringify(person)); // {"name":"John","tel":"+798300182302"}

const json = JSON.stringify(person);

console.log(JSON.parse(json)); // parsed

const clone = JSON.parse(JSON.stringify(person)); // глубокое копирование!
