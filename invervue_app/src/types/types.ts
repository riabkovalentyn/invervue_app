export interface FormData {
  investmentAmount: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthNumber: string;
  dateOfBirth: string;
  idCardNumber: string;
  address: string;
  bankAccountNumber: string;
  consent: boolean;
  }
export interface FormErrors {
  [key: string]: string;
}
