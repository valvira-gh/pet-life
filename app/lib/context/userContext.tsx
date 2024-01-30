'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Kontekstin määrittely:
type UserType = {
    isLogged: boolean;
    username: string;
    password: string;
    hasPets: boolean;
}

const UserContext = createContext<{
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
    registerUser: (username: string, password: string) => boolean;
    loginUser: (username: string, password: string) => boolean;
    logoutUser: () => void;
}>({
    user: { isLogged: false, username: '', password: '', hasPets: false },
    setUser: () => {},
    registerUser: () => false,
    loginUser: () => false,
    logoutUser: () => {},
});

export const useUser = () => useContext(UserContext);


// 2. UserProvider -komponentin luominen:
export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children}) => {
    const [user, setUser] = useState<UserType>(
        { isLogged: false, username: '', password: '', hasPets: false }
    )

    useEffect((): void => {
        // Tarkista, onko käyttäjä jo kirjautunut
        const storedUser: string | null = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        };
    }, []);


    // Uuden käyttäjän rekisteröinti
    const registerUser = (username: string, password: string): boolean => {
        // Tarkista, onko käyttäjänimi jo käytössä
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some((u: { username: string; }): boolean => u.username === username)) {
            return false; // Jos käyttäjänimi on jo käytössä, palautetaan false
        }

        // Tallenna uusi käyttäjä
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    };

    const loginUser = (username: string, password: string): boolean => {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        let foundUser = users.find((u: { username: string,  password: string; }) => u.username === username && u.password === password);
        if (foundUser) {
            setUser({hasPets: false, isLogged: true, username, password});
            localStorage.setItem('user', JSON.stringify({ isLogged: true, username, password }));
            return true;
        }
        return false;
    };

    const logoutUser = (): void => {
        // Set 'user.isLogged' state to 'false'
        setUser(prevUser => ({ ...prevUser, isLogged: false }));

        // Update logging out state to localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const updatedUser = { ...JSON.parse(storedUser), isLogged: false};
            localStorage.setItem('user', JSON.stringify(updatedUser));
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser, registerUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
