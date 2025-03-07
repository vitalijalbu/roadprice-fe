<script setup>
import { useRoute } from "vue-router";

const route = useRoute();


const { status, data: post } = await useFetch(`https://resthotels.it/api/listings/${route.params.slug}`, {
  lazy: true
})
</script>


<template>
  <UContainer>
        <!-- Breadcrumb  -->
        <BreadCrumb />
          <!-- Caricamento -->
          <div v-if="status === 'pending'" class="text-center my-4">
        Loading ...
      </div>
      <div class="flex">
        <h1 class="text-2xl">{{ post?.data?.title }}</h1>
      </div>
      <div class="flex">
        <h3>category:{{ post?.data?.category?.title }}</h3>
        <UIcon name="i-lucide-chevron-left" class="size-5" />
        <UIcon name="i-kid-star-outlined" class="size-5" />
        <div>4.5 (5.6K ratings)</div>
      </div>
      <ImageGallery />
      <div class="flex">
        <p>{{ post?.data?.description }}</p>   
      </div>
  </UContainer>
</template>
