/**
 * 자바스크립트의 탄생 : 1995년 넷스케이프 브라우저의 도움을 주기 위해 탄생
 * 1996년에 넷스케이프2에 도입됨(Mocha -> Livescript -> Javascript로 이름명 변환)
 *
 */

const drawCircle = (radius) => {
  const thickness = 0.1;
  const symbol = '*';
  const rin = radius - thickness; // 4.9
  const rout = radius + thickness; // 5.1
  for (let y = radius; y >= -radius; --y) {
    // y = 5 and y가 -5보다 크거나 같을때까지 돌린다, 1씩 감소
    let string = '';
    for (let x = -radius; x < rout; x += 0.5) {
      // x = -5 부터 시작해서 5.1보다 작을때까지 0.5씩 증가
      const value = x * x + y * y;
      if (value >= rin * rin && value <= rout * rout) {
        string += symbol;
      } else {
        string += ' ';
      }
    }
    console.log(string);
  }
};
drawCircle(5);

for (let i = 0; i < 5; i++) {
  let string = '';
  for (let j = 0; j < 5; j++) {
    string += '*';
  }
  console.log(string);
}
