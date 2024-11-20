import React, { createContext, useState } from 'react';

export const AuthorizeContext = createContext();

export default function AuthorizePro({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email, password) =>{
        if(email === "21521174@gm.uit.edu.vn" && password === "nguyenthikimngan"){
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }
    const logout = () =>{
        setIsAuthenticated(false);
    }
    return(
        <AuthorizeContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthorizeContext.Provider>
    )

}