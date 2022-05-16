const fs = require("fs");
let input = fs.readFileSync("2.txt").toString().split(" ");

console.log(input);

let num = parseInt(input);

// 6의 배수인거는 알겠음 근데 이 뒤로 어떻게 풀지 모르겠음
// 등비수열

// 2 3 4 5 6 7 -> 6, 2번
// 8 9 10 11 12 13 14 15 16 17 18 19 -> 12, 3번
// 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 38 -> 18, 4번
