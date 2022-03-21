const fs = require('fs');
let input = fs.readFileSync('7.txt').toString().split('\n');

const [count] = input;

for(let i=0; i<count; i++) {
  const [a, b] = input[i + 1].split(" ");
  console.log(`Case #${i + 1}: ${parseInt(a)} + ${parseInt(b)} = ${parseInt(a) + parseInt(b)}`)
}

