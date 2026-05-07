import {API_URL} from '@/lib/env';
import {workshopFormValues} from "@/components/shared/workshopForm";

export const getTalleres = async () => {
    const response = await fetch(`${API_URL}/api/v1/workshops`);
    const data = await response.json();
    return data;
}

export const postTalleres = async (taller: workshopFormValues) => {
    const response = await fetch(`${API_URL}/api/v1/workshops`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taller)
    });
    const data = await response.json();
    return data;
}