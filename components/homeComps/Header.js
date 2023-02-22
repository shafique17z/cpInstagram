import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { cloneElement } from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/insta-logo.png")}
          style={styles.headerLogo}
        />
      </TouchableOpacity>
      <View style={styles.icContainer}>
        <Text style={styles.text}>heart</Text>
        <Text style={styles.text}>messenger</Text>
        <Text style={styles.text}>heart</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  icContainer: {
    flexDirection: "row",
  },
  headerLogo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
    // start: 15,
    // top: 15,
  },
  text: {
    color: "white",
  },
});

export default Header;
