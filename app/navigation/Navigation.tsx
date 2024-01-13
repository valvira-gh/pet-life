'use client';
import Link from 'next/link';
import styles from './navigation.module.css'
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { useUser} from "@/app/context/userContext";

const Navigation: React.FC = () => {
    const { isLogged } = useUser();
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

            {isLogged ?
                navLinks.map((path) => {
                    return <Link href={`/${path}`}>{path.toUpperCase()} | </Link>
                }) :
                <>
                    <button className={styles.loginBtn} onClick={() => navigateTo('/login')}>Login</button>

                </>

            }


        </nav>
    )
}

export default Navigation;
