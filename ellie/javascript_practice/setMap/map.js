const map = new Map([
	['key1', '🍎'],
	['key2', '🍌'],
]);
// 사이즈 확인
console.log(map.size);
// 존재하는지 확인
console.log(map.has('key1'));
// 순회(iterable)
map.forEach((value, key) => console.log(value, key));
console.log(map.keys());
console.log(map.values());
// 찾기

// 추가

// 삭제
