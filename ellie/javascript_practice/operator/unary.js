// + 연산자를 숫자(number) 타입이 아닌 타입과 같이 쓰게될 경우 어떤값으로 변환되어 나오는지 확인 가능함
console.log(+false); // 0;
console.log(+null); // 0;
console.log(+''); // 0;
console.log(+true); // 1;
console.log(+'text'); // NaN;
console.log(+undefined); // NaN;
console.log(+{}); // NaN;
