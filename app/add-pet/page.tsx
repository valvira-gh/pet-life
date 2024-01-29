'use client';


import styles from './page.module.css';
import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useRouter } from "next/navigation";


/* SUBMIT BUTTON */
function SubmitBtn(): JSX.Element {
    const { pending} = useFormStatus();
    return (
        <button type='submit' aria-disabled={pending} className={styles.submitBtn}>
            {pending ? "Adding..." : "Add"}

        </button>
    );
}

function Form({ action, selectedPet }): React.JSX.Element {
    return (
        <form action={action} id='addPetForm' className={styles.addPetForm}>
            <p className={styles.formTitle}>
                What kind of Pet Friend you want to add?
            </p>

            <select value={selectedPet} name='petSelect' form='addPetForm' className={styles.dropdownMenu}>
                <option value="select" disabled>Select the Pet</option>
                <optgroup label='House Pets'>
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
    )
}

const AddPet: React.FC = () => {
    const router = useRouter(); // Initializes useRouter
    const [selectedPet, setSelectedPet] = useState<string>(""); // Initializes user-selected Pet

    const submitForm = async (query: string): Promise<void>=> {
            await new Promise((res) => setTimeout(res, 1000))
            console.log("submitting...")
    }

    return (
        <div className={styles.addPetContainer}>
            {selectedPet && <p className={styles.selectionTxt}>You've selected {selectedPet}.</p>}
            <h3 className={styles.addPetTitle}>
                Add new Pet
            </h3>
            <Form action={submitForm} />
        </div>
    )
}

export default AddPet;

