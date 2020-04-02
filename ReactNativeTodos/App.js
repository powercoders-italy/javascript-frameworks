/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Learn React Native', done: true},
    {id: 2, text: 'Seek for a job', done: false},
    {id: 3, text: 'Forget everything'},
  ]);

  const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  return (
    <View style={styles.container}>
      <View>
        {todos.map(todo => (
          <View key={todo.id}>
            <Text>{todo.text}</Text>
            <Button title="x" onPress={() => removeTodo(todo.id)} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'cyan'},
});

export default App;
