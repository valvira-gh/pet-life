'use client';
import React, { useState, useEffect } from "react";
import styles from './page.module.css';
import { useUser} from "@/app/context/userContext";
import { Page } from '@/app/petForms/dog/page';

interface MessageProps {
    text: string
}

interface MyPetsProps {
    // props here if necessary
}

const Message: React.FC<MessageProps> = ({ text }) => <p className={styles.message}>{text}</p>

 const MyPets: React.FC = () => {
     const { user, setUser } = useUser();
     const [showForm, setShowForm] = useState<boolean>(false);
     const [selectedPet, setSelectedPet] = useState<string>("");

     const handleShowForm = (): void => {
         setShowForm((prevValue: boolean) => !prevValue)
     }

     const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
         event.preventDefault();

         const formData: FormData = new FormData(event.currentTarget);
         const selectedValue: string = formData.get('petSelect') as string;
         setSelectedPet(selectedValue);
     }

     console.log(selectedPet)

    return (
        <div className={styles.container}>

            <div className={styles.temporary}>
                {user.hasPets ? <Message text="You have [INSERT ANIMAL COUNT] currently registered."/> :
                    <Message text="You haven't registered any Pet yet."/>}
            </div>


            {showForm ? <AddNewPetsForm handleSubmit={handleSubmit} /> :
                <button onClick={handleShowForm} className={styles.addNewPetBtn}>Add New Pet</button>}


        </div>
    )
 }

export default MyPets;

interface AddNewPetsFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AddNewPetsForm: React.FC<AddNewPetsFormProps> = ({ handleSubmit }) => {
     return (
         <div className={styles.addPetContainer}>
             <h3 className={styles.addPetTitle}>
                 Add new Pet
             </h3>
         <form onSubmit={handleSubmit} id='addPetForm' className={styles.addPetForm}>
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
                 <button type='submit' className={styles.submitPetBtn}>Next</button>
             </div>

         </form>
         </div>
     )
}