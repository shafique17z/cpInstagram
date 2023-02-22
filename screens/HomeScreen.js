import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/homeComps/Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;