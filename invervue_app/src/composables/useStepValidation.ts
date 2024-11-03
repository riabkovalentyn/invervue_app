import { ref } from "vue";
import { useForm, defineRule } from "vee-validate";
import * as rules from "@vee-validate/rules";
import { formStore } from "@/store/formStore";

function isCallableRule(rule: unknown): rule is ((value: unknown, params?: any) => boolean) {
    return typeof rule === 'function';
}

export function useStepValidation(){
    (Object.keys(rules) as Array<keyof typeof rules>).forEach((rule) => {
        const ruleFn = rules[rule];
        if (isCallableRule(ruleFn)) {
            defineRule(rule, ruleFn);
        }
    });

    const { errors, validate} = useForm();
    const isValid = ref(false);
    const validateForm = async ()=> {
        await validate();
        isValid.value = Object.keys(errors).length === 0;
    }
    const nextStep = async () => {
        await validateForm();
        if(isValid.value){
            formStore.currentStep++;
        }
    };
    const previusStep = () => {
        formStore.currentStep--;
    };
    return { formStore, errors, validateForm, isValid, nextStep, previusStep };

}