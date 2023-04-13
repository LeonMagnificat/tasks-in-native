import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import { useState } from "react";
function InputSection(props) {
  const [text, setText] = useState("");
  const handleTextInput = (textAdded) => {
    setText(textAdded);
  };

  const handleAddTask = () => {
    props.handleAddText(text);
  };

  return (
    <View>
      <View style={styles.miniContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Heloo there..." onChangeText={handleTextInput} />
        </View>
        <View style={styles.button}>
          <Button title="Add Task" onPress={handleAddTask} />
        </View>
      </View>
    </View>
  );
}

export default InputSection;

const styles = StyleSheet.create({
  miniContainer: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
  },
  textInput: {
    color: "white",
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: "white",
  },
});
