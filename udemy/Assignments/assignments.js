let country = 'South Korea';
let continent = 'Asia';
let population = '45 million';

console.log(country);
console.log(continent);
console.log(population);

// Data Types
let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// let, const, and var
language = 'Korean';

// Basic Operators
population = 45000000;
console.log(Math.round(population / 2));
console.log(population++);
let finlandPopulation = 6000000;
console.log(population > finlandPopulation);
let averagePopulation = 33000000;
console.log(population <= averagePopulation);

const description =
	country +
	' ' +
	'is in' +
	' ' +
	continent +
	', and its' +
	' ' +
	population +
	' ' +
	'people speak in' +
	' ' +
	language;
console.log(description);

// multi line string을 만들 때는 `` (백틱을 사용하는것이 유용하다).
console.log(`string
with
multiple lines`);

// Strings and Template Literals

const newDescription = `${country} is in ${continent}, and its ${population} people speak in ${language}`;
