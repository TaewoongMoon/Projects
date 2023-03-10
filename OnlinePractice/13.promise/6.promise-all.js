function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}
// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ
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

// Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ
Promise.allSettled([getBanana(), getApple(), getOrange()]).then((fruits) =>
  console.log('all', fruits)
);

// Promise.race ์ฃผ์ด์ง Promise์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋๋๊ฒ์ด ์ด๊น
