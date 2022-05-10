const fs = require("fs");
let input = fs.readFileSync("5.txt").toString().split("\n");

// 각 테스트 데이터는 한 행으로서 H, W, N, 세 정수를 포함하고 있으며
// 각각 호텔의 층 수, 각 층의 방 수, 몇 번째 손님인지를 나타낸다(1 ≤ H, W ≤ 99, 1 ≤ N ≤ H × W).

// 6 12 10 -> 402호
// 30층 50방수 72손님 -> 1203호

let num = parseInt(input[0]);
let newArr = input.map((e) => e.split(" "));

let result = "";

for (let i = 0; i < num; i++) {
  let height = newArr[i][0];

  let sequence = newArr[i][2];

  let resultH = sequence % height;

  if (resultH === 0) {
    resultH = height;
  }

  let resultW = Math.ceil(sequence / height);

  resultW < 10 ? (resultW = "0" + resultW) : resultW;

  result += `${resultH}${resultW}` + "\n";

  if (i !== num - 1) result += "\n";
}

console.log(result);

// NAN이 왜 나오는지 모르겠음
