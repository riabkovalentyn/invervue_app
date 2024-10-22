import { FormData, FormErrors } from "./types";

export const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[^a-zA-Z0-9]/g, "");
};

export const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};



if(!formData.name || formData.name.length < 2) {
    errors.name = "Name must be at least 2 characters long";
}

cosnt emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(formData.email)) {
    errors.email = "Please enter a valid email address";
}


const investmentAmount = parseFloat(formData.investmentAmount);
if (isNaN(investmentAmount) || investmentAmount <= 0) {
  errors.investmentAmount = 'Hodnota investice musí být kladné číslo.';
}

return errors;
};