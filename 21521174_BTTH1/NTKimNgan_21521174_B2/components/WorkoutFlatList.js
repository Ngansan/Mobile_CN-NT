import React, { useState } from 'react';
import { StyleSheet, FlatList, ImageBackground } from 'react-native';
import { workouts } from '../data/Data';
import FlatListItem from './FlatListItem';

export default function WorkoutFlatList({onSelect}){
    const [selectedWorkouts, setSelectedWorkouts] = useState([]);
    const handleSelect = (item) => {
      setSelectedWorkouts((prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((i) => i !== item)
          : [...prevSelected, item]
      );
      onSelect(item);
    };
    return(
        <ImageBackground source={require('../assets/workoutbg.jpg') } style={styles.background}>
          <FlatList
            data={workouts}
            renderItem={({ item }) => (
              <FlatListItem item={item} onSelect={() => handleSelect(item.type)}/>
            )}
            keyExtractor={(item) => item.id}
          />
      </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      padding: 10
    },
});