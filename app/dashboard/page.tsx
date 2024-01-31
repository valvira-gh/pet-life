'use server'
import styles from './page.module.css';
import { cutFirstName } from "@/app/utils/feature_functions";
import { useUser } from "@/app/lib/context/userContext";
import {Fragment} from "react";
import Error from "next/error";

const Dashboard = () => {
    const { user } = useUser();

    if (!user) {

    }


    return (
        <section className={ styles.dashboard }>
            <h3>Dashboard</h3>

            {user ?
            <p>Welcome back,<span className={styles.name}>
                   {" " + cutFirstName(user.username)}
                </span>! 💙
            </p>
                : null}

        </section>
    )
}
export default Dashboard;