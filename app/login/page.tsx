'use client'
import styles from './page.module.css';
import { useUser } from '../userContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import  ButtonPrimary from '../components/ButtonPrimary';
import React, { useState } from "react";


interface LoginProps {
    
    }

const Login: React.FC<LoginProps> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   const router = useRouter();
   const { setUser } = useUser();

   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       console.log(username, password);
       setUser({ username, password });

         router.push('/dashboard');
   }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Login or <Link href={'/registerUser'} className={styles.registerUser}>Register User</Link></h3>
            <form className={styles.loginForm}>
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

                <ButtonPrimary text="Login"  clickEvent={handleLogin} />
            </form>
        </div>
    )
}

export default Login;