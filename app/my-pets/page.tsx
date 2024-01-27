'use client';
import React, { useState, useEffect } from "react";
import styles from './page.module.css';
import { useUser} from "@/app/context/userContext";

interface MessageProps {
    text: string
}

const Message: React.FC<MessageProps> = ({ text }) => <p className={styles.message}>{text}</p>

 const MyPets: React.FC = () => {
     const { user, setUser } = useUser();


    return (
        <div className={styles.container}>
            <div>
                <button onClick={() => setUser(user => user = { ...user, hasPets: true })}>Has Pets?</button>
                {user.hasPets ? <Message text="You have [INSERT ANIMAL COUNT] currently registered." /> : <Message text="You don't yet have registered pets." />}
            </div>
        </div>
    )
}

export default MyPets;