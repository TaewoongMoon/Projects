// var의 특징(💩)
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕옴
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 변수 선언하는 키워드 없이 선언 및 할당이 가능함
something = '❌';
console.log(something);

// 재선언해도 코드 오류 발생하지 않음
var obj = 1;
var obj = 1;

// var 블록레벨 스코프 지원하지 않는다.
var obj = 'var 완전 문제 아니네';
{
  var obj = 'var 완전 문제네';
}

console.log(obj); // var 완전 문제네

// 함수레벨 스코프만 지원한다
function functionLevelScope() {
  var isThatTrue = 'Yes';
}

console.log(isThatTrue); // Undefined
