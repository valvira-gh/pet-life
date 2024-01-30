'use client';
import React, {createContext, useContext, useState, useEffect, SetStateAction} from 'react';

type PetContextType = {
    selectedPet: string;
    setSelectedPet: React.Dispatch<React.SetStateAction<string>>;
}

const PetContext = createContext<PetContextType>({
    selectedPet: '',
    setSelectedPet: () => {}
});

export const usePet = () => useContext(PetContext);

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({ children  }) => {
    const [selectedPet, setSelectedPet] = useState<string>('');

    return (
        <PetContext.Provider value={{ selectedPet, setSelectedPet }}>
            {children}
        </PetContext.Provider>
    )
}