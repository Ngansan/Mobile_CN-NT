import { View, StyleSheet, Text } from "react-native";
export default function HelpScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Help Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 20,
        color: "red"
    }
})