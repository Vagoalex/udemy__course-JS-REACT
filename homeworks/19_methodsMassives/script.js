'use strict';

const names = ['ivan', 'peTer', 'JoAhn', 'lary', 'SAasha', 'MoRreovAer'];

const filtered = names.filter((name) => name.length <= 4);
console.log('filter => ', filtered);

const mapped = names.map((name) => {
  const lower = name.toLowerCase();
  return lower.slice(0, 1).toUpperCase() + lower.slice(1, lower.length);
});
console.log('map => ', mapped);

const cityArr = [4, 'Moscow', 'Berlin', 'Paris', 'London'];

cityArr.some((item) => typeof item === 'number')
  ? console.log('some => Тут число!')
  : console.log('some => Чисел нет, все окей');

cityArr.every((item) => typeof item === 'string')
  ? console.log('every => Все элементы - строки')
  : console.log('every => Оп-па, затерялось числецо');

const numbers = [1, 5, 29, 102, 324, 1231, 6, 646, 4353, 34, 324, 324];

const sum = numbers.reduce((accum, number) => accum + number, 0);

console.log(`reduce => Сумма = ${sum}`);

const someObj = {
  ivan: 'person',
  ann: 'person',
  dog: 'animal',
  cat: 'animal',
};

const humans = Object.entries(someObj)
  .filter((person) => person[1] === 'person')
  .map((person) => person[0]);
console.log(humans);
