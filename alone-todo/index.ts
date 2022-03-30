type TodoItems = {
    content: string;
    createdAt: Date;
}

const todolist: TodoItems[] = []

function addTodo(todolist: TodoItems[], title: string, date: Date ) {
    todolist.push({ content: title, createdAt: date })
}