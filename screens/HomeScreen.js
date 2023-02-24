import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Header from "../components/homeComps/Header";
import Stories from "../components/homeComps/Stories";
import Post from "../components/homeComps/Post";
import { posts } from "../data/posts";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />

        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

//make a GET http request in JS using axios library with async/await syntax

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 5,
  },
});

export default HomeScreen;
