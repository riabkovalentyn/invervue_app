<template> 
    <FormStep :isValid="isValid" :nextStep="nextStep">
        <label for="birthNumber">Rodné číslo</label>
        <input 
        type="text" 
        v-model="formStore.formData.birthNumber"  
        v-validate="'required|regex:/^[0-9]{6}\/[0-9]{4}$/i'"
        name="birthNumber"
        >
        <label for="dateOfBirth">Datum narození</label>
        <input 
        type="date" 
        v-model="formStore.formData.dateOfBirth" 
        v-validate="'required|date_format:DD-MM-YYYY'"
        name="dateOfBirth"
        >
        <label for="idCardNumber">Číslo občanského průkazu</label>
        <input 
        type="text" 
        v-model="formStore.formData.idCardNumber" 
        v-validate="'required|regex:/^[0-9A-Za-z]+$/i'"
        name="idCardNumber"
        >
        
        <p v-if="errors.idCardNumber || errors.dateOfBirth || errors.birthNumber">Vyplňte správné údaje</p>
    </FormStep>
    
    </template>
    
    <script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { useStepValidation } from '@/composables/useStepValidation';
    
    
    
    export default defineComponent({
        components: {
            
        },
        setup(){
            const { formStore, errors, isValid, nextStep  } = useStepValidation();
    
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
    