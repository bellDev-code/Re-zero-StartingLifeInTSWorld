// myAdd는 전체 함수 타입을 가집니다.
// let myAdd = function(x: number, y: number): number { return x + y};

// 매개변수 x와 y는 number 타입을 가집니다.
// let myAdd: (baseValue: number, increment: number) => number =
// function(x, y) { return x + y};

function builName(firstName: string, lastName: string) {
	return firstName + " " + lastName;
}

// let result1 = builName("Bob"); // 오류, 너무 적은 매개변수
// let result2 = builName("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
// let result3 = builName("Bob", "Adams"); // 정확

function buildName2(firstName: string, lastName?: string) {
    if(lastName){
        return firstName + " " + lastName;
    } else 
    return firstName
}

// let result1 = buildName2("Bob"); // 지금은 바르게 동작
// let result2 = buildName2("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
// let result3 = buildName2("Bob", "Adams"); // 정확함

function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName
}

// let result1 = buildName3("Bob") // 올바르게 동작
// let result2 = buildName3("Bob", undefined); // 여전히 동작, "Bob Smith" 반환
// let result3 = buildName3("Bob", "Adams", "Sr.") // 오류 너무 많은 매개변수
// let result4 = buildName3("Bob", "Adams"); // 정확함

function buildName4(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName4("Bob");                  // 오류, 너무 적은 매개변수
// let result2 = buildName4("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
// let result3 = buildName4("Bob", "Adams");         // 성공, "Bob Adams" 반환
// let result4 = buildName4(undefined, "Adams");     // 성공, "Will Adams" 반환

function buildName5(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName 은 "Joseph Samuel Lucas MacKinzie" 가 될것입니다.
let employeeName = buildName5("Joseph", "Samuel", "Lucas", "MacKinzie");

function buildName6(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName6;

// let deck = {
// 	suits: ["heart", "spades", "clubs", "diamonds"],
// 	cards: Array(52),
// 	createCardPicker: function() {
// 		return function() {
// 			let pickedCard = Math.floor(Math.random() * 52);
// 			let pickedSuit = Math.floor(pickedCard / 13);

// 			return {suit: this.suits[pickedSuit], card: pickedCard % 13}	
// 		}	
// 	}
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + pickedCard.suit);

// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         // NOTE: 아랫줄은 화살표 함수로써, 'this'를 이곳에서 캡처할 수 있도록 합니다
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

function f(this: void) {
    // 독립형 함수에서 `this`를 사용할 수 없는 것을 확인함
}

interface Card {
	suit: string;
	card: number;
}

interface Deck {
	suits: string[];
	cards: number[];
	createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	// Note: 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정
	createCardPicker: function(this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);

			return {suit: this.suits[pickedSuit], card: pickedCard % 13}
		}
	}
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);