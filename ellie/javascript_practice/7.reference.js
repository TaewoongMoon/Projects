// 원시 타입 vs 참조 타입
// 원시타입은 값이 복사되어 나타내어짐
let a = 1;
let b = a; // 1

// 참조 타입은 주소를 복사하게 됨

let apple = {
	name: '사과',
};
let orange = apple;

orange.name = '오렌지';
console.log(apple.name);
