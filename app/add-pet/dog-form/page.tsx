import React from 'react'
import '../petForm.css';

import { usePet, PetProvider } from '@/app/lib/context/petContext';
const DogForm: React.FC = () => {
    const { selectedPet } = usePet();

    return (

        <form className='petForm'>
            <h3>{selectedPet}</h3>
        </form>

    )
}

export default DogForm;