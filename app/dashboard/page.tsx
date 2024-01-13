import React from 'react';
import styles from './page.module.css';
import { useUser } from '../userContext';

const Dashboard = () => {
    const { user } = useUser();

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            {user ? <h3 className={styles.greeting}>What's up, {user.username}?</h3> :
                null}
        </div>
    )
}

export default Dashboard;