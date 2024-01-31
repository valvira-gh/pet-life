'use client';
import styles from './page.module.css';
import React, { useState } from "react";
import { useUser } from "@/app/lib/context/userContext";
import { useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type NewUserTypes = {
    id: number,
    username: string,
    password: string,
    confirmPassword: string
}


const RegisterUser: React.FC = () => {
    const [newUser, setNewUser] = useState<NewUserTypes>({
        id: 1,
        username: '',
        password: '',
        confirmPassword: ''
    })
    const { registerUser } = useUser();
    const router: AppRouterInstance = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (newUser.password !== newUser.confirmPassword) {
            console.log('Passwords do not match.');
            return;
        }
        if (registerUser(newUser.username, newUser.password)) {
            // Register is success, re-direct to Login-page:
            console.log("Registration successful!")
            router.push('../')
        } else {
            // Username is already taken:
            console.log("Username is already taken!")
        }
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Register User</h3>
            <form onSubmit={handleSubmit} className={styles.registerUserForm}>
                <div className={styles.formElement}>
                <label className={styles.label} htmlFor='username'>Username:</label>
                <input
                    className={styles.input}
                    id='username'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUser({
                        ...newUser,
                        username: e.target.value
                    })} />
                </div>
                <div className={styles.formElement}>
                <label className={styles.label} htmlFor='password'>Password:</label>
                <input
                    className={styles.input}
                    id='password'
                    type='password'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUser({
                        ...newUser,
                        password: e.target.value
                    })} />
                </div>
                <div className={styles.formElement}>
                <label className={styles.label} htmlFor='confirmPassword'>Confirm Password:</label>
                <input
                    className={styles.input}
                    id='confirmPassword'
                    type='password'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUser({
                        ...newUser,
                        confirmPassword: e.target.value
                    })} />
                </div>
                <input type="submit" value="Register" className={styles.submitBtn} />
            </form>
        </div>
    )
}

export default RegisterUser;