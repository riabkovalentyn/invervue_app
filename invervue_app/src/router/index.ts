import { createRouter, createWebHistory } from 'vue-router';
import InvestmentForm from '../views/InvestmentForm.vue';
import InvestedSummary from '../views/InvestedSummary.vue';

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


router.beforeEach((to, formData) => {

  if (to.name === 'Summary' && !localStorage.getItem('investorData')) {
 
    return { name: 'Form' };
  }
});

export default router;
