<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="w-[375px] bg-white shadow-2xl rounded-lg border border-gray-200">
      <div class="p-1">
        <RouterView />
      </div>
      <!-- Your mobile content goes here -->
    </div>
  </div>
</template>

<style scoped></style>
