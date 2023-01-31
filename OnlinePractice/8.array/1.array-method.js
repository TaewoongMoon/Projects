// 함수 배열
// keyword: 기존 배열을 반환하는지 or 새로운 배열을 반환하는지 check

const fruits = ['apple', 'banana', 'grape'];

// 배열의 특정 아이템 위치를 찾을 때
console.log(fruits.indexOf('apple'));

// 배열안에 특정한 아이템이 있는지
console.log(fruits.includes('apple'));

// 추가 - 제일 뒤에
fruits.push('peach'); // 배열 자체를 수정(update)
console.log(fruits);
// 추가 - 제일 앞에 and returns the length of an array
let length = fruits.unshift('strawberry');
console.log(fruits);
