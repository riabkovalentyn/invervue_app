import { createStore } from 'vuex'
import { FormData } from '@/types/types'


export interface State {
  currentStep: number;
  totalSteps: number;
}

export default createStore({
  state:{
    formData: {} as FormData,
    currentStep: 1,
    totalSteps: 3,
  },
    mutations: {
      updateForm(state, formData: FormData) {
        state.formData = {...state.formData, ...formData};
      },
      nextStep(state) {
        if(state.currentStep < state.totalSteps) {
          state.currentStep++;
        }
      },
      previusStep(state){
        if(state.currentStep > 1) {
          state.currentStep--;
      }
    },
  },
  getters: {
    isLastStep: (state) => {
      return state.currentStep === state.totalSteps;
    },
  },
});
