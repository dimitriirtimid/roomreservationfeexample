<script setup>
import NavigationButton from '@/components/buttons/NavigationButton.vue'
</script>

<template>
  <div class="not-found">
    <h1>Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
    <NavigationButton to="/">Homepage</NavigationButton>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
  font-size: 1.2rem;
}
</style>
