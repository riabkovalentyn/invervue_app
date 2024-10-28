<template>
    <div class="investment-amount">
      <h2>Investiční Částka</h2>
      <InputField label="Částka" v-model="amount" />
    </div>
  </template>
  
  <script lang="ts">
  import InputField from './InputField.vue';
  import { ref } from 'vue';
  import { validateInvestmentAmount } from '@/types/validation';
  
  export default {
    components: { InputField },
    data() {
      return {
        amount: ''
      };
    },
    setup() {
      const investmentAmout = ref('');

      if(!validateInvestmentAmount(investmentAmout.value)) {
        console.log('Invalid investment amount');
      }
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/style/style.scss'
  </style>
  