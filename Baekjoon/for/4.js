const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let input = line.split(' ')

    const num1 = Number(input[0])
    const num2 = Number(input[0])
    


}).on('close', function () {
  process.exit();
});