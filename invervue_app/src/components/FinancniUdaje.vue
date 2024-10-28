<template>
    <div class="financni-udaje">
        <h2>
            Krok 3: Finanční údaje
        </h2>
        <InputField label="Adresa trvaleho pobytu" v-model="form.address" placeholder="Adresa trvaleho pobytu" required />
        <InputField label="Cislo Bankovniho Uctu" v-model="form.bankAccountNumber" placeholder="Cislo Bankovniho Uctu" required />
    </div>

</template>

<script lang="ts">
    import { defineComponent, ref} from 'vue';
    import { useStore } from 'vuex';
    import InputField from '../components/InputField.vue';
    import { FormData, FormErrors } from '../types/types';
    import { validateAddress, validateBankAccountNumber } from '@/types/validation';

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
            });
            const error = ref<FormErrors>({});
            if(!validateAddress(formData.value.address)){
                console.log('Invalid address');
            }
            if(!validateBankAccountNumber(formData.value.bankAccountNumber)){
                console.log('Invalid bank account number');
            }

            return {
                formData,
                error,
            };
        },    
    });
</script>

<style lang="scss" scoped>
@import '../assets/style/style.scss'
</style>