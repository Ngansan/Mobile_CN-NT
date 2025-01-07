import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/MainScreen/HomeScreen";
import DetailProductScreen from "../detailScreen/DetailProductScreen";

const Stack = createNativeStackNavigator();
export default function HomeStack({navigation}){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="DetailProduct" component={DetailProductScreen}/>
        </Stack.Navigator>
    )
}