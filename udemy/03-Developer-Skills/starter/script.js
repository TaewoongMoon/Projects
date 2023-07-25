// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const x = 23;
if (x === 23) console.log(23, 46);

const temperatures = [2, 3, 4, 18, 29, 33, -46, 'error', 48, 99, 1];

function calcTemp(temps) {
	let maxTemps = temps[0];
	let minTemps = temps[0];

	for (let i = 1; i < temperatures.length; i++) {
		if (typeof temps[i] !== 'number') continue;
		if (maxTemps < temps[i]) maxTemps = temps[i];
		if (minTemps > temps[i]) minTemps = temps[i];
	}
	return maxTemps - minTemps;
}

console.log(calcTemp(temperatures));
