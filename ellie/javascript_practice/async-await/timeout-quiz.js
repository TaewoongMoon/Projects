function runInDelay(callback, seconds) {
	if (seconds < 0) {
		throw new Error('0초보다 작습니다');
	} else {
		setTimeout(callback, seconds * 1000);
	}
}

runInDelay(() => {
	console.log('2초뒤에 되는지 확인해봅시다');
}, 2);
