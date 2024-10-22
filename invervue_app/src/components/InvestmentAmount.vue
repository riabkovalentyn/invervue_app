<template>
    <div class="investment-amount">
      <h2>Investiční Částka</h2>
      <InputField label="Částka" v-model="amount" />
    </div>
  </template>
  
  <script lang="ts">
  import InputField from './InputField.vue';
  
  export default {
    components: { InputField },
    data() {
      return {
        amount: ''
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .investment-amount {
    margin: 20px;
    h2 {
      color: #2c3e50;
    }
  }
  </style>
  