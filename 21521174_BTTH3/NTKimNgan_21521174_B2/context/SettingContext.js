import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
export const SettingsContext = createContext();
export const SettingsProvider = ({children}) => {
    const [darkMode, setDarkNode] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [notes, setNotes] = useState([]);
    const colorScheme = useColorScheme();
    useEffect(() => {
        setDarkNode(colorScheme === 'dark');
        loadNotesFromDatabase();
    }, [colorScheme]);

    const loadNotesFromDatabase = async () => {
        const loadedNotes = await fetchNotesFromDatabase();
        setNotes(loadedNotes);
    };

    const toggleDarkMode = () => setDarkNode(!darkMode);
    const addNote = async (newNote) => {
        await addNoteToDatabase(newNote); 
        loadNotesFromDatabase(); 
    };

    const themeStyles = {
        backgroundColor: darkMode ? 'black' : 'white',
        textColor: darkMode ? '#FFF' : '#000'
    };
    return (
        <SettingsContext.Provider value={{darkMode, fontSize, toggleDarkMode, setFontSize,  themeStyles, notes, addNote}}>
            {children}
        </SettingsContext.Provider>
    )
}
