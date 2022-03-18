const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];


rl.on('line', function (line) {
    let input = Number(line)
    
    let result = '';

    for(let i = input; i >= 1; i--) {
      result += `${i}\n`
    }
    console.log(result)

}).on('close', function () {
  process.exit();
});