class Animal {
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}
}

Animal.prototype.printName = function () {
	console.log(`${this.name} ${this.emoji}`);
};

const tiger = new Animal('tiger', '🐱');

class Dog extends Animal {
	constructor(name, emoji) {
		super(name, emoji);
	}
}

const cat = new Dog('cat', '🐩');
console.log(cat.printName());
