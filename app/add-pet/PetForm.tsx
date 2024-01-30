import styles from './pet-form/page.module.css';
import { usePet } from '@/app/context/petContext'
import { getServerSideProps } from "next/dist/build/templates/pages";
import petQuestions from "@/app/add-pet/petQuestions";
import React from "react";

const PetForm: React.FC = ({ petType: string }): any => {
    const questions = petQuestions[petType] || [];

    return (
        <form className={styles.formCard}>
            <h3 className={styles.formTitle}>
                {`Add new ${petType}`}
            </h3>
        </form>
    )
}
export default PetForm;