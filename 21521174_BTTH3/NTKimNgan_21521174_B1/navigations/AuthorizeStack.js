import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthorizeScreens/LoginScreen';
import RegisterScreen from '../screens/AuthorizeScreens/RegisterScreen';
export default function AuthorizeStack(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    )
}