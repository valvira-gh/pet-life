import React from 'react';
import styles from './animals.module.css';

type DogProps = {
    // Props
}

const Dog: React.FC<DogProps> = () => {

    return (
        <div className={styles.formCard}>
            Dog Form
        </div>
    )
}

export default Dog;