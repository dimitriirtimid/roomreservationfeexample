<script setup>
import BaseButton from '@/components/buttons/BaseButton.vue'
</script>

<template>
  <BaseButton>
    <slot></slot>
  </BaseButton>
</template>

<style scoped>
button {
  background-color: var(--c-cancel-button);
}

button:hover {
  background-color: var(--c-cancel-button-highlighted);
}
</style>
