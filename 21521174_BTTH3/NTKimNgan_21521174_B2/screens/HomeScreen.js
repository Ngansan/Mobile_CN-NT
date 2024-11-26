import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SettingsContext } from '../context/SettingContext';
import { getNotes, deleteNote } from '../database/Database';

export default function HomeScreen({navigation, route}){
    const [notes, setNotes] = useState([]);
    const {fontSize, themeStyles } = useContext(SettingsContext);

    const fetchNotes = () => {
      getNotes(setNotes);
    };
    useEffect(() => {
      fetchNotes();
    }, []);

    useEffect(() => {
      if (route.params?.updated) {
        fetchNotes();
      }
    }, [route.params?.updated]);

    const handleDelete = (id) => {
      deleteNote(id, () => {
        setNotes(notes.filter(note => note.id !== id))
      })
    }
    return(
        <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
            <Text style={[styles.header, {color: themeStyles.textColor, fontSize}]}>Note App</Text>
            <Text style={[styles.subtitle, {color: themeStyles.textColor, fontSize}]}>All notes</Text>
            <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
            <View style={styles.noteContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('EditNoteScreen', {noteId: item.id})}>
                <Text style={[styles.noteTitle, { fontSize, color: themeStyles.textColor }]}>{item.title}</Text>
                <Text style={[styles.noteContent, { fontSize: fontSize * 0.9, color: '#888' }]}>{item.content}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="delete" size={30} color="red" />
              </TouchableOpacity>
            </View>

            )}/>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('DetailNote')}
            >
            <Icon name="add" size={28} color="white" style={styles.iconAdd}/>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 10,
  },
  noteContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  noteTitle: {
    fontWeight: 'bold',
  },
  noteContent: {
    color: 'gray',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f4511e',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});