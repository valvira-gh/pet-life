'use client';
import styles from './page.module.css';
import React, { useState } from "react";

type NewUserTypes = {
    id: number,
    username: string,
    password: string,
    confirmPassword: string
}

type RegisterUserTypes = {
    handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const RegisterUser: React.FC<RegisterUserTypes> = () => {
    const [newUser, setNewUser] = useState<NewUserTypes>({
        id: 1,
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({ ...newUser,  username: e.target.value });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({ ...newUser, password: e.target.value });
    };

    const handleConfirmPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({ ...newUser, confirmPassword: e.target.value})
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Register User</h3>
            <form className={styles.registerUserForm}>
                <div className={styles.formElement}>
                <label className={styles.label} htmlFor='username'>Username:</label>
                <input
                    className={styles.input}
                    id='username'
                    onChange={handleUsernameChange} />
                </div>
                <div className={styles.formElement}>
                <label className={styles.label} htmlFor='password'>Password:</label>
                <input
                    className={styles.input}
                    id='password'
                    // type
                    onChange={handleUsernameChange} />
                </div>
                <div className={styles.formElement}>
                <label className={styles.label} htmlFor='confirmPassword'>Confirm Password:</label>
                <input
                    className={styles.input}
                    id='confirmPassword'
                    // type
                    onChange={handleUsernameChange} />
                </div>
                <input type="submit" value="Register" className={styles.submitBtn} />
            </form>
        </div>
    )
}

export default RegisterUser;