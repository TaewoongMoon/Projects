// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// || 대신에 ?? 연산자를 쓴다 (Null undefined인 경우에만 ?? 뒤에있는 값을 출력한다)
// || 의 문제점: falsy value들 다 포함 시킨다. 0, -0, '' 등

const num = 0;

console.log(num || '-1');
