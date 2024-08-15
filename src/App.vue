<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="flex flex-col w-full sm:w-[470px] bg-white shadow-2xl rounded-lg border border-gray-200 min-h-screen">
      <div class="flex-grow p-1 overflow-y-auto">
        <RouterView />
      </div>
      <!-- Your mobile content goes here -->
    </div>
  </div>
</template>

<style scoped></style>
