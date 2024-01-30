'use client';

import React, { useState, useReducer, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { addPet } from "@/app/actions";
import styles from './page.module.css';
import { useRouter } from "next/navigation";
import { PetProvider, usePet } from "@/app/lib/context/petContext";
import PetForm from "@/app/add-pet/PetForm";


/* SUBMIT BUTTON */
function SubmitBtn() {
    return (
        <button className={styles.submitBtn} type='submit' >
            Add Pet
        </button>
    );
}


/* ADD-PET PAGE */
const AddPetForm: React.FC = () => {
    const router = useRouter(); // Initializes useRouter
   const { selectedPet, setSelectedPet} = usePet();
   const [pet, setPet] = useState('');




    // Handles change of selected pet
    const handlePetChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setPet(event.target.value);
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSelectedPet(pet);
        router.push(`add-pet/${pet}`)
    }

    return (
        <PetProvider>

        <div className={styles.addPetContainer}>
            <h3 className={styles.addPetTitle}>
                Add new Pet
            </h3>
            <form onSubmit={handleSubmit} id='addPetForm' className={styles.addPetForm}>
                <p className={styles.formTitle}>
                    What kind of Pet Friend you want to add?
                </p>

                <select onChange={handlePetChange} defaultValue='select' name='petSelect' form='addPetForm' className={styles.dropdownMenu}>
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
        </PetProvider>
    )
}

export default AddPetForm;