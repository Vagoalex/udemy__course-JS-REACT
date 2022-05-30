let user = { name: 'John', email: 'asdasd@rambler.ru' };

let map = new WeakMap();
map.set(user, 'data');
user = null;

// console.log(user);
// console.log(map);

const cache = new WeakMap();
function cacheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now());
	}

	return cache.get(user);
}

let elena = { name: 'Elena', age: 36 };
let max = { name: 'max', age: 34 };
let fredd = { name: 'Fredd', age: 12 };
let peter = { name: 'Peter', age: 26 };

console.log(cacheUser(elena));
console.log(cacheUser(max));
console.log(cacheUser(fredd));
console.log(cacheUser(peter));
