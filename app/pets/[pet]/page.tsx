import styles from 'page.module.css';

const Page = ({ params }: { params: { pet: string } }) => {
    return <div className={styles.pets}>My pet: {params.pet}</div>
}