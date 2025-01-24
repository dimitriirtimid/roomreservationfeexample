<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'
import { useBuildingStore } from '@/entities/building/store/buildingStore'

const buildingStore = useBuildingStore()

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}

const onInitDatabase = () => {
  closeSettingsMenu()
  console.log('Initialising database')
  buildingStore.loadTestData()
}

const isSettingsMenuOpen = ref(false)

function toggleSettingsMenu() {
  isSettingsMenuOpen.value = !isSettingsMenuOpen.value
}

function closeSettingsMenu() {
  isSettingsMenuOpen.value = false
}
</script>

<template>
  <nav aria-label="Main Navigation">
    <div class="title">
      <RouterLink class="title" to="/">Room reservations</RouterLink>
    </div>
    <ul>
      <li>
        <RouterLink
          :class="[isActiveLink('/') ? 'active-link' : '', 'nav-item']"
          to="/"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :class="[isActiveLink('/buildings') ? 'active-link' : '', 'nav-item']"
          to="/buildings"
          >Buildings</RouterLink
        >
      </li>

      <li>
        <RouterLink
          :class="[isActiveLink('/about') ? 'active-link' : '', 'nav-item']"
          to="/about"
        >
          <i class="fas fa-user"></i>
        </RouterLink>
      </li>

      <li
        class="nav-item dropdown"
        @mouseenter="toggleSettingsMenu"
        @mouseleave="closeSettingsMenu"
      >
        <i class="fas fa-gear"></i>
        <ul id="settings-menu" class="dropdown-menu" v-if="isSettingsMenuOpen">
          <li class="dropdown-item" @click="onInitDatabase">
            Initialise database
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Navigation bar */
nav {
  background-color: var(--c-header);
  padding: 0.5rem 1rem;
  display: flex;
  position: relative;
}

.title {
  display: flex;
  color: var(--c-text-light);
  align-items: center;
  font-weight: bold;
  margin-right: auto;
  text-decoration: none; /* Remove underline */
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.nav-item {
  color: var(--c-text-light);
  text-decoration: none; /* Remove underline */
  padding: 0.5rem 1rem;
  display: block;
  transition: background-color 0.3s;
  border-radius: 5px;
  cursor: pointer;
}

.active-link {
  background-color: var(--c-header-selected-item);
}

.nav-item:hover {
  background-color: var(--c-menu-background-highlight);
}

/* Dropdown Menu */

.dropdown {
  position: relative; /* Ensure the dropdown menu is positioned relative to this parent */
}

.dropdown-menu {
  position: absolute;
  top: 100%; /* Below the parent */
  right: 0;
  background-color: var(--c-menu-background);
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 150px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  padding: 10px 20px;
  color: var(--c-text-light);
  text-decoration: none;
  display: block;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: var(--c-menu-background-highlight);
}

/* Show the dropdown on hover */
.dropdown:hover .dropdown-menu {
  display: block;
}

.nav-link {
  color: var(--c-text-light);
  text-decoration: none;
  padding: 10px 20px;
  display: block;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
