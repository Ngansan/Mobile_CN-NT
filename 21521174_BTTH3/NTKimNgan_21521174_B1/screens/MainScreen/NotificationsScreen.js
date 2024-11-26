import { View, StyleSheet, Text, Button } from "react-native";
export default function NotificationsScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notifications Screen</Text>
            <View style={styles.notifyBtn}>
                <Button
                title="Go to Details"
                onPress={()=> navigation.navigate('NotificationsDetail')}
                backgroundColor="#007BFF"/>
                
            </View>
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
    },
    notifyBtn:{
        width: 200,
        height: 50,
    }, 
})