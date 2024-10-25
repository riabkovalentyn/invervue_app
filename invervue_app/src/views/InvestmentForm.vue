<template>  
    <div class="form-container">
        <component class="component"  :is="currentComponent" />
        <NavigationButtons 
        :currentStep="currentStep"
        :totalSteps="5" 
        @nextStep="nextStep"
        @previousStep="prevStep"
        @submitForm="submitForm"
        />
        
    </div>
</template>

<script lang="ts">
import OsobniUdaje from '../components/OsobniUdaje.vue';
import IndentifikacniUdaje from '../components/IndentifikacniUdaje.vue';
import FinancniUdaje from '../components/FinancniUdaje.vue';
import InvestmentAmount from '../components/InvestmentAmount.vue';
import NavigationButtons from '../components/NavigationButtons.vue';
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import InvestedSummary from './InvestedSummary.vue';

export default defineComponent({
    components: {
        OsobniUdaje,
        IndentifikacniUdaje,
        FinancniUdaje,
        InvestmentAmount,
        NavigationButtons,
        InvestedSummary
    },
    setup() {
        const store = useStore();
        const currentStep = ref(1);

        const formData = computed(() => store.getters.form);


        const currentComponent = computed(() => {
            switch (currentStep.value) {
                case 1:
                    return OsobniUdaje;
                case 2:
                    return IndentifikacniUdaje;
                case 3:
                    return FinancniUdaje;
                case 4:
                    return InvestmentAmount;
                case 5:
                    return InvestedSummary    
                default:
                    return OsobniUdaje;
            }
        });

        const nextStep = () => {
            
            if(currentStep.value < 5){
                return currentStep.value +=1;
            }
             else store.commit('nextStep');
        };

        const prevStep = () => {
            if(currentStep.value > 1){
                return currentStep.value -= 1;
            }else store.commit('prevStep');
            store.commit('prevStep');
        };

        const submitForm = () => {
            store.commit('nextStep');
            alert('Formular odeslan');
        };
        
        return {
            formData: computed(() => store.getters.form),
            currentStep,
            currentComponent,
            nextStep,
            prevStep,
            submitForm,
        };
    },
});
</script>

<style lang="scss">
@import "../assets/style/index.scss";
</style>