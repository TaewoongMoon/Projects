// Symbol 심벌
// 유일한 키를 생성할 수 있음

const map = new Map();
const key1 = 'key';
const key2 = 'key';

map.set(key1, 'Hello');
console.log(map.get(key2));

// 위의 내용을 보면 key1과 key2는 같은 primitive type
// Map에서 똑같은 value를 반환한다

// 이럴때 Symbol을 사용하면 두개의 차이를 만들어낸다
const key3 = Symbol('key');
const key4 = Symbol('key');
