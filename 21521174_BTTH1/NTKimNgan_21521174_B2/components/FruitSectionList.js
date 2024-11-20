import React, { useState } from 'react';
import { View, Text, StyleSheet,ImageBackground, SectionList } from 'react-native';
import { fruits_vegetables } from '../data/Data';
import SectionListItem from './SectionListItem';

export default function FruitSectionList({ onSelect }){
    const [selectedFruits, setSelectedFruits] = useState([]);
    const handleSelect = (item) => {
      setSelectedFruits((prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((i) => i !== item)
          : [...prevSelected, item]
      );
      onSelect(item);
    };
    return(
        <ImageBackground source={require('../assets/fruitbg.jpg')} style={styles.background}>
            <SectionList
                sections={fruits_vegetables}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <SectionListItem item={item} onSelect={() => handleSelect(item)}/>
                )}
                renderSectionHeader={({ section: {title} }) => (
                  <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>{title}</Text>
                  </View>
                )}
            />
    </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      padding: 10
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },
    sectionHeaderText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "red"
    },
  });