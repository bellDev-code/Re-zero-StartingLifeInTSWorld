let obj = {
    name: '영도',
    age: 9
}
// 오브젝트 키값 삭제 (ts에서는 Optional인 key만 삭제 가능하다.)
// delete obj['name']

// ts 에서 편하게 키값 지우는 방법 
const {name: _, ...removedNameObj} = obj

const obj6: {
  name?: string;
  age?: number;
} = {
  name: '영도',
  age: 9
}
// 오브젝트 키값 삭제 (Optional로 type을 지정해줬기 때문에 delete로 삭제 가능)
delete obj6['name']

// js의 object 의 키는 string

// 키 접근 1번 방법
const result = obj.name
// console.log(result)
// 키 접근 2번 방법
obj['name']

const obj3 = {
  1: 1,
  2: 4,
  3: 9
}

// 자바스크립트는 오브젝트의 key값이 항상 string
// 그러나, 타입스크립트에서는 여러 타입으로 선언 가능
const obj4: Record<string, string | number> = {
  'name': 'asdsad',
  price: 15252
}

type Synergy = '바닥요정' | '이직'
// const obj5: { 
//   [k in Synergy]: number
// } = {}

const obj2: Record<number, number> = {}

for (let i = 1; i <= 30; i++) {
  obj2[i] = Math.pow(i, 2)
}

// 오브젝트 뒤에 []는 배열이 아니고 키 입력받기 위한 []일뿐
delete obj2[2]
delete obj2[4]
delete obj2[6]

for (let i = 2; i <= 30; i++) {
   if(i % 2 === 0) {
    delete obj2[i]
   }
}
// console.log(obj2)
// 키가 짝수인 키값 삭제하기

// 입력 받은 num만큼의 길이를 가진 오브젝트 만들기.
// 키는 number 값은 키의 제곱값
// 만들어진 오브젝트의 짝수 키값 삭제하기
function solution(num: number) {
    const obj: Record<number, number> = {}

    for(let i = 1; i <= num; i++) {
        obj[i] = i * i
    }
    
    for(let i = 2; i <= num; i++) {
        if(i % 2 === 0) {
            delete obj[i]
        }
    }
    return obj
}

// console.log(solution(100))

const test = {
    name: "영도",
    age: 9
}

// delete test['name']
const { name: __ , ...removeName } = test 


function solution2(num: number) {
    let obj: Record<number, number> = {}

    for(let i = 1; i <= num; i++) {
        obj[i] = i * i
    }

    for(let i = 2; i <= num; i++) {
        if(i % 2 === 0) {
            // spread operator는 기존 오브젝트를 변형시키지 않고 새로 생성함
            const { [i]: _, ...removeKey} = obj
            obj = removeKey
        }
    }
    return obj
}

// 짝수가 제거된 길이 50까지의 오브젝트
// const result2 = solution2(50)

// const keys = Object.keys(result2)
// const values = Object.values(result2)

// console.log(keys)
// console.log(values)

// const entries = Object.entries(result2)
// console.log(entries)


/** 전체 다 찍기
 * 
 * 키 1의 값은 1입니다
 * 키 3의 값은 9입니다
 * 키 5의 값은 25입니다
 * 키 7의 값은 49입니다
 * ...
 */

function objectPractice(num: number) {
  let obj3: Record<number, number> = {}

  for(let i = 1; i <= num; i++) {
    obj3[i] = i * i
  }
  return obj3
}

const result3 = objectPractice(10)

// for(const [key, value] of Object.entries(result3)) {
//   console.log(`키 ${key}의 값은 ${value}입니다`)
// }

function objectPractice2(num: number) {
  let obj4: Record<number, number> = {}

  for(let i = 1; i <= num; i++) {
    obj4[i] = i * i
  }
  
  for(let i = 1; i <= num; i++) {
    if(i % 2 === 0) {
      const { [i]: _, ...keyName } = obj4
      obj4 = keyName
    }
  }
  return obj4
}

const result4 = objectPractice2(30)

for(const [key, value] of Object.entries(result4)) {
  console.log(`키 ${key}의 값은 ${value}입니다`)
}

/** 30 이하만
 * 
 * 키 1의 값은 1입니다
 * 키 3의 값은 9입니다
 * 키 5의 값은 25입니다
 * 키 7의 값은 49입니다
 * ...
 */