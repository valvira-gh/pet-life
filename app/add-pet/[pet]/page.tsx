// add-pet/[pet]/page.tsx
'use client';
import { useRouter} from "next/navigation";
import { GetStaticPaths, GetStaticProps } from "next";
import petQuestions from "@/app/lib/petQuestions";

const PetPage: React.FC = ({ questions }) => {
    const router = useRouter();
    const { pet } = router.query;

    return (
        <div>
            <h1>Questions for {pet}</h1>
            <ul>
                {questions.map((q, i) => (
                    <li key={i}>{q}</li>
                ))}
            </ul>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(petQuestions).map((pet) => ({
        params: { pet }
    }));

    return { paths, fallback: false }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pet = params.pet as string

    return { props: { questions } };

}