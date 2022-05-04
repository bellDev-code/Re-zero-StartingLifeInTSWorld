const fs = require("fs");
let input = fs.readFileSync("5.txt").toString().split("\n");

console.log(input);

const upperList = input[0].toUpperCase().split("");

const map = {};

// O(n)
for (const char of upperList) {
  map[char] = (map[char] || 0) + 1;
}

for (const char in map) {
  console.log(char);
}
