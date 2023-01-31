function a() {
  throw new Error('에러 버블링 던지기');
}

function b() {
  a();
}

// b()를 호출할당시 a를 호출하고 해당 에러는 버블링 되면서
// 함수 c까지 영향을 준다.

function c() {
  try {
    b();
  } catch (error) {
    console.log('Catched');
  }
}
