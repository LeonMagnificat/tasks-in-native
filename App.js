import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleTextInput = (textAdded) => {
    //console.log("textAdded", textAdded);
    setText(textAdded);
  };

  const handleAddText = () => {
    console.log("text", text);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Create a task</Text>
      </View>
      <View style={styles.miniContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Heloo there..." onChangeText={handleTextInput} />
        </View>
        <View style={styles.button}>
          <Button color="#fff" title="Add Task" onPress={handleAddText} />
        </View>
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
