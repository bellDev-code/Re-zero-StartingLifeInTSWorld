const fs = require("fs");
let input = fs.readFileSync("5.txt").toString().split("\n");

console.log(input);

const newArr = new Array(26).fill(0);
const alphArr = [];
const toUpperCase = input[0].toUpperCase().split("");

for (let i = 65; i <= 90; i++) {
  alphArr.push(String.fromCharCode(i));
}

for (let j = 0; j < toUpperCase.length; j++) {
  for (let k = 0; k < alphArr.length; k++) {
    if (toUpperCase[j] === alphArr[k]) {
      newArr[k] += 1;
    }
  }
}

// MISSISSIPI 해당 하는 알파벳의 갯수까지는 찾음
// 다음단계 어떻게 진행할지 질문하기

console.log(alphArr);
console.log(toUpperCase);
console.log(newArr);
