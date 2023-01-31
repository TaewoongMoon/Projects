// 동결! Object.freeze
// (단, 얕은 꽁꽁 상태)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };

// 동결된 객체는 변경 및 추가가 불가능하다
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);

// ellie는 얕은 복사이기 때문에 ellie를 참조하는 건 freeze 불가능

// 밀봉! Object seal (값의 수정 가능, 추가 X, 삭제 X, 속성 재정의 X)
const cat = { ...dog };
Object.seal(cat);
cat.name = '냐옹이';
console.log(cat.name);

// 객체 동결되었는지 안되었는지 확인할 수 있는 함수
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions
const tiger = { name: 'tiger' };
Object.preventExtensions(tiger);

Object.isExtensible;
