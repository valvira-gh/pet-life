import React from 'react'
import '../petForm.css';

import { usePet, PetProvider } from '@/app/context/petContext';
const DogForm: React.FC = () => {
    const { selectedPet } = usePet();

    return (
        <PetProvider>
        <form className='petForm'>
            <h3>{selectedPet}</h3>
        </form>
        </PetProvider>
    )
}

export default DogForm;