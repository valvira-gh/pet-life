'use client';
import React, {SetStateAction, useEffect, useState} from "react";
import Login from './login/page'
import styles from './page.module.css';
import {useUser} from '@/app/context/userContext';
import { Barlow } from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";
const barlow: NextFont = Barlow({ weight: '600', subsets: ['latin']})
const Home = () => {
    const { user
    } = useUser();
    const [firstName, setFirstName] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string | undefined>(undefined)
    const [currentTime, setCurrentTime] = useState('')



    useEffect(():void => {
        const months: string[] = [
            "January","February","March","April","May","June","July",
            "August","September","October","November","December"];
        const date: Date = new Date();
        let day: number = date.getDate();
        const month: number = date.getMonth(); // Zero indexed!
        const year: number = date.getFullYear();

        const ending: string[] = ['st', 'nd', 'rd', 'th'];
        const dayEnding: string = ending[Math.min(day - 1, 3)]
        const dateString: string = day.toString() + dayEnding + " of " + months[month] + " in " + year.toString()

        setCurrentDate(dateString)

        const hours: number = date.getHours();
        const minutes: number = date.getMinutes();

        setCurrentTime(time => time = hours.toString() + ":" + minutes.toString())
    }, []);

    console.log(currentDate)

    useEffect((): void => {
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
        const nameParts: string[] = parts[0].split('.');
        const firstName: string = nameParts[0]
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
                            <p className={styles.dateText}>
                                Today is
                                <br />
                                <span className={styles.date}>{currentDate}</span>
                            </p>
                            <p className={styles.timeText}>
                               <span className={barlow.className}>
                                   {currentTime}
                               </span>
                            </p>
                        </div>


                    )
                    : <Login/>}
            </div>
            {/*<button onClick={clearLocalStorage} className={styles.clearBtn}>Clear localStorage</button>*/}
        </div>
    )
};

export default Home;