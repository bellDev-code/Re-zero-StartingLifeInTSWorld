const fs = require("fs");
let input = fs.readFileSync("5.txt").toString().split("\n");

const newArr = new Array(26).fill(0);
const alphArr = [];
const toUpperCase = input[0].toUpperCase().split("");

for (let i = 65; i <= 90; i++) {
  alphArr.push(String.fromCharCode(i));
}

// i j k z
// O(n^2)
for (let i = 0; i < toUpperCase.length; i++) {
  for (let j = 0; j < alphArr.length; j++) {
    if (toUpperCase[i] === alphArr[j]) {
      newArr[j] += 1;
    }
  }
}

// 요거
let maxIndex = 0;
let count = 0;

for (let i = 1; i < newArr.length; i++) {
  if (newArr[maxIndex] === newArr[i]) {
    count++;
  } else if (newArr[maxIndex] < newArr[i]) {
    maxIndex = i;
    count = 1;
  }
}

if (count > 1) {
  console.log("?");
} else {
  console.log(alphArr[maxIndex]);
}

// let maxValue = newArr[0];

// 카드 예시

// for (let i = 1; i < newArr.length; i++) {
//   if (newArr[i] > maxValue) {
//     maxValue = newArr[i];
//   }
// }

// let minValue = newArr[0];

// for (let i = 1; i < newArr.length; i++) {
//   if (newArr[i] < minValue) {
//     minValue = newArr[i];
//   }
// }

// console.log(maxIndex, alphArr[maxIndex], maxValue, minValue);

// MISSISSIPI 해당 하는 알파벳의 갯수까지는 찾음
// 다음단계 어떻게 진행할지 질문하기
