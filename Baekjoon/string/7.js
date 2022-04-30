const fs = require("fs");
let input = fs.readFileSync("7.txt").toString().split(" ");

console.log(input);

const reverseNum = parseInt(input[0].split("").reverse().join(""));
const reverseNumTwo = parseInt(input[1].split("").reverse().join(""));

console.log(reverseNum > reverseNumTwo ? reverseNum : reverseNumTwo);
