import { reactive } from "vue";
import { FormErrors, FormData } from "@/types/types";

export const useInvestmentForm = () => {
    const formData = reactive<FormData>({
        investmentAmount: "0",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        birthNumber: "",
        dateOfBirth: "",
        idCardNumber: "",
        address: "",
        bankAccountNumber: "",    
    });

    const errors = reactive<FormErrors>({});

    

    return { formData, errors };
};