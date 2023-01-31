// 퀴즈!
let num = 3;
// num의 숫자가 짝수이면 👍, 홀수라면 👎
// if
// ternary
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

num % 2 === 0 ? console.log('👍') : console.log('👎');
// 위의 식을 더 간단하게 하는방법
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
