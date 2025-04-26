import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

// FC is a function component
const TodoInput: FC<TodoInputProps> = ({onAddTodo}) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        // onChangeText={e => {
        //   console.log(e);
        //   setText(e);
        // }}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add a new todo ..."
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.addTodoButton} onPress={handleAddTodo}>
        <Text style={styles.addTodoButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  addTodoButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  addTodoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoInput;
