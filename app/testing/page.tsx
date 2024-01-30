import { SubmitButton } from "@/app/testing/submit-button";
import { createUser } from "@/app/testing/lib";

// Server Component
export default async function Home() {
    return (
        <form action={createUser}>
            <input type="text" name="field-name" />
            <SubmitButton />
        </form>
    )
}