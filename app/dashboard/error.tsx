'use client';
import styles from './Error.module.css';
import { useState, useEffect } from 'react';

const Error = ({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    const [errorMsg, setErrorMsg] = useState<string>('')

    useEffect(() => {
        console.error(error)

    }, []);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Oops...Something went up to the ass of Timo!
                <br />
                🚗💨🍑🔝
            </h3>
            <button onClick={() => reset()}>
               Try again
                </button>
        </div>
    )
}
