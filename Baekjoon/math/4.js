const fs = require("fs");
let input = fs.readFileSync("4.txt").toString().split(" ");

const move = parseInt(input[0]);
const slip = parseInt(input[1]);
const height = parseInt(input[2]);

let todayMove = 0;

// 시발 소수점
todayMove = Math.ceil((height - slip) / (move - slip));

console.log(todayMove);
