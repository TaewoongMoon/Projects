/**
 * javascript에서 this는 문맥상에 따라서 달라진다.
 */

// 글로벌 컨텍스트의 this
/**
 * 노드 : 모듈
 * 윈도우: 윈도우 객체 자체를 의미함
 */

console.log(this);

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined : 함수 자체에서 가리키는게 없기 때문에
 * 느슨한모드(sloppy mode)에서는 globalThis
 */

function fun() {
  console.log(this);
}
fun();

/**
 * 하지만 생성자 함수나 class에서는 앞으로 만들어질 인스턴스 객체 자체를 가리킴
 * 생성자 함수(대문자) 와 일반 함수(소문자)는 엄연히 다르다.
 */

/**
 * 정적 바인딩과는 달리 Javascript this 바인딩은 호출하는 caller에 의해서 결정
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강이지의 이름을 출력한다멍: ${this.name}`);
  };
}

const dogTest = new Dog('몽이');
const catTest = new Cat('냥이');
dogTest.printName = catTest.printName;

// 원래는 냥이 이름이 나와야하는데 caller가 new Dog 객체기에 몽이가 나온다.
console.log(dogTest.printName());

/**
 * 1.this 바인딩 정적으로 활용하는 방법: bind 함수 활용
 * this.printName = this.printName.bind(this)
 * 2. 화살표 함수 사용하기
 */
