<script setup>
import { useRoute } from "vue-router";

const route = useRoute();


const { status, data: post } = await useFetch(`https://resthotels.it/api/listings/${route.params.slug}`, {
  lazy: true
})
</script>


<template>
  <UContainer>
          <!-- Caricamento -->
          <div v-if="status === 'pending'" class="text-center my-4">
        Loading ...
      </div>
    <div class="grid grid-cols-2 gap-4">
    <NuxtLink to="/properties">go bacl</NuxtLink>
    <h1>stai vedendo la proprietà {{ $route.params.slug }}</h1>
    <h1>{{ post?.data?.title }}</h1>
        <h3>category:{{ post?.data?.category?.title }}</h3>
        <p>{{ post?.data?.description }}</p>

    <UCard>
      <template #header>
      </template>
      <Placeholder class="h-32" />
      <template #footer>
        <UButton>Button</UButton>
      </template>
    </UCard>    
  </div>
  </UContainer>
</template>
