'use strict';

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...args) => {
  return (x) => args.reduceRight((result, func) => func(result), x);
};

const discount = compose(normalizePrice, divide100, multiply20);

console.log(discount(200));
