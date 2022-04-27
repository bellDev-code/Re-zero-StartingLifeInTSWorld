import { TodoItem } from ".";

type ReadListOptions = {
  dateRange?: DateRange;
  search?: SearchOptions;
};

type SearchOptions = {
  keyword: string;
  key: keyof TodoItem;
};

type DateRange = {
  to: Date;
  from: Date;
};

// 지금은 전체 출력, 옵션을 줘서 특정 기간별 사이에 있는 데이터만 출력하기

// todolist의 createAt 시간과 특정 기간 비교
export function getTodoList(todolist: TodoItem[], options: ReadListOptions) {
  return display(apply(todolist, options));
}

function apply(origin: TodoItem[], options: ReadListOptions) {
  const { dateRange, search } = options;
  let list: TodoItem[] = [];

  /**
   * dateRange
   * keyword
   * dateRange, keyword
   * x
   */

  // if (dateRange && keyword) {
  //   return origin.filter(
  //     (e) =>
  //       e.createdAt.getTime() > dateRange.from.getTime() &&
  //       e.createdAt.getTime() < dateRange.to.getTime() &&
  //       e.content.indexOf(keyword) > -1
  //   );
  // }

  /**
   *
   * @Todo
   *
   * search.key 에 따라 검색
   * sort 키 값
   * title, content 등등 검색할 수 있게
   * 지금은 content로 밖에 검색이 안된다.
   *
   */

  for (let i = 0; i < origin.length; i++) {
    if (dateRange && keyword) {
      if (
        origin[i].createdAt.getTime() > dateRange.from.getTime() &&
        origin[i].createdAt.getTime() < dateRange.to.getTime() &&
        origin[i].content.indexOf(keyword) > -1
      ) {
        list.push(origin[i]);
      }
    } else if (dateRange) {
      if (
        origin[i].createdAt.getTime() > dateRange.from.getTime() &&
        origin[i].createdAt.getTime() < dateRange.to.getTime()
      ) {
        list.push(origin[i]);
      }
    } else if (keyword) {
      if (origin[i].content.indexOf(keyword) > -1) {
        list.push(origin[i]);
      }
    } else {
      for (let i = 0; i < origin.length; i++) {
        list.push(origin[i]);
      }
    }
  }

  return list;
}

function display(list: TodoItem[]) {
  for (const item of list) {
    console.log(`${item.id} [${item.title}] 오늘의 할일은 ${item.content}이며, 생성된 날짜는 ${item.createdAt}입니다.`);
  }
}

// test(new Date(2022, 1, 3), new Date(2022,2,4))
