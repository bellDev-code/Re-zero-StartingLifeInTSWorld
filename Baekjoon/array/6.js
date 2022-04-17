const fs = require('fs');
let input = fs.readFileSync('6.txt').toString().split('\n');

const num = Number(input[0])

for(let i = 1; i <= num; i++) {
    let count = 0
    let sum = 0


    const target = input[i];

    for(let j = 0; j <= target.length; j++) {
        
        if (target[j] === 'O') {
            count++
        } else {
            count = 0
        }
        sum += count
    }
    console.log(sum)
}