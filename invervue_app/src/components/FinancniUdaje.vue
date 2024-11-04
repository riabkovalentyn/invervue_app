<template> 
    <FormStep :isValid="isValid" :nextStep="nextStep">
      <div>
        <label for="birthNumber">Rodné číslo</label>
        <input 
          type="text" 
          v-model="birthNumber"
          name="birthNumber"
        >
        <span v-if="birthNumberError">{{ birthNumberError }}</span>
      </div>
  
      <div>
        <label for="dateOfBirth">Datum narození</label>
        <input 
          type="date" 
          v-model="dateOfBirth"
          name="dateOfBirth"
        >
        <span v-if="dateOfBirthError">{{ dateOfBirthError }}</span>
      </div>
  
      <div>
        <label for="idCardNumber">Číslo občanského průkazu</label>
        <input 
          type="text" 
          v-model="idCardNumber"
          name="idCardNumber"
        >
        <span v-if="idCardNumberError">{{ idCardNumberError }}</span>
      </div>
  
      <p v-if="errors && Object.keys(errors).length > 0">Vyplňte správné údaje</p>
    </FormStep>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useField, useForm } from 'vee-validate';
  import { required, regex } from '@vee-validate/rules';
  import { formStore } from '@/store/formStore';
  
  export default defineComponent({
    setup() {
      const { errors, validate } = useForm();
  
      const { value: birthNumber, errorMessage: birthNumberError } = useField(
        'birthNumber',
        'required|regex:/^[0-9]{6}/[0-9]{4}$/'
      );
  
      const { value: dateOfBirth, errorMessage: dateOfBirthError } = useField(
        'dateOfBirth',
        'required|date_format:DD-MM-YYYY'
      );
  
      const { value: idCardNumber, errorMessage: idCardNumberError } = useField(
        'idCardNumber',
        'required|regex:/^[0-9A-Za-z]+$/'
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
        birthNumber,
        birthNumberError,
        dateOfBirth,
        dateOfBirthError,
        idCardNumber,
        idCardNumberError,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/style/style.scss';
  </style>
  