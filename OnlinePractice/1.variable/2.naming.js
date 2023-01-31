// 주석을 달면 됨
/** 주석이됨
 * 다음줄로 자동으로 넘어감
 */

/** 변수규칙
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis)
 * 한국어로 변수를 짓지 않는다.
 * 예약어를 사용하지않는다.
 * 숫자로 시작하지 않는다.
 * 특수문자 (_, $ 두가지는 예외) 사용하지 않는다.
 */

let apple;
let redApple;

// 나쁜 예제
let number = 20;
// 좋은 예제
let myAge = 20; // 변수이름이 구체적인 의미를 가져야한다.
// 나쁜 예제
let audio1;
let audio2;
// 좋은 예제
let backgroundAudio;
let windAudio;

// 꿀팁!
let audioBackground; // 무엇인지 먼저 나타내고 구체적인걸 뒤로쓰는게 좋다.
let audioWind;
