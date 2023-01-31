// 위의 play함수는 생성자 함수처럼 사용될 수 있다.
const dog = {
  name: 'dog',
  play: function () {
    console.log('멍멍');
  },
};

//ES6 (생성자 함수 형태로 만드는게 아니라 메서드로 만든다.)
const cat = {
  name: 'cat',
  play() {
    console.log('냐옹');
  },
};

/**
 * 1. 문법이 깔끔하다.
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입 생성 불가능)
 */
