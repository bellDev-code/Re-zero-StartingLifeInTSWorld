const fs = require("fs");
let input = fs.readFileSync("6.txt").toString().split("\n");

let str = input[0].split(" ");
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    count++;
  }
  if (str[i] === "") {
    count--;
  }
}
console.log(count);
