const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let n = Number(line)
    let sum = 0;

  for(let i = 1; i <= n; i++) {
    sum += i
  }

  console.log(sum)

}).on('close', function () {
  process.exit();
});