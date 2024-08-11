<template>
  <main>
    <RCheckbox v-model="isChecked" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import RCheckbox from "../components/RCheckbox.vue";

const isChecked = ref(false)
</script>