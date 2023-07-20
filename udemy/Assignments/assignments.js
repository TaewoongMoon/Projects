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
	git;
' ' + language;
console.log(description);

// multi line string을 만들 때는 `` (백틱을 사용하는것이 유용하다).
console.log(`string
with
multiple lines`);

// Strings and Template Literals

const newDescription = `${country} is in ${continent}, and its ${population} people speak in ${language}`;

// Equality Operators: ==vs. ===
const numNeighbours = Number(
	prompt('How many neighbour countries do your country have?'),
);

if (numNeighbours == 1) {
	console.log('Only 1 border');
} else if (numNeighbours > 1) {
	console.log('More than  1 border');
} else {
	console.log('No borders');
}

switch (language) {
	case 'chinese':
	case 'mandarin':
		console.log('Most number of native speakers');
		break;
	case 'spanish':
		console.log('2nd place in number of native speakers');
		break;
	case 'english':
		console.log('3rd place');
		break;
	case 'hindi':
		console.log('Number 4');
		break;
	case 'arabic':
		console.log('5th most spoken language');
		break;
	default:
		console.log('Great language too :D');
}
