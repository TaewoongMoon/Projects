// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)

// null 과 undefined 인 경우에만 조건문을 쓰고싶은경우
// Nullish Coalescing Operator

let num;
console.log(num || '-1');
console.log(num ?? '-1');

let item = { price: 10 };
const price = item || item.price;
console.log(price);
