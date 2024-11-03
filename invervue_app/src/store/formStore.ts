import { reactive } from "vue";

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
  },
  currentStep: 1,
});
