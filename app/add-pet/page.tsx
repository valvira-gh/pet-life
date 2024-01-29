'use client';

import React, { useState } from 'react';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { addPet} from "@/app/actions";
import styles from './page.module.css';
import { useRouter } from "next/navigation";

const initialState: {type: string} = {
    type: "",
}

/* SUBMIT BUTTON */
function SubmitBtn(): JSX.Element {
    const { pending: boolean} = useFormStatus();

    return (
        <button type='submit' aria-disabled={pending}>
            Add Pet
        </button>
    );
}


/* ADD-PET PAGE */
const AddPetForm: React.FC = () => {
    const [state, formAction] = useFormState(addPet, initialState)
    const router = useRouter(); // Initializes useRouter
    const [selectedPet, setSelectedPet] = useState<string>(""); // Initializes user-selected Pet

    // Handles change of selected pet
    const handlePetChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const pet: string = event.target.value; // Crabs the selection
        setSelectedPet(pet); // Re-valuates 'selectedPet'-state
    };

    return (
        <div className={styles.addPetContainer}>
            <h3 className={styles.addPetTitle}>
                Add new Pet
            </h3>
            <form action={formAction} id='addPetForm' className={styles.addPetForm}>
                    <p className={styles.formTitle}>
                        What kind of Pet Friend you want to add?
                    </p>

                    <select defaultValue='select' name='petSelect' form='addPetForm' className={styles.dropdownMenu}>
                        <option  value="select" disabled>Select the Pet</option>
                        <optgroup label='House Pets' >
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="rabbit">Rabbit</option>
                        </optgroup>
                        <optgroup label='Farm Animals'>
                            <option value="horse">Horse</option>
                            <option value="sheep">Sheep</option>
                            <option value="chicken">Chicken</option>
                        </optgroup>
                    </select>

                    <div className={styles.submitBtnContainer}>
                        <SubmitBtn />
                    </div>
            </form>
        </div>
    )
}

export default AddPetForm;