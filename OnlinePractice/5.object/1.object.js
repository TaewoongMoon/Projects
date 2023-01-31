// Object literal {key: value}
// new Object()
// Object.create();

let apple = {
  name: 'apple',
  'hello-bye': '👍',
  0: 1,
  ['hello-bye1']: '👍',
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // dot notation
apple['hello-bye']; // 대괄호 표기법 bracket notation

apple.emoji = '🍅';

console.log(apple);
