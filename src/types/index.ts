export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoListProps {
    // type of todos is an array of Todo objects
    todoList: Todo[];
    onDeleteTodo: (id: string) => void;
    onToggleTodo: (id: string) => void;
    onEditTodo: (id: string, newText: string) => void;
}


export interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: string) => void;
    onToggleTodo: (id: string) => void;
    onEditTodo: (id: string, newText: string) => void;
}


export interface TodoEditProps {
    todo: Todo;
    onSaveTodo: (id: string, newText: string) => void;
    onCancelTodo: () => void;
}
