import { View, StyleSheet, Text, Switch } from "react-native";

export default function NotificationsSwitch({ isNotified, setNotified, isDarkMode}){
    return(
        <View style={StyleSheet.container}>
            <Text style={[styles.text, {color: isDarkMode ? "white":"black"}]}>Notifications</Text>
            <Switch
            value={isNotified} 
            onValueChange={setNotified}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 10,
      },
      text: {
        fontSize: 20,
      },
})