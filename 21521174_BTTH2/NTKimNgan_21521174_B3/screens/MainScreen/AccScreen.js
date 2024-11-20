import { useContext } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { AuthorizeContext } from "../../context/AuthorizePro"

export default function AccScreen(){
    const {logout} = useContext(AuthorizeContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Logout Screen</Text>
            <Button title="LOG OUT" onPress={logout}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    },
    text:{
        fontSize: 25,
        color: 'red',
        textAlign: "center",
        marginBottom: 20
    }
})