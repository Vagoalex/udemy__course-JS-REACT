'use strict';
// Objects and Massives

// ===================== OBJECTS ===========================

function first() {
	setTimeout(() => {
		console.log(1);
	}, 1500);
}
function second() {
	console.log(2);
}

// first();
// second();

function learnJS(lang, callback) {
	console.log(`я учу ${lang}`);
	callback();
}

function doneLesson() {
	console.log(`Я прошел первый урок по этому языку`);
}

// learnJS('JavaScript', doneLesson);

// Деструктуризация

const options = {
	name: 'test',
	width: '1920',
	height: '1080',
	colors: {
		border: 'black',
		background: 'red',
	},
	lengthObj: function () {
		console.log(Object.keys(this).length);
	},
};
// options.lengthObj();

// let count = 0;
// for (let key in options) {
// 	if (typeof options[key] === 'object') {
// 		for (let item in options[key]) {
// 			console.log(`Свойство ${item} имеет значение ${options[key][item]}`);
// 			count++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		count++;
// 	}
// }
// console.log(count);
const lengthOptions = Object.keys(options).length;

const { name, width, height, colors } = options;
const { border, background } = colors;
// console.log(background);

// ===================== MASSIVES ===========================

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// без трансформации массива
// arr.forEach((item, index, array) => {
// 	console.log(`В массиве [${array}] есть число ${item} под индексом ${index}`);
// });

// возвращает новый массив.
const mappedArr = arr.map(item => 'Num: ' + item);
// console.log(mappedArr);

const filteredArr = arr.filter(item => item > 7);
// console.log(filteredArr);

const reducedArr = arr.reduce((accum, item) => accum + item);
// console.log(reducedArr);
