const fs = require("fs");
let input = fs.readFileSync("8.txt").toString().split(" ");

const bigNumOne = BigInt(input[0]);
const bigNumTwo = BigInt(input[1]);

let result = bigNumOne + bigNumTwo;

console.log(result.toString());
