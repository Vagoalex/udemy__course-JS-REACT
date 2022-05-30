const salaries = {
	john: 500,
	mark: 2000,
	peter: 3500,
	ann: 5000,
};

salaries[Symbol.iterator] = function () {
	return {
		current: this.john,
		last: this.ann,

		next() {
			if (this.current < this.last) {
				this.current += 500;
				return { done: false, value: this.current };
			} else {
				return { done: true };
			}
		},
	};
};

for (let item of salaries) console.log(item);
