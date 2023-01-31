const array = [1, 2, 3];

for (const item of array) {
  console.log(item);
}

// 수동적으로 iterator next()함수 호출해보기
const iterator = array.values();
console.log(iterator.next());
