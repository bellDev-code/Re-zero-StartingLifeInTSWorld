import { TodoItem } from ".";

type SortType = "asc" | "desc";

type SortOptions = {
  type: SortType;
  key: keyof TodoItem;
};

export function sortTodo(todolist: TodoItem[], options: SortOptions) {
  if (!todolist.length) {
    return [];
  }

  const { key, type } = options;
  const [first] = todolist;

  switch (typeof first[key]) {
    case "string":
      if (type === "asc") {
        todolist.sort((a, b) => (a[key] as string).localeCompare(b[key] as string));
      } else {
        todolist.sort((a, b) => (b[key] as string).localeCompare(a[key] as string));
      }
      break;
    case "number":
      if (type === "asc") {
        todolist.sort((a, b) => (a[key] as number) - (b[key] as number));
      } else {
        todolist.sort((a, b) => (b[key] as number) - (a[key] as number));
      }

    default:
      if (first[key] instanceof Date) {
        if (type === "asc") {
          todolist.sort((a, b) => (a[key] as Date).getTime() - (b[key] as Date).getTime());
        } else {
          todolist.sort((a, b) => (b[key] as Date).getTime() - (a[key] as Date).getTime());
        }
      }
  }
}
