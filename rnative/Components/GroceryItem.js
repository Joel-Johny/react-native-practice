import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    Button,
  } from "react-native";


const GroceryItem = ({currentGroceryItem,setGroceries}) => {

  function handleDelete(){
    setGroceries((oldGroceries)=>{
      return oldGroceries.filter((GroceryItem)=>GroceryItem.id!==currentGroceryItem.id)
    })
  }
  return (
    <View style={styles.groceryContainer}>
        <Text style={styles.Text}>{currentGroceryItem.name}</Text>
        <Button title='Delete' onPress={handleDelete} />
    </View>
  )
}

const styles= StyleSheet.create({
  groceryContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    margin:10,
    padding:8,
    backgroundColor:"orange",
    borderRadius:10
  },
  Text:{
    color:"blue",
    fontWeight:"bold",
    fontSize:16
  }
})
export default GroceryItem