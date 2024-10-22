<template>
    <div>
        <h2>Krok 2: Identifikační údaje</h2>
        <InputField label="Rodne Cislo" v-model="formData.birthNumber" placeholder="Rodne Cislo" required />
        <InputField label="Datum narozeni" v-model="formData.dateOfBirth" placeholder="Datum Narozeni" required />
        <InputField label="Cislo Obcanskeho Prokazu" v-model="formData.idCardNumber" placeholder="Rodne Cislo" required />

    </div>

</template>

<script lang="ts">
    import { defineComponent,  } from 'vue';
    import { useStore } from 'vuex';
    import InputField from '@/components/InputField.vue';
    import { FormData } from '../types/types';

    export default defineComponent({
        components: {
            InputField,
        },
        setup() {
            const store = useStore();
            const formData = store.state.formData as FormData;
            return { 
                formData,
             };
        },
    });

</script>

<style lang="scss" scoped>
.indentifikacni-udaje {
  margin: 20px;
  h2 {
    color: #2c3e50;
  }
}
</style>