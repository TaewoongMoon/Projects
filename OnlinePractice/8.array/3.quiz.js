// quiz 1
const temp = ['🍌', '🍓', '🍇', '🍓'];

function fruitsChanger(fruits) {
  const result = fruits.map((item) => {
    if (item === '🍓') {
      return '🥝';
    } else {
      return item;
    }
  });
  return result;
}

let finalResult = fruitsChanger(temp);
console.log(finalResult);

// quiz2
function fruitsCount(list, item) {
  if (Array.isArray(list)) {
    const newList = list.filter((element) => element === item);
    return newList.length;
  } else {
    return;
  }
}

// quiz3
function fruits(list1, list2) {
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      result.push(list1[i]);
    } else {
      return;
    }
  }
}
// quiz4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
function meanCalculator(array) {
  const numbersOverFive = array.filter((value) => value >= 5);
  const meanOverFive = numbersOverFive.reduce((sum, value) => sum + value, 0);
  console.log(meanOverFive);
  return meanOverFive / numbersOverFive.length;
}

result = meanCalculator(nums);
console.log('result', result);
