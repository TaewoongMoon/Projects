// const multiple = {
//     [Symbol.iterator]() {
//       const max = 10;
//       let num = 0;
//       return {
//         next() {
//           return { value: num++ * 2, done: num > max };
//         },
//       };
//     },
//   };

function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    yield i * 2;
  }
}
const multiple = multipleGenerator();
