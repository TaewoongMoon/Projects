class Fruit {
	// 객체를 생성할때 호출되는 함수가 constructor(생성자) 함수이다.
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}
	// 메서드는 생성자함수에 보통 포함시키지않고 그대로 사용한다.
	display = () => {
		return `${this.name} : ${this.emoji}`;
	};
}
