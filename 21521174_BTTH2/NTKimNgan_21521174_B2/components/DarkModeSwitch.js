import { View, StyleSheet, Text, Switch } from "react-native";

export default function DarkModeSwitch({ isDarkMode, setDarkMode }){
    return(
        <View style={StyleSheet.container}>
            <Text style={[styles.text, {color: isDarkMode ? "white":"black"}]}>Dark Mode</Text>
            <Switch
            value={isDarkMode} 
            onValueChange={setDarkMode}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center",
    },
    text:{
        fontSize: 20,
    },

})