import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from "../screens/MainScreen/HomeScreen";
import CategoryScreen from "../screens/MainScreen/CategoryScreen";
import FavoritesScreen from "../screens/MainScreen/FavoritesScreen";
import AccScreen from "../screens/MainScreen/AccScreen";
export const Tab = createBottomTabNavigator()
export default function BottomTab(){
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === "Home"){
                    iconName = focused ? "home" : "home"
                }else if(route.name === "Category"){
                    iconName = focused ? "category" : "category"
                }else if(route.name === "Favorite"){
                    iconName = focused ? "favorite" : "favorite-border"
                }else if(route.name === "Account"){
                    iconName = focused ? "person" : "person-outline"
                }
                return <Icon name={iconName} color={color} size={size}/>
            },
            tabBarActiveTintColor: "#007bff",
            tabBarInactiveTintColor: "gray"
        })}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Category" component={CategoryScreen}/>
            <Tab.Screen name="Favorite" component={FavoritesScreen}/>
            <Tab.Screen name="Account" component={AccScreen}/>
        </Tab.Navigator>
    )
}