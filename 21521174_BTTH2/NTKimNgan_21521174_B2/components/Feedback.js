import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function Feedback({ onSubmitFeedback, isDarkMode }){
    const [feedback, setFeedback] = useState('');
    const handleSendFeedback = () => {
        if (feedback) {
          onSubmitFeedback(feedback);
          setFeedback('');
        }
    };
    return(
        <View style={styles.container}>
            <Text style={[styles.title, {color: isDarkMode ? 'white':'black'}]}>Feedback</Text>
            <TextInput
              style={[styles.input,
                      { color: isDarkMode ? 'white' : 'black', borderColor: isDarkMode ? 'white' : 'gray' },
                    ]}
            placeholder="Enter your feedback"
            placeholderTextColor={isDarkMode ? "lightgray":"gray"}
            value={feedback}
            onChangeText={setFeedback}
            multiline
            />
            <Button title="Send Feedback" onPress={handleSendFeedback} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    input: {
      height: 100,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      borderRadius: 5
    },
    title:{
      fontSize: 30,
    }
  });