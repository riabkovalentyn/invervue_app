import axios from 'axios';
import { FormData } from '@/types/types';

const apiClient = axios.create({
    baseURL: 'https://api.invervue.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    submitForm(data: FormData){
        return apiClient.post('/investments', data);
    },
    fetchFormData(){
        return apiClient.get('/fromData');
    }
};