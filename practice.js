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
