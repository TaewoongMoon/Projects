/*
 *
 * 아래 예시 코드에는 여러 번의 콘솔 출력문이 반복되고 있습니다.
 * 우리는 이 코드를 개선해보도록 하겠습니다.
 *
 * 어떤 배열이 주어졌을때, 특정 요소의 인덱스를 찾는 로직을 완성해보세요.
 *
 * TODO라고 표시되어 있는 부분의 내용을 채워주세요.
 * 
 * 단,배열의 forEach 메소드는 사용할 수 없는 점 참고해주세요.
 *
 *
 */
const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list2 = [8, 9, 10];

// [1차 예시] 반복문을 활용하여 구현한 코드입니다.
let indexOfTen = -1;

for (let i = 0; i < list1.length; i++) {
  if (list1[i] === 10) {
    indexOfTen = i;
  }
}

console.log(`list1에서 10은 ${indexOfTen}번쨰 인덱스에 있다.`);

let indexOfNine = -1;

for (let i = 0; i < list2.length; i++) {
  if (list2[i] === 9) {
    indexOfNine = i;
  }
}

console.log(`list2에서 9는 ${indexOfNine}번쨰 인덱스에 있다.`);

// [2차 예시] 함수를 만들어 개선해본 코드입니다.
function indexOf(list, target) {
  let result = -1;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      result = i;
    }
  }

  return result;
}

const indexOf10 = indexOf(list1, 10);
const indexOf9 = indexOf(list2, 9);

console.log(`list1에서 10은 ${indexOf10}번쨰 인덱스에 있다.`);
console.log(`list2에서 9는 ${indexOf9}번쨰 인덱스에 있다.`);

// [미션] 앞서 3단계에서 작성했던 forEach 함수를 TODO 부분에 활용하여
// indexOf 함수 내부의 코드를 개선해보세요.
function indexOf(list, target) {
  let result = -1;

  // TODO

  return result;
}

const index10 = indexOf(list1, 10);
const index9 = indexOf(list2, 9);

console.log(`list1에서 10은 ${index10}번쨰 인덱스에 있다.`);
console.log(`list2에서 9는 ${index9}번쨰 인덱스에 있다.`);
