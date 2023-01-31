// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this 가 결정됨!
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨
function Cat(name) {
  this.name = name;
  // 2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억한다.
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킨다.
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  // 1. bind 함수를 이용해서 정적 binding 가능
  let newPrintName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();
// printName 함수가 호출되면서 cat의 name이 아니고 dog name이 출력된다.
//
dog.printName = cat.printName;
dog.printName();
