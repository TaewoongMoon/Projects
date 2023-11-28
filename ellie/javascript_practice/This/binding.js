/**
 * 동적 바인딩: Javscript는 누가 호출(caller)하냐에 따라 동적으로 변한다.
 * 정적 바인딩: Java, C#, C++는 인스턴스가 결정되자마자 정적으로 결정됨
 */

function Dog(name) {
	this.name = name;
	this.printName = () => {
		console.log(`dog is doing ${this.name}`);
	};
}

function Cat(name) {
	this.name = name;
	this.printName = () => {
		console.log(`cat is doing ${this.name}`);
	};
}

const dog = new Dog('Moon');
const cat = new Cat('ellie');

dog.printName = cat.printName;
dog.printName();
