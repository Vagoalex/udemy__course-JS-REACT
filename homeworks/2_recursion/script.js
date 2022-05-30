function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

function powRecursive(x, n) {
	if (n === 1) {
		return x;
	} else {
		return x * powRecursive(x, n - 1);
	}
}
// console.log(powRecursive(2, 4));

// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));

let students = {
	js: [
		{
			name: 'John',
			progress: 100,
		},
		{
			name: 'Ivan',
			progress: 60,
		},
	],

	html: {
		basic: [
			{
				name: 'Peter',
				progress: 20,
			},
			{
				name: 'Anna',
				progress: 18,
			},
		],
		pro: [
			{
				name: 'Sam',
				progress: 10,
			},
		],
	},
};

function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length;

			course.forEach(person => (total += person.progress));
		} else if (typeof course === 'object') {
			Object.values(course).forEach(obj => {
				students += obj.length;

				obj.forEach(person => (total += person.progress));
			});
		}
	}
	console.log(total, students);
	return total / students;
}

function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}

		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArray = getTotalProgressByRecursion(subData);
			total[0] += subDataArray[0];
			total[1] += subDataArray[1];
		}
		return total;
	}
}

// console.log(getTotalProgressByIteration(students));
// const result = getTotalProgressByRecursion(students);
// console.log(result[0] / result[1]);

// TASK FACTORIAL ===============================

function factorial(n) {
	if (typeof n !== 'number' || n % 1 !== 0) {
		return 'Error!';
	} else if (n <= 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(1)); // 1
console.log(factorial(-5)); // 1
console.log(factorial(1.5)); // Error
console.log(factorial('5')); // Error
console.log(factorial(2)); // 2! = 2* 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); //  4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
