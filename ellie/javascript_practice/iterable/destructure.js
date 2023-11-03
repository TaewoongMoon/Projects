// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(구조화)를 쉽게 할 수 있다..

const fruits = ['🍎', '🍊', '🍓'];

const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others);

const identityCard = {
	name: 'Taewoong Moon',
	job: 's/w engineer',
	age: 28,
};

// object에서 키로 value들을 찾아내고 해당 키로 불러올때 키의 이름을 변경하고 싶다면 변경 가능하다
const { name, job: career, age } = identityCard;

console.log(name);
console.log(career);
console.log(age);
