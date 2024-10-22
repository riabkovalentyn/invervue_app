export interface FormData {
  investmentAmount: number;
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
  investmentAmount?: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  birthNumber?: string;
  dateOfBirth?: string;
  idCardNumber?: string;
  address?: string;
  bankAccountNumber?: string;
  consent?: boolean;
}