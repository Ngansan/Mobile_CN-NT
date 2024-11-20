import { useState } from "react";
import { Text, StyleSheet, View} from "react-native";


export default function CountClick({type, count}){
    return(
        <View style={styles.container}>
            <Text style={styles.count}>{count}</Text>
            <Text style={styles.text}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    count: {
        fontSize: 14,
        color: '#333',
    },
    text: {
        marginLeft: 5,
        fontSize: 14,
        color: 'black',
    },
    
});