
import styles from './page.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.navContainer}>

            </div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}

export default Layout;