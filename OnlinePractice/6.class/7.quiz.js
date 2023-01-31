// 카운터를 만들기
// 0이상의 값으로 초기화 한뒤 하나씩 증가를 시킬 수 있는 카운터 만들기
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increase() {
    return this.#value++;
  }
}

const counter = new Counter(0);
counter.increase();
counter.increase();

console.log(counter.value);
