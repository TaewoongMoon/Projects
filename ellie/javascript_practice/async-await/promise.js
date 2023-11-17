// Promise object를 만들어서 비동기적인 실행의 실패 혹은 성공을 표현할 수 있다.

function runInDelay(seconds) {
	return new Promise((resolve, reject) => {
		if (!seconds || seconds < 0) {
			reject(new Error('0보다 큰 숫자를 기입해주세요.'));
		}
		setTimeout(resolve, seconds * 1000);
	});
}

runInDelay()
	.then(() => console.log('성공'))
	.catch((error) => console.log(error))
	.finally(() => console.log('상관없다'));
