import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 400 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostHeader = ({ post }) => (
  <View style={styles.postHeaderContainer}>
    <View style={styles.postHeaderContent}>
      <Image
        style={styles.headerProfilePic}
        source={{ uri: post.profilePicture }}
      />
      <Text style={styles.postHeaderProfileText}>{post.username}</Text>
    </View>
    <View style={{ alignItems: "center" }}>
      <Text style={styles.threeDots}>...</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  threeDots: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
    marginRight: 8,
    marginBottom: 10,
  },
  postHeaderContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeaderProfileText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },
  headerProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 15,
    borderWidth: 1.5,
    borderColor: "#f46f23",
  },
  postHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: 5,
    padding: 8,
    backgroundColor: "black",
  },
  container: {
    // marginBottom: 5,
    // backgroundColor: "tomato",
  },
});

export default Post;
