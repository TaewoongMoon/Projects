// [Symbol.iterator](): iterator(){ next(): {value, done}}

const multiple = {
	[Symbol.iterator]() {
		let num = 0;
		const max = 10;
		return {
			next: () => {
				return { value: num++ * 2, done: num > max };
			},
		};
	},
};

for (value of multiple) {
	console.log(value);
}
