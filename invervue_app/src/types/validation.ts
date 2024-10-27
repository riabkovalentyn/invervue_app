import { FormData, FormErrors } from "./types";

export const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[^a-zA-Z0-9]/g, "");
};

export const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};



if(!formData.firstName || formData.firstName .length < 2) {
        errors.firstName  = "Name must be at least 2 characters long";
}

if (!formData.lastName || formData.lastName.length < 2) {
        errors.lastName = "Last name must be at least 2 characters long.";
  }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(formData.email)) {
        errors.email = "Please enter a valid email address";
    }


const investmentAmount = parseFloat(formData.investmentAmount);
    if (isNaN(investmentAmount) || investmentAmount < 0) {
        errors.investmentAmount = 'Hodnota investice musí být kladné číslo.';
    }

const phonePattern = /^[\d\s-]+$/;
    if (!phonePattern.test(formData.phoneNumber)) {
        errors.phoneNumber = "Please enter a valid phone number.";
    }

const birthNumberPattern = /^\d{6}\/\d{4}$/;
    if (!birthNumberPattern.test(formData.birthNumber)) {
        errors.birthNumber = "Please enter a valid birth number in format 'XXXXXX/XXXX'.";
    }

if (!formData.dateOfBirth) {
        errors.dateOfBirth = "Please enter a valid date of birth.";
    }

if (!formData.idCardNumber || formData.idCardNumber.length < 6) {
        errors.idCardNumber = "Please enter a valid ID card number.";
    }

if (!formData.address || formData.address.length < 5) {
        errors.address = "Please enter a valid address.";
    }

const bankAccountPattern = /^\d+$/;
    if (!bankAccountPattern.test(formData.bankAccountNumber)) {
        errors.bankAccountNumber = "Please enter a valid bank account number.";
    }

return errors;
};