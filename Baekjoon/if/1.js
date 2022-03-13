const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];


// Global Variables (전역 변수) 
const TODAY_PRICE = 30000

rl.on('line', function (line) {
  input = line.split(' ');

  // 변수명 무조건 소문자 (글로벌 변수 제외)
  let A = Number(input[0]);
  let B = Number(input[1]);

  if (A > B) {
    console.log('>');
  } else if (A < B) {
    console.log('<');
  } else {
    console.log('==');
  }

}).on('close', function () {
  process.exit();
});