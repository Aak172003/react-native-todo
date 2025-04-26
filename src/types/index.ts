export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}
export interface TodoListProps {
    // type of todos is an array of Todo objects
    todoList: Todo[];
    // onDeleteTodo is a function that takes an id and returns void
    onDeleteTodo: (id: string) => void;
    // onToggleTodo is a function that takes an id and returns void
    onToggleTodo: (id: string) => void;
    // onEditTodo is a function that takes an id and a newText and returns void
    onEditTodo: (id: string, newText: string) => void;
}
export interface TodoItemProps {
    // todo is a Todo object
    todo: Todo;
    // onDeleteTodo is a function that takes an id and returns void
    onDeleteTodo: (id: string) => void;
    // onToggleTodo is a function that takes an id and returns void
    onToggleTodo: (id: string) => void;
    // onEditTodo is a function that takes an id and a newText and returns void
    onEditTodo: (id: string, newText: string) => void;
}
export interface TodoEditProps {
    // todo is a Todo object
    todo: Todo;
    // onSaveTodo is a function that takes an id and a newText and returns void
    onSaveTodo: (id: string, newText: string) => void;
    // onCancelTodo is a function that returns void
    onCancelTodo: () => void;
}
