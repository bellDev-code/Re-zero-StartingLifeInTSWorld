// 문제 : 회원 등급(grade)에 따라 읽기, 쓰기, 삭제 권한 부여



// function solution(grade: string) {
//     console.log(`당신의 회원등급을 입력해주세요 :${grade}`)

//     const permission = "읽기"
//     const permission2 = "쓰기"
//     const permission3 = "삭제"

//      if(grade === "1") {
//          console.log(`${permission}권한 부여`)
//      } else if (grade === "2") {
//          console.log(`${permission}권한 부여\n${permission2}권한 부여`)
//      } else if (grade === "3") {  
//          console.log(`${permission}권한 부여 \n${permission2}권한 부여\n${permission3}권한 부여`)
//      } else {
//          console.log("잘못된 회원등급입니다.")
//      }
// }

// function solution(score: number) {
//     if(score >= 90 && score <= 100) {
//         console.log("A")
//     } else if(score >= 80 && score <= 89) {
//         console.log("B")
//     } else if(score >= 70 && score <= 79) {
//         console.log("C")
//     } else if(score >= 60 && score <= 69) {
//         console.log("D")
//     } else {
//         console.log("F")
//     }
// }


// // 윤년 문제
// function solution(year: number) {
//     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         console.log(1)
//     } else {
//         console.log(0)
//     }
// }



// function solution(x: number, y: number) {
//     if(x >= 0 && y >= 0) {
//         console.log(1)
//     } else if(x <= 0 && y>= 0) {
//         console.log(2)
//     } else if(x <= 0 && y <= 0) {
//         console.log(3)
//     } else if(x >= 0 && y <= 0) {
//         console.log(4)
//     }
// }

// // 오븐문제
// function solution(hour: number, minutes: number) {
//   // 1. 시간은 24시간
//   // 2. 분은 60분
//   // 3. 시간 = x, 분 = y
//   // 4. 하루의 시작은 0:0, 끝은 23:59
//   // 5. 00시일때 -> 23시
//   // 6. 45분보다 작은 분일때
  
//   if(minutes - 45 < 0) {
//     minutes = 60 + (minutes - 45)
//     hour -= 1

//     if(hour === -1) {
//     hour = 23
//     }
//   } else {
//     minutes -= 45
//   }

//   console.log(hour + " " + minutes)
// }


export default solution;