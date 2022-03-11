const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  let input = line.split(' ');

  // 시간과 분
  // 시작하는 시각과 필요한 시간이 분단위로 주어졌을때
  // 구하려는것 : 끝나는 시각을 계산하는 프로그램

  // 1. 첫째 줄에는 현재 시각 (시간과 분)
  // 2. 두 번째 줄에는 요리하는데 필요한 시간(0 <= C <= 1000)이 분단위
  // 1. 하루는 1440분

  let hour = Number(input[0].split(' '))
  let minutes = Number(input[0].split(' '))
  let cookT = Number(input[1])

  if(minutes + cookT < 60) {
    minutes = 60 + (minutes - 60)

    if(minutes + cookT >= 60) {
      minutes = 60 + (minutes - 60)
      hour += 1
    }
  } else {

  }

  


}).on('close', function () {
  process.exit();
});