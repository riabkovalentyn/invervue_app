<template>
    <div class="summary">
      <h1>Summary</h1>
      <div v-if="formData">
        <h2>Your Submitted Data:</h2>
        <ul>
          <li><strong>Name:</strong> {{ formData.name }}</li>
          <li><strong>Birth Number:</strong> {{ formData.birthNumber }}</li>
          <li><strong>Date of Birth:</strong> {{ formData.dateOfBirth }}</li>
          <li><strong>ID Card Number:</strong> {{ formData.idCardNumber }}</li>
          <li><strong>Investment Amount:</strong> {{ formData.investmentAmount }}</li>
        </ul>
      </div>
      <div v-else>
        <p>No data available. Please go back to the form and submit.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';
  
  export default defineComponent({
    setup(){
      const store = useStore();
      const formData =  store.state.formData;
        
      onMounted(async () => {
        await store.dispatch('fetchFormData');
      });


      return{
        formData
      };

      }
    });
  </script>
  <style lang="scss">
  @import '../assets/style/style.scss';

  </style>
  