/**
 * Javascript는 기본적으로 동기적으로 실행되는 싱글쓰레드를 따르지만
 * Web API or Node API 같은 경우는 멀티 쓰레드를 따른다
 * 예) DOM API, SetTimeOut, SetInterval, fetch, Event listener
 */

// function execute() {
//   console.log('1');
//   setTimeout(() => {
//     console.log('2');
//   }, 3000);
//   console.log('3');
// }

// execute();

// function runInDelay(callback, seconds) {
//   if (!seconds || seconds < 0) {
//     throw new Error('잘못된 초를 던지셨네요!');
//   } else {
//     setTimeout(callback, seconds * 1000);
//   }
// }

// runInDelay(() => {
//   console.log('성공했나');
// }, 1);

// console.clear();

// function getBanana() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('🍌');
//     }, 1000);
//   });
// }

// function getApple() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('🍎');
//     }, 1000);
//   });
// }

// function getOrange() {
//   return Promise.reject(new Error('no orange'));
// }

// getBanana() //
//   .then((banana) => {
//     getApple() //
//       .then((apple) => console.log(banana, apple));
//   });

// // Promise.all 병렬적으로 모든 Promise 를 실행
// Promise.all([getBanana(), getApple()]) //
//   .then((fruits) => console.log(fruits));

// function fetchEgg(chicken) {
//   return Promise.resolve(`${chicken} => 🥚`);
// }
// function fryEgg(egg) {
//   return Promise.resolve(`${egg} => 🍳`);
// }
// function getChicken() {
//   return Promise.reject(new Error('can not find 🐓'));
// }

// async function fetchList() {
//   let chicken;
//   try {
//     chicken = await getChicken();
//   } catch {
//     chicken = '🐓';
//   } finally {
//     const fryEggs = await fryEgg(chicken);
//     const fetchEggs = await fetchEgg(fryEggs);
//     console.log(fetchEggs);
//   }
// }

// fetchList();
