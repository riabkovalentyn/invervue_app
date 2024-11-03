<template> 
  <FormStep :isValid="isValid" :nextStep="nextStep">
      <label for="address">Adresa trvalého pobytu</label>
      <input 
      type="text" 
      v-model="formStore.formData.address"  
      v-validate="'required|regex:/^[0-9]{6}\/[0-9]{4}$/i'"
      name="address"
      >
      <label for="bankAccountNumber">Číslo bankovního účtu</label>
      <input 
      type="date" 
      v-model="formStore.formData.bankAccountNumber" 
      v-validate="'required|regex:/^\d{10,20}$/'"
      name="bankAccountNumber"
      >
      <label for="consent">Souhlasím se zpracováním osobních údajů</label>
      <input 
      type="checkbox" 
      v-model="formStore.formData.consent" 
      v-validate="'required'"
      name="consent"
      >
      
      <p v-if="errors.address || errors.bankAccountNumber || errors.consent ">Vyplňte správné údaje</p>
  
  </FormStep>
  
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useForm } from 'vee-validate';
  import { formStore } from '@/store/formStore';
  
  
  
  export default defineComponent({
      components: {
          
      },
      setup(){
          const { errors, validate } = useForm();
          const isValid = ref(false);
            const validateForm = async() => {
                await validate()
                isValid.value = Object.keys(errors.value).length === 0;
            };
  
          const nextStep =  async() => {
            await validateForm();
              if(isValid.value) formStore.currentStep++;};
  
          return {
              formStore,
              errors,
              isValid,
              nextStep,
          };
  
      },
  
  })
  </script>
  
  
  <style lang="scss" scoped>
  @import '../assets/style/style.scss'
  
  </style>
  