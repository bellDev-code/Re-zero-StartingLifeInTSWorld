const fs = require("fs");
let input = parseInt(fs.readFileSync("3.txt").toString());

// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
// 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.
// ex) 123, 135 ...

// 우선 한수의 뜻은 "각 자리수들이 등차수열을 이루는 수"이다.
// 등차수열이란 각 항들이 일정한 차이를 보이는 수열이다. 예를 들면 한수는 123(공차 1), 753(공차 -2), 111(공차 0)등이 가능하다.

// 100 보다 작은 애들은 무조건 한수인듯?

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
    if (tenSetNum === oneSetNum) {
      count++;
    }
  }
  console.log(count);
}

isHansoo(input);
