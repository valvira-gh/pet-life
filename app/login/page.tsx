'use client'
import styles from './page.module.css';
import  ButtonPrimary from '../components/ButtonPrimary';
interface LoginProps {
    
    }

const Login: React.FC<LoginProps> = () => {
    function submitLogin() {
        console.log("Login submitted");
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Login or <span className={styles.registerUser}>Register User</span></h3>
            <form className={styles.loginForm}>
                <div className={styles.formElement}>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" className={styles.input} placeholder=''/>
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" className={styles.input} placeholder=''/>
                </div>

                <ButtonPrimary text="Login" clickEvent={submitLogin}/>
            </form>
        </div>
    )
}

export default Login;