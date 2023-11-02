// 일반적으로 타 언어에서 사용되는 배열은 크기가 일정하며, 연속적으로 이루어져있음
// Javascript Array는 다름 다른 타입의 자료구조를 넣을수 있어서 일정한 메모리 크기를 유지하려면, typed collection 해야한다.
// Javascript 배열은 객체다.

const arrayLikeObject = Array.from({
	0: '1',
	1: '2',
	length: 2,
});

console.log(arrayLikeObject);
