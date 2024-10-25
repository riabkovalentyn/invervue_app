<template>
    <div class="custom-checkbox" v-if="currentStep === 3">
        <label>
            <input type="checkbox" v-model="isChecked" name="" id="customCheckbox">
            <span for="customCheckbox">Souhlas se zpracovanim osobnich udaju </span>
        </label>    
        </div>
    <div class="navigation-buttons">
        <button @click="previousStep" v-if="currentStep > 1">Previous</button>
        <button @click="nextStep" :disabled="currentStep === 3 && !isChecked" v-if="currentStep < totalSteps">Next</button>
        <button @click="submitForm" v-if="currentStep === totalSteps">Submit</button>

    </div>


</template>


<script lang="ts">
    import { defineComponent, ref } from 'vue';

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
            setup(props, { emit }) {
                const isChecked = ref(false);
                const nextStep = () => {
                    if(props.currentStep === 3 && !isChecked.value){
                        alert('You must agree with the privacy policy before proceeding.');
                        return;
                    }
                    emit('nextStep');
                };
                const previousStep = () => {
                    emit('previousStep');
                };
                const submitForm = () => {
                    emit('submitForm');
                };
            return {
                    isChecked,
                    nextStep,
                    previousStep,
                    submitForm,
                }
            },
    

    })

</script>

<style lang="scss" scoped>
@import '../assets/style/style.scss'
</style>