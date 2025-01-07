import { StyleSheet, View, Text, Image } from "react-native"
import InputFields from "../../components/InputFields"
import { useContext, useState } from "react"
import AuthorizeButton from "../../components/AuthorizeButton"
import { AuthorizeContext } from "../../context/AuthorizePro"

export default function LoginScreen(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthorizeContext)

    const handleLogin = () =>{
        login('mor_2314', '83r5^_');
    }
    return (
        <View style={styles.container}>
            <Image
            source={require('../../assets/ava.jpg')}
            style={styles.logoAva}/>
            <Text style={styles.title}>Welcome</Text>
            <InputFields placeholder="Username" value={username} onChangeText={setUsername} iconName='user'/>
            <InputFields placeholder="Password" value={password} onChangeText={setPassword} iconName='lock' secureTextEntry/>
            <Text style={styles.smallText}>Forgot password?</Text>
            <AuthorizeButton title="Log in" onPress={handleLogin} style={styles.btn_lgin}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: "#fff",
        marginBottom: 15
    },
    logoAva: {
        width: 80,
        height: 80,
        marginTop: 80,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    smallText: {
        color: "#F87A53",
        fontWeight: "bold",
        fontSize: 18,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 15
    }, 
    other:{
        flexDirection: "row",
        justifyContent: "center",
    },
    otherText:{
        backgroundColor: "none",
        color: "blue",
        fontSize: 20,
        backgroundColor: "#fff",
        fontStyle: "italic",
        fontWeight: "bold"
    },
    otherTitle:{
        fontSize: 20,
    },
})