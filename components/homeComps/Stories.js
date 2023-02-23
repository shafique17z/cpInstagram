import { View, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { users } from "../../data/users";
// import users from "../../data/users";

const Stories = () => {
  return (
    <View style={styles.container}>
      {/* //scrollview */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* //map through users */}
        {users.map((story, index) => (
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF", "#515BD4"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.storyBorder} key={index}>
              <Image
                key={index}
                style={styles.storyStyles}
                source={{ uri: story.imageUri }}
              />
            </View>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    // borderTopWidth: 1,
    // borderTopColor: "red",
    // backgroundColor: "tomato",
  },
  storyStyles: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    // marginLeft: 10,
    // borderWidth: 3,
    // borderColor: "yellow",
    //q: apply a border color, it should be gradient which contains instagram's logo's colors
  },
  storyBorder: {
    borderRadius: 50,
    padding: 3,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "pink",
  },
});

export default Stories;
