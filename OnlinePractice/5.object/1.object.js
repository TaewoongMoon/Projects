// Object literal {key: value}
// new Object()
// Object.create();

let apple = {
  name: 'apple',
  'hello-bye': 'π',
  0: 1,
  ['hello-bye1']: 'π',
};

// μμ±, λ°μ΄ν°μ μ κ·ΌνκΈ° μν΄μλ
console.log(apple.name); // dot notation
apple['hello-bye']; // λκ΄νΈ νκΈ°λ² bracket notation

apple.emoji = 'π';

console.log(apple);
