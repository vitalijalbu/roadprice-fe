<script setup>
const features = [
  {
    icon: "✅",
    title: "Open today",
    description: "9:00 AM - 7:00 PM",
    color: "text-green-600",
  },
  {
    icon: "🛡️",
    title: "Free cancellation",
    description: "Up to 24 hours before the start of your experience",
    color: "text-gray-800",
  },
  {
    icon: "⚡",
    title: "Instant confirmation",
    description: "",
    color: "text-blue-600",
  },
  {
    icon: "⏳",
    title: "Explore at your pace",
    description: "Choose your entry time, stay as long as you like",
    color: "text-gray-800",
  },
  {
    icon: "🎤",
    title: "Guided tour",
    description: "",
    color: "text-gray-800",
  },
  {
    icon: "📱",
    title: "Mobile ticket",
    description: "",
    color: "text-purple-600",
  },
];
</script>

<template>
  <div class="p-4 bg-gray-50 rounded-lg shadow-md">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(feature, index) in features" :key="index" class="flex items-start space-x-3">
        <span class="text-xl">{{ feature.icon }}</span>
        <div>
          <p :class="['font-semibold', feature.color]">{{ feature.title }}</p>
          <p v-if="feature.description" class="text-sm text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
