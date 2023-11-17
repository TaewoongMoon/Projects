function fetchEgg(chicken) {
	return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
	return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
	return Promise.reject(new Error('can not find 🐓'));
}

async function fetchChicken() {
	const chicken = await getChicken().catch(() => '🐓');
	const eggOne = await fetchEgg(chicken);
	const eggTwo = await fryEgg(eggOne);
	return eggTwo;
}

fetchChicken().then(console.log);
