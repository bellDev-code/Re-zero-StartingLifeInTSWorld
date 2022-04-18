import { TodoItem } from ".";

type SortType = "asc" | "desc";

type SortOptions = {
  type: SortType;
  key: keyof TodoItem;
};

// function sortTypeHandler(todolist: TodoItem[], type: SortType) {
//   switch(type) {
//     case 'asc':
//      return todolist.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
//     case 'desc':
//       return todolist.sort((a, b) =>  b.createdAt.getTime() - a.createdAt.getTime());
//   }
// }

// function isString(v: Date | string): v is string {
//   return typeof v === 'string';
// }

// function isDate(v: Date | string): v is Date {
//   return v instanceof Date;
// }

// const a = 'test';

// if (isDate(a)) {
//   a.getTime()
// }

export function sortTodo(todolist: TodoItem[], options: SortOptions) {
  if (!todolist.length) {
    return [];
  }
  const { key, type } = options;
  const [first] = todolist;

  switch (typeof first[key]) {
    case "string":
      if (type === "asc") {
        todolist.sort((a, b) =>
          (a[key] as string).localeCompare(b[key] as string)
        );
      } else {
        todolist.sort((a, b) =>
          (b[key] as string).localeCompare(a[key] as string)
        );
      }
      break;
    default:
      if (first[key] instanceof Date) {
        if (type === "asc") {
          todolist.sort(
            (a, b) => (a[key] as Date).getTime() - (b[key] as Date).getTime()
          );
        } else {
          todolist.sort(
            (a, b) => (b[key] as Date).getTime() - (a[key] as Date).getTime()
          );
        }
      }
  }
}

// class Card {}
// class Money {}

// const cardInstance = new Card()
// const moneyInstance = new Money()

// if (moneyInstance instanceof Card) {
//   //
// }

// 키오스크

//조건이 2개만 가능
// true, false

// type WhereOption = 'store' | 'pickup'

// enum WhereOption {
//   store = 0,
//   pickup = 1
// }

// WhereOption.store, WhereOption.pickup

// 0, 1

// 'store', 'pickup'

// ----------
// 매장, 포장 |
// ---------
