import { StyleSheet} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryOneScreen from "./CategoryOneScreen";
import CategoryTwoScreen from "./CategoryTwoScreen";
import CategoryThreeScreen from "./CategoryThreeScreen";
const TopTab = createMaterialTopTabNavigator();
export default function CategoryScreen(){
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="category1" component={CategoryOneScreen}/>
            <TopTab.Screen name="category2" component={CategoryTwoScreen}/>
            <TopTab.Screen name="category3" component={CategoryThreeScreen}/>
        </TopTab.Navigator>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
    }
})