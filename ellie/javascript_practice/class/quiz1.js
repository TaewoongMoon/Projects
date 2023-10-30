// 카운터를 만들기
// 0 이상의 값으로 초기화 한뒤 숫자를 하나씩 늘려가는 방향으로 진행

class Counter {
	#counterNumber;
	constructor(startValue) {
		if (isNaN(startValue) || startValue < 0) {
			this.#counterNumber = 0;
		} else {
			this.#counterNumber = startValue;
		}
	}
	increaseCounter() {
		this.#counterNumber++;
	}
	get value() {
		return this.#counterNumber;
	}
}

let increaseMachine = new Counter(3);

increaseMachine.increaseCounter();
increaseMachine.increaseCounter();

console.log(increaseMachine.value);
