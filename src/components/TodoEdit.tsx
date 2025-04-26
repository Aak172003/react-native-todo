import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';
import {TodoEditProps} from '../types';
import { TEXT_CANCEL, TEXT_SAVE } from '../../text';

const TodoEdit: FC<TodoEditProps> = ({todo, onSaveTodo, onCancelTodo}) => {
  const [editedText, setEditedText] = useState(todo.text);

  const handleSaveTodo = () => {
    if (editedText.trim()) {
      onSaveTodo(todo.id, editedText.trim());
      onCancelTodo();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={editedText}
        onChangeText={setEditedText}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveTodo}>
          <Text style={styles.saveButtonText}>{TEXT_SAVE}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={onCancelTodo}>
          <Text style={styles.cancelButtonText}>{TEXT_CANCEL}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  cancelButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TodoEdit;
