import { TodoItem } from ".";

export function todayTodo(todolist: TodoItem[]) {
    for(let i = 0; i < todolist.length; i++) {
        console.log(`오늘의 할일은 ${todolist[i].content}이며, 생성된 날짜는 ${todolist[i].createdAt}입니다.`)
    }
}

// function 하나 만들어서 
// start: Date, end: Date
// 이 두 날짜 사이에 있는 Todo만 출력
// function test

// startD가 랜덤데이트 결과값일때
export function compareDate(startD: Date, endD: Date) {
    if(startD < endD) {
        return startD
    } else {
        return endD
    }
}


// test(new Date(2022, 1, 3), new Date(2022,2,4))