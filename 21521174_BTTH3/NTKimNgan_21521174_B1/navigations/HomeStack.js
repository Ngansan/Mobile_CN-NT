import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/MainScreen/HomeScreen";
import HomeDetailScreen from "../detailScreen/HomeDetailScreen";
const Stack = createNativeStackNavigator();
export default function HomeStack({navigation}){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="HomeDetail" component={HomeDetailScreen}/>
        </Stack.Navigator>
    )
}