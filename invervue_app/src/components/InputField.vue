<template>  
    <div class="input-field">
        <label>{{ label }}</label>
        <input 
            :type="text" 
            :placeholder="placeholder" 
            :modelValue="modelValue" 
            @input = "$emit('update:modelValue', $event.target.value)"
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
            type: String as PropType<'text' | 'email' | 'number' | 'date'>, 
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
});
</script>