import { Text, Pressable,StyleSheet,} from "react-native";
import React from "react";

export const Button = ({title, onPress }) => {

  return (
    <Pressable onPress={onPress} style={styles.buttonText} testID="pressed">
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});



