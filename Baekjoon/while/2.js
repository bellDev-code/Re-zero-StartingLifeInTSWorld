const fs = require("fs");
let input = fs.readFileSync("2.txt").toString().split("\n");

let i = 0;

let result = "";

while (i < input.length) {
  let nums = input[i].split(" ");

  let a = Number(nums[0]);
  let b = Number(nums[1]);

  result += a + b;

  if (i !== input.length - 1) {
    result += "\n";
  }
  i++;
}

console.log(result);
