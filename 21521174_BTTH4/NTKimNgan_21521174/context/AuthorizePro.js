import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
export const AuthorizeContext = createContext();
export default function AuthorizePro({ children }) {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const login = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: "mor_2314", 
                    password: "83r5^_", 
                }),
            });
            if (response.ok) {
                const json = await response.json();
                if (json.token) {
                    setUserToken(json.token); 
                    await AsyncStorage.setItem('authToken', json.token); 
                    console.log("Token saved: ", json.token);
                }
            } else {
                console.log("Login failed: ", response.status);
            }
        } catch (error) {
            console.error("Login error: ", error);
        }
    };
    const logout = async () => {
        setUserToken(null);
        await AsyncStorage.removeItem('authToken'); 
        console.log("Logged out, token removed.");
    };
    useEffect(() => {
        const loadToken = async () => {
            const token = await AsyncStorage.getItem('authToken'); 
            if (token) {
                setUserToken(token); 
                console.log("Token loaded: ", token);
            }
            setIsLoading(false);
        };
        loadToken();
    }, []);

    return (
        <AuthorizeContext.Provider value={{ userToken, login, logout, isLoading }}>
            {children}
        </AuthorizeContext.Provider>
    );
}
