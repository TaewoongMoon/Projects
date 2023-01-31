function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍏');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}
// 바나나와 사과를 같이 가지고 오기
const arrayResult = [];
getBanana() //
  .then((banana) => {
    arrayResult.push(banana);
    return getApple();
  })
  .then((apple) => {
    arrayResult.push(apple);
    return getOrange();
  })
  .catch((error) => console.log(error.message))
  .then(() => console.log(arrayResult));

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.allSettled([getBanana(), getApple(), getOrange()]).then((fruits) =>
  console.log('all', fruits)
);

// Promise.race 주어진 Promise중에 제일 빨리 수행되는것이 이김
