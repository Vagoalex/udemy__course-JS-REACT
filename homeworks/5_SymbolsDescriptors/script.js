'use strict';

// SYMBOLS ==============================

const id = Symbol('id');

const userObject = {
	name: 'Peter',
	surname: 'Johnson',
};

userObject[id] = 1;

// console.log(userObject);

// for (const key in userObject) {
// 	console.log(key);
// }

// console.log(Object.getOwnPropertySymbols(userObject));

// DESCRIPTORS and OBJECT METHODS ==============================

const user = {
	name: 'Alex',
	surname: 'Johnson',
	showMyPublicName: function () {
		console.log(`Меня зовут ${this.name} ${this.surname}`);
	},
	showMyPublicBirthday: function () {
		console.log(`Я родился ${this?.birthday}`);
	},
};

for (let i = 0; i < 1; i++) {
	const birthday = prompt('Введите Вашу дату рождения в формате день/месяц/год', '');
	if (birthday.length < 8) {
		i--;
	} else {
		Object.defineProperty(user, 'birthday', { value: birthday });
	}
}

console.log(user);
user.showMyPublicName();

// writable
// if (true) => свойство можно менять
// if (false) => свойство нельзя менять, только для чтения

// enumerable
// if (true) => свойство будет перебираться в цикле
// if (false) => для цикла свойство скрыто

// configurable
// if (true) => свойство можно удалить

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
Object.defineProperties(user, {
	showMyPublicName: { enumerable: false },
	showMyPublicBirthday: { enumerable: false },
});

console.log(Object.keys(user));
