'use strict';

// Strings and Numbers

// функция для вычисления объема и площади полой поверхности куба без a**b
function calculateVolumeAndArea(num) {
	const isNotValid = typeof num === 'string' || num <= 0 || num % 1;
	if (isNotValid) {
		return 'При вычислении произошла ошибка';
	} else {
		const volume = num * num * num;
		const area = num * num * 6;
		return `Объем куба:${volume}, площадь всей поверхности:${area}`;
	}
}

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('5'));
// console.log(calculateVolumeAndArea(-15));

// Функция для определения номера купе по заданному номеру места.
function getCoupeNumber(numPlace) {
	const rainCar = {
		1: [1, 2, 3, 4],
		2: [5, 6, 7, 8],
		3: [9, 10, 11, 12],
		4: [13, 14, 15, 16],
		5: [17, 18, 19, 20],
		6: [21, 22, 23, 24],
		7: [25, 26, 27, 28],
		8: [29, 30, 31, 32],
		9: [33, 34, 35, 36],
	};
	const isNotValid = typeof numPlace === 'string' || numPlace < 0 || numPlace % 1;
	const notExistNumber = numPlace === 0 || numPlace > 36;
	let result = 0;

	if (isNotValid) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	}
	if (notExistNumber) {
		return 'Таких мест в вагоне не существует';
	}
	for (let num in rainCar) {
		rainCar[num].forEach(element => {
			if (element === numPlace) {
				result = num;
			}
		});
	}
	return result;
}

// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7));
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber('Hello'));

// Функция, которая принимает целое число и возвращает время в нужном формате строки
function getTimeFromMinutes(num) {
	const isNotValid = typeof num === 'string' || num < 0 || num % 1 || num > 600;

	if (isNotValid) {
		return 'Ошибка, проверьте данные';
	}

	const hours = Math.floor(num / 60);
	const minutes = num % 60;

	let str = '';

	switch (hours) {
		case 0:
			str = 'часов';
			break;
		case 1:
			str = 'час';
			break;
		case 2:
		case 3:
		case 4:
			str = 'часа';
			break;
		case 5:
		case 6:
			str = 'часов';
			break;

		default:
			str = 'часов';
			break;
	}
	return `Это ${hours} ${str} и ${minutes} минут`;
}

// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(550));
// console.log(getTimeFromMinutes(455));

// Найти максимальное число
function findMaxNumber(...args) {
	let max = 0;
	args.forEach(item => {
		const isNotValid = typeof item === 'string' || item < 0;
		if (isNotValid) {
			return 0;
		}
		if (item > max) {
			max = item;
		}
	});
	return max;
}

// console.log(findMaxNumber(1, 5, 77, 6.6, 11));

function fib(num) {
	// Todo function fib without recursion!
}
