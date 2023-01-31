const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);

console.log('store1', store1);
console.log('store2', store2);
pizza.price = 4;
console.log(store1, store2); // pizza값이 4로 변경됨
console.log(store1 === store2);

// 얕은 복사 Shallow copy- 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...) Object.assign

const red = [1, 2];
const blue = [1, 2];

console.log(red === blue);
