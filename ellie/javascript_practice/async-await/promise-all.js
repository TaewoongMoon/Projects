function getApple() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('🍎');
		}, 3000);
	});
}

function getBanana() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('🍌');
		}, 3000);
	});
}

const fruitList = [];

getApple() //
	.then((apple) =>
		getBanana() //
			.then((banana) => {
				return [apple, banana];
			}),
	)
	.then(console.log);
