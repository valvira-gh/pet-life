import React from 'react';
import styles from './page.module.css';

type DogProps = {
    // Props
}

const Page: React.FC<DogProps> = () => {

    return (
        <div className={styles.formCard}>
            <form className={styles.form}>
                <div className={styles.formElement}>
                    <label htmlFor='name' className={styles.label}>Pet's name:</label>
                    <input id='name' type='text' className={styles.inputField}   />
                </div>
                <div className={styles.formElement}>
                    <p className={styles.genderLabel}>
                        Gender:
                        <label><input type="radio" name="myRadio" value="option1" className={styles.radioBtn}/> Male</label>
                        <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} className={styles.radioBtn}/> Female</label>
                    </p>

                </div>
                <div className={styles.formElement}>
                    <div className={styles.ageContainer}>
                        <label htmlFor='age' className={styles.label}>Age:</label>
                        <input id='age' type='number' className={styles.ageField}/>
                    </div>
                </div>
                <div className={styles.formElement}>
                    <label htmlFor='name' className={styles.label}>Pet's name:</label>
                    <input id='name' type='text' className={styles.inputField}/>
                </div>
            </form>
        </div>
    )
}

export {Page};