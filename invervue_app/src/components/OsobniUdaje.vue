<template> 
<div class="osobni-udaje">
    <h2>Krok 1: Osobní údaje</h2>
    <InputField label="Jmeno" v-model="formData.firstName" placeholder="Jmeno" required />
    <InputField label="Primeni" v-model="formData.lastName" placeholder="Primeni" required />
    <InputField label="Telefonni cislo" v-model="formData.phoneNumber" placeholder="Telefonni cislo" required />
    <InputField label="Emailova adresa" v-model="formData.email" placeholder="Email" required />
</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import InputField from '../components/InputField.vue'
import { FormData } from '../types/types';


export default defineComponent({
    components: {
        InputField,
    },
    setup(){
        const store = useStore();
        const formData = store.state.formData as FormData;

        return {
            formData,
        };

    },

})
</script>


<style lang="scss" scoped>
.osobni-udaje {
  margin: 20px;
  h2 {
    color: #2a6096;
  }
}
</style>
