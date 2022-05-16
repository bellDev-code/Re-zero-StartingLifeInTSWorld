const fs = require("fs");
let input = fs.readFileSync("9.txt").toString();

console.log(input);

let croArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// 키값을 못주는 경우 질문하기
// const map = {
//   c=: 1,
//   c-: 1,
//   dz=: 1,
//   d-: 1,
//   lj: 1,
//   nj: 1,
//   s=: 1,
//   z=: 1,
// };

for (const char of croArr) {
  input = input.split(char).join(" ");
  console.log(input);
}

console.log(input.length);

// 백준 제출 시 틀렸습니다. 왜 틀렸는지 모르겠음
