<template>
  <button @click="$emit('btn-click')">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font-size: 20px;
  padding: 10px 20px;
  background-color: var(--c-base-button);
  color: var(--c-text-light);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0.5rem;
}

button:hover {
  background-color: var(--c-base-button-highlighted);
}
</style>
