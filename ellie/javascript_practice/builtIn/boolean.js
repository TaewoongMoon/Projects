// Boolean은 원시값 혹은 객체 두가지 방법으로 만들 수 있다.

const isTrue = true;
const isTrueTwo = new Boolean(true);

console.log(isTrueTwo.valueOf());

// Boolean 객체의 중요한 부분! Falsy vs truthy value들 구분하는것이 중요함

// Falsy: -0, 0, '', undefined, null, false(boolean),NaN,

console.log(Number.EPSILON);
