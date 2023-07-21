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
