const fs = require('fs');
let input = fs.readFileSync('2.txt').toString().split('\n')

let i = 0

while(i < input.length) {
    let nums = input[i].split(' ')

    let a = Number(nums[0])
    let b = Number(nums[1])

    console.log(a + b)
    i++
}