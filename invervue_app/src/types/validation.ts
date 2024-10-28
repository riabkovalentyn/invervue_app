export const validateInvestmentAmount = (value: string): boolean => {
    const amount = parseFloat(value);
    return !isNaN(amount) && amount > 0;
  };
  
  export const validateFirstName = (value: string): boolean => {
    return /^[a-zA-Zа-яА-Я]{2,50}$/.test(value);
  };
  
  export const validateLastName = (value: string): boolean => {
    return /^[a-zA-Zа-яА-Я]{2,50}$/.test(value);
  };
  
  export const validatePhoneNumber = (value: string): boolean => {
    return /^\+?[0-9]{7,15}$/.test(value);
  };
  
  export const validateEmail = (value: string): boolean => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  };
  
  export const validateBirthNumber = (value: string): boolean => {
    return /^\d{6}\/?\d{3,4}$/.test(value);
  };
  
  export const validateDateOfBirth = (value: string): boolean => {
    return !isNaN(Date.parse(value));
  };
  
  export const validateIdCardNumber = (value: string): boolean => {
    return /^[A-Za-z0-9]{5,15}$/.test(value);
  };
  
  export const validateAddress = (value: string): boolean => {
    return value.trim().length > 5;
  };
  
  export const validateBankAccountNumber = (value: string): boolean => {
    return /^[0-9]{8,20}$/.test(value);
  };
  