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