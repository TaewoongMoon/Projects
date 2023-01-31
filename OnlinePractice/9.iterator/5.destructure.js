// 구조 분해 할당 (Destructuring assignment)
// 데이터 뭉치(그룹화)를 쉽게 할 수 있다.
const fruits = ['🥝', '🍎', '🍓', '🍌'];
const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others);

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();

const ellie = { name: 'ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  return name, age, job;
}

let ellieInfo = display(ellie);
console.log(ellieInfo);

console.clear();
// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { size, color } }) {
  console.log(size, color);
}

changeColor(prop);
