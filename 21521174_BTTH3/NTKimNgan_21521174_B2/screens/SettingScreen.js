import React, { useContext } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { SettingsContext } from '../context/SettingContext';
import DarkModeSwitch from '../components/DarkModeSwitch';
import ChangeFontSize from '../components/ChangeFontSize';

export default function SettingScreen(){
    const {themeStyles} = useContext(SettingsContext)

    return(
        <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
            <DarkModeSwitch />
            <ChangeFontSize/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
})