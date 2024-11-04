import { reactive } from "vue";


interface FormData {
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

interface FormErrors {
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
  consent: string;
}

export const formStore = reactive({
  formData: {
    investmentAmount: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    birthNumber: "",
    dateOfBirth: "",
    idCardNumber: "",
    address: "",
    bankAccountNumber: "",
    consent: false,
  } as FormData,
  currentStep: 1,
  errors: {
    investmentAmount: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    birthNumber: "",
    dateOfBirth: "",
    idCardNumber: "",
    address: "",
    bankAccountNumber: "",
    consent: "",
  } as FormErrors,

  resetForm() {
    this.formData = {
      investmentAmount: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      birthNumber: "",
      dateOfBirth: "",
      idCardNumber: "",
      address: "",
      bankAccountNumber: "",
      consent: false,
    };
    this.currentStep = 1;
    this.clearErrors(); 
  },

  clearErrors() {
    this.errors = {
      investmentAmount: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      birthNumber: "",
      dateOfBirth: "",
      idCardNumber: "",
      address: "",
      bankAccountNumber: "",
      consent: "",
    };
  },

  validateCurrentStep() {
   
    const { currentStep, formData, errors } = this;

   
    this.clearErrors();

    if (currentStep === 1) {
      if (!formData.firstName) {
        errors.firstName = "Jméno je povinné.";
      }
      if (!formData.lastName) {
        errors.lastName = "Příjmení je povinné.";
      }

    } else if (currentStep === 2) {
     
      if (!formData.email) {
        errors.email = "Email je povinný.";
      }
    }

    return Object.keys(errors).length === 0;
  },

  nextStep() {
    if (this.validateCurrentStep()) {
      if (this.currentStep < 4) {
        this.currentStep++;
      }
    } else {
      alert('Prosím, zkontrolujte všechny povinné údaje.'); 
    }
  },

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
},
});
