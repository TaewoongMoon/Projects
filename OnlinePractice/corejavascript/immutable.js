// 불변 객체를 만드는방법
/**
 * 불변객체 -> React, Vue.js, Angular 등의 라이브러리나 프레임워크뿐만아니라 함수형 프로그래밍, 디자인패턴에서 매우 중요함
 * 어떤상황에서 불변객체가 필요한가? 값으로 전달받은 객체에 변경을 가하더라도 원본 객체는 변하지 않아야하는 경우!
 */

// 객체의 가변성에 따른 문제점
var user = {
  name: 'Jaenam',
  gender: 'male',
};

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name); // Jung, Jung

console.clear();
// 위의 예제를 보완한 방법
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: 'Jaenam',
  gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);

console.clear();
var arr1 = [undefined, 1];
arr1.filter(function (v, i) {
  console.log(!v);
});
