let fs = require("fs");
let input = Number(fs.readFileSync("3.txt").toString());

let num = input;

let result;
let i = 0;

// 1의 자리 수 구하기
// num % 10
// 10의 자리 수 구하기
// Math.floor(num / 10)
// 1의 자리 수를 10의 자리 수로
// (num % 10) * 10

while (true) {
  i++;

  result = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (result % 10);

  if (input === num) {
    break;
  }
}

console.log(i);
