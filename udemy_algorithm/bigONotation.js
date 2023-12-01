// write a function that calculates the sum of all numbers from 1 up to some number n

// number 1 solution - for loop function

function addUpTo(n) {
	let total = 0;
	for (let i = 0; i <= n; i++) {
		total += i;
	}
	return total;
}

console.log(addUpTo(3));

// mathematical formula - n*(n+1) / 2
function addUptoTwo(n) {
	return (n * (n + 1)) / 2;
}

console.log(addUptoTwo(3));
