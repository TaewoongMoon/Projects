// const multiple = {
// 	[Symbol.iterator]() {
// 		let num = 0;
// 		const max = 10;
// 		return {
// 			next: () => {
// 				return { value: num++ * 2, done: num > max };
// 			},
// 		};
// 	},
// };

function* multipleGeneator() {
	for (let i = 0; i < 10; i++) {
		yield i ** 2;
	}
}

const multiple = multipleGeneator();
let next = multiple.next();
console.log(next);
console.log(next);
