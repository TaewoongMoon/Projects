const dog1 = { name: '뭉치', emoji: '🐶' };
const dog2 = { name: '코코', emoji: '🐩' };

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

// 프로토타입 레벨의 함수
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const cat = new Animal('냐옹이', '🐱');
console.log(cat.printName());

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다. (섀도잉 된다).
// dog1.printName = function (){
//  console.log('안녕')
//}

// 정적 레벨
Animal.hello = () => {
  console.log('캡슐화 되어있음');
};
