const fruits = ['banana', 'strawberry', 'grape', 'strawberry'];

// 고차함수를 사용해서
fruits.forEach(function (value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
});

// 조건에 맞는 (콜백함수) 아이템을 찾을 때

const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];

let found = products.find((value) => {
  return value.name === '🍪';
});

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
let result = products.some((item) => item.name === '🥠');

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪');

console.clear();

console.clear();

// Map: 배열의 각 item마다 원하는 값으로 return 해줌
let nums = [1, 2, 3, 4, 5];
result = nums.map((item) => [1, 2]);
console.log(result);

// Flatmap: 중첩된 배열을 쫘악 펴줌
nums = [1, 2, 3, 4, 5];
result = nums.flatMap((item) => [1, 2]);
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [1, 3, 0, 10, 4];
result = numbers.sort((a, b) => b - a);
console.log(result);

//reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
