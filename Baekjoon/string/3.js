const fs = require("fs");
let input = fs.readFileSync("3.txt").toString().split("\n");

let newArr = [];
let result = "";

for (let i = 97; i <= 122; i++) {
  const ascii = String.fromCharCode(i);

  for (let j = 0; j < ascii.length; j++) {
    newArr.push(input[j].indexOf(ascii));
  }
}

result = newArr.join(" ");
console.log(result);
