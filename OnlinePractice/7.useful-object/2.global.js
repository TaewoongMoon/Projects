console.log(globalThis);

// URL(URI - Uniform Resource Identifier 하위 개념)
// URI는 ASCII 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리한다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

// 전체 URL이 아니라 특정 부분만 encode 할려면 Component를 사용한다
const URL2 = '드림코딩.com';
const encoded2 = encodeURIComponent(URL2);
