import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function AuthorizeButton({title, onPress, backgroundColor= "orange"}){
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor}]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 5,

    },
    buttonText: {
      fontSize: 20,
      fontWeight: '600',
      width: 290,
      textAlign: "center"
    },
  });