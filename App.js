import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import InputSection from "./components/InputSection";
import TasksList from "./components/TasksList";

export default function App() {
  const [modalVisible, setModalVisible] = useState([false]);
  const [tasks, setTasks] = useState([]);

  const showModal = () => {};

  const handleAddText = (text) => {
    setTasks((currentTaks) => [...currentTaks, { name: text, _id: Math.random().toString() }]);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Create a task</Text>
      </View>
      <InputSection handleAddText={handleAddText} />
      <View style={styles.taskContainer}>
        <TasksList tasks={tasks} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DEF3",
    paddingTop: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },

  text: {
    color: "black",
    padding: 16,
    marginTop: 26,
    fontSize: 22,
  },
  taskContainer: {
    flex: 1,
  },
});
