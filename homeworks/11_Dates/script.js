'use strict';

const now = new Date();
// console.log(now.getFullYear() + '=> Year!');
// console.log(now.getMonth() + 1 + '=> Month!');
// console.log(now.getDate() + '=> Date!');
// console.log(now.getTime() / 60 / 60 / 1000 + '=> Time!');
// console.log(now.getDay() + '=> Day!');

// BENCHMARK
let start = new Date();
let array = [];

for (let i = 0; i < 1000000; i++) {
	let some = i ** 2;
	array.push(some);
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
console.log(array);
