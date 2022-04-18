// import 모듈명 from ""
// import {} from ""
import { addTodo } from "./addTodo";
import { deleteTodo } from "./deleteTodo";
import { todayTodo } from "./contents";
import { randomDate } from "./utils";
import { sortTodo } from "./sortTodo";

/**
 * @TODO  id 속성 추가
 *        add할떄마다 자동으로 1씩 늘어남
 */
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

  addTodo(
    todolist,
    "1title",
    "boxing",
    randomDate(new Date(2020, 1, 1), new Date())
  );
  addTodo(
    todolist,
    "2title",
    "coding",
    randomDate(new Date(2020, 1, 1), new Date())
  );
  addTodo(
    todolist,
    "3title",
    "MMA",
    randomDate(new Date(2020, 1, 1), new Date())
  );
  addTodo(
    todolist,
    "4title",
    "lostArk",
    randomDate(new Date(2020, 1, 1), new Date())
  );
  addTodo(
    todolist,
    "5title",
    "mobileDF",
    randomDate(new Date(2020, 1, 1), new Date())
  );
  addTodo(
    todolist,
    "6title",
    "lol",
    randomDate(new Date(2020, 1, 1), new Date())
  );
  addTodo(
    todolist,
    "7title",
    "loltochess",
    randomDate(new Date(2020, 1, 1), new Date())
  );
  addTodo(
    todolist,
    "8title",
    "lunch",
    randomDate(new Date(2020, 1, 1), new Date())
  );
  addTodo(
    todolist,
    "9title",
    "evening",
    randomDate(new Date(2020, 1, 1), new Date())
  );

  /**
   * @TODO index대신 id로 삭제
   */
  deleteTodo(todolist, 1);

  // todolist.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

  /**
   * @TODO id 정렬, 오름차순, 내림차순 추가
   */
  sortTodo(todolist, {
    key: "createdAt",
    type: "asc",
  });

  // createdAt 별로 정렬하는 함수 (오름차순, 내림차순)
  // 함수 하나로 오름차순, 내림차순 둘다 처리 가능하게
  todayTodo(todolist);
}

// 오늘의 할일은 ~이며 생성된 날짜는 ~입니다.

exec();

// const arr = [randomDate(new Date(2020, 1, 1), new Date()),randomDate(new Date(2020, 1, 1), new Date()),randomDate(new Date(2020, 1, 1), new Date()),randomDate(new Date(2020, 1, 1), new Date()),randomDate(new Date(2020, 1, 1), new Date())];

// arr.sort((a, b) => b.getTime() - a.getTime())
// arr.sort((a, b) => a.getTime() - b.getTime())

const arr = ["b", "c", "a", "e", "d"];

// arr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))

// arr.sort((a, b) => b.localeCompare(a));
// console.log(arr)
