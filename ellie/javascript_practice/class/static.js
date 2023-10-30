class Fruit {
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}
	static display() {
		`${this.name} : ${this.emoji}`;
	}
}

console.log(Fruit.name);
console.log(Fruit.display());
