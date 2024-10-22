<template>
    <div>
      <h1>Summary</h1>
      <div v-if="summaryData">
        <h2>Your Submitted Data:</h2>
        <ul>
          <li><strong>Name:</strong> {{ summaryData.name }}</li>
          <li><strong>Birth Number:</strong> {{ summaryData.birthNumber }}</li>
          <li><strong>Date of Birth:</strong> {{ summaryData.dateOfBirth }}</li>
          <li><strong>ID Card Number:</strong> {{ summaryData.idCardNumber }}</li>
          <li><strong>Investment Amount:</strong> {{ summaryData.investmentAmount }}</li>
        </ul>
      </div>
      <div v-else>
        <p>No data available. Please go back to the form and submit.</p>
      </div>
      <button @click="goBack">Go Back</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'InvestedSummary',
    data() {
      return {
        summaryData: null as { name: string; birthNumber: string; dateOfBirth: string; idCardNumber: string; investmentAmount: number } | null,
      };
    },
    mounted() {
      
      const investorData = localStorage.getItem('investorData');
      if (investorData) {
        this.summaryData = JSON.parse(investorData);
      }
    },
    methods: {
      goBack() {
        this.$router.push({ name: 'Form' }); 
      },
    },
  });
  </script>
  
  