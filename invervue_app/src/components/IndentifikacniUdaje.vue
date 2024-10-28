<template>
    <div class="indentifikacni-udaje">
        <h2>Krok 2: Identifikační údaje</h2>
        <InputField label="Rodne Cislo" v-model="formData.birthNumber" placeholder="Rodne Cislo" required />
        <InputField label="Datum narozeni" v-model="formData.dateOfBirth" placeholder="Datum Narozeni" required />
        <InputField label="Cislo Obcanskeho Prokazu" v-model="formData.idCardNumber" placeholder="Rodne Cislo" required />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, } from 'vue';
    import { useStore } from 'vuex';
    import InputField from '@/components/InputField.vue';
    import { FormData, FormErrors } from '../types/types';
    import { validateBirthNumber, validateDateOfBirth, validateIdCardNumber } from '@/types/validation';

    export default defineComponent({
        components: {
            InputField,
        },
        setup() {
            const store = useStore();
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

        if(!validateBirthNumber(formData.value.birthNumber)) {
            console.log("Neplatné rodne číslo");
        }
        if(!validateDateOfBirth(formData.value.dateOfBirth)) {
            console.log("Neplatné datum narození");
        }
        if(!validateIdCardNumber(formData.value.idCardNumber)) {
            console.log("Neplatné číslo Obcanského Prokazu");
        }





            return { 
                formData,
                errors,
             };

                    
        },
    });

</script>

<style lang="scss" scoped>
@import '../assets/style/style.scss'
</style>