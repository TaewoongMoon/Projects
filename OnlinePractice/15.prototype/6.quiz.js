class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  play() {
    console.log('같이 놀자용');
  }
}

const lamb = new Animal('양');
console.log(lamb);
