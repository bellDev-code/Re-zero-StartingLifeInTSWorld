const fs = require("fs");
let input = fs.readFileSync("5.txt").toString().split("\n");

const num = input[0];
const newArr = input[1].split(" ");

// spread Operator
const maxValue = Math.max(...newArr);

// const maxValue2 = newArr.reduce(function(a, b) {
//     return Math.max(a, b);
// }, -Infinity);
// console.log(maxValue2, "최대값 찾기")

let maxValueSum = 0;

for (let i = 0; i < num; i++) {
  maxValueSum += (newArr[i] / maxValue) * 100;
}

console.log(maxValueSum / num);
