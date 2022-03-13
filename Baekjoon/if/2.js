const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');

  const score = Number(input);

  // 함수 예외 처리
  if (score > 100 || score < 0)  return console.log("잘못된 점수입니다.")

  // 90 이상 100 밑 부분의 조건에서 100부분은 필요없다.
if(score >= 90) {
    console.log('A')
} else if(score >= 80) {
    console.log('B')
} else if(score >= 70) {
    console.log('C')
} else if(score >= 60) {
    console.log('D')
} else {
    console.log('F')
};

}).on('close', function () {
  process.exit();
});