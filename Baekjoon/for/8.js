const fs = require('fs');
let input = fs.readFileSync('8.txt').toString();

const n = Number(input)
let result = ''

for(let i = 0; i < n; i++){
    result += '*'
    console.log(result)
}
