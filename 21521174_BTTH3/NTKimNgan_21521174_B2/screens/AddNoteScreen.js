import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SettingsContext } from '../context/SettingContext';
import { updateNote, getNotes, addNote } from '../database/Database';

export default function DetailNote({ route, navigation }){
  const { noteId } = route.params || {};
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {fontSize, themeStyles} = useContext(SettingsContext);

  useEffect(() => {
    if (noteId) {
      getNotes((notes) => {
        const selectedNote = notes.find((note) => note.id === noteId);
        if (selectedNote) {
          setTitle(selectedNote.title);
          setContent(selectedNote.content);
        }
      });
    }
  }, [noteId]);

    const handleSave = () => {
      if (title.trim() === '') {
        Alert.alert('Warning', 'Please enter a title');
        return;
      }
      addNote(title, content, () => {
        navigation.navigate('Home', { updated: true });
      });
    };

    return(
        <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <TextInput
        style={[styles.input, { fontSize, color: themeStyles.textColor }]}
        placeholder="Enter your title"
        placeholderTextColor={themeStyles.textColor}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={[styles.input, { fontSize, color: themeStyles.textColor }]}
        placeholder="Enter your note"
        placeholderTextColor={themeStyles.textColor}
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Icon name="close" size={40} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Icon name="check-circle" size={40} color="green" />
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      borderRadius: 8,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    cancelButton: {
      marginHorizontal: 10,
    },
    saveButton: {
      marginHorizontal: 10,
    },
  });