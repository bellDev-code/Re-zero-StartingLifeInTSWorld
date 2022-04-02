const array1 = ['a', 'b', 'c']

array1.forEach(el => console.log(el))


const arr = [1, 3,, 7]
let numCallCount = 0

arr.forEach(function(item) {
    // console.log(item)
    numCallCount++
})

// console.log("numCallback: ", numCallCount)

const items = ['item1', 'item2', 'item3']
const copy = []

// for문
// for(let i = 0; i < items.length; i ++) {
//     copy.push(items[i])
// }

// forEach문
items.forEach(function(item) {
    copy.push(item)
})

console.log(copy)