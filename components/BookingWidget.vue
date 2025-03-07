<script setup>
import { ref } from 'vue'

const selectedDate = ref(null)
</script>

<template>
  <div class="p-4 bg-white rounded-lg shadow-lg w-full md:w-[350px]">
    <!-- Pricing -->
    <div class="text-gray-600 text-sm">from</div>
    <div class="text-2xl font-bold text-gray-900">$36</div>

    <!-- Date Picker -->
    <div class="mt-4">
      <UInput v-model="selectedDate" placeholder="Select a date" type="date" class="w-full" />
    </div>

    <!-- Check Availability Button -->
    <div class="mt-4">
      <UButton color="primary" variant="solid" class="w-full">Check availability</UButton>
    </div>

    <!-- Why Us Section -->
    <div class="mt-6 p-4 border rounded-lg bg-gray-50">
      <h3 class="font-semibold text-gray-800 mb-2">Why Headout?</h3>
      <ul class="space-y-2 text-gray-700 text-sm">
        <li class="flex items-center">
          ✅ Trusted platform used by 100K+ people, each month
        </li>
        <li class="flex items-center">
          ✅ Get the lowest prices and last-minute availability
        </li>
        <li class="flex items-center">
          ✅ Discover and connect with 10,000+ experiences
        </li>
        <li class="flex items-center">
          ✅ Browse verified reviews and professional photographs
        </li>
        <li class="flex items-center">
          ✅ Have a question? Live chat with our experts 24/7
        </li>
      </ul>
    </div>
  </div>
</template>
