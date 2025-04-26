import {StyleSheet, Text, View} from 'react-native';
import TodoInput from './src/components/TodoInput';
import {useState} from 'react';
import TodoList from './src/components/TodoList';
import {Todo} from './src/types';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {id: Date.now().toString(), text, completed: false},
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodoList(
      todoList.map(todo => (todo.id === id ? {...todo, text: newText} : todo)),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>

      <TodoInput onAddTodo={addTodo} />

      {/* <View style={styles.todoList}>
        {todos.map(todo => {
          return (
            <View key={todo.id}>
              <Text>{todo.id}</Text>
              <Text>{todo.text}</Text>
              <Text>{todo.completed ? 'Completed' : 'Not Completed'}</Text>
            </View>
          );
        })}
      </View> */}

      <TodoList
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
        onEditTodo={editTodo}
        todoList={todoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  todoList: {
    flex: 1,
    width: '100%',
  },
});

export default App;
