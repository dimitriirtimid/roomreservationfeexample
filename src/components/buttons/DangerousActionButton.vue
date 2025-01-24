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
  background-color: var(--c-dangerous-action-button);
}

button:hover {
  background-color: var(--c-dangerous-action-button-highlighted);
}
</style>
