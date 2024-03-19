import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    Pressable,
  } from "react-native";


const RibbonContainer = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={[styles.ribbon, styles.red]}></View>
      <View style={[styles.ribbon, styles.green]}></View>
      <View style={[styles.ribbon, styles.blue]}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  // RIBBON
  ribbon: {
    flex: 1,
    height: 2,
  },
  red: {
    backgroundColor: "#f00",
  },
  green: {
    backgroundColor: "#0f0",
  },

  blue: {
    backgroundColor: "#00f",
  },

});
export default RibbonContainer;
