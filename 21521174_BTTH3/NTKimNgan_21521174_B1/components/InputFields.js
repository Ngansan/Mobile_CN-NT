import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function InputFields({placeholder, value, onChangeText, secureTextEntry, iconName}){
    const [isSecure, setIsSecure] = useState(secureTextEntry);
    return (
        <View style={styles.container}>
            {iconName && <Icon name={iconName} color="#666" size={20} style={styles.icon}/>}
            <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isSecure}
            style={styles.input}/>
            {secureTextEntry && (
            <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
                <Icon name={isSecure ?  "visibility-off" : "visibility"} size={24} color="#666"/>
            </TouchableOpacity>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: 330
    },
    icon: {
        marginRight: 10,
        fontSize: 35
    },
    input: {
        flex: 1,
        height: 50,
    },
})