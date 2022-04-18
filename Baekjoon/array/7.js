const fs = require("fs");
let input = fs.readFileSync("7.txt").toString().split("\n");

let allCases = Number(input[0]);

for (let i = 1; i <= allCases; i++) {
  let cases = input[i].split(" ");
  let count = Number(cases[0]);
  let sum = 0;

  for (let j = 1; j <= count; j++) {
    sum += Number(cases[j]);
  }

  let reverage = sum / count;

  let highScore = 0;

  for (let k = 1; k <= count; k++) {
    if (reverage < cases[k]) {
      highScore++;
    }
  }

  result = ((highScore / count) * 100).toFixed(3);
  console.log(result + "%");
}
