'use client'
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from "react";
import { useUser } from '@/app/context/userContext';

interface LoginProps {
    
    }

const Login: React.FC<LoginProps> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   const router = useRouter();
   const { setIsLogged } = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('username: ', username, 'password: ', password);
        setIsLogged(true);
        router.push('/');
  }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Login or <Link href={'/registerUser'} className={styles.registerUser}>Register User</Link></h3>
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