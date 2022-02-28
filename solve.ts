// 문제 : 회원 등급(grade)에 따라 읽기, 쓰기, 삭제 권한 부여
// 


function solution(grade: string) {
    console.log(`당신의 회원등급을 입력해주세요 :${grade}`)

    const permission = "읽기"
    const permission2 = "쓰기"
    const permission3 = "삭제"

     if(grade === "1") {
         console.log(`${permission}권한 부여`)
     } else if (grade === "2") {
         console.log(`${permission}권한 부여\n${permission2}권한 부여`)
     } else if (grade === "3") {  
         console.log(`${permission}권한 부여 \n${permission2}권한 부여\n${permission3}권한 부여`)
     } else {
         console.log("잘못된 회원등급입니다.")
     }
}

export default solution;