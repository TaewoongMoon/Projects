function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

async function chickenOrder() {
  let chicken;
  try {
    chicken = await getChicken(chicken);
  } catch {
    chicken = '🐓';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}
const result = [];
chickenOrder().then((data) => {
  console.log(data);
});
