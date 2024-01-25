import styles from './components.module.css';
interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default Header;