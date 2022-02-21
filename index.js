"use strict";
// const a = 3;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// typeof 결과는 string
// 1 true 음수여도 true
// 0 false
// 참, 거짓 처리
// false => 0, "", undefined, null, void 0
// true => 0이 아닌 수, ""이 아닌 문자열, [], {}, function() {},
// 함수는 오브젝트가 아니다.
// console.log(typeof Symbol(1));
// if (void 0) {
//   console.log('check');
// }
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', function (line) {
    console.log('line', line);
    rl.close();
});
rl.on('close', function () {
    process.exit();
});
