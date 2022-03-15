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