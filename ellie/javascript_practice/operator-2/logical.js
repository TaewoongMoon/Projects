// falsy truthy 활용
// 조건문에 쓰이지 않고 그냥 변수에 담기거나 값으로 사용될 경우
// && 조건이 truthy일때 활용
// || 조건이 falsy일때 활용
// && 같은경우는 첫번째 값이 true여야만 2번째 문이 작동된다.
// || 같은경우는 첫번째 값이 false여야만 2번째 문이 작동된다.

// null or undefined 을 확인하는 동시에 프로그램을 죽이고 싶지않을때
let item;
const price = item && item.price;
console.log(price);
