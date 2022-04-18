import { TodoItem } from ".";

export function deleteTodo(todolist: TodoItem[], index: number) {
  // delete todolist[del]
  todolist.splice(index, 1);
}
