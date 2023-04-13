import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";

function TasksList(props) {
  return (
    <View>
      <FlatList
        data={props.tasks}
        renderItem={(task) => {
          return <Text style={styles.task}>{task.item.name}</Text>;
        }}
        keyExtractor={(item, index) => {
          return item._id;
        }}
      />
    </View>
  );
}

export default TasksList;

const styles = StyleSheet.create({
  task: {
    color: "white",
    padding: 16,
  },
});
