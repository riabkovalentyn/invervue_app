<template>
    <div class="form-container">
        <component :is="currentStep" v-model="formValues" />

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useForm } from 'vee-validate';
import OsobniUdaje from '@/components/OsobniUdaje.vue';
import FinancniUdaje from '@/components/FinancniUdaje.vue';
import InvestedSummary from '@/components/InvestedSummary.vue';
import InvestmentAmount from '@/components/InvestmentAmount.vue';

interface FormValues {
    osobniUdaje?: any;  
    financniUdaje?: any;
    investmentAmount?: any;
}

export default defineComponent({
    components: {
        OsobniUdaje,
        FinancniUdaje,
        InvestmentAmount,
        InvestedSummary,
    },
    setup() {
        const steps = [OsobniUdaje, FinancniUdaje, InvestmentAmount, InvestedSummary];
        const currentStepIndex = ref(0);
        const currentStep = computed(() => steps[currentStepIndex.value]);

       
        const formValues = ref<FormValues>({});

        const { validate, errors } = useForm();

       
        const isStepValid = computed(() => {

            return !Object.keys(errors.value).length;
        });

        const nextStep = async () => {
            const isValid = await validate();
            if (isValid && isStepValid.value) {
                currentStepIndex.value++;
            } else {
                alert('Prosím, zkontrolujte všechny povinné údaje.');
            }
        };

        const prevStep = () => {
            if (currentStepIndex.value > 0) {
                currentStepIndex.value--;
            }
        };

        const submitForm = async () => {
            const isValid = await validate();
            if (isValid) {
                console.log('Form submitted successfully', formValues.value);

            } else {
                alert('Prosím, zkontrolujte všechny povinné údaje.');
            }
        };

        return {
            currentStep,
            currentStepIndex,
            nextStep,
            prevStep,
            submitForm,
            isStepValid,
            steps,
            formValues,
        };
    },
});
</script>

<style lang="scss">
@import "../assets/style/index.scss";

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}

button {
    margin: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
}
</style>
