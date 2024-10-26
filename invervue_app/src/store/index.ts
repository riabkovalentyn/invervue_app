import { createStore } from 'vuex'
import { FormData } from '@/types/types'


export interface State {
  formData: FormData;
  currentStep: number;
  totalSteps: number;
}

export default createStore<State>({
  state:{
    formData: {} as FormData,
    currentStep: 1,
    totalSteps: 5,
  },
    mutations: {
      updateFormData(state, payload: Partial<FormData>) {
        state.formData = {...state.formData, ...payload};
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
    setConsent(state, consent){
      state.formData.consent = consent;
    },
   },
  getters: {
    formData: (state) => state.formData,
    isLastStep: (state) => {
      return state.currentStep === state.totalSteps;
    },
    },
});
