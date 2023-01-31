const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

//순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
//찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));
// 추가
map.set('key3', '🥝');
//삭제
map.delete('key3');
// 전부삭제
map.clear();
