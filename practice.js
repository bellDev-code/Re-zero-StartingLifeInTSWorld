function greet(name) {
    console.log('Hello, ' + name.toUpperCase() + '!!');
}
// greet(42)
function getFavoriteNumber() {
    return 26;
}
// console.log(getFavoriteNumber())
// 아래 코드 타입 표기 없음, TypeScript는 버그를 감지
var names = ['Alice', 'Bob', 'Eve'];
// 함수에 대한 문맥적 타입 부여
names.forEach(function (s) {
    //   console.log(s.toUpperCase());
});
// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's x value is " + pt.y);
// }
// printCoord({ x: 3, y: 5 });
// Optional Types
function printName1(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// 둘 다 OK
// printName1({ first: 'Bob' });
// printName1({ first: 'Alice', last: 'Alisson' });
function printName2(obj) {
    // 오류 - obj.last의 값이 제공되지 않는다면 프로그램이 멈춥니다.
    //   console.log(obj.last.toUpperCase());
    var _a;
    if (obj.last !== undefined) {
        // OK
        // console.log(obj.last.toUpperCase());
    }
    // 최신 javascript 문법을 사용하였을 때 또 다른 안전한 코드
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// 둘 다 OK
// printName1({ first: 'Bob' });
// printName1({ first: 'Alice', last: 'Alisson' });
// 유니언 타입
// function printId(id: number | string) {
//   console.log("Your ID is: " + id)
// }
// printId(101)
// printId("202")
// printId({myID: 22323})
// function printId(id: number | string) {
//  console.log(id.toUpperCase())
// }
function printId(id) {
    if (typeof id === 'string') {
        // 이 분기에서 i는 'string' 타입을 가집니다.
        console.log(id.toUpperCase());
    }
    else {
        // 여기에서 id는 'number' 타입을 가집니다.
        console.log(id);
    }
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // 여기에서 'x'는 'string[]' 타입입니다.
        console.log("Hello, " + x.join(" and"));
    }
    else {
        // 여기에서 'x'는 'string' 타입입니다. 
        console.log("Welcome lone traveler " + x);
    }
}
function getFirstThree(x) {
    return x.slice(0, 3);
}
function printCoord(pt) {
    console.log("The coordinate;s x value is " + pt.x);
    console.log("The coordinate;s x value is " + pt.y);
}
function printAnimal(bear) {
    console.log("곰은 항상 크아아앙이라고 " + bear.name + "가 말했다.");
    console.log("곰은 꿀을 좋아한다." + bear.honey);
}
// printAnimal({name: "그리즐리", honey: true})
var changingString = "Hello World";
changingString = "winter is comming!";
changingString;
var constantString = "KARINA";
constantString;
// console.log(changingString, constantString)
function printText(s, alignment) {
    // ...
    console.log(s, alignment);
}
printText("Hello, world", "left");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    console.log(x);
}
// configure({width: 100});
// configure("auto")
// configure("automatic")
