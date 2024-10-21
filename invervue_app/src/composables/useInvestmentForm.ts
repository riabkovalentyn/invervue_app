import { reactive } from "vue";
import { FormData } from "@/types/types";

export const useInvestmentForm = () => {
    const formData = reactive<FormData>({
        investmentAmount: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        birthNumber: "",
        dateOfBirth: "",
        idCardNumber: "",
        address: "",
        bankAccountNumber: "",
        consent: false,
    
    });

    const validateForm = (): boolean => {
        return !!(formData.firstName && formData.lastName && formData.email && formData.consent);
    };

    return { formData, validateForm };
};