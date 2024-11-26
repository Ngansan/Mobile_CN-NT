import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from '../navigations/HomeStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SettingScreen from '../screens/SettingScreen';
import { SettingsContext } from '../context/SettingContext';
const Tab = createBottomTabNavigator()
export default function BottomTab(){
    const {themeStyles, fontSize} = useContext(SettingsContext);
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === 'Home'){
                    iconName = focused ? 'home' : 'home';
                }else if(route.name === 'Settings'){
                    iconName = focused ? 'settings' : 'settings';
                }
                return <Icon name={iconName} size={30} color={color}/>; 
            },
            tabBarActiveTintColor: "#007bff",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle:{
                fontSize: 16
            },
            tabBarStyle:{
                backgroundColor: themeStyles.backgroundColor
            }
        })}>
            <Tab.Screen name='Home' component={HomeStack} options={{ headerShown: false }}/>
            <Tab.Screen name='Settings' component={SettingScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}