const fs = require("fs");
let input = fs.readFileSync("2.txt").toString().split("\n");

const leng = parseInt(input[0]);
const newArr = input[1].split("");

let sum = 0;

for (let i = 0; i < leng; i++) {
  sum = sum + parseInt(newArr[i]);
}

console.log(sum);
