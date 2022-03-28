// import 모듈명 from ""
// import {} from ""
import { addTodo } from "./addTodo";
import { deleteTodo } from "./deleteTodo";
import { compareDate, todayTodo } from "./contents";
import {randomDate} from "./utils"

export type TodoItem = {
    content: string;
    createdAt: Date;
}

const todolist: TodoItem[] = []

function exec() {

    // todo를 10개 이상 넣고

  addTodo(todolist, 'boxing', randomDate(new Date(2020, 1, 1), new Date()))

  // addTodo(todolist, 'coding', randomDate(new Date(2020, 1, 1), new Date()))
  // addTodo(todolist, 'MMA', randomDate(new Date(2020, 1, 1), new Date()))
  // addTodo(todolist, 'lostArk', randomDate(new Date(2020, 1, 1), new Date()))
  // addTodo(todolist, 'epicseven', randomDate(new Date(2020, 1, 1), new Date()))
  // addTodo(todolist, 'lol', randomDate(new Date(2020, 1, 1), new Date()))
  // addTodo(todolist, 'loltochess', randomDate(new Date(2020, 1, 1), new Date()))
  // addTodo(todolist, 'lunch', randomDate(new Date(2020, 1, 1), new Date()))
  // addTodo(todolist, 'evening', randomDate(new Date(2020, 1, 1), new Date()))

  // deleteTodo(todolist, 1)

  // createdAt 별로 정렬하는 함수 (오름차순, 내림차순)
  // 함수 하나로 오름차순, 내림차순 둘다 처리 가능하게
  todayTodo(todolist)
}

// 오늘의 할일은 ~이며 생성된 날짜는 ~입니다.

exec();