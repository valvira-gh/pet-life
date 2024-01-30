'use client';
import styles from './page.module.css';
import { nameFormatting } from "@/app/utils/nameFormatting";
import { useUser } from "@/app/lib/context/userContext";

const Dashboard = () => {
    const { user } = useUser();

    return (
        <section className={ styles.dashboard }>
            <h3>Dashboard</h3>
            <button onClick={nameFormatting}>Name Format</button>
            <p>{user.username}</p>

        </section>
    )
}
export default Dashboard;