function greet(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}

// greet(42)

function getFavoriteNumber(): number {
  return 26;
}

// console.log(getFavoriteNumber())

// 아래 코드 타입 표기 없음, TypeScript는 버그를 감지
const names = ['Alice', 'Bob', 'Eve'];

// 함수에 대한 문맥적 타입 부여
names.forEach(function (s) {
  //   console.log(s.toUpperCase());
});

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's x value is " + pt.y);
}

printCoord({ x: 3, y: 5 });

// Optional Types
function printName1(obj: { first: string; last?: string }) {
  console.log(obj.last?.toUpperCase());
}
// 둘 다 OK
printName1({ first: 'Bob' });
printName1({ first: 'Alice', last: 'Alisson' });

function printName2(obj: { first: string; last?: string }) {
  // 오류 - obj.last의 값이 제공되지 않는다면 프로그램이 멈춥니다.
  //   console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    // OK
    // console.log(obj.last.toUpperCase());
  }

  // 최신 javascript 문법을 사용하였을 때 또 다른 안전한 코드
  console.log(obj.last?.toUpperCase());
}
// 둘 다 OK
printName1({ first: 'Bob' });
printName1({ first: 'Alice', last: 'Alisson' });
