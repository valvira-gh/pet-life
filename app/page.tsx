'use client';
import React, {useEffect, useState} from "react";
import Login from './login/page'
import styles from './page.module.css';
import {useUser} from '@/app/lib/context/userContext';

const Home = () => {
    const { user } = useUser();
    const [firstName, setFirstName] = useState('');

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
                    <h3 className={styles.greeting}>Welcome
                        <span className={styles.username}> {cutFirstName(user.username)}</span>
                        </h3>

                )
                    : <Login />}
            </div>
            <button onClick={clearLocalStorage} className={styles.clearBtn}>Clear localStorage</button>
        </div>
    )
};

export default Home;