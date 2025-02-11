import { Button, StyleSheet, Text, View } from "react-native"
export default function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <View style={styles.homeBtn}>
                <Button
                title="Go to Details"
                onPress={()=> navigation.navigate('HomeDetail')}
                backgroundColor="#007BFF"/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize: 30,
        color: 'red',
        textAlign: "center"
    }, 
    homeBtn:{
        width: 200,
        height: 50,
        
    }, 
})