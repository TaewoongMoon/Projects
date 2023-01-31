// 내부 정보를 은닉하고 공개 함수를 통한 데이터 조작을 위해
// 클로저 함수 사용
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
