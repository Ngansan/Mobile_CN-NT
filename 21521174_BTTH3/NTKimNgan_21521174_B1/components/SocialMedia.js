import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
export default function SocialMedia(){
    return(
        <View style={styles.container}>
            <Image
            source={require("../assets/fb_logo.png")}
            style={styles.logoFb}/>
            <Image
            source={require("../assets/gg_logo.png")}
            style={styles.logoGg}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "center",
        columnGap: 50,
        margin: 30 
    },
    logoFb:{
        width: 50,
        height: 50,
    },
    logoGg:{
        width: 60,
        height: 60,
    }
})
