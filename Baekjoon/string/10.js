const fs = require("fs");
let input = fs.readFileSync("10.txt").toString().split("\n");

let caseCount = parseInt(input[0]);
let count = 0;

for (let i = 1; i <= caseCount; i++) {
  let obj = {};
  let bool = true;

  for (let j = 0; j < input[i].length; j++) {
    if (!obj[input[i][j]]) {
      obj[input[i][j]] = 1;
    } else {
      if (input[i][j] === input[i][j - 1]) obj[input[i][j]]++;
      else {
        bool = false;
        break;
      }
    }
  }
  if (bool) count++;
}

console.log(count);
