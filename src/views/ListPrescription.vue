<template>
  <div class="p-5 mb-[120px]">
    <div class="flex flex-col gap-y-5">
      <div class="flex items-center justify-start gap-x-4">
        <img :src="Logo" alt="" width="80">
        <div class="text-xl">
          E-Resep
        </div>
      </div>
      <div class="text text-2xl">
        Halo, <span class="text-[#09B9A4]">Dzikri Azzakah</span>
        <p>
          Silahkan pilih obat yang ingin anda tebus
        </p>
      </div>
      <hr>
      <RCheckbox v-model="item.is_selected" v-for="(item, index) in listMedicine" :key="index">
        <div class="flex flex-col gap-y-2 justify-start">
          <p class="text-md">{{ item.name }}</p>
          <p :class="['text-sm', item.is_selected ? 'text-white' : 'text-[#09B9A4]']">Rp. {{ item.price }}</p>
        </div>
      </RCheckbox>
    </div>
  </div>
  <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-[470px] bg-white text-center">
    <hr>
    <div class="flex items-center justify-between px-4 py-6">
      <div class="flex flex-col gap-y-2 items-start">
        <p class="text-sm text-[#919191]">Harga ({{ selectedMedicineCount }} Obat)</p>
        <p class="text-md text-[#09B9A4]">Rp. {{ formattedTotalPrice }}</p>
      </div>
      <button class="bg-[#09B9A4] text-white py-3 px-8 rounded-2xl">Checkout ({{ selectedMedicineCount }})</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import Logo from '@/assets/images/kemenkes.svg'
import RCheckbox from "../components/RCheckbox.vue";

const listMedicine = ref([
  { name: "Obat Anti Tuberculosis / Rifampicin 150", price: 45000, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 200", price: 66500, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 150", price: 45000, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 200", price: 66500, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 150", price: 45000, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 200", price: 66500, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 150", price: 45000, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 200", price: 66500, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 150", price: 45000, is_selected: false },
  { name: "Obat Anti Tuberculosis / Rifampicin 200", price: 66500, is_selected: false },
]);

// Computed property to count selected items
const selectedMedicineCount = computed(() => {
  return listMedicine.value.filter(item => item.is_selected).length;
});

// Computed property to sum selected item prices
const totalSelectedPrice = computed(() => {
  return listMedicine.value
    .filter(item => item.is_selected)
    .reduce((sum, item) => sum + item.price, 0);
});

// Formatting price
const formattedTotalPrice = computed(() => {
  return new Intl.NumberFormat('id-ID').format(totalSelectedPrice.value);
});
</script>
<style></style>
