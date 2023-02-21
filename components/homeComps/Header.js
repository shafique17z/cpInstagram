import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Image
        source={require("../../assets/insta-logo.png")}
        style={styles.headerLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  headerLogo: {
    width: 200,
    height: 50,
    alignSelf: "baseline",
  },
});

export default Header;
