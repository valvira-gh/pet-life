'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext({
    isLogged: false,
    setIsLogged: (value: boolean) => {}
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}: any) => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <UserContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </UserContext.Provider>
    );
};