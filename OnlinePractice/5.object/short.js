const x = 0;
const y = 0;

const coordinate = { x, y };
console.log(coordinate);

function accountFunction(name, age) {
  return {
    name,
    age,
  };
}

const accountInfo = accountFunction('ellie', 34);
console.log(accountInfo);
