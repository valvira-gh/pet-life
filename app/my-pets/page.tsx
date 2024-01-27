'use client';
import React, { useState, useEffect } from "react";
import styles from './page.module.css';
import { useUser} from "@/app/context/userContext";
import { Page } from '@/app/petForms/dog/page';

interface MessageProps {
    text: string
}

const Message: React.FC<MessageProps> = ({ text }) => <p className={styles.message}>{text}</p>

 const MyPets: React.FC = () => {
     const { user, setUser } = useUser();
     const [showForm, setShowForm] = useState<boolean>(false)

     const handleShowForm = (): void => {
         setShowForm((prevValue: boolean) => !prevValue)
     }
     console.log(showForm)

    return (
        <div className={styles.container}>

            <div className={styles.temporary}>
                {user.hasPets ? <Message text="You have [INSERT ANIMAL COUNT] currently registered."/> :
                    <Message text="You haven't registered any Pet yet."/>}
            </div>

          <button onClick={handleShowForm} className={styles.addNewPetBtn}>Add New Pet</button>

            <div className={styles.addPetContainer}>
                <h3 className={styles.addPetTitle}>
                    Add new Pet
                </h3>

                <form className={styles.addPetForm}>
                    <p className={styles.formTitle}>
                        What kind of Pet Friend you want to add?
                    </p>
                    <select className={styles.dropdownMenu}>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </form>
            </div>
        </div>
    )
 }

export default MyPets;