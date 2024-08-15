<template>
  <div class="relative">
    <!-- SVG Icon -->
    <svg xmlns="http://www.w3.org/2000/svg"
      class="absolute top-0 bottom-0 w-6 h-6 my-auto left-3 text-gray-400 peer-focus:stroke-current" fill="none"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" :stroke="isFocused ? '#09B9A4' : 'currentColor'" stroke-linejoin="round"
        stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>

    <!-- Input Field -->
    <input :id="id" :type="type" :value="modelValue" @focus="isFocused = true" @blur="isFocused = false"
      @input="updateValue" :placeholder="placeholder"
      class="peer w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-[#09B9A4] caret-[#09B9A4]" />
  </div>
</template>



<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue';

const isFocused = ref(false);

// Define props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: [String, Number], // Value bound to the input
  label: String,               // Label for the input
  type: {                      // Type of the input (text, password, etc.)
    type: String,
    default: 'text'
  },
  id: String,                  // ID for the input
  placeholder: String          // Placeholder for the input
});

// Emit events
const emit = defineEmits(['update:modelValue']);

// Method to emit the input event to parent component
const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>