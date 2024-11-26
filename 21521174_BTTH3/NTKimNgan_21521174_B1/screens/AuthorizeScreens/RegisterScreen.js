import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import InputFields from '../../components/InputFields';
import AuthorizeButton from '../../components/AuthorizeButton';
export default function RegisterScreen({navigation}){
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <View style={styles.container}>
            <Image
            source={require('../../assets/logo.png')}
            style={styles.logoAva}/>
            <Text style={styles.title}>Create New Account</Text>

            <InputFields 
            placeholder="Enter username"
            value={userName}
            onChangeText={setUsername}
            iconName="person"/>

            <InputFields 
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            iconName="email"/>

            <InputFields 
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            iconName="lock"/>

            <InputFields 
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            iconName="lock"/>

            <AuthorizeButton title="Create"/>
            <View style={styles.other}>
                <Text style={styles.otherTitle}>Already have an account? </Text>
                <Pressable
                onPress={()=> navigation.navigate('Login')}
                backgroundColor="#007BFF"
                >
                    <Text style={styles.otherText}>Login now!</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      marginTop: 10,
    },
    secondaryButtonText: {
      color: '#007bff',
    },
    logoAva: {
        width: 80,
        height: 80,
    },
    other:{
      flexDirection: "row",
      justifyContent: "center",
  },
  otherText:{
      backgroundColor: "none",
      color: "blue",
      fontSize: 20,
      fontWeight: "bold",
      fontStyle: "italic",
      backgroundColor: "#fff"
  },
  otherTitle:{
      fontSize: 20,
  }
  });