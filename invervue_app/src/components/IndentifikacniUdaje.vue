<template>
    <div>
        <h2>Krok 2: Identifikační údaje</h2>
        <InputField label="Rodne Cislo" v-model="form.birthNuber" placeholder="Rodne Cislo" required />
        <InputField label="Datum narozeni" v-model="form.dateOfBirth" placeholder="Datum Narozeni" required />
        <InputField label="Cislo Obcanskeho Prokazu" v-model="form.idCardNumber" placeholder="Rodne Cislo" required />

    </div>

</template>

<script lang="ts">
    import { defineComponent, toRefs } from 'vue';
    import { useStore } from 'vuex';
    import InputField from '@/components/InputField.vue';
    import { FormData } from '@/types';

    export default defineComponent({
        components: {
            InputField,
        },
        setup() {
            const store = useStore();
            const formData = store.state.formData as FormData;
            return { 
                ...toRefs(formData),
             };
        },
    });

</script>