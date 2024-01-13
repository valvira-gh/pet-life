'use client';
import { createContext, useContext, useState }  from "react";

// Määrittele käyttäjän tilatyyppi
type UserType = {
    isLogged: boolean;
    username: string;
    password: string;
};

// Luodaan konteksti käyttäjän tilalle ja sen pävittämisfunktiolle
const UserContext = createContext<{
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>
}>({
    user: {
        isLogged: false,
        username: '',
        password: ''
    },
    setUser: () => {}
});

// Luodaan hook kontekstin käyttöön
export const useUser = () => useContext(UserContext);

// Luodaan provider-komponentti kontekstin tarjoamiseen
export const UserProvider: React.FC<{children: React.ReactNode}> =({  children }) => {
    const [user, setUser] = useState<UserType>({
        isLogged: false,
        username: '',
        password: ''
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}