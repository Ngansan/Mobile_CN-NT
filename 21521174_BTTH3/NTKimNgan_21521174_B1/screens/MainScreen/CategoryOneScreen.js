import { View, StyleSheet, Text } from "react-native";
export default function CategoryOneScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Category 1 Screen</Text>
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