// 반복되는 객체라면 생성자 함수를 이용해서 가독성 좋게 만들 수 있다.

function Fruit(name, emoji) {
	this.name = name;
	this.emoji = emoji;
	this.display = () => {
		return `${this.name} : ${this.emoji}`;
	};
}

const apple = new Fruit('apple', '🍎');

console.log(apple.display());
