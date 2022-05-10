const fs = require("fs");
let input = fs.readFileSync("2.txt").toString().split(" ");

const result = input[0] / input[1];
console.log(result);
