// 객체의 가변성으로 인해 문제되는 코드
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
console.log(user.name, user2.name); // Jung Jung

// 객체의 불변성을 유지해주는 코드 (객체의 데이터를 새로 형성)

var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

// 위의 코드도 하드코딩해서 많든것이기 때문에 문제가 생긴다. 프로퍼티 갯수와 상관없는 함수를 만들어서 재사용성을 높여보자
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
  }
};

// 객체의 깊은 복사를 수행하는 범용 함수
var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === 'object' && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

console.clear();

const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'Hello');

console.log(map);
console.log(map.get(key2));
console.log(map);

const hello = 'hello';

const helloTestObject = {
  [hello]: 'test',
};

// 하나의 공통된 식별자로 Symbol을 사용하고 싶다면 Symbol For(Symbol Registry에 저장됨)을 사용하자

// 연산자 소개

/**
 * null or undefined경우일 때를 확인할 때  && 을 사용한다.
 * falsy 한경우를 확인할 경우 ||을 사용한다
 * 다만, falshy 값을 다 찾아낸다면 0, null, undefined, ''등을 undefined 로 반환한다
 * 그렇기 때문에 nullish coalescing operator (??) 를 사용한다.
 */

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  console.log('this', this);
}

function Student(name, gender, school) {
  this.school = school;
  Person.call(this, name, gender);
}

var by = new Student('보영', 'female', '단국대');

console.log(by);
