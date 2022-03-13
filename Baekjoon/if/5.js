const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  let input = line.split(' ');

  let hour = Number(input[0]);
  let minutes = Number(input[1]);
  
  if(minutes < 45) {
    minutes = 60 + (minutes - 45)
    hour -= 1

    if(hour < 0) {
    hour = 23
    }
  } else {
    minutes -= 45
  }

  console.log(hour + " " + minutes)


}).on('close', function () {
  process.exit();
});