// function print(char: string) {
//     console.log()
//   }
  
//   print("안녕하세요!")

  // 문제) 문자열 받고 그 문자열 하나씩 출력.
  // 1. 문자열이 반복가능한 객체이므로 반복문 사용하여 하나씩 출력
  // 2. str[] 하나씩 출력해준다.
  // 3. 시작 인덱스 : 0, 
  // 4. 끝 인덱스 : str.length - 1
  // 5. 시작 원소 : str[0]
  // 6. 끝 원소 : str[str.length - 1]
  // 7.
  
  // 0
  // 1
  // 2
  // 3
  // 4
//   function iterable(str: string) {
//     for (let i = 0; i < str.length; i++) {
//        console.log(str[i])
//     }
//   }

//   iterable("안녕하세요")

// 1. 처음 원소부터 끝 원소까지 한글자씩 출력
// 조건 true동안 while 실행
// 조건 : 처음 원소부터 끝 원소까지 반복문(true)을 돌린 다음 끝 원소의 조건 false
// 인덱스 필요, 인덱스의 끝, 
// 인덱스 선언 let index = 0
// while을 끝내려면 조건문을 false!

// 시작원소 끝원소를 알아야한다.
// function iterable(str: string) {
//     let index = 0;
//     while (index < str.length) {
//         index++
//         console.log(str)
//     }
// }
// do while

// iterable("안녕하세요")

// 문자열, 길이 인수로 받아서 길이 이상이면 true 출력 이하면 false 출력
function print(str: string, length: number) {
    if(str.length > length ) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// print("foo", 2) // true
// print("foo", 4) // false

// 숫자가 양수면 true, 음수면 false

function numPrint(num: number) {
    if(num > 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// numPrint(3) // true
// numPrint(0) // false
// numPrint(-3) // false

// 숫자가 짝수면 1 , 홀수면 -1 출력 정수가 아니면 0

function numberPrint(num: number) {
    if(num % 2 === 0) {
        console.log(1)
    } else if(num % 2 === 1) {
        console.log(-1)
    } else {
        console.log(0)
    }
}
// numberPrint(2.1)
// numberPrint(1)
// numberPrint(20)

// 구매한 가격을 입력 받고, 금액에 따라 할인율을 적용 받는다.
// 출력 결과 - 최종 결제액은 얼마 입니다.
function discount(money: number) {
    if(money >= 10000) {
       const saleAmount = money * 5 /100
        console.log(`최종 결제액은 ${money - saleAmount}`)
    } else if(money >= 50000) {
        const saleAmount = money * 10/100
        console.log(`최종 결제액은 ${money - saleAmount}`)
    } else if(money >= 100000) {
        const saleAmount = money * 20/100
        console.log(`최종 결제액은 ${money - saleAmount}`)
    } else {
        console.log(`최종 결제액은 ${money}입니다. 10000원 이상 구매시 할인되니 많이 사주세요^^`)
    }
}

// discount(10000);
// discount(50000)
// discount(100000)
// discount(5000)

// 