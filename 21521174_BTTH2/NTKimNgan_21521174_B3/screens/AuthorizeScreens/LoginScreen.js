import { StyleSheet, View, Text, Image, Alert, Pressable } from "react-native"
import InputFields from "../../components/InputFields"
import { useContext, useState } from "react"
import AuthorizeButton from "../../components/AuthorizeButton"
import { AuthorizeContext } from "../../context/AuthorizePro"
import SocialMedia from "../../components/SocialMedia"

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthorizeContext)

    const handleLogin = () =>{
        if(login(email, password)){
            Alert.alert("Đăng nhập thành công!!!")
        }else{
            Alert.alert("Đăng nhập thất bại!!!")
        }
    }
    return (
        <View style={styles.container}>
            <Image
            source={require('../../assets/logo.png')}
            style={styles.logoAva}/>
            <Text style={styles.title}>Welcome</Text>
            <InputFields placeholder="Email" value={email} onChangeText={setEmail} iconName='email'/>
            <InputFields placeholder="Password" value={password} onChangeText={setPassword} iconName='lock' secureTextEntry/>
            <Text style={styles.smallText}>Forgot password?</Text>
            <AuthorizeButton title="Log in" onPress={handleLogin} style={styles.btn_lgin}/>
            <Text style={styles.text}>Or login with</Text>
            <SocialMedia/>
            <View style={styles.other}>
                <Text style={styles.otherTitle}>Don't have an account? </Text>
                <Pressable
                onPress={()=> navigation.navigate('Register')}
                backgroundColor="#007BFF"
                >
                    <Text style={styles.otherText}>Sign up here</Text>
                </Pressable>
            </View>

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
    // btn_lgin:{
    //     marginTop: 15
    // }

})