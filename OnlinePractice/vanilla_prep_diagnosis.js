// number1 (currying 관련문제였는듯)
function add(num) {
	return function (num2) {
		return function (num3) {
			return num + num2 + num3;
		};
	};
}

const six = add(1)(2)(3);
const ten = add(2)(3)(5);
console.log(six, ten);

// number2

const data1 = { a: 1, b: 2, c: 5 };

function inverse(collection) {
	const result = {};
	for (data in collection) {
		stringKey = collection[data].toString();
		result[stringKey] = data;
	}
	return result;
}

const result1 = inverse(data1);
console.log(result1);
