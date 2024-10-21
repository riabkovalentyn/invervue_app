<template>
    <div class="checkbox-field">
        <label>
            <input 
            type="checkbox" 
            :checked="checked" 
            @change="$emit('update:modelValue', $event.target.checked)"
            :required="required"
            />
            {{ label }}
        </label>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CheckboxField',
    props: {
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: Boolean,
            required: true
        },
        required: {
            type: Boolean,
            default: false
        },
    },
    emits: ['update:modelValue']
})

</script>