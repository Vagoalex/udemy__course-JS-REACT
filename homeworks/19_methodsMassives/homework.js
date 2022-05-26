'use strict';

// TASK 1 =======

const films = [
  {
    name: 'Titanic',
    rating: 9,
  },
  {
    name: 'Die hard 5',
    rating: 5,
  },
  {
    name: 'Matrix',
    rating: 8,
  },
  {
    name: 'Some bad film',
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((obj) => obj.rating >= 8);
}
console.log(showGoodFilms(films));

function showListOfFilms(arr) {
  let str = '';
  arr.map((obj) => (str += obj.name + ', '));
  return str.slice(0, -2);
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
  return arr.map((item, i) => {
    item.id = i;
    return item;
  });
}
// console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((film) => film.id || film.id === 0);
}
console.log(checkFilms(tranformedArray));

// TASK 2 =============================
const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((object) => object.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  return data.some((object) => object.amount < 0)
    ? data.reduce((acc, item) => acc + item.amount, 0)
    : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));
