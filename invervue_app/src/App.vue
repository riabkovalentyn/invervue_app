<template>
  <div id="app">
    <InvestmentForm />
  </div>
  <router-view/>
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

</style>
