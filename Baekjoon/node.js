const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  let input = line.split(' ');

  let hour = Number(input[0])
  let minutes = Number(input[1])

  if() {}


}).on('close', function () {
  process.exit();
});