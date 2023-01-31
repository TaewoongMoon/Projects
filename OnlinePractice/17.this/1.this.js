/**
 * 글로벌 컨텍스트의 this
 * - 브라우저:
 * - 노드 : 모듈
 */

// 노드상에서의 글로벌 컨텍스트 : module
const x = 0;
module.exports.x = x;
module.exports.name = 'Taewoong';
console.log(this);

// 노드상에서 globalThis는 global이라는 객체를 의미함
console.log(globalThis);

/**
 * 함수 내부에서의 this: strict모드를 안하면 globalThis
 * strict 모≠드를 하면 함수내부에 아무것도 없기에 undefined
 */

function fun() {
  console.log(this);
}

// 클래스나 생성자함수에서 this는 인스턴스 함수 class
// 자체를 가리킨다.
