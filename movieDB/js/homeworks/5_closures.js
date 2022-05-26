'use strict';

let number = 4;

function logNumber() {
	console.log(number);
}

number = 10;

// logNumber();

number = 17;

// logNumber();

// Каждый вызов функции создает новое лексическое окружение со своими локальными переменными и с ссылкой на предыдущие глобальные переменные, если их не имеется в функции, но они там вызываются.

function createCounter() {
	let counter = 0;

	const myFunction = function () {
		counter = counter + 1;
		return counter;
	};

	return myFunction;
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
