import { reactive } from "vue";
import { FormErrors, FormData } from "@/types/types";
import { validateForm as runValidation } from "@/types/validation";

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
        consent: false,
    
    });

    const errors = reactive<FormErrors>({});

    const validateForm = () => {
        const validationErrors = runValidation(formData);
        Object.assign(formData, validationErrors);
    };

    return { formData, errors, validateForm };
};