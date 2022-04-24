// 어떤 정수와, 그 정수의 각 자리 숫자의 합으로 나타낼 수 없는 수

function notSelfNum(n) {
  // 숫자 하나를 더하는 함수
  // ex) 9645 넣으면 9645 + 5 + 4 + 6 + 9 = 9669
  // n자리 숫자 1의 자리 더하고 1의 자리를 제거, 모든 자리수 다 더하자
  let sum = n;

  // 자리수 구하기
  while (true) {
    if (n === 0) {
      break; // 1의 자리 수 제거, 결국 1의 자리 0
    }
    sum += n % 10; // 1의 자리 수 더하기
    n = parseInt(n / 10);
  }
  return sum;
}

function selfPlusNum(n) {
  let selfNum = [];
  let result = [];

  for (let i = 1; i <= n; i++) {
    let index = notSelfNum(i); // index 변수에 notSelfNum() 함수를 넣는다.

    if (index <= n) {
      selfNum[index] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!selfNum[i]) {
      result.push(i);
    }
    console.log(result.join("\n"));
  }
}

selfPlusNum(10000);
