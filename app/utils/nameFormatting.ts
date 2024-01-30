import {useUser} from "@/app/lib/context/userContext";

export const nameFormatting = ():string => {
    const   { user, setUser } = useUser();

    if (!user) {
        return 'User Data not available for an unknown reason...'
    }

    const email: string = user.username;
    const emailCut: string[] = email.split('@')
    console.log(`emailCut: ${emailCut}`)

    const firstName = ''
    return firstName
}