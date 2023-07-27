'use strict';

console.log(document.querySelector('.message').textContent);

console.log(
  document.querySelector('input').addEventListener('input', event => {
    console.log(event.target.value);
  })
);
