const fs = require("fs");
let input = fs.readFileSync("1.txt").toString().split(" ");

const fixedCost = parseInt(input[0]);
const changeCost = parseInt(input[1]);
const notebookCost = parseInt(input[2]);

let cost = fixedCost / (notebookCost - changeCost);

let result = Math.floor(cost) + 1;

if (changeCost >= notebookCost) {
  result = -1;
} else result;

console.log(result);
