'use client';
import React, { useState, useEffect } from "react";
import styles from './page.module.css';
import { useUser} from "@/app/context/userContext";
import AddPetForm from '@/app/add-pet/page';
import { useRouter } from "next/navigation";

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

     const router = useRouter();

     const handleShowForm = (): void => {
         setShowForm((prevValue: boolean) => !prevValue)
     }


    return (
        <div className={styles.container}>
            <div className={styles.temporary}>
                {user.hasPets ?
                    <Message text="You have [INSERT ANIMAL COUNT] currently registered."/> :
                    <Message text="You haven't registered any Pet yet."/>}
            </div>
            <button onClick={() => router.push('/add-pet')}>Add new Pet</button>
        </div>
    )
 }

export default MyPets;


