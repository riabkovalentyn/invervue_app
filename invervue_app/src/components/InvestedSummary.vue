<template>
    <div>
      <h3>
        Souhrn
      </h3>
      <div v-for="(value, key) in formStore.formData" :key="key">
        <p><strong> {{  key }}:</strong> {{ value }}</p>
        <button @click="submitData">Odeslat</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
import { formStore } from '@/store/formStore';
import axios from 'axios';
  import { defineComponent } from 'vue';



  export default defineComponent({
    setup(){
      const submitData = async () => {
        try {
          await axios.post('https://jsonplaceholder.typicode.com/posts', formStore.formData);
          alert('Data odeslána');
        }catch(error){
          alert('Chyba při odesílání dat');
        }
      };
      return { formStore,  submitData };
      }
    });
  </script>
  <style lang="scss">
  @import '../assets/style/style.scss';

  </style>
  