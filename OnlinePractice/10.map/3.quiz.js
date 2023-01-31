// 주어진 배열에서 중복을 제거하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];

const uniqueFruits = new Set(fruits);
console.log([...uniqueFruits]);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function commonNumbers(set1, set2) {
  const result = new Set();
  set1.forEach((n) => {
    if (set2.has(n)) {
      result.add(n);
    }
  });
  return result;
}

let result = commonNumbers(set1, set2);
console.log(result);
