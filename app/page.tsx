'use client';
import React, {useEffect, useState} from "react";
import Login from './login/page'
import styles from './page.module.css';
import {useUser} from '@/app/context/userContext';

const Home = () => {
    const { user } = useUser();
    const [firstName, setFirstName] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>()

    // Function to get current date in local time
    useEffect(() => {
        const date = new Date();
        console.log(date)
        const day = date.getDate();
        const month = date.getMonth() + 1
        console.log(month)
        const year = date.getFullYear()
        setCurrentDate(day + "." + month + "." + year)
    }, [])

    useEffect(() => {
        if (user.isLogged) {
            setFirstName(cutFirstName(user.username));
        }
    }, [user]);

    const clearLocalStorage = (): void => {
        localStorage.clear();
    }

    const cutFirstName = (email: string): string => {
        // First we cut from '@' signs place
        const parts: string[] = email.split('@');
        const nameParts = parts[0].split('.');
        const firstName = nameParts[0]
        return firstName[0].toUpperCase() + firstName.slice(1);
    }

    return (
        <div className={styles.App}>
            <div className={styles.container}>
                {user.isLogged ? (
                    <div className={styles.greetingDateBox}>
                        <h3 className={styles.greeting}>Welcome
                            <span className={styles.username}> {cutFirstName(user.username)}</span>! ❤️
                            </h3>
                        <p className={styles.date}>
                           Today is
                            <span className={styles.num}> {currentDate}</span>
                        </p>
                     </div>
                )
                    : <Login />}
            </div>
            {/* <button onClick={clearLocalStorage} className={styles.clearBtn}>Clear localStorage</button>*/}
        </div>
    )
};

export default Home;