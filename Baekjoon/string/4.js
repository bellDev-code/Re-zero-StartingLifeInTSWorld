const fs = require("fs");
let input = fs.readFileSync("4.txt").toString().split("\n");

// console.log(input);

let num = parseInt(input[0]);
let result = "";

for (let i = 1; i <= num; i++) {
  let numCount = parseInt(input[i].split(" ")[0]);
  let caseStr = input[i].split(" ")[1];

  for (let j = 0; j < caseStr.length; j++) {
    for (let k = 0; k < numCount; k++) {
      result += caseStr[j];
    }
  }

  if (i !== input.length - 1) {
    result += "\n";
  }
}

console.log(result);
