var addCoffee = function (name) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(name);
		}, 500);
	});
};

var coffeeMaker = async function () {
	var coffeeList = '';
	var _addCoffee = async function (name) {
		coffeeList += (coffeeList ? ',' : '') + (await addCoffee(name));
		return coffeeList;
	};

	let result = await _addCoffee('에스프레소');
	console.log(result);
};

coffeeMaker();
