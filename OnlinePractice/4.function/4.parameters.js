// 매개변수의 기본값은 무조건 Undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default parameters a =1, b =1
function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}
add(1, 2, 3);

// Rest 매개변수 Rest parameters
function sum(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}
sum(1, 2, 3, 4, 5, 6);
