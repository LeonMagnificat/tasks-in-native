import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import InputSection from "./components/InputSection";
import TasksList from "./components/TasksList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddText = (text) => {
    setTasks((currentTaks) => [...currentTaks, { name: text, _id: Math.random().toString() }]);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Create a task</Text>
      </View>
      <InputSection handleAddText={handleAddText} />
      <TasksList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cccc",
    paddingTop: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },
  miniContainer: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
  },

  inputContainer: {
    flex: 1,
  },
  text: {
    color: "white",
    padding: 16,
    marginTop: 16,
  },

  textInput: {
    color: "white",
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: "white",
  },
  button: {
    padding: 16,
    margin: 16,
    color: "#fff",
  },
});
