import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header({isDarkMode}){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={[styles.title, {color: isDarkMode ? "white":"black"}]}>React Native App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})