<script setup>
import TravelCardNew from "../components/TravelCardNew.vue";
import ColorModeButton from "../components/ColorModeButton.vue";

useHead({
    title: "Ricerca",
});
//import Filters from '~/shared/components/filters.vue';

const { status, data: posts } = useFetch('https://resthotels.it/api/listings?per_page=500', {
  lazy: true
})
</script>

<template>
    <UContainer>
      <!-- Sezione Filtro -->
      <div class="filters">
        <ColorModeButton/>
        <!-- <Filters /> -->
      </div>
  
      <!-- Caricamento -->
      <div v-if="status === 'pending'" class="text-center my-4">
        Loading ...
      </div>


      <div class="mt-12 grid grid-cols-1 gap-4" v-else>
        <div v-for="post in posts.data" :key="post.id">
          <!-- <NuxtLink :to="`/properties/${post.id}`"> -->
            <TravelCardNew :post="post"/>
          <!-- </NuxtLink> -->
        </div>
      </div>
    </UContainer>
  </template>


