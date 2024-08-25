<template>
    <button :type="type" :class="[
        'px-4 py-3 rounded-xl transition duration-300 ease-in-out',
        variantClass,
        sizeClass,
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-75'
    ]" :disabled="isDisabled" @click="handleClick">
        <slot /> <!-- Menyediakan slot untuk konten tombol -->
    </button>
</template>

<script setup>
import { computed } from 'vue';

// Define props
const props = defineProps({
    type: {
        type: String,
        default: 'button', // Tipe tombol: button, submit, dll.
    },
    variant: {
        type: String,
        default: 'fill'
    },
    size: {
        type: String,
        default: 'md', // Ukuran tombol: sm, md, lg
    },
    isDisabled: {
        type: Boolean,
        default: false, // Status disabled
    },
});

// Emit events
const emit = defineEmits(['click']);

// Handle click
const handleClick = (event) => {
    if (!props.isDisabled) {
        emit('click', event);
    }
};

const sizeClass = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'text-sm';
        case 'lg':
            return 'text-lg';
        default:
            return 'text-md';
    }
});


const variantClass = computed(() => {
    switch (props.variant) {
        case 'fill':
            return 'bg-[#09B9A4] text-white'
        case 'border':
            return 'border-[#09B9A4] text-[#09B9A4]'

        default:
            return 'bg-[#09B9A4] text-white'
    }
})


</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>