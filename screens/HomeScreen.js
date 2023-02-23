import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/homeComps/Header";
import Stories from "../components/homeComps/Stories";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
    </View>
  );
};

//make a GET http request in JS using axios library with async/await syntax

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
