import styles from './components.module.css';
interface ButtonPrimaryProps {
    text: string;
    clickEvent: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, clickEvent }) => {
    return (
        <button className={styles.buttonPrimary} onClick={clickEvent}>{text}</button>
    )
}

export default ButtonPrimary;