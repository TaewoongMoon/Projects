const map = new Map([
  ['key1', 'π'],
  ['key2', 'π'],
]);

// μ¬μ΄μ¦ νμΈ
console.log(map.size);

// μ‘΄μ¬νλμ§ νμΈ
console.log(map.has('key1'));
console.log(map.has('key6'));

//μν
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
//μ°ΎκΈ°
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));
// μΆκ°
map.set('key3', 'π₯');
//μ­μ 
map.delete('key3');
// μ λΆμ­μ 
map.clear();
