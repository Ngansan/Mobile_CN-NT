import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function FAQ({ feedbackList, isDarkMode }){
    return (
        <ScrollView style={styles.container}>
          <Text style={[styles.title, {color: isDarkMode ? "white":"black"}]}>Frequently Asked Questions</Text>
          {feedbackList.map((feedback, index) => (
            <Text key={index} style={[styles.feedbackText, {color: isDarkMode ? "white":"black"}]}>
              {feedback}
            </Text>
          ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    feedbackText: {
      fontSize: 16,
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    title:{
      fontSize: 26,
      padding: 10,
      fontWeight: "bold"
    }
  });