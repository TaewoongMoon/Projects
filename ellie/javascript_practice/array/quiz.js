// 퀴즈1. 배열안의 아이템을 다른 아이템으로 교체하기

const itemArray = ['banana', 'strawberry', 'grape', 'strawberry'];
function replaceItem(itemArray) {
	const newItem = [];
	for (let i = 0; i < itemArray.length; i++) {
		if (itemArray[i] === 'strawberry') {
			newItem.push('kiwi');
		} else {
			newItem.push(itemArray[i]);
		}
	}
	return newItem;
}

console.log(replaceItem(itemArray));

// 배열과 특정 요소를 전달받아서, 배열안에 해당 요소가 몇개 있는지 카운트하기
const itemArrayTwo = ['banana', 'kiwi', 'grape', 'kiwi'];
const inputItem = 'kiwi';

function itemCount(itemArray, inputItem) {
	let count = 0;
	for (let i = 0; i < itemArray.length; i++) {
		if (itemArray[i] === inputItem) {
			count++;
		}
	}
	return count;
}

console.log(itemCount(itemArrayTwo, inputItem));

// 배열 2개를 받아서 겹치는 아이템들만 새로운 배열로 반환. (fㅑ)
