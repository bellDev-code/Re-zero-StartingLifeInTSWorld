const fs = require('fs');
let input = fs.readFileSync('3.txt').toString().split('\n');

let sum = String(input[0] * input[1] * input[2])

for(let i = 0; i <= 9; i++) {
    let count = 0

    for(let j = 0; j < sum.length; j++) {
        if (Number(sum[j]) === i) {
            count++
        }
    } 
    console.log(count)
}
