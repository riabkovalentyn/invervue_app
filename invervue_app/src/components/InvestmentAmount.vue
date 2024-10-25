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
  @import '../assets/style/style.scss'
  </style>
  