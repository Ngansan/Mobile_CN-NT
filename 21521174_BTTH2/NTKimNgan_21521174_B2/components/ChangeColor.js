import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ChangeColor({ isDarkMode, text }){
    return(
        <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>
          {text}
      </Text>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
    },
});