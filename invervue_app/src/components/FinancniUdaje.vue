<template>
    <div>
        <h2>
            Krok 3: Finanční údaje
        </h2>
        <InputField label="Adresa trvaleho pobytu" v-model="form.address" placeholder="Adresa trvaleho pobytu" required />
        <InputField label="Cislo Bankovniho Uctu" v-model="form.bankAccountNumber" placeholder="Cislo Bankovniho Uctu" required />
        <CheckboxField label="Souhlasim s podminkami ochrany osobnich udaju a zpracovanim dat" v-model="form.consent" required />
    </div>

</template>

<script lang="ts">
    import { defineComponent, toRefs} from 'vue';
    import { useStore } from 'vuex';
    import InputField from '../InputField.vue';
    import CheckboxField from '../CheckboxField.vue';
    import { FormData } from '../../types';

    export default defineComponent({
        components: {
            InputField,
            CheckboxField
        },
        setup() {
            const store = useStore();
            const formData = store.state.formData as FormData;

            return {
                form: toRefs(formData),
            };
        },    
    });
</script>