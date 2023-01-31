// 조건문 (Conditional Statement)
// switch
// if else if else if else... else
// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우
let day = 6;
let dayName;

if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
}

switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
}
