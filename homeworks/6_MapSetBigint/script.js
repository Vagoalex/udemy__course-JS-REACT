'use strict';

// MAP =======================================
const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 10000, 15000];

const map = new Map([[{ paper: 200 }, 1000]]);

// map.set(shops[0], 5000).set(shops[1], 10000).set(shops[2], 15000);

shops.forEach((shop, index) => {
	map.set(shop, budget[index]);
});

// console.log(map.get(shops[0]));

// console.log(map);

const arrayMap = Array.from(map);
// arrayMap.forEach((item) => console.log(item));

const goods = [];

for (let shop of map.keys()) {
	goods.push(Object.keys(shop)[0]);
}

// console.log(goods);

// map.forEach((value, key, map) => {
// 	console.log(value, key);
// });

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

const userMap = new Map(Object.entries(user));
// console.log(userMap);

// SET =======================================

const students = ['Alex', 'John', 'Peter', 'John', 'Alex', 'John'];

const set = new Set(students);
set.add('Parker');

set.delete('John');

if (set.has('Parker')) {
	set.delete('Parker');
}

console.log(set);
console.log(set.size);

function uniqueArray(array) {
	return Array.from(new Set(array));
}

console.log(uniqueArray(students));

// *BIGINt =======================================

const bigint = 1221302149214219371298781274821871284218412847124n;

const sameBigInt = BigInt(1221302149214219371298781274821871284218412847124);

console.log(typeof sameBigInt);
