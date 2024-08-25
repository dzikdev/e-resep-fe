<template>
  <main class="h-screen px-6">
    <div class="flex flex-col h-screen justify-center items-center gap-y-6">
      <div class="flex flex-col justify-center items-center gap-y-4">
        <img :src="Logo" alt="" width="80">
        <div class="text-2xl">
          E-Resep
        </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-y-4 w-full">
        <div class="w-full">
          <RSearchInput v-model="formData.prescription_id" id="" placeholder="Masukkan Nomor E-Resep" />
        </div>
        <div class="w-full">
          <RButton size="md" variant="fill" class="w-full" @click="handleButtonClick">
            Cari Resep
          </RButton>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Logo from '@/assets/images/kemenkes.svg'
import RSearchInput from "@/components/RSearchInput.vue";
import RButton from "@/components/RButton.vue";

const formData = {
  prescription_id: null
}

</script>