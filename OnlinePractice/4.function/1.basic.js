function add(num1, num2) {
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

// 사용예제2
let lastName = '김';
let firstName = '지수';
let fullName = `${lastName}${firstName}`;
console.log(fullName);

function namingFunction(firstName, lastName) {
  return `${lastName}${firstName}`;
}
console.log(namingFunction(firstName, lastName));
