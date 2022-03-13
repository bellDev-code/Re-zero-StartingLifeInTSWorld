const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(Number(line))
}).on('close', function () {
  const [x, y] = input;

  if(x === 0 && y === 0) return console.log("x, y는 0이 될 수 없습니다.")
  
  if(x > 0 && y > 0) {
    console.log(1)
} else if(x < 0 && y> 0) {
    console.log(2)
} else if(x < 0 && y < 0) {
    console.log(3)
} else if(x > 0 && y < 0) {
    console.log(4)
}

  process.exit();
});