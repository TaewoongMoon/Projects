// 인스턴스 레벨에서 중복을 시키지 않기 위해서 만들 수 있는게 Object prototype을 만들어서 메모리 loss 방지한다.

function Dog(name, emoji) {
	this.name = name;
	this.emoji = emoji;
}

Dog.prototype.printName = function () {
	console.log(`${this.name} ${this.emoji}`);
};

const ellie = new Dog('ellie', '🐶');

console.log(ellie.printName());
