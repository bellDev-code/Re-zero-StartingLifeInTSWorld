import { TodoItem } from ".";

// 배열은 인덱스로 접근해서 인덱스로 끝난다.
export function deleteTodo(todolist: TodoItem[], id: number) {
  // delete todolist[del]

  // id 찾기 반복문
  let result: number = 0;

  for (let i = 0; i < todolist.length; i++) {
    if (todolist[i].id === id) {
      result = i;
      break;
    }
  }

  todolist.splice(result, 1);
}

// [
//   {
//     id: 0,
//     title: "1title",
//     content: "boxing",
//     createdAt: 'Fri Jan 07 2022 06:10:02 GMT+0900'
//   },
//   {
//     id: 1,
//     title: "2title",
//     content: "coding",
//     createdAt: 'Fri Jan 07 2022 06:10:02 GMT+0900'
//   },
// ]

// addTodo(todolist, "1title", "boxing", randomDate(new Date(2020, 1, 1), new Date()));
//   addTodo(todolist, "2title", "coding", randomDate(new Date(2020, 1, 1), new Date()));
//   addTodo(todolist, "3title", "MMA", randomDate(new Date(2020, 1, 1), new Date()));
