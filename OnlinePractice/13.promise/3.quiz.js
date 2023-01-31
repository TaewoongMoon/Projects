// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, secondsrk 0보다 작으면 에러를 던지자.

function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수 반환해야함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds 0보다 커야 함');
  }
  setTimeout(callback, seconds * 1000);
}
