<template> 
  <FormStep :isValid="isValid" :nextStep="nextStep">
    <div>
      <label for="address">Adresa trvalého pobytu</label>
      <input 
        type="text" 
        v-model="address"  
        name="address"
      />
      <span v-if="addressError">{{ addressError }}</span>
    </div>

    <div>
      <label for="bankAccountNumber">Číslo bankovního účtu</label>
      <input 
        type="text" 
        v-model="bankAccountNumber" 
        name="bankAccountNumber"
      />
      <span v-if="bankAccountNumberError">{{ bankAccountNumberError }}</span>
    </div>

    <div>
      <label for="consent">Souhlasím se zpracováním osobních údajů</label>
      <input 
        type="checkbox" 
        v-model="consent" 
        name="consent"
      />
      <span v-if="consentError">{{ consentError }}</span>
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

    const { value: address, errorMessage: addressError } = useField(
      'address',
      required
    );

    const { value: bankAccountNumber, errorMessage: bankAccountNumberError } = useField(
      'bankAccountNumber',
      { required, regex: /^\d{10,20}$/ }
    );

    const { value: consent, errorMessage: consentError } = useField(
      'consent',
      required
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
      address,
      addressError,
      bankAccountNumber,
      bankAccountNumberError,
      consent,
      consentError,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../assets/style/style.scss';
</style>
