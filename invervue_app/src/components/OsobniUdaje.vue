<template> 
<FormStep :isValid="isValid" :nextStep="nextStep">
    <label for="investmentAmout">Pravidelná výše investice</label>
    <input 
    type="range" 
    v-model="formStore.formData.investmentAmount" 
    name="investmentAmout"
    >
    <label for="firstName">Jméno</label>
    <input 
    type="text" 
    v-model="formStore.formData.firstName" 
    name="firstName"
    >
    <label for="lastName">Příjmení</label>
    <input 
    type="text" 
    v-model="formStore.formData.lastName" 
    name="lastName"
    >
    <label for="phoneNumber">Telefonní číslo</label>
    <input 
    type="text" 
    v-model="formStore.formData.phoneNumber" 
    name="phoneNumber"
    >
    <label for="email">Email</label>
    <input 
    type="text" 
    v-model="formStore.formData.email"
    >

    <p v-if="errors.value && Object.keys(errors.value).length >0">Vyplňte správné údaje</p>

</FormStep>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import { formStore } from '@/store/formStore';

export default defineComponent({
    setup() {
        const { errors, validate } = useForm();
        
        const { value: investmentAmount, errorMessage: investmentError } = useField(
            'investmentAmount',
            'required|numeric|min:100|max:10000'
        );
        
        const { value: firstName, errorMessage: firstNameError } = useField(
            'firstName',
            'required|regex:/^[a-zA-Z]+( [a-zA-Z]+)*$/i'
        );
        
        const { value: lastName, errorMessage: lastNameError } = useField(
            'lastName',
            'required|regex:/^[a-zA-Z]+( [a-zA-Z]+)*$/i'
        );
        
        const { value: phoneNumber, errorMessage: phoneNumberError } = useField(
            'phoneNumber',
            'required|min:9|max:15'
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
@import '../assets/style/style.scss'

</style>
