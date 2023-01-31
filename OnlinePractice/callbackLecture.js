// new Promise로 비동기 처리해보기 (비동기는 별도의 요청, 실행대기, 보류 등과 같은 코드를  실행할 때 많이 쓰인다.)
// new Promise를 통한 커피 만들기

// new Promise((resolve) => {
//   setTimeout(() => {
//     var name = '에스프레소';
//     console.log(name);
//     resolve(name);
//   }, 500);
// })
//   .then((prevName) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         prevName += ', 아메리카노';
//         console.log(prevName);
//         resolve(prevName);
//       }, 500);
//     });
//   })
//   .then((prevName) => {
//     setTimeout(() => {
//       prevName += ', 카페라떼';
//       console.log(prevName);
//     }, 500);
//   });

// 위의 new Promise (비동기를 동기화 하는 과정) 을 짦게 함수로 묶는다면?
// var addCoffee = function (name) {
//   return function (prevName) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         var coffee = prevName ? name + ', ' + prevName : name;
//         console.log(coffee);
//         resolve(coffee);
//       }, 500);
//     });
//   };
// };
// addCoffee('아메리카노')().then((prevName) => addCoffee('에스프레소')(prevName));
// // addCoffee('아메리카노')().then(addCoffee('에스프레소'))

var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

var coffeeMake = async function () {
  var coffeeList = '';
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ',' : '') + (await addCoffee(name));
  };

  await _addCoffee('에스프레소');
  console.log(coffeeList);

  await _addCoffee('아메리카노');
  console.log(coffeeList);

  await _addCoffee('카페모카');
  console.log(coffeeList);
};

coffeeMake();
