import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { postFooterIcons } from "../../data/posts";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter icons={postFooterIcons} />
      </View>
    </View>
  );
};

const PostFooter = ({ icons }) => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFootContainer}>
      <Icon iconUrl={icons[0].icon} iconStyles={styles.footerIconStyles} />
      <Icon iconUrl={icons[1].icon} iconStyles={styles.footerIconStyles} />
      <Icon iconUrl={icons[2].icon} iconStyles={styles.footerIconStyles} />
    </View>
  </View>
);

const Icon = ({ iconUrl, iconStyles }) => (
  <TouchableOpacity>
    <Image source={{ uri: iconUrl }} style={iconStyles} />
  </TouchableOpacity>
);

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
  leftFootContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  footerIconStyles: {
    width: 33,
    height: 33,
    marginLeft: 10,
  },
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
    marginBottom: 15,
    // backgroundColor: "tomato",
  },
});

export default Post;
