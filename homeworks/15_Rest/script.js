'use strict';

const log = (a, b, ...args) => {
  args.forEach((item) => console.log(item));
};

log(1, 2, 3, 5, 6, 7, 8, 9);

function calcOrDouble(num, basic = 2) {
  console.log(num * basic);
}

calcOrDouble(3);
