import {ScrollView, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {TodoListProps} from '../types';
import TodoItem from './TodoItem';

const TodoList: FC<TodoListProps> = ({
  todoList,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={() => onDeleteTodo(todo.id)}
          onToggleTodo={() => onToggleTodo(todo.id)}
          onEditTodo={onEditTodo}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
export default TodoList;
