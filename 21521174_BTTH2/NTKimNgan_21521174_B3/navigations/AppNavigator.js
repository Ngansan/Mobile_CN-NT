import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthorizeContext } from '../context/AuthorizePro';
import BottomTab from './BottomTab';
import AuthorizeStack from './AuthorizeStack';

export default function AppNavigator(){

    const {isAuthenticated} = useContext(AuthorizeContext)
    return(
        <NavigationContainer>
            {isAuthenticated ? <BottomTab/> : <AuthorizeStack/>}
        </NavigationContainer>
    )
}