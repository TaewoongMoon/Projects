/*
 *
 * 아래 예시 코드에는 여러 번의 콘솔 출력문이 반복되고 있습니다.
 * 우리는 이 코드를 개선해보도록 하겠습니다.
 *
 * 원소의 갯수를 알 수 없는 배열이 주어졌다고 가정했을때,
 * 해당 배열의 원소들을 순서대로 콘솔 출력하는 함수를 작성해보시는 것이 미션입니다.
 *
 * TODO라고 표시되어 있는 부분의 내용을 채워주세요.
 *
 */
const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list2 = [8, 9, 10];
const list3 = [4, 5, 6, 7];

// [예시] 반복문을 활용하지 않은 코드입니다.
console.log(list1[0]);
console.log(list1[1]);
console.log(list1[2]);
console.log(list1[3]);
console.log(list1[4]);
console.log(list1[5]);
console.log(list1[6]);
console.log(list1[7]);
console.log(list1[8]);
console.log(list1[9]);

console.log(list2[0]);
console.log(list2[1]);
console.log(list2[2]);

console.log(list3[0]);
console.log(list3[1]);
console.log(list3[2]);
console.log(list3[3]);

// [미션] 위 예시와 결과적으로 동일한 로직을 수행하도록 아래 함수 내용을 적절히 채워주세요.
function logEach(list) {
	for (let i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
}

logEach(list1);
logEach(list2);
logEach(list3);
