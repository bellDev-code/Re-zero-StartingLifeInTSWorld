const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];


rl.on('line', function (line) {
  let n = Number(line)

  for(let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`)
  }

  for(let i = 0; i < 9; i++) {
    console.log(`${n} * ${i + 1} = ${n * (i + 1)}`)
  }

}).on('close', function () {
  process.exit();
});