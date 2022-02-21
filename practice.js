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
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's x value is " + pt.y);
}
printCoord({ x: 3, y: 5 });
function printName1(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// 둘 다 OK
printName1({ first: 'Bob' });
printName1({ first: 'Alice', last: 'Alisson' });
function printName2(obj) {
    var _a;
    // 오류 - obj.last의 값이 제공되지 않는다면 프로그램이 멈춥니다.
    console.log(obj.last.toUpperCase());
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// 둘 다 OK
printName1({ first: 'Bob' });
printName1({ first: 'Alice', last: 'Alisson' });
