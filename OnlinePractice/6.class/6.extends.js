// 클래스를 여러개만들어 중복되는 프로퍼티 및 메서드가 있을경우 부모클래스를 만든다

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹는다');
  }
  play() {
    console.log('잔다');
  }
}

// 위의 내용을 개가 상속받는다고 가정해보자
class Dog extends Animal {}
const dog = new Dog('노란색');
dog.play();
dog.eat();
// 위의 코드처럼 상속만받아도 부모의 프로퍼티 및 메서드 활용가능
class Pig extends Animal {
  constructor(color, owner) {
    super(color);
    this.ownerName = owner;
  }
  eat() {
    super.eat();
    console.log('또 먹는다');
  }
}
// 오버라이딩 하는경우 constructor 함수내에 부모 프로퍼티를 super로 받는다.
const pig = new Pig('파란색', '태웅');
console.log(pig.color);
console.log(pig.ownerName);
pig.eat();
