import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
  } from "react-native";
import GroceryItem from './GroceryItem';

const BottomTasksContainer = ({groceries,setGroceries}) => {

  return (
    <View>
        {groceries.length === 0 ? (
        <></>
      ) : (
        <View style={{gap:15}}>
          <Text style={styles.textHeader}>Grocery List</Text>
          <View style={{ minHeight: 25, maxHeight: 250, gap: 15 }}>
            <ScrollView style={styles.listContainer}>
              {groceries.map((currentGroceryItem, index) =><GroceryItem currentGroceryItem={currentGroceryItem} setGroceries={setGroceries} key={currentGroceryItem.id}/>)}
            </ScrollView>
          </View>
          <Text style={[styles.textHeader, { fontSize: 14 }]}>
              The above container is a scrollable one.When height of 250px is
              reached scrollbar appears!
          </Text>
        </View>
      )}
    </View>
  )}
const styles = StyleSheet.create({

    textHeader: {
      fontSize: 21,
      fontWeight: "bold",
      textAlign: "center",
    },
  
    listContainer: {
      borderWidth: 1,
      borderColor: "orange",
      padding:5
    },
  });
  
export default BottomTasksContainer