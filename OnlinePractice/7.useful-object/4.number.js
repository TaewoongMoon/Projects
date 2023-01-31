const num = 123;
console.log(Number.isNaN(num));

// Number.isNan vs isNaN
// Number.isNan은 isNaN인지 자체를 비교함 === 과 비슷함

// isNaN은 NaN이고 cannot be converted into a number인지 비교를 함
console.log(Number.isNaN({})); // false
console.log(isNaN({})); // true

const num2 = 1234.123;
console.log(num2.toPrecision(5));

const num3 = 0.2 - 0.3 + 0.1;
console.log(num3 < Number.EPSILON);
