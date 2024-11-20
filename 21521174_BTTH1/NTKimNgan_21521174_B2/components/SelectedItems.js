import { View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function SelectedItems({selectedItems}){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>SELECTED EXCERCISES:</Text>
        <Text style={styles.itemText}>
        {selectedItems.length > 0 ? selectedItems.join(', ') : 'No items selected'}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    color: "red"
  },
});