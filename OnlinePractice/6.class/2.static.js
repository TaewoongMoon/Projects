// static 정적 프로퍼티, 메서드

class Fruit {
  constructor(name, emoji) {
    this.name = name; // 인스턴스 레벨이기 때문에 class에서 접근불가
    this.emoji = emoji;
  }
  // class레벨의 메서드
  static makeRandomFruit() {
    return new Fruit('banana', '🥒');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
