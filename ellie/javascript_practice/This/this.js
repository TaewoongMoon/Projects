/**
 * 노드상에서의 this : 모듈 exports 객체 안에 담겨있는 것들을 가르킨다.
 * 브라우저상에서의 this : Window 객체를 의미한다.
 */

const x = 0;
module.exports.x = x;

console.log(this);
console.clear();

/**
 * 함수 내부에서의 this?
 * use strict모드가 아닌경우: globalThis를 가리킨다.
 * use strict 모드일경우 : undefined
 */

/**
 * 생성자 함수 혹은 클래스는 this를 인스턴스 객체 그자체를 의미한다.
 */

function Animal(name) {
	this.name = name;
	console.log(this.name);
	console.log('this', this);
}

const cat = new Animal('cat');
console.log(cat);
