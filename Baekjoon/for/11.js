let fs = require('fs');
let input = fs.readFileSync('10.txt').toString().split('\n')

let inputs = [];
inputs = input[0].split(' ')
// console.log(inputs)

let total = Number(inputs[0]);
let limit = Number(inputs[1]);

// console.log(total, "토탈")
// console.log(limit, "제한")

let numbers = [];
numbers = input[1].split(' ')
// console.log(numbers, "숫자배열")

result = '';
for (let i = 0; i < total; i++) {
  if (Number(numbers[i]) < limit) {
    result += numbers[i] + ' ';
    // console.log(result, "if로 제한하여 나오는 결과값")
  }
}

console.log(result);