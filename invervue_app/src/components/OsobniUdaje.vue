<template> 
    <FormStep  :isValid="isValid" :nextStep="nextStep">
      <div>
        <label for="investmentAmount">Pravidelná výše investice</label>
        <input 
          type="range" 
          v-model="investmentAmount"
          name="investmentAmount"
        >
        <span v-if="investmentError">{{ investmentError }}</span>
      </div>
  
      <div>
        <label for="firstName">Jméno</label>
        <input 
          type="text" 
          v-model="firstName" 
          name="firstName"
        >
        <span v-if="firstNameError">{{ firstNameError }}</span>
      </div>
  
      <div>
        <label for="lastName">Příjmení</label>
        <input 
          type="text" 
          v-model="lastName" 
          name="lastName"
        >
        <span v-if="lastNameError">{{ lastNameError }}</span>
      </div>
  
      <div>
        <label for="phoneNumber">Telefonní číslo</label>
        <input 
          type="text" 
          v-model="phoneNumber" 
          name="phoneNumber"
        >
        <span v-if="phoneNumberError">{{ phoneNumberError }}</span>
      </div>
  
      <div>
        <label for="email">Email</label>
        <input 
          type="text" 
          v-model="email" 
          name="email"
        >
        <span v-if="emailError">{{ emailError }}</span>
      </div>
  
      <p v-if="errors.value && Object.keys(errors.value).length > 0">
        Vyplňte správné údaje
      </p>
  
      <button type="button" @click="nextStep">Další krok</button>
    </FormStep>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useForm, useField, defineRule } from 'vee-validate';
  import { required, email, numeric, min, max, regex } from '@vee-validate/rules';
  import { formStore } from '@/store/formStore';
  
  defineRule("required", required);
  defineRule("email", email);
  defineRule("numeric", numeric);
  defineRule("min", min);
  defineRule("max", max);
  defineRule("regex", regex);
  
  export default defineComponent({
    setup() {
      const { errors, validate } = useForm();
  
      const { value: investmentAmount, errorMessage: investmentError } = useField(
        'investmentAmount',
        'required|numeric|min:10|max:100'
      );
      
      const { value: firstName, errorMessage: firstNameError } = useField(
        'firstName',
        'required|min:2|max:15'
      );
      
      const { value: lastName, errorMessage: lastNameError } = useField(
        'lastName',
        'required|min:2|max:15'
      );
      
      const { value: phoneNumber, errorMessage: phoneNumberError } = useField(
        'phoneNumber',
        'required|numeric|min:9|max:15'
      );
      
      const { value: email, errorMessage: emailError } = useField(
        'email',
        'required|email'
      );
      
      const isValid = ref(false);
  
      const validateForm = async () => {
        await validate();
        isValid.value = Object.keys(errors.value).length === 0;
      };
  
      const nextStep = async () => {
        await validateForm();
        if (isValid.value) {
          formStore.currentStep++;
        }
      };
  
      return {
        formStore,
        errors,
        isValid,
        nextStep,
        investmentAmount,
        investmentError,
        firstName,
        firstNameError,
        lastName,
        lastNameError,
        phoneNumber,
        phoneNumberError,
        email,
        emailError,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/style/style.scss';
  </style>
  