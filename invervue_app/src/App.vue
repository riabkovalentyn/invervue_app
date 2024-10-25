<template>
  <div class="app" id="app">
    <InvestmentForm />
  </div>
  
</template>

<script lang="ts">
import InvestmentForm from './views/InvestmentForm.vue';
import { defineComponent } from 'vue';


export default defineComponent({
  components: {
    InvestmentForm
  }
})

</script>

<style lang="scss">
@import "@/assets/style/index.scss";
</style>
