'use client'
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from "react";
import { useUser } from '@/app/lib/context/userContext';


const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useUser() // We'll use loginUser() function from userContext
   const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
        e.preventDefault()
        // If logic in loginUser()-function in userContext.tsx returns 'true'
        if (loginUser(username, password)) {
            // If login is success, we'll route user into Home:
            router.push('/')
        } else {
            // If login is unsuccessful, we'll show error msg:
            console.log('Invalid username or password.')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>Login or <Link href={'/registerUser'} className={styles.registerUser}>Register
                    User</Link></h3>
            </div>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div className={styles.formElement}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        className={styles.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        placeholder=''/>
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        className={styles.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        placeholder=''/>
                </div>

                <input type="submit" value="Login" className={styles.submitBtn} />
            </form>
        </div>
    )
}

export default Login;