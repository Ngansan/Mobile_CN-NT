import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function FlatListItem({ item, onSelect }){
    const [selected, setSelected] = useState(false);
    const handlePress = () => {
      setSelected(!selected);
      onSelect();
    };
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{item.type}</Text>
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
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: "space-between",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: 5
    },
    text:{
      fontSize: 20,
      color: "#006BFF",
      fontWeight: "black"
    }
})
