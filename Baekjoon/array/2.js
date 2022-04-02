const fs = require('fs');
let input = fs.readFileSync('2.txt').toString().split('\n');

console.log(input)

let newArr = input.map(function(item) {
    return Number(item);
  });

let maxValue = newArr[0]
let arrLength = newArr.length
let count = 0

for(let i = 0; i < arrLength; i++) {
    if(maxValue < newArr[i]) {
        maxValue = newArr[i]
        count = i
    }
    
}

console.log(maxValue)
console.log(count + 1)