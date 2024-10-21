<template> 
<div>
    <h2>Krok 1: Osobní údaje</h2>
    <InputField label="Jmeno" v-model="form.firstName" placeholder="Jmeno" required />
    <InputField label="Primeni" v-model="form.lastName" placeholder="Primeni" required />
    <InputField label="Telefonni cislo" v-model="form.phoneNumber" placeholder="Telefonni cislo" required />
    <InputField label="Emailova adresa" v-model="form.email" placeholder="Email" required />
</div>

</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useStore } from 'vuex';
import InputField from './InputField.vue';
import { FormData } from '../types';


export default defineComponent({
    components: {
        InputField,
    },
    setup(){
        const store = useStore();
        const formData = store.state.formData as FormData;
        
        return {
            ...toRefs(formData),
        };
    
    },

})

</script>