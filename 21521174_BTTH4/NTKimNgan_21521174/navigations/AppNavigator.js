import React, { useContext } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { AuthorizeContext } from '../context/AuthorizePro';
import HomeStack from './HomeStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from '../screens/MainScreen/CategoryScreen';
import CartScreen from '../screens/MainScreen/CartScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from '../screens/AuthorizeScreens/LoginScreen';
import { Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccStack from './AccStack';
import { useCart } from '../context/CartContext';
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function BottomTab(){
    const {cartItems} = useCart();
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === "Home"){
                    iconName = focused ? "home" : "home"
                }else if(route.name === "Category"){
                    iconName = focused ? "category" : "category"
                }else if(route.name === "Cart"){
                    iconName = "shopping-cart" 
                }else if(route.name === "Profile"){
                    iconName = focused ? "person" : "person-outline"
                }
                return <Icon name={iconName} color={color} size={size}/>
            },
            tabBarActiveTintColor: "#007bff",
            tabBarInactiveTintColor: "gray"
        })}>
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
            <Tab.Screen name="Category" component={CategoryScreen} options={{headerShown: true }}/>
            <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: cartItems.length > 0 ? cartItems.length : null, headerShown: true }}/>
            <Tab.Screen name="Profile" component={AccStack}options={{headerShown: true }}/>

        </Tab.Navigator>
    )
}

export default function AppNavigator(){
    const {userToken, isLoading} = useContext(AuthorizeContext)
    
    if(isLoading){
        return <Text>Loading...</Text>
    }
    return(
        <NavigationContainer>
            {
                userToken ? (
                    <BottomTab/>
                ):(
                    <Stack.Navigator> 
                        <Stack.Screen name="Login" component={LoginScreen} /> 
                    </Stack.Navigator>
                )
            }
        </NavigationContainer>
    )
}