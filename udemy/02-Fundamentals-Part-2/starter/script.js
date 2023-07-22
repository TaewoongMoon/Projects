'use strict';

function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} people and its capital city is 
    ${capitalCity}`;
}

const southKorea = describeCountry('South Korea', '50 million', 'Seoul');

function percentageOfWorld1(population) {
	return `${(population / 7900) * 100}%`;
}

const percentageOfWorld2 = function (population) {
	return `${(popluation / 7900) * 100}%`;
};

const percentageOfWorld3 = (population) => `${(population / 7900) * 100}%`;

function describePopulation(country, population) {
	const countryPercentage = percentageOfWorld1(population);
	return `${country} has ${population}, which is about ${countryPercentage} of the world`;
}

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
