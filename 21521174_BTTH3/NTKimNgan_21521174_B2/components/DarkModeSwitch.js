import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { SettingsContext } from '../context/SettingContext';
export default function DarkModeSwitch(){
    const { darkMode, toggleDarkMode,themeStyles, fontSize } = useContext(SettingsContext);
    return(
        <View style={[{ flexDirection: 'row', alignItems: 'center', padding: 10 }, styles.container]}>
            <Text style={[styles.text, { color: themeStyles.textColor, fontSize: fontSize }]}>Dark Mode</Text>
            <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        fontSize: 16,
        marginRight: 10,
    },
});