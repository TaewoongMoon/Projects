// 동결! 추가 X, 삭제 X, 쓰기 X, 단 얕은 꽁꽁 얼림

const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: 'ellie' };

Object.freeze(dog);

// Seal 값의 수정은 가능, 키 삭제 및 쓰기 불가능
