/**
 * 현재 함수와 함수를 둘러싸고 있는 lexcial environment를 기억하고있는 상태
 * 내부함수에서 외부함수를 참조할 수 있는 상태를 closure
 */

// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    return count;
  }
  return increase;
}

const func1 = makeCounter();

function loop() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
