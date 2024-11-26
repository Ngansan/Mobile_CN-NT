import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationsScreen from "../screens/MainScreen/NotificationsScreen";
import NotificationsDetailScreen from "../detailScreen/NotificationsDetailScreen";
const Stack = createNativeStackNavigator();
export default function(){
    return (
        <Stack.Navigator >
            <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="NotificationsDetail" component={NotificationsDetailScreen} />
        </Stack.Navigator>
    )
}