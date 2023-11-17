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

async function fetchFruits() {
	const banana = await getBanana();
	const apple = await getApple();
	return [banana, apple];
}

fetchFruits().then(console.log);
