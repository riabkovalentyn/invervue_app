<template>  
    <div>
        <div v-if="currentStep === 1">
            <OsobniUdaje />
        </div>
        <div v-if="currentStep === 2">
            <IndentifikacniUdaje />
        </div>
        <div v-if="currentStep === 3">
            <FinancniUdaje />
        </div>
        <div v-if="currentStep === 4">
            <InvestmentAmount />
        </div>
        <button @click="submitForm">Submit</button>
    </div>
    <NavigationButtons 
            :currentStep="currentStep"
            :totalSteps="4" 
            @nextStep="nextStep"
            @previousStep="prevStep"
            @submitForm="submitForm"
        />
        <button @click="submitForm" v-if="currentStep === 4">Submit</button>
</template>

<script lang="ts">
import OsobniUdaje from '../components/OsobniUdaje.vue';
import IndentifikacniUdaje from '../components/IndentifikacniUdaje.vue';
import FinancniUdaje from '../components/FinancniUdaje.vue';
import InvestmentAmount from '../components/InvestmentAmount.vue';
import NavigationButtons from '../components/NavigationButtons.vue';
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    components: {
        OsobniUdaje,
        IndentifikacniUdaje,
        FinancniUdaje,
        InvestmentAmount,
        NavigationButtons,
    },
    setup() {
        const store = useStore();

        const nextStep = () => {
            store.commit('nextStep');
        };

        const prevStep = () => {
            store.commit('prevStep');
        };

        const submitForm = () => {
            store.commit('nextStep');
            alert('Formular odeslan');
        };

        return {
            formData: computed(() => store.getters.form),
            currentStep: computed(() => store.getters.currentStep),
            nextStep,
            prevStep,
            submitForm,
        };
    },
});




</script>