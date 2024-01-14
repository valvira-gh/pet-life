'use client';
import Login from './login/page'
import styles from './page.module.css';
import { useUser } from '@/app/context/userContext';

const Home = () => {
    const { user } = useUser();

    return (
        <div className={styles.App}>
            <div className={styles.container}>
                {user.isLogged ? <h3>Welcome {user.username}</h3> : <Login />}
            </div>
        </div>
    )
};

export default Home;