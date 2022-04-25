const fs = require("fs");
let input = fs.readFileSync("1.txt").toString();

// console.log(input);

let ascii = input.charCodeAt();

console.log(ascii);
