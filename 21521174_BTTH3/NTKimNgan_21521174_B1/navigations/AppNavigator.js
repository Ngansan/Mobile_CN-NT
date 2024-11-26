import React, { useContext } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { AuthorizeContext } from '../context/AuthorizePro';
import AuthorizeStack from './AuthorizeStack';
import HomeStack from './HomeStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HelpScreen from '../screens/MainScreen/HelpScreen';
import CategoryScreen from '../screens/MainScreen/CategoryScreen';
import FavoritesScreen from '../screens/MainScreen/FavoritesScreen';
import AccScreen from '../screens/MainScreen/AccScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/MaterialIcons';
import NotificationStack from './NotificationStack';
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();
function BottomTab(){
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={({route}) => ({
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
            <Tab.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }}/>
            <Tab.Screen name="Category" component={CategoryScreen} options={{headerShown: true }}/>
            <Tab.Screen name="Favorite" component={FavoritesScreen} options={{ tabBarBadge: 10, headerShown: true }}/>
            <Tab.Screen name="Account" component={AccScreen}options={{headerShown: true }}/>

        </Tab.Navigator>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={({route})=>{
            const routeName = getFocusedRouteNameFromRoute(route);
            return {
                headerShown: routeName !== 'HomeDetail' && routeName !== 'NotificationsDetail',
            }
        }}>
            <Drawer.Screen
                name="Home"
                component={HomeStack}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Notifications"
                component={NotificationStack}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="notifications" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Help"
                component={HelpScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="help" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
export default function AppNavigator(){
    const {isAuthenticated} = useContext(AuthorizeContext)
    return(
        <NavigationContainer>
            {isAuthenticated ? (
                <BottomTab/>
            ): (<AuthorizeStack/>)
            }
        </NavigationContainer>
    )
}