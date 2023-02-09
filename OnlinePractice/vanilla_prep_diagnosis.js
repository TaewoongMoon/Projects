const p = document.createElement('p');
for (let i = 0; i < 5; i++) {
	p.textContent = '안녕하세요?, 문태웅입니다.';
	document.body.appendChild(p);
}
const array = [];

for (var i = 0; i < 5; i++) {
	array.push(function () {
		console.log(i);
	});
}

for (let i = 0; i < 5; i++) {
	array.push(function () {
		console.log(i);
	});
}
