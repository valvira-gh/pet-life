import styles from './pet-form/page.module.css';
import { usePet } from '@/app/context/petContext';
import petQuestions from "@/app/add-pet/petQuestions";
import React from "react";

export default function Page({ params }: { params: { pet: string[] } }) {
    return (
        <div>
            {petQuestions.map((q, i) => (
                <div key={i}>{q}</div>
            )) }
        </div>
    )
}
