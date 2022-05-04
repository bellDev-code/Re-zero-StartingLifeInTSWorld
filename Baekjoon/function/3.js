const fs = require("fs");
let input = parseInt(fs.readFileSync("3.txt").toString());

function isHansoo(input) {
  let count = 0;

  for (let i = 1; i <= input; i++) {
    let hansoo = String(i);
    // console.log(hansoo);
    // console.log(hansoo[0], "100의자리");
    // console.log(hansoo[1], "10의자리");

    if (i < 100) {
      count++;
      continue;
    }

    // 현재 작성한 코드는 1000자리 수가 들어오면 맞지 않는다.
    // 입력값이 110이므로 101, 102, 103, ... 110 등 처리해야함.
    // ex) 101이 들어온다면 1 - 0 = 1 (세자리까지밖에 안됨)
    // let tenSetNum = parseInt(hansoo[0]) - parseInt(hansoo[1]);
    // ex) 101 0 - 1 = -1
    // let oneSetNum = parseInt(hansoo[1]) - parseInt(hansoo[2]);

    // ex) 101은 1과 -1이므로 한수가 아니다. 100부터 110까지는 한수가 아님.
    // if (tenSetNum === oneSetNum) {
    //   count++;
    // }

    const list = hansoo.split("");

    let diff;
    let isHansoo = true;
    for (let i = 0; i < list.length - 1; i++) {
      const currentDiff = parseInt(list[i]) - parseInt(list[i + 1]);

      if (typeof diff === "number" && diff !== currentDiff) {
        isHansoo = false;
        break;
      }
      diff = currentDiff;
    }

    if (isHansoo) count++;
  }
  console.log(count);
}

isHansoo(input);
