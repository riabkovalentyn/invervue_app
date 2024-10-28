<template> 
<div class="osobni-udaje">
    <h2>Krok 1: Osobní údaje</h2>
    <InputField label="Jmeno" @blur="formData.firstName" v-model="formData.firstName" placeholder="Jmeno" required />
    <InputField label="Primeni" @blur="formData.lastName" v-model="formData.lastName" placeholder="Primeni" required />
    <InputField label="Telefonni cislo" @blur="formData.phoneNumber" v-model="formData.phoneNumber" placeholder="Telefonni cislo" required />
    <InputField label="Emailova adresa" @blur="formData.email" v-model="formData.email" placeholder="Email" required />
</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { FormData, FormErrors } from '../types/types';
import InputField from '../components/InputField.vue'
import { validateFirstName, validateLastName, validatePhoneNumber, validateEmail } from '@/types/validation';



export default defineComponent({
    components: {
        InputField,
    },
    setup(){
        const formData = ref<FormData>({
            investmentAmount: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            birthNumber: '',
            dateOfBirth: '',
            idCardNumber: '',
            address: '',
            bankAccountNumber: '',
        })
        const errors = ref<FormErrors>({});
        
        if(!validateFirstName(formData.value.firstName)){
            console.log('Invalid first name');
        }
        if(!validateLastName(formData.value.lastName)){
            console.log('Invalid last name');
        }
        if(!validatePhoneNumber(formData.value.phoneNumber)){
            console.log('Invalid phone number');
        }
        if(!validateEmail(formData.value.email)){
            console.log('Invalid email');
        }

        return {
            formData,
            errors,
        };

    },

})
</script>


<style lang="scss" scoped>
@import '../assets/style/style.scss'

</style>
