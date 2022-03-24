// 1.
import { TodoItem } from ".";

export function addTodo(todolist: TodoItem[], con: string, date: Date) {
    todolist.push({content: con, createdAt: date })
}