// error-handling (throw new Error) 같은 경우는 try-catch-finally 구문을 통해서 깔끔하게 처리한다.

function readFile(path) {
	throw new Error('에러가 발생하였습니다.');
	return '파일의 경로를 읽어보자';
}

function processFile(path) {
	let content;
	try {
		content = readFile(path);
	} catch (error) {
		console.log('error', error);
		content = '에러가 발생해서 해당 경로는 적용되지않음';
	}
	return content;
}

console.log(processFile('hi'));
