// 객체 지향 프로그래밍 가장 큰 장점: 상속을 통한 재사용성
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 해당 생성자 함수를 보았을 때 만들어질때마다
  // 함수가 생김. 인스턴스레벨의 함수
  // 굉장히 비효율적, 그렇기에 프로토타입 레벨의 함수로 만들어져야한다.
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super와 동일한 구조 call
  Animal.call(this, name, emoji);
  this.owner = owner;
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자용');
};

const dog1 = new Dog('멍멍', '🐶', '엘리');
console.log(dog1.printName());
