import styles from './pet-form/page.module.css';
import { usePet } from '@/app/lib/context/petContext'
import { getServerSideProps } from "next/dist/build/templates/pages";
import petQuestions from "@/app/lib/petQuestions";
import React from "react";
import {string} from "prop-types";

const PetForm: React.FC = ( pet: {} ): any => {
    const questions = petQuestions.pet: { string }[] || [];

    return (
        <form className={styles.formCard}>
            <h3 className={styles.formTitle}>
                {`Add new ${pet}`}
            </h3>
        </form>
    )
}
export default PetForm;