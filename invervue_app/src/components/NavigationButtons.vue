<template>
    <div>
        <button @click="previousStep" v-if="currentStep > 1">Previous</button>
        <button @click="nextStep" v-if="currentStep < totalSteps">Next</button>
        <button @click="submitForm" v-if="currentStep === totalSteps">Submit</button>

    </div>


</template>


<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
            props: {
                currentStep: {
                    type: Number,
                    required: true
                },
                totalSteps: {
                    type: Number,
                    required: true
                },
            },
            emits: ['nextStep', 'previousStep','submitForm'],
            setup(_, { emit }) {
                const nextStep = () => {
                    emit('nextStep');
                };
                const previousStep = () => {
                    emit('previousStep');
                };
                const submitForm = () => {
                    emit('submitForm');
                };
            return {
                    nextStep,
                    previousStep,
                    submitForm,
                }
            },
    

    })

</script>