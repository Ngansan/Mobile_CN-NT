import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SectionListItem({item, onSelect}){
    const [selected, setSelected] = useState(false);
    const handlePress = () => {
      setSelected(!selected);
      onSelect();
    };
    return(
        <View style={styles.container}>
        <Text style={styles.text}>{item}</Text>
        <Button
          title={selected ? "DESELECT" : "SELECT"}
          onPress={handlePress}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#c2f9ff',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: "space-between",
      borderRadius: 5
    },
    text:{
      fontSize: 20,
      color: "#4A4947",
      fontWeight: "black"
    }
  })