function add(a, b, c) {
  return a + b + c;
}

// Object 안에서 object를 spread연산자 활용가능
const ellie = { name: 'Ellie', age: 20, home: { address: 'New York' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};

ellie.home.address = 'Seoul';
console.log(updated);
