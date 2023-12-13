function same(array1, array2) {
	if (array1.length !== array2.length) {
		return false;
	}

	for (let i = 0; i < array1.length; i++) {
		let correctIndex = array2.indexOf(array1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		array2.splice(correctIndex, 1);
	}
	return true;
}

// Sliding Window Pattern
// Naive Pattern
function maxSubarraySum(arr, num) {
	if (num > arr.length) {
		return null;
	}
	let max = -Infinity;
	for (let i = 0; i < array.length - num + 1; i++) {
		let temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}

// frequencyCounter problem
function sameFrequency(integer1, integer2) {
	// good luck. Add any arguments you deem necessary.
	const string1 = String(integer1);
	const string2 = String(integer2);
	if (string1.length !== string2.length) {
		return false;
	}
	const frequencyCounter1 = {};
	const frequencyCounter2 = {};
	for (const el of string1) {
		frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
	}
	for (const el of string2) {
		frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
	}
	for (const key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter1[key] !== frequencyCounter2[key]) {
			return false;
		}
	}

	return true;
}

// Duplicates
function areThereDuplicates(...variables) {
	const argsList = [...variables];
	const frequencyCounter = {};
	for (const el of argsList) {
		frequencyCounter[el] = (frequencyCounter[el] || 0) + 1;
	}

	for (const key in frequencyCounter) {
		if (frequencyCounter[key] > 1) {
			return true;
		}
	}
	return false;
}
