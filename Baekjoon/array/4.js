const fs = require('fs');
let input = fs.readFileSync('4.txt').toString().split('\n');

let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Number(input[i]));
}

let newArr = arr.map(function(item) {
  return item % 42;
});

let diffArr = [];

newArr.forEach(function(item) {
  if (diffArr.indexOf(item) === - 1 ) {
    diffArr.push(item);
  }
});

console.log(diffArr.length);