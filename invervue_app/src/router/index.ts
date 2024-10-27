import { createRouter, createWebHistory } from 'vue-router';
import InvestmentForm from '../views/InvestmentForm.vue';
import InvestedSummary from '../views/InvestedSummary.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Form',
    component: InvestmentForm,
  },
  {
    path: '/summary',
    name: 'InvestedSummary',
    component: InvestedSummary,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async(to)=>{
  if(to.name === 'InvestedSummary' && !store.state.formData.firstName){
    await store.dispatch('fetchInvestorData');
    if(!store.state.formData.firstName) return {name: 'Form'};
    return;
  }
})
router.beforeEach((to, formData) => {

  if (to.name === 'InvestedSummary' && !localStorage.getItem('investorData')) {
 
    return { name: 'Form' };
  }
});

export default router;
