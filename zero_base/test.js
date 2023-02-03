const originalArray = ['banana', 'strawberry', 'grape', 'strawberry'];

const newArray = originalArray.map((fruits) =>
	fruits === 'strawberry' ? 'kiwi' : fruits,
);
console.log(newArray);

for (let i = 0; i < originalArray.length; i++) {
	const newArray = [];
	if (originalArray[i] === 'strawberry') {
		newArray.push('kiwi');
	} else {
		newArray.push(originalArray[i]);
	}
}

function fruitsCount(array, fruit) {
	const countArray = array.filter((data) => data === fruit);
	return countArray.length;
}
