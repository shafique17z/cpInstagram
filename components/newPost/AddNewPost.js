import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AddNewPost() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add New Post</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default AddNewPost;
