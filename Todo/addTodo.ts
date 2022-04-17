// 1.
import { TodoItem } from '.';

export function addTodo(todolist: TodoItem[], title: string, con: string, date: Date) {
  // id 자동 할당
  // hint: array length
  todolist.push({ title: title, content: con, createdAt: date });
}
