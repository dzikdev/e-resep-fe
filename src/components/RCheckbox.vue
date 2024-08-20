<template>
    <div :class="[
        'flex items-center px-3 py-2 border cursor-pointer rounded-2xl',
        modelValue ? 'bg-[#09B9A4] border-white !text-white' : 'bg-white border-[#09B9A4] text-black transition-colors'
    ]" @click="updateValue(!modelValue)">
        <div class="inline-flex items-center">
            <label class="relative flex items-center p-3 rounded-full cursor-pointer" :for="checkboxId"
                data-ripple-dark="true">
                <input :id="checkboxId" type="checkbox" :checked="modelValue"
                    @change="updateValue($event.target.checked)" @click.stop
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-[#09B9A4] checked:before:bg-[#09B9A4] hover:before:opacity-10" />
                <span
                    class="absolute !text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </span>
            </label>
            <div class="cursor-pointer select-none" :for="checkboxId">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    modelValue: Boolean
});

// Emit
const emit = defineEmits(['update:modelValue']);

// Generate a unique ID for the checkbox to link the label
const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;

// Method to emit the value change
function updateValue(value) {
    emit('update:modelValue', value);
}
</script>
