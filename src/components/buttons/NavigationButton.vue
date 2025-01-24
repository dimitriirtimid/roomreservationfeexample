<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
})

import { useRouter } from 'vue-router'
import BaseButton from '@/components/buttons/BaseButton.vue'
const router = useRouter()
</script>

<template>
  <BaseButton @btn-click="router.push(`${to}`)">
    <slot></slot>
  </BaseButton>
</template>

<style scoped>
button {
  background-color: var(--c-navigation-button);
}

button:hover {
  background-color: var(--c-navigation-button-highlighted);
}
</style>
