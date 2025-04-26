import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import {TodoItemProps} from '../types';
import TodoEdit from './TodoEdit';

const TodoItem: FC<TodoItemProps> = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}) => {
  console.log('todo from todoitem component', todo);

  const [isEditing, setIsEditing] = useState(false);

  console.log('isEditing', isEditing);

  if (isEditing) {
    return (
      <TodoEdit
        todo={todo}
        onSaveTodo={(id, newText) => {
          onEditTodo(id, newText);
          setIsEditing(false);
        }}
        onCancelTodo={() => setIsEditing(false)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            todo.completed ? styles.completedText : styles.notCompletedText,
          ]}>
          {todo.text}
        </Text>
      </TouchableOpacity>

      {/* Add a tick to toogle the todo  */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            onToggleTodo(todo.id);
          }}>
          <Text style={styles.tickButton}>{todo.completed ? '✅' : '❌'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsEditing(true)}
          style={styles.editButton}>
          <Text style={styles.textButton}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDeleteTodo(todo.id)}>
          <Text style={styles.textButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  notCompletedText: {
    textDecorationLine: 'none',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
  },
  tickButton: {
    // backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
  },
});
export default TodoItem;
