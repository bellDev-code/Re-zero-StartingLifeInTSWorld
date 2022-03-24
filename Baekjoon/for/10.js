const fs = require('fs');
let input = fs.readFileSync('8.txt').toString();

// 1. 전체 줄의 수 = 변수 i 를 사용한 for 문의 반복 수
// 1-1. 각 줄마다 찍힐 값의 수 = for 문의 반복 수(공백값) + for 문의 반복 수(*값)

const n = Number(input)
let result = ''

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      result += ' ';
    }
  
    for (let k = 0; k <= i; k++) {
      result += '*';
    }

    if (i !== n - 1) result += '\n';
  }
  
console.log(result)
