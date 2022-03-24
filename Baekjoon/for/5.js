const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

// 변수 겹침 주의 필요
rl.on('line', function (line) {
    const input = Number(line)
    
    let result = '';

    // input -> Number(line)
    for(let i = 1; i < input; i++) {
      result += `${i}\n`
    }
    console.log(result)

}).on('close', function () {
  process.exit();
});