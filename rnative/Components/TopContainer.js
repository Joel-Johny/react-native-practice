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
import uuid from 'react-native-uuid';

const TopContainer = ({ grocery, setGrocery,setGroceries }) => {
  function handleAdd() {
    if (grocery) {
      setGroceries((oldGroceries) => [...oldGroceries, {name:grocery,id:uuid.v4()}]);
      setGrocery("");
      console.log("Item added to list and IP box reset");
    }
  }
  return (
    //   {/* Top Container */}
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
  );
};

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
});
export default TopContainer;
