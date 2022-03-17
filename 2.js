const fs = require('fs');
let input = fs.readFileSync('1.txt').toString().split('\n');

const [count] = input;

let result = ''

for(let i = 0; i < count; i++) {
  const [a, b] = input[i + 1].split(" ");
  result += `${parseInt(a) + parseInt(b)}`
}

console.log(result)
