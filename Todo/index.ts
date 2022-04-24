// import 모듈명 from ""
// import {} from ""
import { addTodo } from "./addTodo";
import { deleteTodo } from "./deleteTodo";
import { getTodoList } from "./contents";
import { randomDate } from "./utils";
import { sortTodo } from "./sortTodo";
import { nanoid } from "nanoid";

// id 속성 추가
// add할떄마다 자동으로 1씩 늘어남
export type TodoItem = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
};

const todolist: TodoItem[] = [];

function exec() {
  // todo를 10개 이상 넣고

  addTodo(todolist, "1title", "boxing", randomDate(new Date(2020, 1, 1), new Date()));
  addTodo(todolist, "2title", "coding", randomDate(new Date(2020, 1, 1), new Date()));
  addTodo(todolist, "3title", "MMA", randomDate(new Date(2020, 1, 1), new Date()));
  addTodo(todolist, "4title", "lostArk", randomDate(new Date(2020, 1, 1), new Date()));
  addTodo(todolist, "5title", "mobileDF", randomDate(new Date(2020, 1, 1), new Date()));
  addTodo(todolist, "6title", "lol", randomDate(new Date(2020, 1, 1), new Date()));
  addTodo(todolist, "7title", "loltochess", randomDate(new Date(2020, 1, 1), new Date()));
  addTodo(todolist, "8title", "lunch", randomDate(new Date(2020, 1, 1), new Date()));
  addTodo(todolist, "9title", "evening", randomDate(new Date(2020, 1, 1), new Date()));

  deleteTodo(todolist, 5);

  // todolist.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

  sortTodo(todolist, {
    key: "id",
    type: "asc",
  });

  // createdAt 별로 정렬하는 함수 (오름차순, 내림차순)
  // 함수 하나로 오름차순, 내림차순 둘다 처리 가능하게

  getTodoList(todolist, {
    dateRange: {
      from: new Date(2020, 1, 1),
      to: new Date(2021, 9, 31),
    },
    /**
     * @Todo
     *  */
    search: {
      keyword: "lol",
      key: "content",
    },
  });
}

// 오늘의 할일은 ~이며 생성된 날짜는 ~입니다.

exec();

// const arr = [randomDate(new Date(2020, 1, 1), new Date()),randomDate(new Date(2020, 1, 1), new Date()),randomDate(new Date(2020, 1, 1), new Date()),randomDate(new Date(2020, 1, 1), new Date()),randomDate(new Date(2020, 1, 1), new Date())];

// arr.sort((a, b) => b.getTime() - a.getTime())
// arr.sort((a, b) => a.getTime() - b.getTime())

// const arr = ["b", "c", "a", "e", "d"];

// arr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))

// arr.sort((a, b) => b.localeCompare(a));
// console.log(arr)
