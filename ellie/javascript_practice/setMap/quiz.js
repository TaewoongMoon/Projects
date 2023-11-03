const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];

const fruitList = new Set(fruits);

console.log([...fruitList]);

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
function findIntersection(set1, set2) {
	const set3 = new Set();
	set1.forEach((value) => {
		if (set2.has(value)) {
			set3.add(value);
		}
	});
	return set3;
}

console.log(findIntersection(set1, set2));
