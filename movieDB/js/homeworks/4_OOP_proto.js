'use strict';

const str = 'stringMF';
const strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

const soldier = {
	health: 400,
	armor: 250,
};

const john = {
	health: 100,
};

// john.__proto__ = soldier;
Object.setPrototypeOf(john, soldier);
// console.log(john.armor);

const peter = Object.create(soldier);
// console.log(peter.armor);

// TASK 1 ===================================================
// - У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// - Основная задача - это написать функцию isBudgetEnough, которая будет возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.

/// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов,высота, бюджет или подставляется
const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5,
		},
		{
			width: 15,
			length: 7,
		},
		{
			width: 20,
			length: 5,
		},
		{
			width: 8,
			length: 10,
		},
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000,
};

function isBudgetEnough(data) {
	const { shops, height, moneyPer1m3, budget } = data;
	const goodResult = 'Бюджета достаточно';
	const badResult = 'Бюджета недостаточно';

	const totalArea = shops.map(shops => shops.width * shops.length).reduce((accum, shop) => accum + shop);
	const totalVolumeMoney = totalArea * height * moneyPer1m3;
	if (budget - totalVolumeMoney >= 0) {
		return goodResult;
	} else {
		return badResult;
	}
}
// console.log(isBudgetEnough(shoppingMallData));

// TASK 2 ===================================================
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Parker'];

function sortStudentsByGroups(arr) {
	const sortedArray = arr.sort();
	let first = [],
		second = [],
		third = [],
		last = [];

	for (let i = 0; i < sortedArray.length; i++) {
		if (i < 3) {
			first.push(sortedArray[i]);
		} else if (i < 6) {
			second.push(sortedArray[i]);
		} else if (i < 9) {
			third.push(sortedArray[i]);
		} else {
			last.push(sortedArray[i]);
		}
	}

	return [first, second, third, `Оставшиеся студенты: ${last.length === 0 ? '-' : last.join(', ')}`];
}
console.log(sortStudentsByGroups(students));
