const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];


rl.on('line', function (line) {
  input = Number(line)

}).on('close', function (test) {
  input = test.split(' ')
  let a = parseInt(input[0])
  let b = parseInt(input[0])

  for(let i = 1; i < 10; i++) {
    console.log(a + b)
  }

  process.exit();
});