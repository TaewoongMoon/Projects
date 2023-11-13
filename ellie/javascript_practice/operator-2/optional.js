// Optional Chaining을 통해 객체의 key 존재여부 확인가능
// && 연산자를 통해서 첫번째 값이 true라면 두번째 값을 출력해라 형태의 logic이 가능하지만, optional chaining에 비해서 길어진다.
let obj = { name: 'Taewoong Moon' };

const name = obj?.name;

console.log(name);
