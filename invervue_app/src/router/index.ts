import { createRouter, createWebHistory } from "vue-router";
import InvestmentForm from "../views/InvestmentForm.vue";

const routes = [
  { path: "/", name: "Form", component: InvestmentForm },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
