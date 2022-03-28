const fs = require('fs');
let input = fs.readFileSync('1.txt').toString().split('\n')

let i = 0

while(true) {
    let nums = input[i].split(' ')

    console.log(nums)
    let a = Number(nums[0])
    let b = Number(nums[1])

    if(a === 0 && b === 0) {
        break
    }
    console.log(a + b)
    i++
}


