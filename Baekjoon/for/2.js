const fs = require('fs');
let input = fs.readFileSync('1.txt').toString().split('\n');

const [count] = input;

for(let i = 0; i < count; i++) {
  const [a, b] = input[i + 1].split(" ");
  console.log(parseInt(a) + parseInt(b))
}