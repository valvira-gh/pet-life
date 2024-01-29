'use server';

import { revalidatePath } from 'next/cache';

export async function addPet(
    prevState: {
        petType: string;
    },
    formData: FormData,
): Promise<{petType: string}> {

    try {
        await console.log('try succeeded');
    }
}


