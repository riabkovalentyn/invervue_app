import { createStore } from 'vuex'
import { FormData } from '@/types/types'
import apiService from '@/services/apiService';
import { ActionContext } from 'vuex';

export interface State {
  formData: FormData;
  currentStep: number;
  totalSteps: number;
  loading: boolean;
  error: string | null;
}

export type Commit = (mutation: string, payload?: unknown) => void;

export default createStore<State>({
  state:{
    formData: {} as FormData,
    currentStep: 1,
    totalSteps: 5,
    loading: false,
    error: null,
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
      setLoading(state, loading: boolean) {
        state.loading = loading;
      },
      setError(state, error: string | null) {
        state.error = error;
      },
      setFormData(state, formData: FormData) {
        state.formData = formData;
      },
    },

      actions: {
        async submitForm({ state, commit }: ActionContext<State, State>) {
          commit('setLoading', true);
          try {
            await apiService.submitForm(state.formData);
            console.log('Form submitted successfully');
          } catch (error) {
            const err = error as Error;
            commit('setError', err.message);
            console.error(error);
          } finally {
            commit('setLoading', false);
          }
        },
        async fetchFormData({ commit }) {
          commit('setLoading', true);
          try{
            const response = await apiService.fetchFormData();
            commit('setFormData', response.data);
          }catch(error) {
            const err = error as Error;
            commit('setError', err.message);
          } finally {
            commit('setLoading', false);
          }
        },
      },
      getters: {
      formData: (state) => state.formData,
      isLastStep: (state) => {
        return state.currentStep === state.totalSteps;
      },
      },
});
