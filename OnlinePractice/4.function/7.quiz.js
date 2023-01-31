// 주어진 숫자 만큼 0 부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
const iterateNumber = (num) => num;
const iterateNumberTwice = (num) => num * 2;

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    let result = action(i);
    if (i < max - 1) {
      console.log(result);
      continue;
    } else if (i >= max - 1) {
      console.log(result);
      return;
    }
  }
}

iterate(5, iterateNumberTwice);
