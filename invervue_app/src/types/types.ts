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
  }
export interface FormErrors {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  investmentAmount?: string;
  birthNumber?: string;
  dateOfBirth?: string;
  idCardNumber?: string;
  address?: string;
  bankAccountNumber?: string;
}
