const fs = require("fs");
let input = fs.readFileSync("1.txt").toString().split(" ");

console.log(input[0] * input[1]);
