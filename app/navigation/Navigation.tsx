'use client';
import Link from 'next/link';
import styles from './navigation.module.css'
import { useRouter } from 'next/navigation';
import React, { useState } from "react";

const Navigation: React.FC = () => {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <nav className={styles.nav}>
            <Link href={'/'} className={styles.navItem}>Home</Link>
            <button className={styles.loginBtn} onClick={() => navigateTo('/login')}>Login</button>
        </nav>
    )
}

export default Navigation;
