'use client';
import Link from 'next/link';
import styles from './navigation.module.css'
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { useUser } from "@/app/context/userContext";
import ButtonPrimary from "@/app/components/ButtonPrimary";

const Navigation: React.FC = () => {
    const { user } = useUser();
    const [navLinks, setNavLinks] = useState([
        'home',
        'about',
        'contact'
    ])

    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };


    return (
        <nav className={styles.nav}>

            {user.isLogged ?
                navLinks.map((path) => {
                    return <Link href={`/${path}`}>{path.toUpperCase()} | </Link>
                }) :
                <>
                    <button className={styles.loginBtn} onClick={() => navigateTo('/login')}>Login</button>

                </>

            }

            {user.isLogged ? <p className={styles.usernameInfo}>User logged: <span className={styles.username}>{user.username}</span> </p> : null}
        </nav>
    )
}

export default Navigation;
