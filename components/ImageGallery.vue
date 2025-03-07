<script setup>
import { ref } from 'vue'

const images = ref([
  { src: 'https://plus.unsplash.com/premium_photo-1721654789105-43ff4bb0a486?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Main Image', video: true },
  { src: 'https://plus.unsplash.com/premium_photo-1661963984279-1b0fa1b3ac0d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Thumb 1' },
  { src: 'https://images.unsplash.com/photo-1695392868792-16a12411601a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Thumb 2' },
  { src: 'https://plus.unsplash.com/premium_photo-1661905792999-036ddbe402a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Thumb 3' },
  { src: 'https://images.unsplash.com/photo-1713885640283-612a2d0e821d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Thumb 4' },
])

const mainImage = ref(images.value[0])
</script>

<template>
  <div class="p-4">
    <!-- Main Image -->
    <div class="relative w-full h-[400px] rounded-lg overflow-hidden">
      <img :src="mainImage.src" :alt="mainImage.alt" class="w-full h-full object-cover" />
      <div v-if="mainImage.video" class="absolute inset-0 flex items-center justify-center">
        <button class="bg-black bg-opacity-50 text-white rounded-full p-4">
          ▶
        </button>
      </div>
    </div>

    <!-- Image Grid -->
    <div class="grid grid-cols-4 gap-2 mt-4">
      <img
        v-for="(image, index) in images.slice(1)"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="h-32 w-full object-cover rounded-lg cursor-pointer"
        @click="mainImage = image"
      />
    </div>

    <!-- View All Button -->
    <div class="mt-4">
      <UButton color="gray" variant="solid" class="w-full">View all images</UButton>
    </div>
  </div>
</template>
