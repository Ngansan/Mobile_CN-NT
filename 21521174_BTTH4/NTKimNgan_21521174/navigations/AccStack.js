import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccScreen from "../screens/MainScreen/AccScreen";
import EditProfileScreen from "../screens/MainScreen/EditProfileScreen";

const Stack = createNativeStackNavigator();
export default function AccStack(){
    return (
        <Stack.Navigator >
            <Stack.Screen name="Profile" component={AccScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    )
}