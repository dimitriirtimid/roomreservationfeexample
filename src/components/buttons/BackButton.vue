<script setup>
import { useRouter } from 'vue-router'
import BaseButton from '@/components/buttons/BaseButton.vue'
const router = useRouter()
</script>

<template>
  <BaseButton @btn-click="router.back">
    <slot></slot>
  </BaseButton>
</template>

<style scoped>
button {
  background-color: var(--c-back-button);
}

button:hover {
  background-color: var(--c-back-button-highlighted);
}
</style>
