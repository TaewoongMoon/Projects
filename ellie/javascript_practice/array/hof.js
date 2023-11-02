const number = [3, 8, 2, 4, 5];
//  a - b < 0, a should be placed before b
//  a - b > 0, b should be placed before a
number.sort((a, b) => {
	return a - b;
});

number.sort((a, b) => b - a);

// b - a < 0, a should be placed before b;
// b - a > 0, b should be placed before a;
