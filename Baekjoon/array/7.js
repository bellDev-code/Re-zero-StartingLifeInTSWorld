const fs = require('fs');
let input = fs.readFileSync('7.txt').toString().split('\n');

// console.log(input)
const num = Number(input[0])

// console.log(num)

for(let i = 1; i <= num; i++) {
    let newArr = input[i].split(' ')
    const firstValue = Number(newArr[0])
    let sum = 0

    for(let j = 1; j < firstValue; j++) {
        sum = Number(firstValue[j])
    }
}

