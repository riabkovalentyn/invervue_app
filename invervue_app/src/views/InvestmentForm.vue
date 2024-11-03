<template>  
    <div class="form-container">
        <component :is="currentStep"/>
        <button v-if="currentStepIndex > 0" @click="prevStep">Zpatky</button>
        <button v-if="currentStepIndex < steps.length -1" @click="nextStep" :disabled="!isStepValid" >Next</button>
        <button v-if="currentStepIndex === steps.length -1" @click="submitForm">Submit</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useForm } from 'vee-validate';
import OsobniUdaje from '@/components/OsobniUdaje.vue';
import FinancniUdaje from '@/components/FinancniUdaje.vue';
import InvestedSummary from '@/components/InvestedSummary.vue';
import InvestmentAmount from '@/components/InvestmentAmount.vue';
export default defineComponent({
    components: {
        OsobniUdaje,
        FinancniUdaje,
        InvestedSummary,
        InvestmentAmount,
    },
    setup() {
        const steps = [OsobniUdaje, FinancniUdaje, InvestmentAmount, InvestedSummary];
        const currentStepIndex = ref(0);
        const currentStep = computed(() => steps[currentStepIndex.value]);
        const { validate, errors } = useForm();
        const isStepValid = computed(() => {
            return Object.keys(errors.value).length === 0;
        });
        const nextStep = async () => {
            const validationResult = await validate();
            if(validationResult && isStepValid.value){
                currentStepIndex.value++;
            }
        };
        const prevStep = () => {
            if(currentStepIndex.value > 0){
                currentStepIndex.value--;
            }
        };
        const submitForm = () => {
            console.log('Form submitted successfully');
        };
            return {
        currentStep,
        currentStepIndex,
        nextStep,
        prevStep,
        submitForm,
        isStepValid,
        steps,
    };

    },
});
</script>

<style lang="scss">
@import "../assets/style/index.scss";
</style>