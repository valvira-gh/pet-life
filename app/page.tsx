'use client';
import React, {useEffect, useState} from "react";
import Login from './login/page'
import styles from './page.module.css';
import {useUser} from '@/app/lib/context/userContext';
import Dashboard from "@/app/dashboard/page";
import { cutFirstName } from "@/app/utils/feature_functions";

const Home = () => {
    const { user } = useUser();



    const clearLocalStorage = (): void => {
        localStorage.clear();
    }



    return (
        <div className={styles.App}>
            <div className={styles.container}>
                {user.isLogged ? (
                    <h3 className={styles.greeting}>Welcome
                        <Dashboard />
                        </h3>

                )
                    : <Login />}
            </div>
            <button onClick={clearLocalStorage} className={styles.clearBtn}>Clear localStorage</button>
        </div>
    )
};

export default Home;