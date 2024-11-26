import { StyleSheet, Text, View } from "react-native"
export default function HomeDetailScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Detail Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: "red"
    }
})