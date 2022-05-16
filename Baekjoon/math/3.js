const fs = require("fs");
let input = parseInt(fs.readFileSync("3.txt"));

console.log(input);

// 분수찾기
// 공통점이나 찾는 방법을 모르겠음

// 1 홀
// 1/1

// 2 짝
// 1/2

// 3 홀
// 2/1

// 4 짝
// 3/1

// 5 홀
// 2/2

// 6 짝
// 1/3

// 7 홀
// 4/1

let a = 1;
let b = 1;

let temp;

const num = parseInt(input);

for (let i = 0; i < num; i++) {
  if (a <= 1) {
    b++;
  }
}
