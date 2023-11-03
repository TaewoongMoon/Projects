// iterable 하다는건 순회가 가능하다는거고
// iterable한 데이터 구조는 [Symbol.iterator]()라는 함수를 호출했을 때
// next()함수가 호출되는 iterator를 반환한다.

const array = [1, 2, 3];
for (const item of array) {
	console.log(item);
}

const object = { first: 'key', second: 'key2' };

for (let value in object) {
	console.log(value);
}

const iterator = array.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
