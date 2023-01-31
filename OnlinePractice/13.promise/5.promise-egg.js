function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.resolve(`🐓`);
}

getChicken() //
  .then((chicken) => fetchEgg(chicken))
  .then((friedEgg) => fryEgg(friedEgg))
  .then((finalVersion) => console.log(finalVersion));
