const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  const [A, B, C] = line.split(' ').sort(function(a, b) {
    return a - b; // 오름차순정리
  })

  // console.log([A, B, C])

  // 1. 조건은 쉬움 => 단순 비교
  // 2. 이 세가지 숫자들을 어떻게 비교할껀가?
  // 3. 여기서 같은 눈, 가장 큰 눈을 알아내야함
  // 4. 배열 값 비교하기
  // 5. sort 정리
  if(A === B && B === C) {
    console.log(10000 + A * 1000)
  } else if(A === B || B === C) {
    console.log(1000 + B * 100)
  } else {
  }
  
}).on('close', function () {
  process.exit();
});