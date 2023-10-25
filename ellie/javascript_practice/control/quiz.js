// 퀴즈!
let num = Math.floor(Math.random() * 10);
if (num % 2 === 0) {
	console.log('👍');
	console.log('okay');
} else {
	console.log('👎');
	console.log('not okay');
}

num % 2 === 0 ? console.log('👍') : console.log('👎');

console.clear();
for (let i = 0; i < 5; i++) {
	console.log(i);
}
