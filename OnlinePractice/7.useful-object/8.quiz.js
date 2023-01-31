const text = 'Hello World';
for (i = 0; i < text.length; i++) {
  if (text[i] === ' ') {
    continue;
  } else {
    console.log(text[i]);
  }
}

const ids = 'user1, user2, user3, user4';
splitIds = ids.split(',');
console.log(splitIds);

setInterval(() => {
  console.log(new Date());
}, 1000);
