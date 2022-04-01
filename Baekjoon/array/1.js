const fs = require('fs');
let input = fs.readFileSync('1.txt').toString().split('\n');

let count = Number(input[0])
let arr = input[1].split(' ')

let numbers = arr.map(function(item) {
    return Number(item);
  });

let maxValue = numbers[0]
let minValue = numbers[0]

for(let i = 1; i < count; i++) {
    if(maxValue < numbers[i]) {
        maxValue = numbers[i]
    } 
    if(minValue > numbers[i]) {
        minValue = numbers[i]
    }
}

console.log(`${minValue} ${maxValue}`)
