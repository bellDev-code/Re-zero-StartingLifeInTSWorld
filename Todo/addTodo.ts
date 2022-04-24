// 1.
// import { nanoid } from "nanoid";
import { TodoItem } from ".";

// id 자동 할당
// hint: array length

export function addTodo(todolist: TodoItem[], title: string, con: string, date: Date) {
  todolist.push({ id: todolist.length + 1, title: title, content: con, createdAt: date });
}

/**
id unique
number or string
uuid <--- 자동으로 랜덤 생성해주는 거
number id 는 1 부터 1씩 증가하면서 늘어나는거 */
