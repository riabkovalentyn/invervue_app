<template>  
    <div>
        <div v-if="currentStep === 1">
            <OsobniUdaje />
            <NavigationButtons 
            :currentStep="currentStep"
            :totalSteps="3"
            @nextStep="nextStep"
            @previousStep="previousStep"
            @submitForm="submitForm"
            />
        </div>
        <div>
            <IndentifikacniUdaje />
            <NavigationButtons 
            :currentStep="currentStep"
            :totalSteps="3"
            @nextStep="nextStep"
            @previousStep="previousStep"
            @submitForm="submitForm"
            />
        </div>
        <div>
            <FinancniUdaje />
            <NavigationButtons 
            :currentStep="currentStep"
            :totalSteps="3"
            @nextStep="nextStep"
            @previousStep="previousStep"
            @submitForm="submitForm"
            />
        </div>
        <div>
            <InvestmentAmount />
            <NavigationButtons 
            :currentStep="currentStep"
            :totalSteps="3"
            @nextStep="nextStep"
            @previousStep="previousStep"
            @submitForm="submitForm"
            />
        </div>
        <button @click="submitForm">Submit</button>
    </div>


</template>

<script lang="ts">
import OsobniUdaje from './OsobniUdaje.vue';
import IndentifikacniUdaje from './IndentifikacniUdaje.vue';
import FinancniUdaje from './FinancniUdaje.vue';
import InvestmentAmount from './InvestmentAmount.vue';
import NavigationButtons from './NavigationButtons.vue';
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