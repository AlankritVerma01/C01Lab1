import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if(newTask.trim() !== '') {
            onAddTask(newTask.trim());
            setNewTask('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
            <Text>Add Task</Text>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNewTask(text)}
                    value={newTask}
                />
                <Button title="Add" onPress={handleAddTask} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
        margin: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderColor: 'gray',
    },
});

export default AddTask;