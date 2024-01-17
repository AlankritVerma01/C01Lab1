import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {v4 as uuidv4} from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ tasks }) => {
    const [toDos, setToDos] = useState(tasks.map((task) => ({ id: uuidv4(), title: task })));
    
    const addToDo = (newTitle) => {
        setToDos((prevState) => [
            ...prevState,
            { id: uuidv4(), title: newTitle }
        ]);
    };

    const removeToDo = (id) => {
        setToDos((prevState) => prevState.filter((toDo) => toDo.id !== id));
    }

    return (
        <View style={styles.todoListContainer}>
            <AddTask onAddTask={addToDo} />
            {toDos.map((toDo) => (
                <View key={toDo.id} style={styles.todoItem}>
                    <Text>Task: {toDo.title}</Text>
                    <Button title="remove" onPress={() => removeToDo(toDo.id)} />
                </View>
            ))}
        </View>
    );
};

ToDoList.defaultProps = {
    tasks: []
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;
