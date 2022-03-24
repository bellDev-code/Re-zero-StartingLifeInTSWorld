
// arguments, inputs, parameters
// return, output
// function func2() {

// }
// 인수 : 호출할 때 들어가는 inputs

// callback (함수에서 함수를 부르느)

// console.log(typeof func)

// NaN void null undefined
// NaN 이상한 값일 떄
// void 빈 값 (함수에서만)
// null 코드를 짠사람이 의도적으로 빈값을 넣을 때
// undefined 정의 안된거

// const obj = {
//   coffee: null,
// }


type PowerFunc = (num: number) => number;

type PriceFunc = (text: number) => number;



type NameAge = {
  name: string;
  age: number;
}

type Cat = NameAge & {
  cutty: number;
}

type Person =NameAge &  {
  money: number;
}


function get(na:NameAge ) {
  na.age += 10;
  return na
}

const cat: Cat = {
  name: '코블',
  age: 5,
  cutty:Infinity
}

const person: Person = {
  name: '런',
  age: 20,
  money: 100,
}

get(person)


function print(text: number): number {
  console.log(text)
  return 0;
}

// type 중에 Object, Function, any 사용 자제
function func(cb: PowerFunc) {

  const result = cb(1);
}

func(print) // 콜백함수

// optional operator 쓴 input뒤에는 optional이 아닌 input이 올 수 없다.
// function foo1(input1: number, input2?: number) {
  
// }

// function foo2(input1?: number, input2: number) {
  
// }

// function foo3(input1: number | undefined, input2: number) {
  
// }

// function func3(...arg: number[]) {

// }

// func3(1,2,3,4,5,6)


// function func4(arr: number[]) {

// }


// func3([1,2,3,4,5])


// function func5() {
//   const a = arguments
// }


// a라는 매개변수 person 타입을 가지고 있고
// 매개변수 a의 name => 대문자로 바꾸는거
// 반환값은 name 키값이 대문자로 바뀐 a(Person)  
function upperName(a: Person): Person {
  a['name'] = a.name.toUpperCase()
  return a
}


const person2: Person = {
  name: 'honggildong',
  age: 20,
  money: 100,
}

const changed = upperName(person2)

// shallow, deep

console.log(changed.name) // HONGGILDONG
console.log(person2.name) // HONGGILDONG

// const res = upperName(person2)
const str = JSON.stringify(upperName(person2))

// {
//   name: 'HONGGILDONG',
//   age: 20,
//   money: 100,
// }

function t(p: Person): string {
  return p.name
}


t(person) // string

