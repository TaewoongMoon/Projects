const button = document.querySelector('.start_button');
const choiImage = document.querySelector('.bg-img');
const timerTag = document.querySelector('.timer_tag');
const timerState = document.querySelector('.game_info');
const gameState = document.querySelector('.game-state');
const puzzleImageSets = [
	'./imgs/01.jpg',
	'./imgs/02.jpg',
	'./imgs/03.jpg',
	'./imgs/04.jpg',
	'./imgs/05.jpg',
	'./imgs/06.jpg',
	'./imgs/07.jpg',
	'./imgs/08.jpg',
	'./imgs/01.jpg',
	'./imgs/02.jpg',
	'./imgs/03.jpg',
	'./imgs/04.jpg',
	'./imgs/05.jpg',
	'./imgs/06.jpg',
	'./imgs/07.jpg',
	'./imgs/08.jpg',
];
const puzzleNumber = [];
let remainingNumber = 8;
let timerInterval;
function shuffle(array) {
	for (let index = array.length - 1; index > 0; index--) {
		const randomPosition = Math.floor(Math.random() * (index + 1));

		const temporary = array[index];
		array[index] = array[randomPosition];
		array[randomPosition] = temporary;
	}
}

function createPuzzlePhotos() {
	const parent = document.querySelector('.square_container');
	for (let i = 1; i < 17; i++) {
		const div = document.createElement('div');
		div.className = 'square';
		div.style.width = '100px';
		div.style.height = '100px';
		div.style.cursor = 'pointer';
		parent.appendChild(div);
		choiImage.style.width = '0px';
		choiImage.style.height = '0px';

		const img = document.createElement('img');
		img.setAttribute('data-number', i);
		img.src = './bgs/square-bg.jpg';
		img.style.width = '100%';
		img.style.height = '100%';
		div.appendChild(img);
	}
}

function clickPuzzlePhotos(array) {
	const images = document.querySelectorAll('img[data-number]');
	images.forEach((image, index) => {
		image.addEventListener('click', function () {
			if (image.src.includes('bgs/square-bg.jpg')) {
				image.src = array[index];
				console.log(image.getAttribute('data-number'));
				puzzleNumber.push({
					[image.getAttribute('data-number')]: array[index],
				});
				console.log(Object.keys(puzzleNumber[0]));
				if (puzzleNumber.length >= 2) {
					if (
						Object.values(puzzleNumber[0])[0] ===
						Object.values(puzzleNumber[1])[0]
					) {
						puzzleNumber.length = 0;
						remainingNumber--;
						console.log(remainingNumber);
						console.log(gameState.textContent);
						gameState.textContent = `${remainingNumber}명`;
						return;
					} else {
						setTimeout(() => {
							const number1 = Number(Object.keys(puzzleNumber[0])[0]) - 1;
							const number2 = Number(Object.keys(puzzleNumber[1])[0]) - 1;
							images[number1].src = './bgs/square-bg.jpg';
							images[number2].src = './bgs/square-bg.jpg';
							puzzleNumber.length = 0;
						}, 500);
					}
				}
			} else {
				image.src = './bgs/square-bg.jpg';
			}
		});
	});
}

function removePuzzlePhotosRestartButton() {
	const parent = document.querySelector('.square_container');
	const childNode = document.getElementsByClassName('square');
	const failImage = document.getElementsByClassName('fail-img');
	while (childNode.length > 0) {
		parent.removeChild(childNode[0]);
	}
	if (failImage.length > 0) {
		while (failImage.length > 0) {
			parent.removeChild(failImage[0]);
		}
	}
	choiImage.style.width = '100%';
	choiImage.style.height = '100%';
}

function removePuzzlePhotosTimeLimit() {
	const parent = document.querySelector('.square_container');
	const childNode = document.getElementsByClassName('square');
	while (childNode.length > 0) {
		parent.removeChild(childNode[0]);
	}

	const failImage = document.createElement('img');
	failImage.className = 'fail-img';
	failImage.style.width = '100%';
	failImage.style.height = '100%';
	failImage.style.position = 'absolute';
	failImage.src = './bgs/lose-bg1.jpg';
	parent.appendChild(failImage);
}

button.addEventListener('click', (e) => {
	let timer = 25;
	if (e.target.innerText === '시작') {
		createPuzzlePhotos();
		clickPuzzlePhotos(puzzleImageSets);
		e.target.innerText = '재시작';
		timerState.style.display = 'flex';
		timerTag.textContent = `${timer}초`;
		timerInterval = setInterval(() => {
			timer--;
			timerTag.textContent = timer + '초';
			if (timer === 0) {
				clearInterval(timerInterval);
				removePuzzlePhotosTimeLimit();
			}
		}, 1000);
	} else if (e.target.innerText === '재시작') {
		removePuzzlePhotosRestartButton();
		clearInterval(timerInterval);
		timerTag.textContent = '';
		timerState.style.display = 'none';
		e.target.innerText = '시작';
		choiImage.src = './bgs/bg.png';
	}
});

window.addEventListener('DOMContentLoaded', () => {
	shuffle(puzzleImageSets);
});
