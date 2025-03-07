<script setup lang="ts">
const items = [{
  label: 'Home',
  to: '/'
}, {
  slot: 'dropdown',
  icon: 'i-lucide-ellipsis',
  children: [{
    label: 'Places to Visit New York'
  }]
}, {
  label: 'New York',
  to: '/properties'
}, {
  label: 'Museums',
  to: '#'
}]
</script>

<template>
    <UBreadcrumb :items="items" class="m-6">
    <template #dropdown="{ item }">
      <UDropdownMenu :items="item.children">
        <UButton :icon="item.icon" color="neutral" variant="link" class="p-0.5" />
      </UDropdownMenu>
    </template>
  </UBreadcrumb>
</template>