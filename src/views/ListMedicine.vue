<template>
  <div>
    <RCheckbox v-model="isChecked">
      Test
    </RCheckbox>
  </div>
</template>
<script setup>
import { ref } from "vue";
import RCheckbox from "../components/RCheckbox.vue";

const isChecked = ref(false)
</script>
<style></style>
