/**
 * 자바스크립트에서 객체를 생성하면 Object라는 모든 프로토타입을 가지고 있다.
 * 각 객체의 프로토타입은 모두 같은 프로토타입을 상속한다.
 *
 */

const dog = { name: '와우', emoji: '🐶' };
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

const cat = { ...dog };
dog.name = '태웅';
console.log(dog === cat);

console.log(cat);

// 프로토타입을 베이스로한 객체지향 프로그래밍
// function Animal(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
// }

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
}
Animal.prototype.printName = function () {
  return `${this.name} ${this.emoji}`;
};

const animalTest = new Animal('강아지', '🐶');
console.log('animalTest', animalTest.printName());

// function Dog(name, emoji, owner) {
//   //super(name, emoji)
//   Animal.call(this, name, emoji);
//   this.owner = owner;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.play = () => {
//   console.log('같이 놀자옹!');
// };

// const dog1 = new Dog('멍멍', '🐶', '엘리');

/**
 * 위의 프로토타입 베이스로한 상속을 보면 생각보다 복잡하다.
 * 그래서 최신문법에서는 prototype을 사용하는게 아니라, class를 사용한다.
 */

/**
 * 상속도를 확인하는 방법 : instance of를 사용하면 된다.
 */

// 오브젝트는 단 하나의 prototype을 가리킬 수 있다(부모는 단 하나!)
// 하지만, 여러개의 함수들을 상속하고 싶다!
// Mixin;
