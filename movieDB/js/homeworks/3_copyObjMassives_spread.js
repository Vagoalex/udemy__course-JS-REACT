'use strict';

// ==================== COPY\CLONE OBJECTS ====================
let a = 5,
	b = a;

b = b + 5;

// console.log(a);
// console.log(b);

const obj = {
	a: 5,
	b: 1,
};

function copy(mainObj) {
	const objCopy = {};

	for (let key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}
const copyright = copy(obj);
// console.log(copyright);

const numbers = {
	c: 7,
	d: 0,
	e: 15,
};

const objectAssigned = Object.assign(numbers, obj);
objectAssigned.a = 15;
// console.log(obj);
// console.log(objectAssigned);

const clone = Object.assign({}, numbers);
clone.c = 23;
// console.log(clone);
// console.log(numbers);

// ==================== COPY\CLONE MASSIVES ====================

const oldArray = [1, 3, 4, 6];
const newArray = oldArray.slice();

newArray.push(14);
// console.log(oldArray);
// console.log(newArray);

// ==================== SPREAD MASSIVES\OBJECTS  ====================

const video = ['youtube', 'rutube', 'vimeo'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

const num = [2, 6, 8];

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

// log(...num);

const array = ['name', 'surname', 'email', 'old'];

const newArray2 = [...array];

const objectNew = {
	one: 1,
	two: 2,
	three: 3,
};

const newObject = { ...objectNew };

// console.log(newObject);

const userObj = {
	name: 'Peter',
	age: 23,
	surname: 'Johnson',
};

const userVasiliy = { ...userObj };
userVasiliy.name = 'Vasiliy';
userVasiliy.age = 20;
userVasiliy.surname = 'Petrov';
// console.log(userObj);
// console.log(userVasiliy);

// TASK 1 OBJECTS  ========================================
const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%',
		},
		exp: '1 month',
	},
	showAgeAndLangs: function (plan) {
		// Мне 29 и я владею языками: RU ENG
		const { age } = plan;
		const { languages } = plan.skills;
		let result = `Мне ${age} и я владею языками: `;
		for (let item of languages) {
			result += `${item.toUpperCase()} `;
		}
		return result;
	},
};
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
	// 1 month
	const { exp } = plan.skills;
	return exp;
}
// console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	// Язык js изучен на 20%
	// Язык php изучен на 10%
	const { programmingLangs } = plan.skills;
	let result = '';
	for (let lang in programmingLangs) {
		result += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`;
	}
	return result;
}
// console.log(showProgrammingLangs(personalPlanPeter));

// 2 TASK MASSIVES ========================================
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
	// Семья состоит из: Peter Ann Alex Linda
	// Если пустой, то - Семья пуста
	let str = '';
	arr.length === 0 ? (str = 'Семья пуста') : (str = 'Семья состоит из: ');

	arr.forEach(member => (str += `${member} `));

	return str;
}
// console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
	// перебор и вывод городов в нижнем регистре
	return arr.forEach(city => console.log(city.toLowerCase()));
}
// standardizeStrings(favoriteCities);

const someString = 'This is some strange string';
function reverse(str) {
	if (typeof str !== 'string') {
		return 'Ошибка!';
	}
	return str.split('').reverse().join('');
}
// console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
function availableCurr(arr, missingCurr) {
	let result = '';
	arr.length === 0 ? (result = 'Нет доступных валют') : (result = 'Доступные валюты:\n');

	for (let item of arr) {
		if (item === missingCurr) {
			continue;
		}
		result += `${item}\n`;
	}
	return result;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
