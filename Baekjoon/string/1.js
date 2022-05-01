const fs = require("fs");
let input = fs.readFileSync("1.txt").toString();

let ascii = input.charCodeAt();

console.log(ascii);
