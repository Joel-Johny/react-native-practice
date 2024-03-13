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

export default function App() {
  const [grocery, setGrocery] = React.useState("");
  const [groceries, setGroceries] = React.useState([
    1, 2, 1, 12, 1, 21, 1, 12, 21, 12, 21, 21, 12, 12, 12, 21, 12, 21, 21, 2121,
    21, 12, 21, 21, 12, 12, 21, 21, 21, 21,
  ]);

  function handleAdd() {
    if (grocery) {
      setGroceries((oldGroceries) => [...oldGroceries, grocery]);
      setGrocery("");
      console.log("Item added to list and IP box reset");
    }
  }
  return (
    <View style={styles.appContainer}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <Text style={styles.textHeader}>Add Items to List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Grocery"
            style={styles.inputGrocery}
            value={grocery}
            onChangeText={(currentText) => setGrocery(currentText)}
          />
          <Button title="Add Item" onPress={handleAdd} />
        </View>
        <Pressable style={styles.deleteBtn} onPress={() => setGroceries([])}>
          <Text style={styles.deleteBtnText}>Delete all Items</Text>
        </Pressable>
      </View>

      {/* Ribbon Container */}
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.ribbon, styles.red]}></View>
        <View style={[styles.ribbon, styles.green]}></View>
        <View style={[styles.ribbon, styles.blue]}></View>
      </View>

      {/* Tasks Container */}
      {groceries.length === 0 ? (
        <></>
      ) : (
        <View style={styles.bottomContainer}>
          <Text style={styles.textHeader}>Grocery List</Text>
          <View style={{height:"50%"}}>
            <ScrollView style={styles.listContainer}>
              {groceries.map((groceryItem, index) => (
                <Text style={styles.grocery} key={index}>
                  {groceryItem}
                </Text>
              ))}
            </ScrollView>
          </View>
        </View>
      )}

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
