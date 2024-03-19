import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import TopContainer from "./Components/TopContainer";
import RibbonContainer from "./Components/RibbonContainer";
import BottomTasksContainer from "./Components/BottomTasksContainer";

export default function App() {
  const [grocery, setGrocery] = React.useState("");
  const [groceries, setGroceries] = React.useState([]);


  return (
    <View style={styles.appContainer}>
      {/* Top Container */}
      <TopContainer grocery={grocery} setGrocery={setGrocery} setGroceries={setGroceries}/>

      {/* Ribbon Container */}
      <RibbonContainer />

      {/* Tasks Container */}

      <BottomTasksContainer groceries={groceries} setGroceries={setGroceries}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "red",
    borderWidth: 2,
    margin: 6,
    padding: 15,
    gap: 20,
  },
  // top C
  topContainer: {
    marginTop: 10,
    gap: 20,
  },
  textHeader: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    gap: 3,
  },
  inputGrocery: {
    flex: 3,
    borderColor: "green",
    fontSize: 17,
    paddingLeft: 7,
    borderWidth: 2,
  },

  deleteBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#f00",
  },
  deleteBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
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

  // List Container

  listContainer: {
    borderWidth: 1,
    borderColor: "orange",
  },
});
