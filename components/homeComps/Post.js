import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

const Post = () => {
  return (
    <View style={styles.container}>
      <Divider style={styles.divider} width={1} orientation="vertical" />
      {/* <Divider style={styles.divider} width={1} orientation="vertical" /> */}
      <Text style={styles.text}>POST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  divider: {
    // backgroundColor: "yellow",
  },
  text: {
    color: "white",
  },
});

export default Post;
