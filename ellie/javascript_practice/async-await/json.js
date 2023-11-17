/**
 * JSON(Javascript Object Notation): 서버와 클라이언트간의 원활한 http 통신 위해 만들어진 오브젝트 형태의 텍스트 포맷
 * stringify(object): JSON화 시키는것
 * parse(JSON): object화 시키는것
 */

const ellie = {
	name: 'ellie',
	age: 20,
	eat: () => {
		console.log('eat');
	},
};

const json = JSON.stringify(ellie);
console.log(json);
