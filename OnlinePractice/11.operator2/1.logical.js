// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

if (obj1 && obj2) {
  console.log('둘다 true');
}

// 활용예
// 조건이 truthy 일때 && 무언가를 해야할 경우
// 조건이 falsy 일때 || 무언가를 해야할 경우

// null 또는 undefined인 경우를 확인할때
let item = { price: 10 };
const price = item && item.price;
console.log(price);

// default parameter vs || 단축평가
// default parameter: undefined인 경우나 전달하지 않을경우만 default parameter 발동
// ||: falshy한 값들 전부다 배제 (0, -0, null, undefined, '')

console.log(false || false);
