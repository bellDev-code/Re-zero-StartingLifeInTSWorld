enum Color { Red = 1, Green = 3, Blue =4 }

// enum은 0부터 시작하여 번호를 매긴다.
// 모든 값은 수동으로 설정할 수 있다.
// 매겨진 값을 사용해 enum의 이름을 알아낼 수 있다.
// 일치하지 않으면 undefiend 출력

let c:Color = Color.Green
let colorName: string = Color[3]

// console.log(colorName)

let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;
// notSure.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed();

let list: any[] = [1, true, "free"]

list[1] = 100

// function warnUser(): void {
// 	console.log("This is my warning message");
// }

// console.log(typeof warnUser())

// let unusable: void = undefined;
// unusable = null;

let u: undefined = undefined;
let n: null = null;

// console.log(u, n)

// function error(message: string): never {
// 	throw new Error(message)
// }

// function fail() {
//     return error("Something failed")
// }

// function infiniteLoop(): never {
//     while(true) {
//         console.log("흐에?")
//     }
// }
// infiniteLoop()

// declare function create(o: object | null): void;

// create({prop: 0});
// create(null)

let someValue: any = "this is a string"

// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

// console.log(strLength)

// 첫 번째 인터페이스
// function printLabel(labeledObj: {label: string}) {
//     console.log(labeledObj.label)
// }

// let myObj = {size: 10, label: "Size 10 Object"}
// printLabel(myObj);

interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}

let myObj = {size: 10, label: "Size 10 Object"}
// printLabel(myObj)

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "White", area: 100};

    if(config.color) {
        newSquare.color = config.color;
    }

    if(config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({color: "black"})

console.log(mySquare)
