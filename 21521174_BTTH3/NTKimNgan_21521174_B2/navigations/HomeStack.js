import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import DetailNote from "../screens/AddNoteScreen";
import EditNoteScreen from "../screens/EditNoteScreen";
const Stack = createNativeStackNavigator();
export default function HomeStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="DetailNote" component={DetailNote} options={{ headerShown: false }}/>
            <Stack.Screen name="EditNote" component={EditNoteScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}