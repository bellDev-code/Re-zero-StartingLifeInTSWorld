const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  const [A, B, C] = line.split(' ').sort(function(a, b) {
    return a - b;
  })

  if(A === B && B === C) {
    console.log(10000 + A * 1000)
  } else if(A === B || B === C) {
    console.log(1000 + B * 100)
  } else {
    console.log(C * 100)
  }
  
}).on('close', function () {
  process.exit();
});