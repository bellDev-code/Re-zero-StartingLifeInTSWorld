const fs = require("fs");
let input = fs.readFileSync("8.txt").toString();
// console.log(input);

// 밑 코드 말고 다른 방식 물어보기

const map = {
  A: 2,
  B: 2,
  C: 2,
  D: 3,
  E: 3,
  F: 3,
  G: 4,
  H: 4,
  I: 4,
};

map["C"] = 3;

const hashmap = new Map();

hashmap.set("A", 3);
hashmap.set("B", 3);
hashmap.set("C", 3);
hashmap.set("D", 3);
hashmap.set("E", 3);

hashmap.get("A");

for (let i = 0; i < input.length; i++) {
  const char = input[i];
  console.log(map[char]);
}

let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "A" || input[i] === "B" || input[i] === "C") {
    result = result + 3;
  } else if (input[i] === "D" || input[i] === "E" || input[i] === "F") {
    result = result + 4;
  } else if (input[i] === "G" || input[i] === "H" || input[i] === "I") {
    result = result + 5;
  } else if (input[i] === "J" || input[i] === "K" || input[i] === "L") {
    result = result + 6;
  } else if (input[i] === "M" || input[i] === "N" || input[i] === "O") {
    result = result + 7;
  } else if (input[i] === "P" || input[i] === "Q" || input[i] === "R" || input[i] === "S") {
    result = result + 8;
  } else if (input[i] === "T" || input[i] === "U" || input[i] === "V") {
    result = result + 9;
  } else if (input[i] === "W" || input[i] === "X" || input[i] === "Y" || input[i] === "Z") {
    result = result + 10;
  }
}

// console.log(result);
