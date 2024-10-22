<template>  
    <div class="input-field">
        <label>{{ label }}</label>
        <input 
            :type="type" 
            :placeholder="placeholder" 
            :value="modelValue" 
            @input = "onInputChange"
            :required="required" 
            />
        </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'InputField',
    props: {
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: [String, Number],
            required: true
        },
        type: {
            type: String as PropType<'text' | 'email' | 'number' | 'date' | 'address'| 'bankAccountNumber'>, 
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        },
    },
    emits: ['update:modelValue'],
    methods: {
        onInputChange(event: Event) {
            const target = event.target as HTMLInputElement;
            this.$emit('update:modelValue', target.value);
        }
    }
});
</script>