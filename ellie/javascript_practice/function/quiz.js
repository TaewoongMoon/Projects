// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배를 다 출력하고 싶음

let maxNum = 5;

function iterate(max, action) {
	for (let i = 0; i <= max; i++) {
		action(i);
	}
}

function valuePrint(maxNum) {
	console.log(maxNum);
}

iterate(maxNum, valuePrint);
