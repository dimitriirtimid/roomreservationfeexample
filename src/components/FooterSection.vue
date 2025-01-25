<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  background-color: var(--c-footer);
  display: flex;
  justify-content: center;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

nav a:hover {
  background-color: var(--c-footer-item-highlight);
}

nav a {
  color: var(--c-text);
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
