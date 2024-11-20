import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import WorkoutFlatList from './components/WorkoutFlatList';
import SelectedItems from './components/SelectedItems';
import FruitSectionList from './components/FruitSectionList';

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FlatLists - Workouts</Text>
            <WorkoutFlatList onSelect={handleSelectItem}/>
          </View>
        </ScrollView>
        <ScrollView>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SectionLists - Fruits & Vegetables</Text>
              <FruitSectionList onSelect={handleSelectItem}/>
            </View>
        </ScrollView>
        <SelectedItems selectedItems={selectedItems} /> 
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
    color: "blue"
  },
});
