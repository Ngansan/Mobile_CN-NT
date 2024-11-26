import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SettingsContext } from '../context/SettingContext';
import { Slider } from '@rneui/themed';
export default function ChangeFontSize(){
    const { fontSize, setFontSize, darkMode } = useContext(SettingsContext);
    return(
        <View style={styles.container}>
            <Text style={[styles.text, { color: darkMode ? '#FFF' : '#000', fontSize: fontSize}]}>Font Size</Text>
            <Slider
                minimumValue={12}
                maximumValue={72}
                step={2}
                value={fontSize}
                onValueChange={setFontSize}
                minimumTrackTintColor={darkMode ? '#FFF' : '#000'}
                maximumTrackTintColor={darkMode ? '#AAA' : '#333'}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})
